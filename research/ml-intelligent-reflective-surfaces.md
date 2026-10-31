---
title: Machine Learning for Intelligent Reflective Surfaces
period: Aug 2024 - Dec 2024
guide: Prof. Anshuman Kumar, IIT Bombay
summary: Comparing a classical iterative method with a neural network for choosing the phases that shape the beam of a reflective surface.
tags: [PyTorch, Inverse design]
links: R&D project report | https://drive.google.com/file/d/1RfsM74MtPZwdDktPdod8p6Le2FGFcNOc/view?usp=sharing
---

## Overview

An intelligent reflective surface is an array of elements whose relative phases can be tuned to shape a beam. Picking the phases that give a desired beam is an inverse-design problem. This R&D project, with Prof. Anshuman Kumar at IIT Bombay, compared a classical iterative method with a neural-network alternative.

## What I did

I wrote programs that compute the far-field intensity pattern of an array of radiating elements, both by directly summing array factors and with Fourier-transform approximations. I then implemented the Gerchberg–Saxton iterative algorithm to find the relative phases that give a desired beam profile.

Finally, I trained a PyTorch autoencoder as an alternative to Gerchberg–Saxton. It has lower time complexity, which makes a real-time solution of the inverse-design phase-retrieval problem viable.
