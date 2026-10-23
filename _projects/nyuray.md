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
  - name: "Xingchen Liu"
  - name: "Ishaan S. Gupte"
  - name: "Isha Jariwala"
  - name: "Jason J. Qin"
  - name: "Bridget Meier"
keywords: ["Wireless ray tracing", "3D reconstruction", "Digital twins", "Ray-tracer calibration", "Upper mid-band", "Localization and ISAC"]
sections:
  - title: "HoRAMA: 3D models from phone video"
    video: "/assets/videos/projects/nyuray-horama.mp4"
    poster: "/assets/videos/projects/nyuray-horama-poster.jpg"
    caption: "HoRAMA builds a material-labeled 3D model from a phone scan and validates ray tracing against measurements (NYU WIRELESS, Brooklyn AI-Native 6G Summit 2026)."
    text: |
      Ray tracing is only as good as its 3D model, and building a material-labeled model of a 700 m² factory by hand takes an expert about two months. **HoRAMA** builds it from a 10-minute smartphone video in 16 hours: MASt3R-SLAM reconstructs a point cloud, Point Transformer V3 splits it into objects, the vision-language model Qwen3-VL assigns each object a material by majority vote over video frames, and the result is exported as planar and watertight meshes that NYURay reads directly ([Ying et al., ICC 2026](https://ieeexplore.ieee.org/document/11587422)). Labels matter: taking concrete for wood at 6.75 GHz costs 3–5 dB per reflection and 6–10 dB per penetration. Over 12 measured links in the NYU MakerSpace factory, HoRAMA predicts multipath power with 2.28 dB RMSE, compared with 2.18 dB for the hand-built model (1.54 vs. 2.17 dB at 6.75 GHz, 2.96 vs. 2.20 dB at 16.95 GHz).
  - title: "SPARC: per-path power calibration"
    image: "/assets/images/projects/nyuray/sparc-per-path-rmse.png"
    caption: "In an indoor factory at 6.75 and 16.95 GHz, SPARC lowers per-path power RMSE from 18.7 dB (uncalibrated) to 4.7 dB (Ying et al., GLOBECOM 2026)."
    text: |
      In cluttered indoor scenes, raw ray tracing misses individual path powers by 19–24 dB. A bound in the paper shows that a ±30% permittivity error shifts each surface interaction by at most 6.28 dB, while even single-bounce paths are off by 19.2 dB, so missing clutter and simplified geometry, not material values, cause most of the error ([Ying et al., GLOBECOM 2026](https://arxiv.org/abs/2609.06077)). **SPARC** learns a sparse linear correction from the standard outputs of one completed ray-tracing run, needs no extra runs, and works with any ray tracer. At 6.75 and 16.95 GHz it lowers per-path RMSE from 18.74 to 4.74 dB in a factory and from 23.12 to 5.39 dB in an office building, outperforms gradient boosting, and keeps 4.99 and 5.85 dB on transmitter locations left out of training.
  - title: "Map-free single-anchor localization"
    image: "/assets/images/projects/nyuray/mapfree-localization-floorplan.png"
    caption: "True (filled) and estimated (dashed) receiver positions for 20 links at 16.95 GHz in a 109 m by 44 m office building (Liu et al., GLOBECOM 2026)."
    text: |
      Without a map, a receiver must be located from the paths seen by one base station, and those paths differ widely in reliability. This method estimates each path's angular uncertainty from neighboring directional measurements and weights the resulting point and line position constraints by it ([Liu et al., GLOBECOM 2026](https://arxiv.org/abs/2609.08370)). On 20 measured indoor links at 16.95 GHz (11–97 m), it reaches 3.86 m mean and 2.66 m median error, with 70% of links within 5 m, compared with 11.25 m and 15.35 m mean error for two published single-bounce methods.
  - title: "Location calibration and upper mid-band validation"
    image: "/assets/images/projects/nyuray/location-calibration-pdp.png"
    caption: "Measured and ray-traced power delay profiles of a 560 m NLOS link at 6.75 GHz before (red) and after (blue) location calibration (Ying et al., npj Wireless Technology 2026)."
    text: |
      Field campaigns log positions with consumer GPS, which errs by 5–10 m. NYURay corrects TX and RX positions by aligning simulated and measured power delay profiles with a multi-component loss, a coarse-to-fine grid search and Powell's method; alternating the TX and RX searches cuts ray-tracing runs about 300-fold ([Ying et al., GLOBECOM 2025](https://ieeexplore.ieee.org/document/11432293)). In Downtown Brooklyn it corrected errors up to 7 m and reduced the loss by 42.3% (LOS) and 13.5% (NLOS). Validation over 18 links of 40–880 m at 6.75 and 16.95 GHz, in a 1.2 × 1.7 km city model accurate to under 10 cm, gives path loss exponents within 0.03–0.14 of measurement and path loss RMSE of 3.2 dB (LOS) and 5.8 dB (NLOS) ([Ying et al., npj Wireless Technology 2026](https://doi.org/10.1038/s44459-025-00014-x)). Delay spread is under-predicted by 61% (LOS) and 30% (NLOS), but after outlier filtering the simulated delay spread and azimuth spread distributions are statistically indistinguishable from measurement (Kolmogorov–Smirnov test).
  - title: "ISAC imaging"
    image: "/assets/images/projects/nyuray/isac-demo-cube.png"
    caption: "ISAC imaging with ray tracing: each multipath between transmitter and receiver is mapped to an equivalent reflection point on the object, and the points from many TX-RX views form the RF image (Bazzi, Ying, Kanhere, Rappaport and Chafii, IEEE JSTEAP 2025)."
    text: |
      Each resolvable path in a channel estimate carries a delay and departure and arrival angles. From NYURay-generated channel state information at 6.75 GHz, a two-segment optimization places each path, including multi-bounce paths, at an equivalent reflection point, and points from several TX–RX views are fused into a 3D image ([Bazzi et al., IEEE JSTEAP 2025](https://ieeexplore.ieee.org/document/11173662)). Six objects were imaged (a tree, 1 m and 4 m metal cubes, triangular and circular plates, a car); flat plates need about 6 TX–RX pairs and the car 8–10, and with a −100 dBm noise floor the tree and circular plate keep their outlines while the others need more views. The authors report the first multi-bounce ISAC imaging with wireless ray tracing at 6.75 GHz, and the same path parameters can be estimated from standard 5G NR reference signals.
  - title: "Point data for shared datasets"
    image: "/assets/images/projects/radio-propagation/pointdata-inh-map-and-table.png"
    caption: "Point data: each TX-RX location on the indoor map has its own row of measured statistics, ready for ray-tracer calibration and AI training (Rappaport, Shakya and Ying, ICC 2025)."
    text: |
      Channel statistics are usually published as fits and CDFs, which cannot be merged across groups. The point-data format lists path loss, delay spread and angular spreads per TX–RX location, released first for the NYU indoor hotspot campaign at 6.75 and 16.95 GHz (20 locations) ([Rappaport, Shakya & Ying, ICC 2025](https://ieeexplore.ieee.org/document/11161652)). A metadata table of sounder and processing settings lets institutions pool data: NYU 142 GHz and USC 145 GHz urban measurements at 53 locations give joint path loss exponents of 1.93 (LOS) and 2.87 (NLOS) ([Shakya et al., MILCOM 2025](https://ieeexplore.ieee.org/document/11309979)). NYURay exports the same tables, so simulation and measurement compare link by link.
  - title: "Material calibration at 28, 73 and 142 GHz"
    image: "/assets/images/projects/nyuray/tap-power-error-cdf.png"
    caption: "CDFs of the error in NYURay-predicted directional multipath power after calibration with indoor, outdoor and factory measurements at 28, 73 and 140 GHz (Kanhere, Poddar and Rappaport, IEEE TAP 2025)."
    text: |
      The first-generation NYURay was calibrated with nine directional campaigns from 2012–2022: indoor office (28, 142 GHz), outdoor urban microcell (28, 73, 142 GHz) and four factories (142 GHz) ([Kanhere & Rappaport, ICC 2023](https://ieeexplore.ieee.org/document/10279044); [Kanhere, Poddar & Rappaport, IEEE TAP 2025](https://ieeexplore.ieee.org/document/10721240)). Modeling each material's reflection loss as independent of incidence angle turns calibration into a closed-form least-squares fit in dB, as accurate as an iterative fit in linear units. The standard deviation of the absolute directional power error is 2.7–2.8 dB indoors, 1.6–2.0 dB outdoors and 1.7–2.3 dB in factories, and the fit yields reflection and penetration losses of common materials, which rise with frequency (drywall reflection 6.1 dB at 28 GHz, up to 12.8 dB at 142 GHz). The outdoor data come from NYU urban microcell campaigns that found similar path loss exponents from 28 to 142 GHz and 0.9 dB/m foliage loss at 142 GHz ([Xing & Rappaport, IEEE Commun. Lett. 2021](https://ieeexplore.ieee.org/document/9558848); [Xing & Rappaport, ICC 2021](https://ieeexplore.ieee.org/document/9500385)).
  - title: "Map-based localization at mmWave and sub-THz"
    image: "/assets/images/projects/nyuray/localization-142ghz-track.jpg"
    caption: "The 142 GHz tracking route in MetroTech Commons, Brooklyn, with one base station and 34 LOS and NLOS user positions (Kanhere and Rappaport, ICC 2021)."
    text: |
      At 28 and 73 GHz, fusing angle of arrival with received power in a 35 × 65.5 m office gave 16 cm to 3.25 m accuracy, with a 2-D ray tracer calibrated to 28 GHz indoor data ([Kanhere & Rappaport, GLOBECOM 2018](https://ieeexplore.ieee.org/document/8647983)). Map-assisted positioning (MAP-AT) combines time of flight and departure angles with a 3D map; using the 3-D NYURay, which predicted measured power at 28 and 73 GHz within 6.5 dB, simulations at 73 GHz gave 5.5 cm mean NLOS error with three base stations ([Kanhere et al., GLOBECOM 2019](https://ieeexplore.ieee.org/document/9013365)). At 142 GHz outdoors, NYURay supplied the absolute time of flight that the measurements lacked, and a Kalman filter tracked a user over 34 positions on a 102 m route with 24.8 cm mean error from one base station ([Kanhere & Rappaport, ICC 2021](https://ieeexplore.ieee.org/document/9500482)).
  - title: "NYURay engine and tools"
    image: "/assets/images/projects/nyuray/nyuray-gui.png"
    caption: "The NYURay GUI for setting frequency, bandwidth, interactions, antennas and TX/RX positions (Ying, M.S. thesis 2025)."
    text: |
      NYURay combines shooting-and-bouncing rays, which find the surfaces each path hits, with the image method, which computes the exact path; its cost grows linearly with the number of objects ([Kanhere, Poddar & Rappaport, IEEE TAP 2025](https://ieeexplore.ieee.org/document/10721240)). The current Python version models reflection with Fresnel coefficients that depend on material, polarization and incidence angle, penetration with ITU-R P.2040-3 materials, diffraction with the uniform theory of diffraction, and Lambertian scattering from surfaces rougher than the Rayleigh criterion; on one GPU it takes 2–3 s per outdoor link with 10⁶ rays ([Ying et al., npj Wireless Technology 2026](https://doi.org/10.1038/s44459-025-00014-x)). A GUI sets frequency, bandwidth, interaction types, antenna patterns (isotropic, dipole, 3GPP TR 38.901 array, horn or custom), XML scenes and TX/RX positions; the tool has a 0–100 GHz material database and an HTML 3D path viewer, compares PDPs and angular spectra with measurements, and exports CSV, PNG and point-data tables ([Ying, M.S. thesis 2025](https://www.proquest.com/openview/3ee1166de9897a2871afaf7abe732046/1?pq-origsite=gscholar&cbl=18750&diss=y)). NYURay grew out of [Ojas Kanhere's PhD work](https://www.proquest.com/docview/2722356938) (2022).
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

**Focus:** accurate site-specific channel prediction with **NYURay**, the in-house 3D ray tracer of NYU WIRELESS. NYURay predicts every reflected, penetrating, diffracted and scattered path between a transmitter and a receiver, with its power, delay and angles, and is calibrated against NYU measurements from 6.75 to 142 GHz. Current work builds 3D models automatically, calibrates the ray tracer at the level of locations and single paths, and uses it for localization, sensing and shared datasets.

1. **HoRAMA: 3D models from phone video**
2. **SPARC: per-path power calibration**
3. **Map-free single-anchor localization**
4. **Location calibration and upper mid-band validation**
5. **ISAC imaging**
6. **Point data for shared datasets**
7. **Material calibration at 28, 73 and 142 GHz**
8. **Map-based localization at mmWave and sub-THz**
9. **NYURay engine and tools**
