---
title: Likelihood-Free Parameter Estimation of Gravitational Waves
period: May 2025 - Dec 2025
guide: Prof. Michael Coughlin, University of Minnesota
summary: Using AMPLFI for likelihood-free inference on neutron star merger gravitational waves, modifying IMRPhenom binary-black-hole models to account for the neutron star equation of state and optimising training hyper-parameters for robust real-world performance.
tags: [Gravitational waves, Machine learning]
links: AMPLFI | https://amplfi.readthedocs.io/en/latest/
---

## Overview

Estimating the parameters of a gravitational-wave source normally relies on evaluating a likelihood many times, which is expensive. Likelihood-free approaches instead train a neural network to produce the posterior directly. This project, with Prof. Michael Coughlin at the University of Minnesota, applied that idea to neutron star mergers.

## What I did

- Used the **AMPLFI** package to perform **likelihood-free inference** on gravitational waves from neutron star mergers.
- Modified the **binary-black-hole models from IMRPhenom** to account for the **neutron star equation of state**.
- Optimised the training hyper-parameters so the final model performs robustly on real-world data.
