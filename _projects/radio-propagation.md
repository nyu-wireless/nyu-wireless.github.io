---
title: "Mid-Band Radio Propagation Measurements at 3.7, 6.75 and 16.95 GHz"
image: "/assets/images/projects/radio-propagation/banner.jpg"
image_caption: "A 2024 mid-band channel measurement in a tree-lined plaza in Brooklyn."
youtube: "l3OahlNYouI"
youtube_caption: "Prof. Rappaport presents the NYU WIRELESS FR3 channel sounder at the 2024 Brooklyn 6G Summit (video: Microwave Journal)."
faculty:
  - name: "Theodore (Ted) Rappaport"
    url: "https://wireless.engineering.nyu.edu/tedrappaport/"
students:
  - name: "Mingjun Ying"
  - name: "Dipankar Shakya"
  - name: "Peijie Ma"
  - name: "Yanbo Wang"
  - name: "Idris Al-Wazani"
  - name: "Yanze Wu"
  - name: "Isha Jariwala"
  - name: "Jason J. Qin"
  - name: "Ishaan S. Gupte"
  - name: "Bridget Meier"
  - name: "Guanyue Qian"
keywords: ["Channel measurements", "Upper mid-band (FR3)", "Path loss", "Penetration loss", "Point data", "mmWave and sub-THz"]
sections:
  - title: "How we measure: 3.7 GHz campaign (2026)"
    video: "/assets/videos/projects/radio-propagation-3p7ghz-campaign.mp4"
    poster: "/assets/videos/projects/radio-propagation-3p7ghz-campaign-poster.jpg"
    caption: "NYU WIRELESS 3.7 GHz measurement campaign (2026): the sounder, the measurement procedure, and the indoor hotspot, indoor factory and urban microcell sites."
    text: |
      In 2026 the same sounder, with a 3.7 GHz RF head, measured the indoor hotspot (NYU Tandon), urban microcell (MetroTech) and indoor factory (NYU MakerSpace). Each location follows one automated procedure: a calibration sweep, drift-aligned reference power delay profiles, a receiver power scan that picks transmitter angles by an adaptive threshold, co-polarized sweeps at boresight and ±1 beamwidth in elevation, then cross-polarized sweeps. The campaign covers 54 links (26 LOS, 28 NLOS) across the three environments, with outdoor transmitter–receiver separations up to 1 km along Myrtle Avenue. The video shows the sounder, the procedure and all three sites. Results will follow publication.
  - title: "3.7 GHz sounder setup"
    image: "/assets/images/projects/radio-propagation/3p7ghz-sounder-setup.jpg"
    caption: "The 3.7 GHz sounder in the NYU MakerSpace: PN-sequence transmitter baseband and RF upconverter with the antenna at 2.1 m (left), and RF downconverter at 1.5 m with sliding-correlation receiver baseband (right)."
    text: |
      A PN-sequence baseband drives the transmitter RF upconverter; the receiver RF downconverter feeds a sliding-correlation baseband, with horn antennas on independently steered gimbals. In the factory the transmitter sits at 2.1 m and the receiver at 1.5 m.
  - title: "Indoor hotspot at 6.75 and 16.95 GHz"
    image: "/assets/images/projects/radio-propagation/inh-omni-pathloss.png"
    caption: "Omnidirectional path loss in the NYU WIRELESS Research Center at 6.75 GHz (left) and 16.95 GHz (right) (Shakya et al., OJ-COMS 2024)."
    text: |
      The first comprehensive indoor campaign in these bands covered 20 TX–RX locations over 11–97 m at the NYU WIRELESS Research Center, using co-located 6.75 and 16.95 GHz front ends with absolute timing. Omnidirectional path loss exponents are 1.34 / 1.32 in LOS, a hallway waveguiding effect, and 2.72 / 3.05 in NLOS; RMS delay spread falls from 37.7 to 22.1 ns (LOS) and from 48 to 40.7 ns (NLOS). Directional NLOS exponents (3.34 / 3.91) are well below those at 28–142 GHz (4.4–5.51), and with equal antenna aperture, higher-gain antennas give better coverage at the higher band. Strong V/H isolation (up to 25.4 dB cross-polar discrimination) adds a degree of freedom for multiplexing, and the number of time clusters and multipath components drops with frequency ([Shakya et al., OJ-COMS 2024](https://ieeexplore.ieee.org/document/10605910); [Shakya et al., GLOBECOM 2024](https://ieeexplore.ieee.org/document/10901735)).
  - title: "Indoor factory"
    image: "/assets/images/projects/radio-propagation/inf-omni-pathloss.png"
    caption: "Omnidirectional path loss in the NYU MakerSpace factory at 6.75 GHz (left) and 16.95 GHz (right) (Ying et al., ICC 2025)."
    text: |
      In the NYU MakerSpace (36 × 22 × 5 m, with machines and open work areas), 12 locations (5 LOS, 7 NLOS) over 9–38 m gave omnidirectional path loss exponents of 1.39 / 1.75 in LOS and 1.78 / 2.11 in NLOS, close to free space even in NLOS and lower than 2.74 at 142 GHz. Omnidirectional RMS delay spread is 14 / 12.7 ns (LOS) and 30.3 / 29.0 ns (NLOS), and NLOS arrival angular spread narrows from 66.4° to 50.4°. 3GPP sets factory delay spread from room volume and surface area rather than frequency, and has no 1 m close-in path loss model for factories ([Ying et al., ICC 2025](https://ieeexplore.ieee.org/document/11160744)).
  - title: "Urban microcell"
    image: "/assets/images/projects/radio-propagation/umi-fr3-omni-pathloss.png"
    caption: "Omnidirectional urban microcell path loss in Brooklyn over 40 to 880 m at 6.75 GHz (left) and 16.95 GHz (right) (Shakya et al., ICC 2025)."
    text: |
      In downtown Brooklyn, 7 LOS and 13 NLOS locations from 40 to 880 m, around MetroTech Commons and along Myrtle Avenue, gave omnidirectional path loss exponents of 1.79 / 1.85 (LOS) and 2.56 / 2.59 (NLOS), lower than at mmWave and sub-THz. Omnidirectional RMS delay spread is 62.8 / 46.5 ns in LOS and 75.6 / 65.8 ns in NLOS. NLOS values are below 3GPP (111.1 ns at 6.75 GHz), while LOS values are above it, due to late reflections from distant buildings around the open square. Point-data tables for every location accompany the models ([Shakya et al., ICC 2025](https://ieeexplore.ieee.org/document/11161884)).
  - title: "Angular spread"
    image: "/assets/images/projects/radio-propagation/inh-pas-6p75-vs-16p95.png"
    caption: "Arrival power angular spectrum at the same office location: one spatial lobe at 6.75 GHz and four at 16.95 GHz (Shakya et al., WCNC 2025)."
    text: |
      Angular spreads, computed with the 3GPP method from spatial lobes within 10 dB of the peak, are wide at both bands, indicating multipath-rich channels for MIMO. In the office, omnidirectional arrival spread is 41.3° / 58.1° (LOS / NLOS) at 6.75 GHz and 17.2° / 54.3° at 16.95 GHz. LOS departure spread exceeds 3GPP by about 25° and NLOS zenith arrival spread is about 16° narrower; 3GPP models departure spread as constant over frequency, which may need revision ([Shakya et al., WCNC 2025](https://ieeexplore.ieee.org/document/10978475)). Outdoors, NLOS arrival spread is 33.6° / 24.0°, far below 3GPP (62.8° / 59.5°) ([Shakya et al., ICC 2025](https://ieeexplore.ieee.org/document/11161884)).
  - title: "Building penetration loss"
    image: "/assets/images/projects/radio-propagation/penetration-material-photos.jpg"
    caption: "Penetration-loss measurements through a steel door, drywall, a birch wood panel, an IRR glass wall and a drywall partition (Shakya et al., GLOBECOM 2024)."
    text: |
      Co- and cross-polarized loss was measured through ten common materials. All lose less at 6.75 than at 16.95 GHz, for example 33.7 vs. 42.3 dB for a low-e glass wall, 43.2 vs. 58.5 dB for a steel door, and 0.6 vs. 1.2 dB for drywall. Low-e windows depend strongly on polarization (29.7 dB co-polarized vs. 15.4 dB cross-polarized at 6.75 GHz) ([Shakya et al., GLOBECOM 2024](https://ieeexplore.ieee.org/document/10901400)). The journal paper adds a survey table of published penetration losses from 4 to 24 GHz ([Shakya et al., OJ-COMS 2024](https://ieeexplore.ieee.org/document/10605910)).
  - title: "Site-specific point data"
    image: "/assets/images/projects/radio-propagation/pointdata-inh-map-and-table.png"
    caption: "Point data: each TX-RX location on the indoor map (top) has its own row of path loss, delay spread and angular spread statistics (bottom; 6.75 GHz, TX1 and TX2) (Rappaport, Shakya and Ying, ICC 2025)."
    text: |
      We proposed a **point-data** format in which each row is one TX–RX location, tied to a map, with its distance, LOS/NLOS state, path loss, and delay and angular spreads. The same table supports CDF-based statistical models and site-specific ray tracing or AI/ML training, provided contributors agree on minimum specifications such as bandwidth, antenna beamwidth and noise threshold. The 2024 indoor hotspot data were published in this form for the first time, for 3GPP and NGA channel modeling ([Rappaport, Shakya and Ying, ICC 2025](https://ieeexplore.ieee.org/document/11161652)).
  - title: "Standardized format across institutions"
    image: "/assets/images/projects/radio-propagation/pointdata-nyu-usc-maps-and-tables.png"
    caption: "NYU 142 GHz (Brooklyn) and USC 145 GHz (Los Angeles) campaigns mapped and tabulated in the same point-data format, so the 53 locations pool directly (Shakya et al., MILCOM 2025)."
    text: |
      A machine-readable version of the format, used with an environment map and a measurement-summary metadata table, lets institutions merge campaigns by concatenating tables. Pooling 27 NYU locations at 142 GHz with 26 USC locations at 145 GHz gave joint path loss exponents of 1.93 (LOS) and 2.87 (NLOS), matching each campaign alone, and mean omnidirectional delay spreads of 19.7 ns (LOS) and 47.3 ns (NLOS) ([Shakya et al., MILCOM 2025](https://ieeexplore.ieee.org/document/11309979)).
  - title: "Upper mid-band spectrum for 6G"
    image: "/assets/images/projects/radio-propagation/fr3-spectrum-allocations.png"
    caption: "FR3 band identifications by ITU region, 3GPP, ATIS, FCC, NTIA, satellite services and NATO (Bazzi et al., IEEE Commun. Mag. 2026)."
    text: |
      With NYU Abu Dhabi, we reviewed FR3 (7.125–24.25 GHz) for 6G: measured channel properties, spectrum agility, coexistence with satellites and radio astronomy, massive MIMO, multiband sensing, and likely 3GPP and O-RAN features. A coverage-rate analysis at 7, 14, 18 and 24 GHz shows lower bands are best up to 200 Mbps and higher bands beyond, which argues for frequency hopping. The UMi LOS exponent of 1.79 at 6.75 GHz, vs. 2.02–2.1 at 28 GHz, gives about 6.6 dB more omnidirectional signal at 1 km ([Bazzi et al., IEEE Commun. Mag. 2026](https://ieeexplore.ieee.org/document/11297179)).
  - title: "Comparison with 3GPP TR 38.901"
    image: "/assets/images/projects/radio-propagation/penetration-loss-vs-frequency.png"
    caption: "Measured material penetration loss from 0 to 150 GHz against the 3GPP TR 38.901 material models (Shakya et al., GLOBECOM 2024)."
    text: |
      3GPP derived its 7–24 GHz parameters by interpolation, without FR3 measurements ([Bazzi et al., 2026](https://ieeexplore.ieee.org/document/11297179)). Our measured delay and angular spreads fall with frequency in every environment, while 3GPP keeps several parameters constant: indoor departure spread, factory delay spread, the number of clusters, and the close-in path loss exponent. 3GPP material models match clear glass (1.2 dB RMSE) and wood (2.4 dB) but under-predict IRR glass (11.8 dB RMSE); concrete shows 42.9 dB RMSE because the measured wall was an indoor cinderblock wall ([Shakya et al., OJ-COMS 2024](https://ieeexplore.ieee.org/document/10605910)).
  - title: "Measurement-validated digital twins (HoRAMA)"
    video: "/assets/videos/projects/nyuray-horama.mp4"
    poster: "/assets/videos/projects/nyuray-horama-poster.jpg"
    caption: "HoRAMA builds a material-labeled 3D model from a phone scan and validates ray tracing against measurements (NYU WIRELESS, Brooklyn AI-Native 6G Summit 2026)."
    text: |
      The factory measurements validate **HoRAMA**, which builds a ray-tracing model with material labels from a 10-minute smartphone video of the 700 m² factory. Against measurements at 12 TX–RX locations at 6.75 and 16.95 GHz, NYURay predictions of matched multipath power have 2.28 dB RMSE, close to 2.18 dB for a hand-built model, while model creation drops from two months to 16 hours ([Ying et al., ICC 2026](https://ieeexplore.ieee.org/document/11587422)). See the [NYURay project](/projects/nyuray/).
  - title: "Earlier mmWave and sub-THz campaigns (2011–2023)"
    image: "/assets/images/projects/radio-propagation/umi-pathloss-28-to-142ghz.png"
    caption: "Urban microcell path loss at 28, 38, 73 and 142 GHz from Austin and New York City campaigns, 2011 to 2020 (Xing and Rappaport, IEEE Commun. Lett. 2021)."
    text: |
      The mid-band work builds on a decade of NYU WIRELESS measurements. The 2012 New York City campaign at 28 GHz showed that 200 m cells work with steerable antennas ([Rappaport et al., IEEE Access 2013](https://ieeexplore.ieee.org/document/6515173)), with early results at 38 and 73 GHz ([RWS 2012](https://ieeexplore.ieee.org/document/6175397); [PIMRC 2013](https://ieeexplore.ieee.org/document/6666553); [ICC 2014](https://ieeexplore.ieee.org/document/6884191)). Over 15,000 power delay profiles at 28–73 GHz gave the 1 m close-in path loss model and the time-cluster, spatial-lobe channel model behind NYUSIM ([IEEE TCOM 2015](https://ieeexplore.ieee.org/document/7109864)). At 142 GHz, urban path loss exponents (1.9 LOS, 2.9 NLOS) match those at 28 GHz while spreads shrink ([ICC 2021](https://ieeexplore.ieee.org/document/9500385); [IEEE Commun. Lett. 2021](https://ieeexplore.ieee.org/document/9558848); [IEEE TAP 2024](https://ieeexplore.ieee.org/document/10444718)), and four factories gave the first 142 GHz factory models ([ICC 2023](https://ieeexplore.ieee.org/document/10278815)). These campaigns used sounders with absolute timing ([IEEE JSAC 2017](https://ieeexplore.ieee.org/document/7887768); [GLOBECOM 2023](https://ieeexplore.ieee.org/document/10436748)) and are summarized in overviews of mmWave 5G and of spectrum above 100 GHz ([IEEE TAP 2017](https://ieeexplore.ieee.org/document/7999294); [IEEE Access 2019](https://ieeexplore.ieee.org/document/8732419)).
publications:
  - title: "HoRAMA: Holistic Reconstruction with Automated Material Assignment for Ray Tracing using NYURay"
    authors: "M. Ying, G. Qian, X. Wang, P. Ma, D. Shakya, and T. S. Rappaport"
    venue: "IEEE ICC, 2026"
    url: "https://ieeexplore.ieee.org/document/11587422"
  - title: "Upper Mid-Band Spectrum for 6G: Vision, Opportunity and Challenges"
    authors: "A. Bazzi, R. Bomfin, M. Mezzavilla, S. Rangan, T. S. Rappaport, and M. Chafii"
    venue: "IEEE Communications Magazine, 2026"
    url: "https://ieeexplore.ieee.org/document/11297179"
  - title: "Standardized Machine-Readable Point-Data Format for Consolidating Wireless Propagation Across Environments, Frequencies, and Institutions"
    authors: "D. Shakya, N. A. Abbasi, M. Ying, I. Jariwala, J. J. Qin, I. S. Gupte, B. Meier, G. Qian, D. Abraham, T. S. Rappaport, and A. F. Molisch"
    venue: "IEEE MILCOM, 2025"
    url: "https://ieeexplore.ieee.org/document/11309979"
  - title: "Point Data for Site-Specific Mid-band Radio Propagation Channel Statistics in the Indoor Hotspot (InH) Environment for 3GPP and Next Generation Alliance (NGA) Channel Modeling"
    authors: "T. S. Rappaport, D. Shakya, and M. Ying"
    venue: "IEEE ICC, 2025"
    url: "https://ieeexplore.ieee.org/document/11161652"
  - title: "Angular Spread Statistics for 6.75 GHz FR1(C) and 16.95 GHz FR3 Mid-Band Frequencies in an Indoor Hotspot Environment"
    authors: "D. Shakya, M. Ying, and T. S. Rappaport"
    venue: "IEEE WCNC, 2025"
    url: "https://ieeexplore.ieee.org/document/10978475"
  - title: "Upper Mid-Band Channel Measurements and Characterization at 6.75 GHz FR1(C) and 16.95 GHz FR3 in an Indoor Factory Scenario"
    authors: "M. Ying, D. Shakya, T. S. Rappaport, P. Ma, Y. Wang, I. Al-Wazani, Y. Wu, and H. Poddar"
    venue: "IEEE ICC, 2025"
    url: "https://ieeexplore.ieee.org/document/11160744"
  - title: "Urban Outdoor Propagation Measurements and Channel Models at 6.75 GHz FR1(C) and 16.95 GHz FR3 Upper Mid-band Spectrum for 5G and 6G"
    authors: "D. Shakya, M. Ying, T. S. Rappaport, P. Ma, I. Al-Wazani, Y. Wu, Y. Wang, D. Calin, H. Poddar, A. Bazzi, M. Chafii, Y. Xing, and A. Ghosh"
    venue: "IEEE ICC, 2025"
    url: "https://ieeexplore.ieee.org/document/11161884"
  - title: "Comprehensive FR1(C) and FR3 Lower and Upper Mid-Band Propagation and Material Penetration Loss Measurements and Channel Models in Indoor Environment for 5G and 6G"
    authors: "D. Shakya, M. Ying, T. S. Rappaport, H. Poddar, P. Ma, Y. Wang, and I. Al-Wazani"
    venue: "IEEE Open Journal of the Communications Society, 2024"
    url: "https://ieeexplore.ieee.org/document/10605910"
  - title: "Propagation measurements and channel models in Indoor Environment at 6.75 GHz FR1(C) and 16.95 GHz FR3 Upper-mid band Spectrum for 5G and 6G"
    authors: "D. Shakya, M. Ying, T. S. Rappaport, H. Poddar, P. Ma, Y. Wang, and I. Al-Wazani"
    venue: "IEEE GLOBECOM, 2024"
    url: "https://ieeexplore.ieee.org/document/10901735"
  - title: "Wideband Penetration Loss through Building Materials and Partitions at 6.75 GHz in FR1(C) and 16.95 GHz in the FR3 Upper Mid-band spectrum"
    authors: "D. Shakya, M. Ying, T. S. Rappaport, H. Poddar, P. Ma, Y. Wang, and I. Al-Wazani"
    venue: "IEEE GLOBECOM, 2024"
    url: "https://ieeexplore.ieee.org/document/10901400"
  - title: "Radio Propagation Measurements and Statistical Channel Models for Outdoor Urban Microcells in Open Squares and Streets at 142, 73, and 28 GHz"
    authors: "D. Shakya, S. Ju, O. Kanhere, H. Poddar, Y. Xing, and T. S. Rappaport"
    venue: "IEEE Transactions on Antennas and Propagation, 2024"
    url: "https://ieeexplore.ieee.org/document/10444718"
  - title: "A Sub-Terahertz Sliding Correlator Channel Sounder with Absolute Timing using Precision Time Protocol over Wi-Fi"
    authors: "D. Shakya, H. Poddar, and T. S. Rappaport"
    venue: "IEEE GLOBECOM, 2023"
    url: "https://ieeexplore.ieee.org/document/10436748"
  - title: "142 GHz Multipath Propagation Measurements and Path Loss Channel Modeling in Factory Buildings"
    authors: "S. Ju and T. S. Rappaport"
    venue: "IEEE ICC, 2023"
    url: "https://ieeexplore.ieee.org/document/10278815"
  - title: "Millimeter Wave and Terahertz Urban Microcell Propagation Measurements and Models"
    authors: "Y. Xing and T. S. Rappaport"
    venue: "IEEE Communications Letters, 2021"
    url: "https://ieeexplore.ieee.org/document/9558848"
  - title: "Propagation Measurements and Path Loss Models for sub-THz in Urban Microcells"
    authors: "Y. Xing and T. S. Rappaport"
    venue: "IEEE ICC, 2021"
    url: "https://ieeexplore.ieee.org/document/9500385"
  - title: "Wireless Communications and Applications Above 100 GHz: Opportunities and Challenges for 6G and Beyond"
    authors: "T. S. Rappaport, Y. Xing, O. Kanhere, S. Ju, A. Madanayake, S. Mandal, A. Alkhateeb, and G. C. Trichopoulos"
    venue: "IEEE Access, 2019"
    url: "https://ieeexplore.ieee.org/document/8732419"
  - title: "A Flexible Millimeter-Wave Channel Sounder With Absolute Timing"
    authors: "G. R. MacCartney and T. S. Rappaport"
    venue: "IEEE Journal on Selected Areas in Communications, 2017"
    url: "https://ieeexplore.ieee.org/document/7887768"
  - title: "Overview of Millimeter Wave Communications for Fifth-Generation (5G) Wireless Networks—With a Focus on Propagation Models"
    authors: "T. S. Rappaport, Y. Xing, G. R. MacCartney, A. F. Molisch, E. Mellios, and J. Zhang"
    venue: "IEEE Transactions on Antennas and Propagation, 2017"
    url: "https://ieeexplore.ieee.org/document/7999294"
  - title: "Wideband Millimeter-Wave Propagation Measurements and Channel Models for Future Wireless Communication System Design"
    authors: "T. S. Rappaport, G. R. MacCartney, M. K. Samimi, and S. Sun"
    venue: "IEEE Transactions on Communications, 2015"
    url: "https://ieeexplore.ieee.org/document/7109864"
  - title: "Millimeter wave multi-beam antenna combining for 5G cellular link improvement in New York City"
    authors: "S. Sun, G. R. MacCartney, M. K. Samimi, S. Nie, and T. S. Rappaport"
    venue: "IEEE ICC, 2014"
    url: "https://ieeexplore.ieee.org/document/6884191"
  - title: "Millimeter Wave Mobile Communications for 5G Cellular: It Will Work!"
    authors: "T. S. Rappaport, S. Sun, R. Mayzus, H. Zhao, Y. Azar, K. Wang, G. N. Wong, J. K. Schulz, M. Samimi, and F. Gutierrez"
    venue: "IEEE Access, 2013"
    url: "https://ieeexplore.ieee.org/document/6515173"
  - title: "72 GHz millimeter wave indoor measurements for wireless and backhaul communications"
    authors: "S. Nie, G. R. MacCartney, S. Sun, and T. S. Rappaport"
    venue: "IEEE PIMRC, 2013"
    url: "https://ieeexplore.ieee.org/document/6666553"
  - title: "Cellular broadband millimeter wave propagation and angle of arrival for adaptive beam steering systems (invited paper)"
    authors: "T. S. Rappaport, Y. Qiao, J. I. Tamir, J. N. Murdock, and E. Ben-Dor"
    venue: "IEEE RWS, 2012"
    url: "https://ieeexplore.ieee.org/document/6175397"
---

**Focus:** measuring the radio channel at **3.7, 6.75 and 16.95 GHz**, the mid-band spectrum proposed for 6G, so that 3GPP and industry have measured channel models for these bands. All campaigns use one calibrated sliding-correlation sounder with 1 GHz bandwidth and rotating horn antennas, so results compare directly across bands. Together with our 28 to 142 GHz campaigns, the data form a repository of more than a terabyte that supports 3GPP and Next Generation Alliance (NGA) modeling and is the ground truth for NYUSIM, NYURay and HoRAMA. Planned sub-THz campaigns include 180 GHz (an atmospheric absorption band), 280 GHz and 285 GHz.

1. **How we measure: 3.7 GHz campaign (2026)**
2. **3.7 GHz sounder setup**
3. **Indoor hotspot at 6.75 and 16.95 GHz**
4. **Indoor factory**
5. **Urban microcell**
6. **Angular spread**
7. **Building penetration loss**
8. **Site-specific point data**
9. **Standardized format across institutions**
10. **Upper mid-band spectrum for 6G**
11. **Comparison with 3GPP TR 38.901**
12. **Measurement-validated digital twins (HoRAMA)**
13. **Earlier mmWave and sub-THz campaigns (2011–2023)**
