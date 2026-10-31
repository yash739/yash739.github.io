---
title: Mapping Lunar Chemical Abundances using X-ray Fluorescence
period: Oct 2024 - Apr 2025
guide: Inter-IIT Tech Meet, first place in the high-prep ISRO problem statement
summary: Mapping the Moon's chemistry from X-ray fluorescence in Chandrayaan-2 CLASS data. This work placed first in the high-prep ISRO problem statement at the Inter-IIT Tech Meet.
tags: [Chandrayaan-2, X-ray, XRF]
links: Lunar XRF paper | https://arxiv.org/abs/2508.15563, Poster | https://github.com/ravioli1369/selenomapper/blob/main/posters_and_conferences/ISRO%20Selenomapper%20Symphy%202025.pdf, Code | https://github.com/ravioli1369/selenomapper
---

## Overview

When solar flares hit the Moon, the surface gives off X-ray fluorescence (XRF) lines whose strengths depend on which elements are present. This project used data from the Large Area Soft X-ray Spectrometer (CLASS) on Chandrayaan-2 to map lunar composition. It placed first in the high-prep ISRO problem statement at the Inter-IIT Tech Meet.

## What I did

I started by studying X-ray fluorescence and how elements are detected when solar flares reach the Moon. Using the CLASS data, I then developed a new algorithm that spots solar flares from the strengths of the elemental XRF lines and the quality of their Gaussian fits.

With that in place, I made the first high-resolution map of XRF line ratios (using GeoTIFF files), which picks out distinct compositional groups across the surface.
