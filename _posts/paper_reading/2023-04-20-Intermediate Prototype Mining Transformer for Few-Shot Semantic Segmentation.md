---
title: Intermediate Prototype Mining Transformer for Few-Shot Semantic Segmentation
commentable: true
date: 2023-04-20
modified: false
Edit: 2023-02-16
mathjax: true
mermaid: true
tags: Few-Shot Semantic-Segmentation
categories: study paper-reading 
description: (2022NeurIPS)Intermediate Prototype Mining Transformer for Few-Shot Semantic Segmentation
---

# Abstract

- Most previous works strive to mine more effective category information from the support to match with the corresponding objects in query. However, they all ignored the category information gap between query and support images.

- we are the first to introduce an intermediate prototype for mining both deterministic category information from the support and adaptive category knowledge from the query

# Motivation

However, for the support images that have large diversity in pose and appearance compared with the query, the distance between the support and query prototypes will be faraway. In such a case, if we forcibly migrate the category information in the support prototype to the query, a large category information bias is inevitably introduced.

# Contribution

-  To the best of our knowledge, this is the first time to focus on the intra-class diversity between support and query in FSS, and we propose the idea of intermediate prototype to relieve the existing category information gap issue.

- We propose a novel IPMT to explicitly mine the intermediate prototype which contains both the deterministic information from the support set and the adaptive category knowledge from the query

- We present an iterative learning scheme to fully explore the intermediate category information hidden in both support and query and update the query feature.

- Extensive experiments on PASCAL-5i and COCO-20i show that our proposed IPMT brings a significant improvement over state-of-the-art methods.

# Method

## Intermediate Prototype Mining



# Conclusion

