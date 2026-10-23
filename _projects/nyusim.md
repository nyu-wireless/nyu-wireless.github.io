---
title: "NYUSIM: Measurement-Based Channel Simulation for 6G and AI"
image: "/assets/images/projects/nyusim/banner.jpg"
image_caption: "The NYUSIM v4.0 MATLAB interface, with channel, antenna, spatial-consistency and human-blockage panels (Poddar et al., IEEE COMST 2024)."
faculty:
  - name: "Theodore (Ted) Rappaport"
    url: "https://wireless.engineering.nyu.edu/tedrappaport/"
  - name: "Daniel Abraham"
  - name: "Homa Nikbakht"
students:
  - name: "Xinquan Wang"
  - name: "Bridget Meier"
  - name: "Guanyue Qian"
  - name: "Dipankar Shakya"
  - name: "Mingjun Ying"
keywords: ["Channel modeling", "mmWave and sub-THz", "FR3 upper mid-band", "ns-3", "AI-ready datasets"]
sections:
  - title: "NYUSIM Python for AI"
    image: "/assets/images/projects/nyusim/ant3d-antenna-patterns.png"
    caption: "The AntPat module loads commercial antenna patterns and generates 3GPP-compliant patterns in the Ant3D format (Jariwala et al., IEEE ICC 2026)."
    text: |
      The full MATLAB code is ported to Python with the same equations and statistics; in 10,000 or more Monte Carlo runs, its means and variances match MATLAB v4.0 within 1% ([Jariwala et al., ICC 2026](https://ieeexplore.ieee.org/document/11587993)). Outputs pass directly to PyTorch, JAX or TensorFlow, and runs scale across machines with Ray or Dask to build large training datasets. A new **Ant3D** format stores full-sphere measured, vendor or 3GPP antenna patterns, and NYUSIM applies the gain of each pattern at the departure and arrival angles of every path.
  - title: "FR3 statistics at 6.75 and 16.95 GHz"
    image: "/assets/images/projects/nyusim/fr3-16ghz-rms-delay-spread.png"
    caption: "NYUSIM Python reproduces the measured directional RMS delay spread at 16.95 GHz (FR3) in LOS and NLOS (Jariwala et al., IEEE ICC 2026)."
    text: |
      Earlier NYUSIM versions set all parameters below 28 GHz to their 28 GHz values. NYUSIM Python adds statistical models from 2024 New York City campaigns at 6.75 GHz (FR1(C), 4–8 GHz) and 16.95 GHz (FR3, 7.125–24.25 GHz) ([Shakya et al., OJ-COMS 2024](https://ieeexplore.ieee.org/document/10605910); [Shakya et al., GLOBECOM 2024](https://ieeexplore.ieee.org/document/10901735)). Simulated directional delay spreads match the measurements: at 16.95 GHz in line-of-sight (LOS), the mean of log10(delay spread / 1 ns) is 1.30 simulated vs. 1.23 measured, about 20 ns vs. 17 ns ([Jariwala et al., ICC 2026](https://ieeexplore.ieee.org/document/11587993)).
  - title: "Sub-terahertz (sub-THz) channels up to 150 GHz, including 142 GHz factories"
    image: "/assets/images/projects/nyusim/factory-142ghz-measurement.jpg"
    caption: "142 GHz measurements in a factory, with steerable 27 dBi horn antennas at the transmitter and receiver (Ju et al., IEEE TWC 2024)."
    text: |
      NYUSIM v4.0 covers 0.5–150 GHz in all five scenarios, with up to 1 GHz bandwidth above 100 GHz; as of 2023 it was the first measurement-based simulator above 100 GHz for all five ([Poddar et al., COMST 2024](https://ieeexplore.ieee.org/document/10367974)). Sub-THz channels are sparser: in InH, simulated root-mean-square (RMS) delay spread falls from 10.8 ns at 28 GHz to 2.6 ns at 142 GHz (LOS). The factory model comes from 142 GHz measurements in four factories, with more than 75,000 channel impulse responses and path loss exponents of 1.8 (LOS) and 3.1 (NLOS) ([Ju et al., TWC 2024](https://ieeexplore.ieee.org/document/10346993)).
  - title: "NYUSIM in ns-3 at 28 and 140 GHz"
    image: "/assets/images/projects/nyusim/ns3-140ghz-throughput.png"
    caption: "End-to-end throughput versus application rate at 140 GHz in UMi and RMa LOS for three gNB–UE array sizes (Poddar et al., IEEE WCNC 2024)."
    text: |
      The 3GPP model built into ns-3 stops at 100 GHz; drop-based NYUSIM in ns-3 covers 0.5–150 GHz and all five scenarios (Poddar et al., Workshop on ns-3 2023). In full-stack simulations at 28 GHz, NYUSIM links carried 50 Mbps video with latency below 150 ms in all four scenarios studied ([Poddar et al., ICC 2023](https://ieeexplore.ieee.org/document/10278890)). At 140 GHz with 1 GHz bandwidth, large arrays (up to 64×64 at the base station, gNB) gave more than 1 Gbps with latency below 15 ms ([Poddar et al., WCNC 2024](https://ieeexplore.ieee.org/document/10570665)).
  - title: "Spatial consistency and human blockage (NYUSIM 2.0)"
    image: "/assets/images/projects/nyusim/spatial-consistency-pdp-evolution.png"
    caption: "In spatial-consistency mode, multipath delays and powers evolve smoothly along a 46 m user track at 142 GHz, UMi NLOS (Poddar et al., IEEE COMST 2024)."
    text: |
      NYUSIM 2.0 added a spatial-consistency mode in which channels evolve smoothly along the user's track, through correlated shadow-fading and LOS/NLOS maps and gradual birth and death of clusters ([Ju et al., GLOBECOM 2019](https://ieeexplore.ieee.org/document/9013273)). A four-state Markov model from 73 GHz pedestrian measurements adds human blockage: 31% of users with 7° receive beams see more than 15 dB of loss, and simulated outage (25.5%) matches measurements (24.7%).
  - title: "NYUSIM versus the 3GPP model at 28 GHz"
    image: "/assets/images/projects/nyusim/3gpp-vs-nyusim-spectral-efficiency.png"
    caption: "Per-user spectral efficiency in a 28 GHz three-user MIMO cell is higher with NYUSIM channels than with the 3GPP model (Rappaport, Sun and Shafi, IEEE VTC-Fall 2017)."
    text: |
      Measured mmWave channels are sparse: the 3rd Generation Partnership Project (3GPP) model uses two to four times more clusters than the maximum number of spatial lobes in NYUSIM ([Sun et al., TVT 2018](https://ieeexplore.ieee.org/document/8386686)). In a single-cell three-user multiple-input multiple-output (MIMO) case, NYUSIM gave about 18 bps/Hz per user versus 12 bps/Hz for 3GPP, because its few strong paths suit beamforming ([Rappaport, Sun and Shafi, VTC-Fall 2017](https://ieeexplore.ieee.org/document/8287877)). With four data streams the order reverses, 27 vs. 40 bps/Hz, which indicates that the 3GPP model is optimistic about spatial diversity ([Sun, MacCartney and Rappaport, ICC 2017](https://ieeexplore.ieee.org/document/7996792)).
  - title: "Measurement foundations and the 3-D model at 28 and 73 GHz"
    image: "/assets/images/projects/nyusim/tcsl-spatiotemporal-multipath.png"
    caption: "A simulated 142 GHz UMi channel with two spatial lobes and three time clusters, the structure of the TCSL model (Poddar et al., IEEE COMST 2024)."
    text: |
      NYUSIM rests on NYU WIRELESS measurements from 2011 to 2022 at 28, 38, 73 and 142 GHz. The NYUSIM time-cluster spatial-lobe (TCSL) model was built from 12,000 power delay profiles measured at 28 and 73 GHz in New York City: time clusters group paths that arrive close in time, and spatial lobes group paths from one direction ([Samimi and Rappaport, T-MTT 2016](https://ieeexplore.ieee.org/document/7501500)). Early New York City work showed that combining the four strongest beams improves path loss by up to 34.8 dB at 73 GHz over a randomly pointed beam at 100 m ([Sun et al., ICC 2014](https://ieeexplore.ieee.org/document/6884191)).
publications:
  - title: "NYUSIM: A Roadmap to AI-Enabled Statistical Channel Modeling and Simulation"
    authors: "I. Jariwala, X. Wang, B. Meier, G. Qian, D. Shakya, M. Ying, H. Nikbakht, D. Abraham, and T. S. Rappaport"
    venue: "IEEE ICC, 2026"
    url: "https://ieeexplore.ieee.org/document/11587993"
  - title: "A Tutorial on NYUSIM: Sub-Terahertz and Millimeter-Wave Channel Simulator for 5G, 6G and Beyond"
    authors: "H. Poddar, S. Ju, D. Shakya, and T. S. Rappaport"
    venue: "IEEE Commun. Surv. Tutor, 2024"
    url: "https://ieeexplore.ieee.org/document/10367974"
  - title: "Full-Stack End-To-End Sub-THz Simulations at 140 GHz using NYUSIM Channel Model in ns-3"
    authors: "H. Poddar, A. Chowdary, T. S. Rappaport, and M. Chafii"
    venue: "IEEE WCNC, 2024"
    url: "https://ieeexplore.ieee.org/document/10570665"
  - title: "142 GHz Sub-Terahertz Radio Propagation Measurements and Channel Characterization in Factory Buildings"
    authors: "S. Ju, D. Shakya, H. Poddar, Y. Xing, O. Kanhere, and T. S. Rappaport"
    venue: "IEEE Trans. Wireless Commun, 2024"
    url: "https://ieeexplore.ieee.org/document/10346993"
  - title: "ns-3 Implementation of Sub-Terahertz and Millimeter Wave Drop-based NYU Channel Model (NYUSIM)"
    authors: "H. Poddar, T. Yoshimura, M. Pagin, T. S. Rappaport, A. Ishii, and M. Zorzi"
    venue: "Workshop on ns-3 (WNS3), 2023"
    url: "https://doi.org/10.1145/3592149.3592155"
  - title: "Full-Stack End-To-End mmWave Simulations Using 3GPP and NYUSIM Channel Model in ns-3"
    authors: "H. Poddar, T. Yoshimura, M. Pagin, T. S. Rappaport, A. Ishii, and M. Zorzi"
    venue: "IEEE ICC, 2023"
    url: "https://ieeexplore.ieee.org/document/10278890"
  - title: "A Millimeter-Wave Channel Simulator NYUSIM with Spatial Consistency and Human Blockage"
    authors: "S. Ju, O. Kanhere, Y. Xing, and T. S. Rappaport"
    venue: "IEEE GLOBECOM, 2019"
    url: "https://ieeexplore.ieee.org/document/9013273"
  - title: "Propagation Models and Performance Evaluation for 5G Millimeter-Wave Bands"
    authors: "S. Sun, T. S. Rappaport, M. Shafi, P. Tang, J. Zhang, and P. J. Smith"
    venue: "IEEE Trans. Veh. Technol, 2018"
    url: "https://ieeexplore.ieee.org/document/8386686"
  - title: "A Novel Millimeter-Wave Channel Simulator and Applications for 5G Wireless Communications"
    authors: "S. Sun, G. R. MacCartney, and T. S. Rappaport"
    venue: "IEEE ICC, 2017"
    url: "https://ieeexplore.ieee.org/document/7996792"
  - title: "Investigation and Comparison of 3GPP and NYUSIM Channel Models for 5G Wireless Communications"
    authors: "T. S. Rappaport, S. Sun, and M. Shafi"
    venue: "IEEE VTC-Fall, 2017"
    url: "https://ieeexplore.ieee.org/document/8287877"
  - title: "3-D Millimeter-Wave Statistical Channel Model for 5G Wireless System Design"
    authors: "M. K. Samimi and T. S. Rappaport"
    venue: "IEEE Trans. Microwave Theory Tech, 2016"
    url: "https://ieeexplore.ieee.org/document/7501500"
  - title: "Millimeter wave multi-beam antenna combining for 5G cellular link improvement in New York City"
    authors: "S. Sun, G. R. MacCartney, M. K. Samimi, S. Nie, and T. S. Rappaport"
    venue: "IEEE ICC, 2014"
    url: "https://ieeexplore.ieee.org/document/6884191"
  - title: "Cellular broadband millimeter wave propagation and angle of arrival for adaptive beam steering systems (invited paper)"
    authors: "T. S. Rappaport, Y. Qiao, J. I. Tamir, J. N. Murdock, and E. Ben-Dor"
    venue: "IEEE RWS, 2012"
    url: "https://ieeexplore.ieee.org/document/6175397"
---

**Focus:** 5G and 6G design needs channel models that reproduce measured propagation, from 0.5 GHz to above 100 GHz. **NYUSIM**, the open-source statistical channel simulator built on NYU WIRELESS field measurements and downloaded more than 100,000 times, generates path loss, multipath delays, powers and 3-D angles for **0.5 to 150 GHz** in the urban microcell (UMi), urban macrocell (UMa), rural macrocell (RMa), indoor hotspot (InH) and indoor factory (InF) scenarios, and is now moving to Python for artificial intelligence (AI).

1. **NYUSIM Python for AI**
2. **FR3 statistics at 6.75 and 16.95 GHz**
3. **Sub-terahertz (sub-THz) channels up to 150 GHz, including 142 GHz factories**
4. **NYUSIM in ns-3 at 28 and 140 GHz**
5. **Spatial consistency and human blockage (NYUSIM 2.0)**
6. **NYUSIM versus the 3GPP model at 28 GHz**
7. **Measurement foundations and the 3-D model at 28 and 73 GHz**
