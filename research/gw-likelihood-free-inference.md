---
title: Likelihood-Free Parameter Estimation of Gravitational Waves
period: May 2025 - Dec 2025
guide: Prof. Michael Coughlin, University of Minnesota
summary: Training neural networks to estimate neutron star merger parameters from gravitational waves without a likelihood, with waveform models that account for the equation of state.
tags: [Gravitational waves, Machine learning]
links: AMPLFI | https://amplfi.readthedocs.io/en/latest/
---

## Overview

Estimating the parameters of a gravitational-wave source normally means evaluating a likelihood many times, which is expensive. Likelihood-free approaches instead train a neural network to produce the posterior directly. This project, with Prof. Michael Coughlin at the University of Minnesota, applies that idea to neutron star mergers.

## What I did

I used AMPLFI to run likelihood-free inference on gravitational waves from neutron star mergers. To account for the neutron star equation of state, I modified the binary-black-hole models from IMRPhenom. I also tuned the training hyper-parameters so the final model holds up on real-world data.
