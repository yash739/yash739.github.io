---
title: Non-LTE Modelling of the Ammonia Hyperfine Intensity Anomaly
period: May 2025 - present
guide: Dr. Thushara G.S. Pillai (MIT Haystack Observatory) and Dr. Brian Svoboda (NRAO Socorro)
summary: Testing whether radiative transfer alone can explain the odd ammonia hyperfine line ratios seen in some cold cores, and reading cloud properties off them.
tags: [Radiative transfer, ISM, Magritte]
links: Magritte | https://github.com/Magritte-code/Magritte/blob/stable/README.md, Code | https://github.com/yash739/ammonia-HIA
---

## Overview

In some cold protostellar cores, the relative intensities of the ammonia (NH₃) hyperfine lines don't match what local thermodynamic equilibrium predicts. This is the hyperfine intensity anomaly. This project asks whether radiative transfer alone can explain it, with Dr. Thushara G.S. Pillai (MIT Haystack Observatory) and Dr. Brian Svoboda (NRAO Socorro).

## What I did

I used the 3-D radiative transfer code Magritte to make synthetic images of the NH₃ hyperfine inversion lines in cold protostellar cores. To check the setup, I compared it against the exact LTE limits and against known anomalies in HCN.

With the latest NH₃–H₂ collisional rates from the LAMDA database, the non-LTE simulations show that selective photon trapping produces the anomaly.

I then built a χ²-based retrieval that infers cloud density, NH₃ abundance and Jeans radius from the line ratios alone, and checked the method against Effelsberg 100 m data on anomalous ammonia sources. Finally, I scaled it up to about 2000 real sources from the Green Bank Ammonia Survey (Orion A) and Parkes, which makes a population-level study of anomalous cores possible.
