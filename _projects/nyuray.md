---
title: "NYURay: A 3D Wireless Ray Tracer for Site-Specific Channel Prediction"
image: "/assets/images/projects/nyuray/banner.jpg"
image_caption: "NYURay ray paths (reflection, penetration, diffraction) in a material-labeled 3D model of the NYU MakerSpace factory (Ying et al., ICC 2026)."
faculty:
  - name: "Theodore (Ted) Rappaport"
    url: "https://wireless.engineering.nyu.edu/tedrappaport/"
students:
  - name: "Mingjun Ying"
  - name: "Guanyue Qian"
  - name: "Xinquan Wang"
  - name: "Peijie Ma"
  - name: "Ishaan S. Gupte"
  - name: "Bridget Meier"
keywords: ["Wireless ray tracing", "3D reconstruction", "Digital twins", "Ray-tracer calibration", "Upper mid-band", "Localization and ISAC"]
sections:
  - title: "HoRAMA: 3D models from phone video"
    video: "/assets/videos/projects/nyuray-horama.mp4"
    poster: "/assets/videos/projects/nyuray-horama-poster.jpg"
    caption: "HoRAMA builds a material-labeled 3D model from a phone scan and validates ray tracing against measurements (NYU WIRELESS, Brooklyn AI-Native 6G Summit 2026)."
    text: |
      A material-labeled 3D model of a 700 m² factory takes an expert about two months to build by hand. **HoRAMA** (Holistic Reconstruction with Automated Material Assignment) builds it from a 10-minute smartphone video in 16 hours: it reconstructs a point cloud, splits it into objects, assigns each object a material with a vision-language model, and exports meshes that NYURay reads directly ([Ying et al., ICC 2026](https://ieeexplore.ieee.org/document/11587422)). Over 12 measured links at 6.75 and 16.95 GHz, HoRAMA predicts multipath power with a root-mean-square error (RMSE) of 2.28 dB, compared with 2.18 dB for the hand-built model.
  - title: "SPARC: per-path power calibration at 6.75 and 16.95 GHz"
    image: "/assets/images/projects/nyuray/sparc-per-path-rmse.png"
    caption: "In an indoor factory at 6.75 and 16.95 GHz, SPARC lowers per-path power RMSE from 18.7 dB (uncalibrated) to 4.7 dB (Ying et al., GLOBECOM 2026)."
    text: |
      In cluttered indoor scenes, raw ray tracing misses individual path powers by 19–24 dB, mostly because of missing clutter and simplified geometry rather than wrong material values. **SPARC** (Sparse Path-Aware Residual Calibrator) learns a sparse linear correction from the outputs of one completed ray-tracing run, needs no extra runs, and works with any ray tracer (Ying et al., GLOBECOM 2026). SPARC lowers per-path RMSE from 18.74 to 4.74 dB in a factory and from 23.12 to 5.39 dB in an office building.
  - title: "Localization from 16.95 to 142 GHz"
    image: "/assets/images/projects/nyuray/mapfree-localization-floorplan.png"
    caption: "True (filled) and estimated (dashed) receiver positions for 20 links at 16.95 GHz in a 109 m by 44 m office building (Liu et al., GLOBECOM 2026)."
    text: |
      Without a map, a single-anchor method weights each measured path by its angular uncertainty and reaches 3.86 m mean error over 20 indoor links at 16.95 GHz, compared with 11.25 m for the better of two published single-bounce methods (Liu et al., GLOBECOM 2026). With a 3D map, positioning that uses NYURay-predicted paths reached 5.5 cm mean non-line-of-sight (NLOS) error at 73 GHz with three base stations ([Kanhere et al., GLOBECOM 2019](https://ieeexplore.ieee.org/document/9013365)). At 142 GHz outdoors, a Kalman filter tracked a user along a 102 m route with 24.8 cm mean error from one base station ([Kanhere & Rappaport, ICC 2021](https://ieeexplore.ieee.org/document/9500482)).
  - title: "Location calibration and validation at 6.75 and 16.95 GHz"
    image: "/assets/images/projects/nyuray/location-calibration-pdp.png"
    caption: "Measured and ray-traced power delay profiles of a 560 m NLOS link at 6.75 GHz before (red) and after (blue) location calibration (Ying et al., npj Wireless Technology 2026)."
    text: |
      Field campaigns log positions with consumer GPS, which errs by 5–10 m and shifts every simulated path. NYURay corrects TX and RX positions by aligning simulated and measured power delay profiles, which fixed errors of up to 7 m in Downtown Brooklyn ([Ying et al., GLOBECOM 2025](https://ieeexplore.ieee.org/document/11432293)). Over 18 urban links of 40–880 m, the calibrated ray tracer predicts path loss exponents within 0.03–0.14 of measurement, while still under-predicting delay spread (Ying et al., npj Wireless Technology 2026).
  - title: "Integrated sensing and communication (ISAC) imaging at 6.75 GHz"
    image: "/assets/images/projects/nyuray/isac-demo-cube.png"
    caption: "ISAC imaging with ray tracing: each multipath between transmitter and receiver is mapped to an equivalent reflection point on the object, and the points from many TX-RX views form the RF image (Bazzi, Ying, Kanhere, Rappaport and Chafii, IEEE JSTEAP 2025)."
    text: |
      Each resolvable path in a channel estimate carries a delay and departure and arrival angles. From NYURay-generated channel state information at 6.75 GHz, a two-segment optimization places each path, including multi-bounce paths, at an equivalent reflection point, and fusing points from several TX–RX views gives a 3D image of objects such as a tree, metal plates and a car ([Bazzi et al., IEEE JSTEAP 2025](https://ieeexplore.ieee.org/document/11173662)). Flat plates need about 6 TX–RX pairs and the car 8–10.
  - title: "Material calibration at 28, 73 and 142 GHz"
    image: "/assets/images/projects/nyuray/tap-power-error-cdf.png"
    caption: "CDFs of the error in NYURay-predicted directional multipath power after calibration with indoor, outdoor and factory measurements at 28, 73 and 140 GHz (Kanhere, Poddar and Rappaport, IEEE TAP 2025)."
    text: |
      The first-generation NYURay was calibrated with nine directional measurement campaigns from 2012–2022 in offices, streets and four factories ([Kanhere, Poddar & Rappaport, IEEE TAP 2025](https://ieeexplore.ieee.org/document/10721240)). Modeling the reflection loss of each material as independent of incidence angle turns calibration into a closed-form least-squares fit in dB. The standard deviation of the directional power error is 1.6–2.8 dB, and the fit gives reflection and penetration losses of common materials, which rise with frequency.
  - title: "NYURay engine, GUI and point data"
    image: "/assets/images/projects/nyuray/nyuray-gui.png"
    caption: "The NYURay GUI for setting frequency, bandwidth, interactions, antennas and TX/RX positions (Ying, M.S. thesis 2025)."
    text: |
      NYURay combines shooting-and-bouncing rays with the image method, so its cost grows linearly with the number of objects. The current Python version models Fresnel reflection that depends on polarization and incidence angle, ITU-R P.2040-3 penetration, diffraction and rough-surface scattering, and takes 2–3 s per outdoor link on one graphics processing unit (GPU). A graphical user interface (GUI) sets antennas, scenes and TX/RX positions and exports point-data tables, the per-location format NYU uses to share measurements; pooling NYU and USC sub-terahertz (sub-THz) data at 53 locations gave joint path loss exponents of 1.93 (line-of-sight, LOS) and 2.87 (NLOS) ([Shakya et al., MILCOM 2025](https://ieeexplore.ieee.org/document/11309979)).
publications:
  - title: "Site-Specific Location Calibration and Validation of Ray-Tracing Simulator NYURay at Upper Mid-Band Frequencies"
    authors: "M. Ying, D. Shakya, P. Ma, G. Qian, and T. S. Rappaport"
    venue: "npj Wireless Technology (Invited), 2026"
    url: "https://doi.org/10.1038/s44459-025-00014-x"
  - title: "HoRAMA: Holistic Reconstruction with Automated Material Assignment for Ray Tracing using NYURay"
    authors: "M. Ying, G. Qian, X. Wang, P. Ma, D. Shakya, and T. S. Rappaport"
    venue: "IEEE ICC, 2026"
    url: "https://ieeexplore.ieee.org/document/11587422"
  - title: "SPARC: Sparse Path-Aware Residual Calibrator for Wireless Ray Tracing at Upper Mid-Band"
    authors: "M. Ying, G. Qian, X. Wang, X. Liu, I. S. Gupte, P. Ma, D. Shakya, and T. S. Rappaport"
    venue: "IEEE GLOBECOM, 2026"
    url: "https://arxiv.org/abs/2609.06077"
  - title: "Map-Free Single-Anchor Position Localization Using Multipath Uncertainty at Upper Mid-Band"
    authors: "X. Liu, M. Ying, X. Wang, D. Shakya, H. Nikbakht, D. Abraham, and T. S. Rappaport"
    venue: "IEEE GLOBECOM, 2026"
    url: "https://arxiv.org/abs/2609.08370"
  - title: "Multi-Stage Location Optimization Through Power Delay Profile Alignment Using Site-Specific Wireless Ray Tracing"
    authors: "M. Ying, P. Ma, D. Shakya, and T. S. Rappaport"
    venue: "IEEE GLOBECOM, 2025"
    url: "https://ieeexplore.ieee.org/document/11432293"
  - title: "ISAC Imaging by Channel State Information using Ray Tracing for Next Generation 6G"
    authors: "A. Bazzi, M. Ying, O. Kanhere, T. S. Rappaport, and M. Chafii"
    venue: "IEEE Journal of Selected Topics in Electromagnetics, Antennas and Propagation, 2025"
    url: "https://ieeexplore.ieee.org/document/11173662"
  - title: "Calibration of NYURay for Ray Tracing Using 28, 73, and 142 GHz Channel Measurements Conducted in Indoor, Outdoor, and Factory Scenarios"
    authors: "O. Kanhere, H. Poddar, and T. S. Rappaport"
    venue: "IEEE Transactions on Antennas and Propagation, 2025"
    url: "https://ieeexplore.ieee.org/document/10721240"
  - title: "Standardized Machine-Readable Point-Data Format for Consolidating Wireless Propagation Across Environments, Frequencies, and Institutions"
    authors: "D. Shakya, N. A. Abbasi, M. Ying, I. Jariwala, J. J. Qin, I. S. Gupte, B. Meier, G. Qian, D. Abraham, T. S. Rappaport, and A. F. Molisch"
    venue: "IEEE MILCOM, 2025"
    url: "https://ieeexplore.ieee.org/document/11309979"
  - title: "Point Data for Site-Specific Mid-band Radio Propagation Channel Statistics in the Indoor Hotspot (InH) Environment for 3GPP and Next Generation Alliance (NGA) Channel Modeling"
    authors: "T. S. Rappaport, D. Shakya, and M. Ying"
    venue: "IEEE ICC, 2025"
    url: "https://ieeexplore.ieee.org/document/11161652"
  - title: "Site-Specific Propagation Predictions of the Radio Channel in Different Environments Using NYURay Based on Measurements and Ray-Tracing at Upper Mid-Band Frequencies"
    authors: "M. Ying"
    venue: "Master's Thesis, NYU WIRELESS, NYU Tandon School of Engineering, 2025"
    url: "https://www.proquest.com/openview/3ee1166de9897a2871afaf7abe732046/1?pq-%20origsite=gscholar&cbl=18750&diss=y"
  - title: "Calibration of NYURay, a 3D mmWave and sub-THz Ray Tracer using Indoor, Outdoor, and Factory Channel Measurements"
    authors: "O. Kanhere and T. S. Rappaport"
    venue: "IEEE ICC, 2023"
    url: "https://ieeexplore.ieee.org/document/10279044"
  - title: "Millimeter Wave and sub-THz Position Location and Ray Tracing"
    authors: "O. Kanhere"
    venue: "Ph.D. Thesis, NYU WIRELESS, NYU Tandon School of Engineering, 2022"
    url: "https://www.proquest.com/docview/2722356938?pq-origsite=gscholar&fromopenview=true"
  - title: "Millimeter Wave and Terahertz Urban Microcell Propagation Measurements and Models"
    authors: "Y. Xing and T. S. Rappaport"
    venue: "IEEE Communications Letters, 2021"
    url: "https://ieeexplore.ieee.org/document/9558848"
  - title: "Propagation Measurements and Path Loss Models for sub-THz in Urban Microcells"
    authors: "Y. Xing and T. S. Rappaport"
    venue: "IEEE ICC, 2021"
    url: "https://ieeexplore.ieee.org/document/9500385"
  - title: "Outdoor sub-THz Position Location and Tracking using Field Measurements at 142 GHz"
    authors: "O. Kanhere and T. S. Rappaport"
    venue: "IEEE ICC, 2021"
    url: "https://ieeexplore.ieee.org/document/9500482"
  - title: "Map-Assisted Millimeter Wave Localization for Accurate Position Location"
    authors: "O. Kanhere, S. Ju, Y. Xing, and T. S. Rappaport"
    venue: "IEEE GLOBECOM, 2019"
    url: "https://ieeexplore.ieee.org/document/9013365"
  - title: "Position Locationing for Millimeter Wave Systems"
    authors: "O. Kanhere and T. S. Rappaport"
    venue: "IEEE GLOBECOM, 2018"
    url: "https://ieeexplore.ieee.org/document/8647983"
---

**Focus:** site-specific channel prediction is only as accurate as the 3D model and the material properties behind it. **NYURay**, the in-house 3D ray tracer of NYU WIRELESS, predicts every reflected, penetrating, diffracted and scattered path between a transmitter (TX) and a receiver (RX), with its power, delay and angles, and is calibrated against NYU measurements from 6.75 to 142 GHz. Calibrated NYURay supports localization, sensing and shared datasets.

1. **HoRAMA: 3D models from phone video**
2. **SPARC: per-path power calibration at 6.75 and 16.95 GHz**
3. **Localization from 16.95 to 142 GHz**
4. **Location calibration and validation at 6.75 and 16.95 GHz**
5. **Integrated sensing and communication (ISAC) imaging at 6.75 GHz**
6. **Material calibration at 28, 73 and 142 GHz**
7. **NYURay engine, GUI and point data**
