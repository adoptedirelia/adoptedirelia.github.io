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
description: (2022NeurlIPS)Mask Matching Transformer for Few-Shot Segmentation
status: Writing
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

    

# Experiments

# Conclusion