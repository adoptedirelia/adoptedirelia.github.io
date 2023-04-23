---
title: CATrans:Context and Affinity Transformer for Few-Shot Segmentation
commentable: true
date: 2023-04-20
modified: false
Edit: 2023-02-16
mathjax: true
mermaid: true
tags: Few-Shot Semantic-Segmentation
categories: study paper-reading 
description: (2022ICJAI)CATrans:Context and Affinity Transformer for Few-Shot Segmentation
status: Writing
---

# Abstract

- previous Transformer-based methods explore global consensus either on context similarity or affinity map between support-query pairs

- we effectively integrate the context and affinity information via the proposed novel Context and Affinity Transformer (CATrans) in a hierarchical architecture.

# Motivation

- (context)This method, however,
suffers from unrepresentative of support feature

- (affinity)However, this method does
not incorporate individual self-affinity for support object or
query image to disambiguate noisy correlations, which measures pixel-wise correspondences within itself, enabling each
spatial fiber to match itself and other tokens.

# Contribution

-  We design a Relation-guided Context Transformer (RCT)
with the enhanced support features to propagate informative semantic information from support to query images.

- We develop a Relation-guided Affinity Transformer
(RAT) to measure the reliable cross correspondences by
considering the auxiliary self-affinity of both support object and query images.

- We propose Context and Affinity Transformer, dubbed as
CATrans, in a hierarchical architecture to aggregate the
context and affinity together, resulting in discriminative
representations from support to query mask, enhancing
robustness to intra-class variations between support and
query images. Our CATrans outperforms the state-of-the-art methods on two benchmarks, Pascal-5i
and COCO-
20i.


# Method

## Intermediate Prototype Mining



# Conclusion

