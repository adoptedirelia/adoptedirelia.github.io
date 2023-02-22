---
title: Compiler Principles -Chapter 2
commentable: false
date: 2023-02-22
modified: false
Edit: 2023-02-22
mathjax: true
mermaid: true
tags: Compiler-Principle notes
categories: study notes
description: 编译原理第二章学习笔记：上下文无关文法和语言
---

# 递归规则与递归文法(区别于线性文法)

## 递归规则

左右具有相同非终结符号的规则

- U $\rightarrow $ Uy 左递归规则
- U $\rightarrow $ xU 右递归规则
- U $\rightarrow $ xUy 自嵌入递归规则

## 文法的递归性

- 直接递归：文法中至少包含一条递归规则
- 间接递归：文法的任一非终结符号经过一步以上推导产生的递归性
- 文法的递归性原则：文法具有直接递归性或间接递归性，否则无递归性

# 句型的分析

## 短语、简单短语、句柄

- 短语：

    如果 $\omega = xuy$ 是一个句型，如果有 $z=^*>xUy$，并且  $U=^+>u$，$U \in V_n,u \in V^+$,则u是相对于非终结符号U，句型$\omega$的短语

- 简单短语：

    一步推导可以得到u的话，u就是简单短语

- 句柄：

    句型最左面的简单短语就是句柄

# 文法的化简与改造

## 无用产生式的消除

- 无用产生式：设 $G = (V_n,V_t,P,S)$ 是一文法，若G中的符号 $x \in V_u \cup V_t$ 是有用的，则 x 必须满足以下条件，否则 x 就是无用的：
    - 存在 $\alpha,\beta \in V^*$，使得$ S=^*>\alpha x \beta$ (能被推出来)
    - 存在$\omega \in V_t^*$，使得 $ \alpha x \beta =^*>\omega$ (能结尾)

- 算法2.1 满足第二点

    得到等价文法 $G = (V_n^1,V_t,P_1,S)$，使得对于每个非终结符号都能推出最后的终结符号(们)

    1. 置$V_n^1$和$P^1$为空

    2. 对P中的每一个产生式$A \rightarrow \gamma$ 若$\gamma \in V_t^*$，则将A放入$V_n^1$中。

    3. 对于每个产生式$A \rightarrow X_1X_2...X_n$,若 $X_i \in V_t or X_i \in V_n^1$，将A放入$V_n^1$中

    4. 重复3，直到$V_n^1$不继续增大

    5. 将对应的规则放入$P^1中$

- 算法2.2 满足第一点

    得到等价文法 $G = (V_n^{'},V_t^{'},P^{'},S)$，使得对于每个非终结符号都能推出最后的终结符号(们)

    1. 置3个新的集合为空
    2. 将开始符号放入$V_n^{'}$中
    3. 对于G中任何形如$A \rightarrow \alpha_1 \ or \  \alpha_2 \ or \ \alpha_3...$的产生式，如果$A \in V_n^{'}$，则将其中的终结符号和非终结符号分别放入文法对应集合中。
    4. 重复3，直到集合不再增大
    5. 将对应的规则放入$P^{'}$中

## 空产生式的消除

简单方法：找到所有能产生空的符号对应替代即可

## 单产生式的消除

找出能得出单产生式的式子，然后将其替换为对应的结果即可



# 文法和语言的Chomsky分类

1. 0型文法

    $\alpha \rightarrow \beta$

2. 1型文法（上下文有关文法）

    $\alpha_1 A \alpha_2 \rightarrow \alpha_1 \beta \alpha_2$ 
3. 2型文法（上下文无关文法）

    $A \rightarrow \beta \ \ \    A\in V_n,\beta\in V^+$ 

4. 3型文法

    $A \rightarrow aB$ or $A \rightarrow a$ 右线性正则文法

    $A \rightarrow Ba$ or $A \rightarrow a$ 左线性正则文法