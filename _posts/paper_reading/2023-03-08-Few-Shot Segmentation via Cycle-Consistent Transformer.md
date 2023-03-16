---
title: Few-Shot Segmentation via Cycle-Consistent Transformer
commentable: true
date: 2023-03-08
modified: false
Edit: 2023-02-16
mathjax: true
mermaid: true
tags: Few-Shot Semantic-Segmentation
categories: study paper-reading 
description: (2021NeurIPS)Few-Shot Segmentation via Cycle-Consistent Transformer
---

# Abstract

- In this paper, we focus on utilizing pixel-wise relationships between support and query images to facilitate the few-shot semantic segmentation. 

- Directly performing cross-attention may aggregate these features from support to query and bias the query features. Thus, we propose using a novel cycle-consistent attention mechanism to filter out possible harmful support feature and encourage query features to attend to the most informative pixels from support images. 

# Motivation

<img src="https://raw.githubusercontent.com/adoptedirelia/pictures_of_posts/main/Few-Shot%20Segmentation%20via%20Cycle-Consitent%20Transformer/pic1.png" width="100%"> 

- class-wise mean pooling (a). support features within regions of different categories are averaged to serve as prototypes to facilitate the classification of query pixels.

- clustering (b). recent works attempt to generate multiple prototypes via EM algorithm or K-means clustering, in order to extract more abundant information from support images. 

> these prototype-based methods need to "compress" support information into different prototypes, which may lead to various degrees of loss of beneficial support information.

- (c) propose to employ the attention mechanism to extract information from foreground.

> However, such methods ignore background support pixels that can be beneficial for segmenting query images.

# Contribution

- We tackle few-shot semantic segmentation from the perspective of providing each query pixel with relevant information from support images through pixel-wise alignment

- We propose a novel cycle-consistent transformer to aggregate the pixel-wise support features into the query ones. In CyCTR, we observe that many support features may confuse the attention ans bias pixel-level feature aggregation, and propose incorporating cycle-consistent operation into the attention to deal with this issue. 

- Our CyCTR achieves state of art.

# Method

<img src="https://raw.githubusercontent.com/adoptedirelia/pictures_of_posts/main/Few-Shot%20Segmentation%20via%20Cycle-Consitent%20Transformer/pic2.png" width="100%"> 

## Cycle-Consistent Transformer



## Cycle-Consistent Attention

this module is used to identify cycle-consistent.

first, find the most similar i from j.

$$ i^* = \mathop{\arg\max}\limits_{\theta} A_{(i,j)}$$

then, cycle back.

$$ j^* = \mathop{\arg\max}\limits_{\theta} A_{(i^*,j)} $$

if $M_{s(j)} = M_{s(j^*)}$, we accept the cycle-consistent.

$$ 
B_j = 
\begin{cases}
0, if M_{s(j)} = M_{s(j^*)} \\
-inf, if M_{s(j)} \neq M_{s(j^*)}
\end{cases}
$$

so the final attention is

$$ Cycleatt(Q,K,V) = softmax(A_i + B)V $$

it means when B is not cycle-consistent, then we pay no attention to B.

# Conclusion

- our CyCTR utilizes all pixel-level support
features and can effectively eliminate aggregating confusing and harmful support features with the
proposed novel cycle-consistency attention
