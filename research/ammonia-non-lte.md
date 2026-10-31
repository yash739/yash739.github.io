---
title: Non-LTE Modelling of the Ammonia Hyperfine Intensity Anomaly
period: May 2025 - present
guide: Dr. Thushara G.S. Pillai (MIT Haystack Observatory) and Dr. Brian Svoboda (NRAO Socorro)
summary: Used the 3-D radiative transfer code Magritte to show that selective photon trapping produces the ammonia hyperfine intensity anomaly under non-LTE conditions, using the latest NH₃-H₂ collisional rates. Built a χ²-based retrieval of cloud density, NH₃ abundance and Jeans radius, and scaled it to ~2000 real sources from the Green Bank Ammonia Survey and Parkes.
tags: [Radiative transfer, ISM, Magritte]
links: Magritte | https://github.com/Magritte-code/Magritte/blob/stable/README.md, Code | https://github.com/yash739/ammonia-HIA
---

## Overview

In some cold protostellar cores the relative intensities of the ammonia (NH&#8323;) hyperfine components do not match what local thermodynamic equilibrium predicts. This is the **hyperfine intensity anomaly**. This project asks whether it can be explained by radiative transfer alone, with guidance from Dr. Thushara G.S. Pillai (MIT Haystack Observatory) and Dr. Brian Svoboda (NRAO Socorro).

## What I did

- Used the 3-D radiative transfer code **Magritte** to create synthetic images of NH&#8323; hyperfine inversion transitions in cold protostellar cores, validating them against exact LTE limits and known HCN anomalies.
- Used the latest NH&#8323;&ndash;H&#8322; collisional rates from the LAMDA database to show, in non-LTE simulations, that **selective photon trapping** produces the anomaly.
- Built a **&chi;&sup2;-based retrieval** that infers cloud density, NH&#8323; abundance and Jeans radius purely from line ratios, and verified the formalism against Effelsberg 100 m telescope data of anomalous ammonia sources.
- Scaled the retrieval to **~2000 real sources** from the Green Bank Ammonia Survey (Orion A) and Parkes data, enabling a population-level study of anomalous cores.
