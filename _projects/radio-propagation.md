---
title: "Mid-Band Radio Propagation Measurements at 3.7, 6.75 and 16.95 GHz"
image: "/assets/images/projects/radio-propagation/banner.jpg"
image_caption: "A 2024 mid-band channel measurement in a tree-lined plaza in Brooklyn."
youtube: "HRhdrwL9KvU"
youtube_caption: "The Channel Explorers: how NYU WIRELESS measures the radio channel (video: NYU WIRELESS)."
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
      In 2026 the same sounder, with a 3.7 GHz radio-frequency (RF) head, measured the indoor hotspot (NYU Tandon), urban microcell (MetroTech) and indoor factory (NYU MakerSpace). Each location follows one automated procedure: a calibration sweep, drift-aligned reference power delay profiles, a receiver power scan that picks transmitter angles by an adaptive threshold, co-polarized sweeps at boresight and ±1 beamwidth in elevation, then cross-polarized sweeps. The campaign covers 54 links (26 line-of-sight (LOS), 28 non-line-of-sight (NLOS)) across the three environments, with outdoor transmitter–receiver separations up to 1 km along Myrtle Avenue. The video shows the sounder, the procedure and all three sites. Results will follow publication.
  - title: "3.7 GHz sounder setup"
    image: "/assets/images/projects/radio-propagation/3p7ghz-sounder-setup.jpg"
    caption: "The 3.7 GHz sounder in the NYU MakerSpace: PN-sequence transmitter baseband and RF upconverter with the antenna at 2.1 m (left), and RF downconverter at 1.5 m with sliding-correlation receiver baseband (right)."
    text: |
      A pseudo-random noise (PN) sequence baseband drives the transmitter RF upconverter; the receiver RF downconverter feeds a sliding-correlation baseband, with horn antennas on independently steered gimbals. In the factory the transmitter sits at 2.1 m and the receiver at 1.5 m.
  - title: "The dual-band 6.75 / 16.95 GHz sounder (2024)"
    youtube: "l3OahlNYouI"
    caption: "Prof. Rappaport presents the NYU WIRELESS FR3 channel sounder at the 2024 Brooklyn 6G Summit (video: Microwave Journal)."
    text: |
      The 2024 campaigns used a sliding-correlation sounder with 1 GHz bandwidth and co-located Mini-Circuits RF front ends at 6.75 GHz (FR1(C)) and 16.95 GHz (FR3), so both bands are measured at the same locations. Rotatable horns of 15 and 20 dBi (30° and 15° half-power beamwidth) sweep 360° in azimuth in beamwidth steps at boresight and tilted elevations, with 31 dBm effective isotropic radiated power (EIRP). The transmitter and receiver rubidium clocks are synchronized overnight by cable and kept aligned during measurements with precision time protocol, and the system is calibrated at least twice a day, giving absolute multipath delays ([Shakya et al., GLOBECOM 2024](https://ieeexplore.ieee.org/document/10901735)).
  - title: "Indoor, factory and urban channels at 6.75 and 16.95 GHz"
    image: "/assets/images/projects/radio-propagation/midband-measurement-maps.jpg"
    caption: "Transmitter and receiver locations for the 6.75 and 16.95 GHz office, factory and urban campaigns in Brooklyn (Rappaport, Shakya and Ying, ICC 2025)."
    text: |
      In 2024, NYU WIRELESS conducted the world's first comprehensive indoor hotspot study at 6.75 and 16.95 GHz (20 locations, 11–97 m), and measured the NYU MakerSpace factory (12 locations, 9–38 m) and downtown Brooklyn (20 locations, 40–880 m) in both bands. Omnidirectional LOS close-in (CI) path loss exponents (1 m reference distance) at 6.75 / 16.95 GHz are 1.34 / 1.32 (office), 1.39 / 1.75 (factory) and 1.79 / 1.85 (urban), and delay and angular spreads shrink at the higher band. Outdoor NLOS arrival angular spread is 33.6° / 24.0°, far below the 62.8° / 59.5° of the 3GPP model ([3GPP TR 38.901 V16.1.0, Table 7.5-6](https://www.3gpp.org/ftp/Specs/archive/38_series/38.901/)). All ten building materials tested lose less at 6.75 GHz, for example 33.7 vs. 42.3 dB for low-e glass ([OJ-COMS 2024](https://ieeexplore.ieee.org/document/10605910); [ICC 2025 factory](https://ieeexplore.ieee.org/document/11160744); [ICC 2025 urban](https://ieeexplore.ieee.org/document/11161884); [WCNC 2025](https://ieeexplore.ieee.org/document/10978475); [GLOBECOM 2024](https://ieeexplore.ieee.org/document/10901400)).
  - title: "Point data for shared datasets"
    image: "/assets/images/projects/radio-propagation/pointdata-inh-map-and-table.png"
    caption: "Point data: each TX-RX location on the indoor map (top) has its own row of path loss, delay spread and angular spread statistics (bottom; 6.75 GHz, TX1 and TX2) (Rappaport, Shakya and Ying, ICC 2025)."
    text: |
      Instead of fitted curves, each transmitter–receiver (TX–RX) location is published as one row, tied to a map, with its distance, LOS/NLOS state, path loss and delay and angular spreads ([ICC 2025](https://ieeexplore.ieee.org/document/11161652)). Groups can then merge campaigns: pooling 27 NYU locations at 142 GHz with 26 USC locations at 145 GHz gave path loss exponents that match each campaign alone ([MILCOM 2025](https://ieeexplore.ieee.org/document/11309979)).
  - title: "The upper mid-band for 6G and gaps in 3GPP"
    image: "/assets/images/projects/radio-propagation/fr3-spectrum-allocations.png"
    caption: "FR3 band identifications by ITU region, 3GPP, ATIS, FCC, NTIA, satellite services and NATO (Bazzi et al., IEEE Commun. Mag. 2026)."
    text: |
      With NYU Abu Dhabi, we reviewed FR3 (7.125–24.25 GHz) for 6G, from channel properties to coexistence with satellites and radio astronomy ([IEEE Commun. Mag. 2026](https://ieeexplore.ieee.org/document/11297179)). 3GPP derived its 7–24 GHz parameters by interpolation, without FR3 measurements; our data show delay and angular spreads that fall with frequency, while 3GPP keeps several of them constant ([OJ-COMS 2024](https://ieeexplore.ieee.org/document/10605910)).
  - title: "Measurement-validated digital twins (HoRAMA) at 6.75 and 16.95 GHz"
    video: "/assets/videos/projects/nyuray-horama.mp4"
    poster: "/assets/videos/projects/nyuray-horama-poster.jpg"
    caption: "HoRAMA builds a material-labeled 3D model from a phone scan and validates ray tracing against measurements (NYU WIRELESS, Brooklyn AI-Native 6G Summit 2026)."
    text: |
      The factory measurements validate **HoRAMA**, which builds a ray-tracing model from a 10-minute smartphone video. Against measurements at 12 TX–RX locations at 6.75 and 16.95 GHz, NYURay predictions of matched multipath power have a root-mean-square error (RMSE) of 2.28 dB, close to 2.18 dB for a hand-built model, while model creation drops from two months to 16 hours ([Ying et al., ICC 2026](https://ieeexplore.ieee.org/document/11587422)). See the [NYURay project](/projects/nyuray/).
  - title: "Earlier millimeter-wave (mmWave) and sub-terahertz (sub-THz) campaigns at 28–142 GHz (2011–2023)"
    image: "/assets/images/projects/radio-propagation/umi-pathloss-28-to-142ghz.png"
    caption: "Urban microcell path loss at 28, 38, 73 and 142 GHz from Austin and New York City campaigns, 2011 to 2020 (Xing and Rappaport, IEEE Commun. Lett. 2021)."
    text: |
      The mid-band work builds on a decade of measurements: the 2012 New York City campaign showing that 28 GHz cells with a 200 m radius work with steerable antennas ([IEEE Access 2013](https://ieeexplore.ieee.org/document/6515173)), the 1 m close-in path loss and spatial-lobe models behind NYUSIM ([IEEE TCOM 2015](https://ieeexplore.ieee.org/document/7109864)), and 142 GHz urban and factory models ([IEEE TAP 2024](https://ieeexplore.ieee.org/document/10444718); [ICC 2023](https://ieeexplore.ieee.org/document/10278815)). All papers are listed below.
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

**Focus:** 6G will use new mid-band spectrum at **3.7 GHz (FR1), 6.75 GHz (FR1(C)) and 16.95 GHz (FR3)**, yet the 3rd Generation Partnership Project (3GPP) built its 7–24 GHz channel model without measurements in these bands. NYU WIRELESS measures the channel in all three bands with one calibrated sounder (1 GHz bandwidth, rotating horn antennas), so results compare directly across bands. The data, with our 28–142 GHz campaigns, are the ground truth for NYUSIM, NYURay and HoRAMA.

1. **How we measure: 3.7 GHz campaign (2026)**
2. **3.7 GHz sounder setup**
3. **The dual-band 6.75 / 16.95 GHz sounder (2024)**
4. **Indoor, factory and urban channels at 6.75 and 16.95 GHz**
5. **Point data for shared datasets**
6. **The upper mid-band for 6G and gaps in 3GPP**
7. **Measurement-validated digital twins (HoRAMA) at 6.75 and 16.95 GHz**
8. **Earlier millimeter-wave (mmWave) and sub-terahertz (sub-THz) campaigns at 28–142 GHz (2011–2023)**
