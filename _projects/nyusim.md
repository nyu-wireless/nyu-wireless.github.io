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
  - name: "Isha Jariwala"
  - name: "Xinquan Wang"
  - name: "Bridget Meier"
  - name: "Guanyue Qian"
  - name: "Dipankar Shakya"
  - name: "Mingjun Ying"
keywords: ["Channel modeling", "mmWave and sub-THz", "FR3 upper mid-band", "ns-3", "AI-ready datasets"]
sections:
  - title: "NYUSIM Python for AI"
    image: "/assets/images/projects/nyusim/nyusim-python-gui.png"
    caption: "The NYUSIM v4.0 Python interface, with channel, spatial-consistency, human-blockage and antenna settings (Jariwala et al., IEEE ICC 2026)."
    text: |
      The complete MATLAB code base is ported to Python with the same equations, statistics and input–output structure, split into deterministic and stochastic classes ([Jariwala et al., ICC 2026](https://ieeexplore.ieee.org/document/11587993)). Function-level and end-to-end tests over 10,000 or more Monte Carlo runs, using K–S tests and the same MT19937 random generator in both versions, show that Python matches MATLAB v4.0 with means and variances within 1% in all five scenarios from 28 to 142 GHz. NumPy outputs pass to PyTorch, JAX or TensorFlow in one line, and runs scale across machines with multiprocessing, Ray or Dask at no license cost. This supplies the large measurement-based datasets that generative models (diffusion, VAE, GAN) and discriminative models need, and lets models learned from new measurements be plugged back into the simulator.
  - title: "3-D antenna patterns (Ant3D)"
    image: "/assets/images/projects/nyusim/ant3d-antenna-patterns.png"
    caption: "The AntPat module loads commercial antenna patterns and generates 3GPP-compliant patterns in the Ant3D format (Jariwala et al., IEEE ICC 2026)."
    text: |
      **Ant3D** is a standard full-sphere format for canonical, commercial or measured antenna patterns, usable by statistical or ray-tracing tools: gain in dBi over 0–360° azimuth and −90° to 90° elevation, with optional frequency and polarization field components, normalized to peak gain ([Jariwala et al., ICC 2026](https://ieeexplore.ieee.org/document/11587993)). The AntPat module rebuilds a 3-D pattern from a vendor's horizontal and vertical cuts and peak gain, generates 3GPP TR 38.901 patterns (defaults 65° beamwidth, 8 dBi element gain), and includes JMA Wireless base-station and Pasternack horn patterns. NYUSIM applies the TX and RX gain at each path's departure and arrival angles, so beam directivity, sidelobes and polarization mismatch shape the simulated channel. An interactive viewer shows each pattern in 3-D before simulation.
  - title: "FR3 upper mid-band statistics"
    image: "/assets/images/projects/nyusim/fr3-16ghz-rms-delay-spread.png"
    caption: "NYUSIM Python reproduces the measured directional RMS delay spread at 16.95 GHz (FR3) in LOS and NLOS (Jariwala et al., IEEE ICC 2026)."
    text: |
      Earlier NYUSIM versions set all parameters below 28 GHz to their 28 GHz values. NYUSIM Python adds statistical models from 2024 New York City campaigns at 6.75 GHz (FR1(C)) and 16.95 GHz (FR3), measured with a 1 GHz sliding-correlation sounder, PTP-synchronized rubidium clocks and full azimuth–elevation horn sweeps ([Shakya et al., OJ-COMS 2024](https://ieeexplore.ieee.org/document/10605910)). Simulated directional delay spreads match the measurements: at 16.95 GHz the mean log10 delay spread (in ns) is 1.30 simulated vs. 1.23 measured in LOS and 1.38 vs. 1.35 in NLOS, and at 6.75 GHz 1.30 vs. 1.29 (LOS) and 1.36 vs. 1.43 (NLOS) ([Jariwala et al., ICC 2026](https://ieeexplore.ieee.org/document/11587993)).
  - title: "NYUSIM v4.0 and the tutorial"
    image: "/assets/images/projects/nyusim/indoor-coverage-140ghz.png"
    caption: "Simulated received power versus distance for 140 GHz indoor links: NLOS falls below the −82 dBm sensitivity beyond 35.8 m (Poddar et al., IEEE COMST 2024)."
    text: |
      NYUSIM v4.0 (2023) covers 0.5–150 GHz in all five scenarios, allows 1 GHz bandwidth above 100 GHz (800 MHz below), and runs spatial consistency in all five scenarios. As of 2023 it was the first channel simulator above 100 GHz for UMi, UMa, RMa, InH and InF built on real measurements ([Poddar et al., COMST 2024](https://ieeexplore.ieee.org/document/10367974)). The tutorial explains both simulation modes, the 51 GUI inputs and output files, and the models for atmospheric attenuation, outdoor-to-indoor loss, human blockage and frequency-dependent cross-polarization; it also shows that with fixed-size directional antennas, received power rises with frequency because antenna gain grows as f². Sub-THz channels are sparser: in InH, simulated omnidirectional RMS delay spread falls from 10.8 ns at 28 GHz to 2.6 ns at 142 GHz (LOS), and angular spread from 23.6° to 4.4°. In a 140 GHz indoor coverage example, NLOS received power drops below the −82 dBm receiver sensitivity beyond 35.8 m, while LOS links stay above it past 50 m.
  - title: "Sub-THz factory model at 142 GHz"
    image: "/assets/images/projects/nyusim/factory-142ghz-measurement.jpg"
    caption: "142 GHz measurements in a factory, with steerable 27 dBi horn antennas at the transmitter and receiver (Ju et al., IEEE TWC 2024)."
    text: |
      The InF model in NYUSIM v4.0 comes from 142 GHz measurements in four factories: 82 TX–RX locations 5 to 87 m apart and more than 75,000 channel impulse responses ([Ju et al., TWC 2024](https://ieeexplore.ieee.org/document/10346993)). Omnidirectional path loss exponents are 1.8 (LOS) and 3.1 (NLOS), and receivers 0.5 m above the floor, as on automated guided vehicles, see 10.7 dB (LOS) and 6.0 dB (NLOS) more path loss on average than receivers at 1.5 m. A steerable metal plate used as a passive reflecting surface reduced omnidirectional path loss by 0.5 to 22 dB, 6.5 dB on average. The measured factory channels average 3.4 (LOS) and 3 (NLOS) time clusters, while 3GPP TR 38.901 assumes 25 clusters ([Poddar et al., COMST 2024](https://ieeexplore.ieee.org/document/10367974)).
  - title: "NYUSIM in ns-3"
    image: "/assets/images/projects/nyusim/ns3-channel-generation.png"
    caption: "Channel generation steps of NYUSIM in ns-3, colored by the class that performs each step (Poddar et al., Workshop on ns-3 2023)."
    text: |
      ns-3 uses the 3GPP TR 38.901 model, which is limited to 0.5–100 GHz. Drop-based NYUSIM was implemented in ns-3 for 0.5–150 GHz and all five scenarios, following the 3GPP code structure with three classes for LOS/NLOS condition, path loss and shadowing, and small-scale fading, and a 17-step channel generation procedure ([Poddar et al., WNS3 2023](https://doi.org/10.1145/3592149.3592155)). The module is on the ns-3 App Store (v1.0, September 2023). The work was done with SHARP and the University of Padova.
  - title: "Full-stack end-to-end simulations at 28 and 140 GHz"
    image: "/assets/images/projects/nyusim/ns3-140ghz-throughput.png"
    caption: "End-to-end throughput versus application rate at 140 GHz in UMi and RMa LOS for three gNB–UE array sizes (Poddar et al., IEEE WCNC 2024)."
    text: |
      At 28 GHz with 100 MHz bandwidth and 50 Mbps UDP video, NYUSIM and 3GPP were compared in UMi, UMa, RMa and InH: with NYUSIM, latency stays below 150 ms in all four scenarios, the RMa NLOS link delivers 48.1 Mbps at about 20 ms, and NLOS latency in UMi and InH is 10 and 25 times that of UMa ([Poddar et al., ICC 2023](https://ieeexplore.ieee.org/document/10278890)). At 140 GHz with 1 GHz bandwidth and the UE 100 m from the gNB, three array sizes up to 64×64 (gNB) and 8×8 (UE) were tested in all five scenarios. Large arrays give more than 1 Gbps with latency below 15 ms, while the 8×8–4×4 setup is less efficient than at 28 GHz ([Poddar et al., WCNC 2024](https://ieeexplore.ieee.org/document/10570665)). The 140 GHz study also reports confidence intervals versus the number of channel realizations: they stabilize after about 2,000 of 10,000 realizations, so 2,500 were used per case.
  - title: "Spatial consistency and human blockage (NYUSIM 2.0)"
    image: "/assets/images/projects/nyusim/spatial-consistency-pdp-evolution.png"
    caption: "In spatial-consistency mode, multipath delays and powers evolve smoothly along a 46 m user track at 142 GHz, UMi NLOS (Poddar et al., IEEE COMST 2024)."
    text: |
      NYUSIM 2.0 added spatial consistency, human blockage and outdoor-to-indoor penetration loss ([Ju et al., GLOBECOM 2019](https://ieeexplore.ieee.org/document/9013273)). Spatially correlated shadow-fading and LOS/NLOS maps, a geometry-based angle update using multiple reflection surfaces, and smooth birth and death of clusters make channels evolve along the user's track, updated every 1 m by default. A four-state Markov model from 73 GHz pedestrian measurements adds blockage: 31% of users with 7° receive beams see more than 15 dB of loss, and the simulated outage probability at a −5 dB SNR threshold (25.5%) matches measurements (24.7%). Outdoor-to-indoor loss uses parabolic low-loss (glass, wood) and high-loss (IRR glass, concrete) models.
  - title: "NYUSIM versus the 3GPP model"
    image: "/assets/images/projects/nyusim/3gpp-vs-nyusim-spectral-efficiency.png"
    caption: "Per-user spectral efficiency in a 28 GHz three-user MIMO cell is higher with NYUSIM channels than with the 3GPP model (Rappaport, Sun and Shafi, IEEE VTC-Fall 2017)."
    text: |
      Studies at 28 GHz show that channel-model choice changes system conclusions. NYUSIM's urban LOS probability, fit to New York City data, drops to nearly zero beyond a few hundred meters while the 3GPP model keeps a non-zero tail, cell-radius predictions differ by about 50 m, and 3GPP uses two to four times more clusters than NYUSIM's maximum number of spatial lobes ([Sun et al., TVT 2018](https://ieeexplore.ieee.org/document/8386686)). In a single-cell three-user MIMO case, NYUSIM gave about 18 bps/Hz per user versus 12 bps/Hz for 3GPP, because its few strong paths suit beamforming ([Rappaport, Sun and Shafi, VTC-Fall 2017](https://ieeexplore.ieee.org/document/8287877)); for one stream, 3GPP with the most RF chains still falls below NYUSIM with the fewest. With four data streams the order reverses, 27 vs. 40 bps/Hz at 20 dB SNR, which indicates that the 3GPP model is optimistic about spatial diversity at mmWave ([Sun, MacCartney and Rappaport, ICC 2017](https://ieeexplore.ieee.org/document/7996792)).
  - title: "3-D statistical spatial channel model and first release"
    image: "/assets/images/projects/nyusim/tcsl-spatiotemporal-multipath.png"
    caption: "A simulated 142 GHz UMi channel with two spatial lobes and three time clusters, the structure of the TCSL model (Poddar et al., IEEE COMST 2024)."
    text: |
      NYUSIM implements the time-cluster spatial-lobe (TCSL) model, built from 12,000 wideband power delay profiles measured at 28 and 73 GHz at 26 and 74 outdoor receiver locations in New York City, 20 to 425 m from the transmitter ([Samimi and Rappaport, T-MTT 2016](https://ieeexplore.ieee.org/document/7501500)). TCSL models time and space separately: time clusters group paths that arrive close in time from different directions, and spatial lobes group paths from one direction spread over hundreds of nanoseconds. The model supports carrier frequencies from 6 to 100 GHz, bandwidths up to 800 MHz and beamwidths above 7°, adds RMS lobe angular spreads as an extension to 3GPP parameters, and handles spatial consistency through birth and death of clusters and lobes. The first NYUSIM release (2016) covered 500 MHz–100 GHz, 0–800 MHz bandwidth, UMi, UMa and RMa, and MIMO arrays; an example showed 3×3 MIMO channel condition numbers about 18 dB larger than 2×2 at 28 GHz ([Sun, MacCartney and Rappaport, ICC 2017](https://ieeexplore.ieee.org/document/7996792)).
  - title: "Measurement foundations"
    image: "/assets/images/projects/nyusim/nyc-73ghz-polar-plot.jpg"
    caption: "Received power over the azimuth plane at a 73 GHz NLOS location in New York City, 59 m from the transmitter (Sun et al., IEEE ICC 2014)."
    text: |
      NYUSIM rests on NYU WIRELESS measurements from 2011 to 2022 at 28, 38, 73 and 142 GHz in New York City and rural Virginia, more than a terabyte of data, taken with steerable directional horn antennas. Earlier 38 GHz work on the UT Austin campus, with more than 700 measurements at 37 receiver and 4 base-station locations, showed a receiver could form up to 14 links to a rooftop transmitter, measured about 14 ns average RMS delay spread on NLOS links, and introduced arc length (distance times off-boresight angle) as one predictor of delay spread ([Rappaport et al., RWS 2012](https://ieeexplore.ieee.org/document/6175397)). In New York City, coherently combining the four strongest beams improved path loss by up to 24.9 dB at 28 GHz and 34.8 dB at 73 GHz over a randomly pointed beam at 100 m, and by more than 11.2 dB over the single best beam at 73 GHz ([Sun et al., ICC 2014](https://ieeexplore.ieee.org/document/6884191)).
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

**Focus:** **NYUSIM**, an open-source statistical channel simulator built on NYU WIRELESS field measurements, and its move to Python for AI. NYUSIM generates path loss, multipath delays, powers and 3-D angles for **0.5 to 150 GHz** in the UMi, UMa, RMa, InH and InF scenarios, runs in MATLAB, ns-3 and Python, has been downloaded more than 100,000 times, and was cited in more than 3,300 publications as of 2024.

1. **NYUSIM Python for AI**
2. **3-D antenna patterns (Ant3D)**
3. **FR3 upper mid-band statistics**
4. **NYUSIM v4.0 and the tutorial**
5. **Sub-THz factory model at 142 GHz**
6. **NYUSIM in ns-3**
7. **Full-stack end-to-end simulations at 28 and 140 GHz**
8. **Spatial consistency and human blockage (NYUSIM 2.0)**
9. **NYUSIM versus the 3GPP model**
10. **3-D statistical spatial channel model and first release**
11. **Measurement foundations**
