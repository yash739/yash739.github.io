---
title: Machine Learning for Intelligent Reflective Surfaces
period: Aug 2024 - Dec 2024
guide: Prof. Anshuman Kumar, IIT Bombay
summary: Implemented far-field models of radiating arrays and the Gerchberg-Saxton iterative algorithm for beamforming phase design, then trained a PyTorch autoencoder alternative with lower time complexity, viable for real-time inverse-design phase retrieval.
tags: [PyTorch, Inverse design]
links: R&D project report | https://drive.google.com/file/d/1RfsM74MtPZwdDktPdod8p6Le2FGFcNOc/view?usp=sharing
---

## Overview

An intelligent reflective surface is an array of elements whose relative phases can be tuned to shape a beam. Choosing the phases that give a desired beam is an inverse-design problem. This R&D project, with Prof. Anshuman Kumar at IIT Bombay, compared a classical iterative method with a neural-network alternative.

## What I did

- Wrote programs to compute the **far-field intensity patterns** of arrays of radiating elements, both by direct summation of array factors and with Fourier-transform approximations.
- Implemented the **Gerchberg&ndash;Saxton iterative algorithm** to find the relative phase distribution that produces a given beamed intensity profile.
- Trained a **PyTorch autoencoder** as an alternative to Gerchberg&ndash;Saxton, with reduced time complexity, making a **real-time solution** of the inverse-design phase-retrieval problem viable.
