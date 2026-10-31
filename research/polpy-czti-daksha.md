---
title: Hard X-ray Polarimetry Software: PolPy, CZTI and Daksha
period: Dec 2023 - Jan 2025
guide: Prof. Varun Bhalerao, IIT Bombay
summary: Co-developed PolPy, a plugin for the Multi-Mission Maximum Likelihood Framework that enables joint-polarization measurements with current and future polarimeters. Built the injection-recovery pipeline for the Daksha polarimeter, and converted the AstroSat-CZTI polarization pipeline from legacy IDL to Python with pixel charge-sharing effects, enabling CZTI's 11-year catalogue of 40+ GRBs.
tags: [Polarimetry, PolPy, AstroSat-CZTI, Daksha]
links: PolPy code | https://github.com/threeML/polpy, PolPy paper | https://arxiv.org/abs/2608.27775
---

## Overview

Gamma-ray burst polarization is measured through Compton scattering: polarized photons scatter preferentially perpendicular to their polarization direction, which imprints a modulation on the detector. Turning that into a physical measurement needs a detector response, a statistical framework and a pipeline that scales to many bursts. This project built those pieces for AstroSat-CZTI, the POLAR mission and the upcoming Daksha polarimeter, under Prof. Varun Bhalerao.

## What I did

- Co-developed **PolPy**, a plugin for the Multi-Mission Maximum Likelihood Framework (3ML) that standardises Compton polarimetry routines and enables **joint-polarization measurements** with current and future polarimeters.
- Built an **injection-recovery pipeline** for the next-generation GRB polarimeter **Daksha**, coordinating file formats and coordinate conventions with the **POLAR** mission to synthesise GRB data for testing PolPy.
- Converted the **AstroSat-CZTI polarization pipeline** from legacy IDL to Python and added **pixel charge-sharing effects** to the response.
- Implemented CI/CD routines for PolPy, accelerated the response-interpolation routines, and profiled, parallelised and optimised the Daksha and CZTI pipelines.

## Highlights

- The rewritten CZTI pipeline made CZTI's **11-year catalogue of 40+ GRBs** practical to analyse.
- Optimisation and parallelisation made analysis at catalogue scale feasible rather than burst-by-burst.
- PolPy is now part of 3ML.
