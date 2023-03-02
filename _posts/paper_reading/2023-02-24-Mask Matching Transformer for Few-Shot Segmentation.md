---
title: Mask Matching Transformer for Few-Shot Segmentation
commentable: true
date: 2023-02-26
modified: false
Edit: 2023-02-16
mathjax: true
mermaid: true
tags: Few-Shot Semantic-Segmentation
categories: study paper-reading 
description: (2022NeurIPS)Mask Matching Transformer for Few-Shot Segmentation
---

# Abstract

Typical method learn prototypical features to match query features. 


They proposed Mask Matching Transformer(MM-Former), a new paradigm.

# Motivation

early method: few to many(the number of support prototypes is typically much less than query features)

other method: many to many

Overall, the aforementioned approaches construct modules combining the matching
operation with segmentation modules and optimizing them jointly.

This joint learning fashion not only vastly increases the learning complexity, but also makes it hard to
distinguish the effect of matching modules in few-shot segmentation.

# Contribution

- We put forward a new perspective
for few-shot segmentation, which decouples the learning of matching and segmentation modules,
allowing more flexibility and lower training complexity.

- We introduce a simple two-stage
framework named MM-Former that efficiently matches the support samples with a set of query mask
proposals to obtain segmentation results.

- Extensive evaluations on COCO-20i
and Pascal-5i
demonstrate the potential of the method to be a robust baseline in the few-to-few matching paradigm

# Method
<img src="https://raw.githubusercontent.com/adoptedirelia/pictures_of_posts/main/Mask%20Matching%20Transformer%20for%20Few-Shot/pic1.png" width="100%"> 

- Potential Object Segmenter

    <img src="https://raw.githubusercontent.com/adoptedirelia/pictures_of_posts/main/Mask%20Matching%20Transformer%20for%20Few-Shot/pic2.png" width="100%"> 
        
    $E^{l+1} = TLayer^{l}(E^l,F_i)$

    $E^l$ represent the N learnable embeddings before transformer, while $E^{l+1}$ represents the embeddings after transformer.

    TLayer denotes a transformer decoder layer.

- Feature Align Module

    <img src="https://raw.githubusercontent.com/adoptedirelia/pictures_of_posts/main/Mask%20Matching%20Transformer%20for%20Few-Shot/pic3.png" width="100%"> 




- Learnable Matching Block

    Final mask is computed as:

    $S = cos(P_s^{gt},P_Q^n)$

    $\hat{M} = M\ matmul \ MLP(S)$



# Experiments

# Conclusion

Our MM-Former introduces the paradigm of decompose first and
then blend to the research of few-shot segmentation, which is a totally new perspective and may
inspire future researchers to develop more advanced versions.

However, there is still a large gap
between the current results and the oracle (≈ 20% mIoU). How to further narrow this gap is our
future research focus.