---
title: Hard X-ray Polarimetry Software: PolPy, CZTI and Daksha
period: Dec 2023 - Jan 2025
guide: Prof. Varun Bhalerao, IIT Bombay
summary: I helped build PolPy, a tool for measuring GRB polarization jointly across instruments, and moved the AstroSat-CZTI polarization analysis from legacy IDL to fast, scalable Python.
tags: [Polarimetry, PolPy, AstroSat-CZTI, Daksha]
links: PolPy code | https://github.com/threeML/polpy, PolPy paper | https://arxiv.org/abs/2608.27775
---

## Overview

GRB polarization is measured through Compton scattering: polarized photons tend to scatter perpendicular to their polarization direction, which leaves a modulation in the detector. Turning that into a measurement takes a detector response, a statistical framework and a pipeline that holds up across many bursts. This project, with Prof. Varun Bhalerao, was about building those pieces for AstroSat-CZTI, the POLAR mission and the upcoming Daksha polarimeter.

## What I did

I co-developed PolPy, a plugin for the Multi-Mission Maximum Likelihood Framework (3ML). It standardises the Compton polarimetry routines, so data from current and future polarimeters can be fitted together.

For Daksha, the next-generation GRB polarimeter, I built an injection-recovery pipeline: it synthesises GRB data with a known polarization and checks that PolPy recovers it. To make that work across instruments, I coordinated file formats and coordinate conventions with the POLAR mission.

I also took the AstroSat-CZTI polarization pipeline from legacy IDL to Python and added pixel charge-sharing effects to the response. On the engineering side, I set up CI/CD for PolPy, sped up the response-interpolation routines, and profiled, parallelised and optimised both the Daksha and CZTI pipelines.

## Highlights

The rewritten pipeline is what made CZTI's 11-year catalogue of 40+ GRBs practical to analyse, and the optimisation and parallelisation are what made analysis at catalogue scale feasible. PolPy is now part of 3ML.
