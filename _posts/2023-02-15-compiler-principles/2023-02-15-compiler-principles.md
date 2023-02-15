---
title: Compiler Principles -Chapter 5
commentable: false
date: 2023-02-15
modified: false
Edit: 2023-02-15
mathjax: true
mermaid: true
tags: compiler-principle notes
categories: study notes
description: 编译原理第五章学习笔记：语义分析和中间代码生成
---

# 布尔表达式 

1. $E \rightarrow i$

    ```
    E.TC = NXQ
    E.FC = NXQ+1
    Gen(JNZ,entry(i),0,0)
    Gen(J,_,_,0)
    ```

2. $E \rightarrow i^{1} rop i{2}$

    ```
    E.TC = NXQ
    E.FC = NXQ+1
    Gen(J_rop,entry(i1),entry(i2),0)
    Gen(J,_,_,0)
    ```

3. $E \rightarrow (E^{1})$

    ```
    E.TC = E1.TC
    E.FC = E1.FC
    ```

4. $E \rightarrow ~E^1$

    ```
    E.TC = E1.FC
    E.FC = E1.TC
    ```
5. $E^A \rightarrow E^1 \land$

    假如E为真的话就还需要继续看第二个E是否为真，所以需要回填地址。
    
    而假如E为假的话就不需要继续看了，可以直接得结果，所以直接给E A
    ```
    BackPatch(E_1.TC,NXQ)
    E_A.FC = E_1.FC
    ```
6. $E \rightarrow E^AE^2$

    E的真出口只能是第二个E为真得到的

    E的假出口就需要将两个E的假出口合并
    ```
    E.TC = E_2.TC
    E.FC = Merge(E_A.FC, E_2.FC)
    ```

7. $E^o \rightarrow E^1 \lor$

    ```
    BackPatch(E_1.FC,NXQ)
    E_o.TC = E_1.TC
    ```

8. $E \rightarrow E^oE^2$

    ```
    E.TC = Merge(E_o.TC,E_2.TC)
    E.FC = E_2.FC
    ```

# 条件语句和循环语句

1. $C \rightarrow if \ E \ then$

    当E为真的时候需要执行下一条语句所以要回填

    E为假的时候需要给C的chain从而判断下一条语句要到哪里执行
    ```
    BackPatch(E.TC,NXQ)
    C.chain = E.FC
    ```

2. $T^P \rightarrow CS^1 \ else$

    q用于：假如if为真，执行之后应该跳出if语句，而不是执行else后面的语句，故生成一条无条件跳转指令跳转到最后

    将下一条语句回填给C.chain，使得C.chain找到else语句的内容

    将S_1.chain和q连接起来表示，执行完当前语句后应该跳到else语句之后
    ```
    q = NXQ
    Gen(J,_,_,0)
    BackPatch(C.chain,NXQ)
    T_p.chain = Merge(S_1.chain,q)
    ```
3. $S \rightarrow T^P \ S^2$

    最后的chain是将T_p和S_2的chain连接起来

    ```
    S.chain = Merge(T_p.chain,S_2.chain)
    ```
4. $S \rightarrow CS^1$
    
    这里的S表示没有else的处理情况
    ```
    S.chain = Merge(C.chian,S_1.chain)
    ```
5. $W \rightarrow while$

    由于while语句会回到开头，故这里保存了第一条语句的位置，即开头
    ```
    W.quad = NXQ
    ```
6. $W^d \rightarrow W \ E \ do$

    假如E为真，则需要执行下一条语句

    假如E为假，则需要判断下一条语句的位置，故给了W_d.chain

    这里将W的四元式给W_d主要是为了保存信息以便之后用
    ```
    BackPatch(E.TC,NXQ)
    W_d.chain = E.FC
    W_d.QUAD = W.QUAD
    ```
7. $S \rightarrow W^dS^1$

    给S_1.chain W_d的四元式的目的是防止出现跳转为0的地方

    S.chain表示结尾，即E为假的时候到的地方，即W_d.chain
    ```
    BackPatch(S_1.chain,W_d.QUAD)
    Gen(j,_,_,W_d.QUAD)
    S.chain = W_d.chain
    ```
8. $S \rightarrow begin \ L \ end$

    ```
    S.chain = L.chain
    ```
9. $S \rightarrow A$

    ```
    S.chain = 0
    ```
10. $L \rightarrow L^sS^1$

    ```
    L.chain = S_1.chain
    ```
11. $L \rightarrow S$

    ```
    L.chain = S.chain
    ```
12. $L^s \rightarrow L$

    ```
    BackPatch(L.chain,NXQ)
    ```