---
title: "Waste Factor: A New Metric for Evaluating Power Efficiency in Any Cascade"
image: "/assets/images/projects/waste-factor/banner.jpg"
image_caption: "Consumed power splits into signal, non-signal, and non-path parts (Rappaport, Ying and Shakya, Microwave Journal 2024)."
youtube: "Gs5uY6TJ9gc"
youtube_caption: "Prof. Rappaport on Waste Figure, a new figure of merit for sustainable circuits and systems (IEEE MTT-S)."
faculty:
  - name: "Theodore (Ted) Rappaport"
    url: "https://wireless.engineering.nyu.edu/tedrappaport/"
students:
  - name: "Mingjun Ying"
  - name: "Dipankar Shakya"
keywords: ["Energy efficiency", "Waste Factor", "Green communications", "Radio access networks", "mmWave and sub-THz", "Relays and FWA"]
sections:
  - title: "Why a new metric"
    youtube: "BEbExiZJ_F4"
    caption: "Prof. Rappaport, Energy Sustainability and the Impending Communications Power Consumption Tidal Wave, Purdue University, May 1, 2025."
    text: |
      Information and communication technology uses 4–6% of global electricity ([UK POST](https://post.parliament.uk/research-briefings/post-pn-0677/)), and AI adds more: Goldman Sachs projects a [160% increase in power demand](https://www.goldmansachs.com/insights/articles/AI-poised-to-drive-160-increase-in-power-demand), and a ChatGPT request uses 2.9 Wh against 0.3 Wh for a Google search ([IEA](https://www.iea.org/reports/electricity-2024)). In cellular networks the radio access network (RAN) uses 76% of operator energy, and 5G, though about four times more energy-efficient per bit than 4G, uses more energy in total ([Rappaport et al., OJ-COMS 2024](https://ieeexplore.ieee.org/document/10604822)). Standard efficiency metrics change with traffic load and do not show where along the signal path power is wasted.
  - title: "Definition, after Friis's 1944 noise figure"
    image: "/assets/images/projects/waste-factor/gc23-cascade-signal-path.png"
    caption: "Waste Factor splits the power each device consumes into signal-path and non-signal parts; cascading devices from source to sink gives the system W (Ying, Shakya, Poddar and Rappaport, IEEE GLOBECOM 2023)."
    text: |
      In 1944 Friis gave the noise factor a cascade formula that budgets the noise each stage adds ([Friis, Proc. IRE 1944](https://ieeexplore.ieee.org/document/1695024)); W does the same for wasted power. W is the power consumed along the signal path divided by the signal power delivered at the output, and the Waste Figure is 10 log10 W. W = 1 (0 dB) means no waste, a passive part or channel has W equal to its loss, and an amplifier's W is the reciprocal of its power-added efficiency. Stages combine with the noise-figure rule but referred to the output, so the stage nearest the sink dominates, while non-path power such as oscillators, cooling, displays and amplifier standby power is added separately ([Ying et al., GLOBECOM 2023](https://ieeexplore.ieee.org/document/10436843); [Rappaport, Ying & Shakya, Microwave Journal 2024](https://wireless.engineering.nyu.edu/wp-content/uploads/2024/05/5M31-FINALsm2.pdf)).
  - title: "MISO, SIMO and MIMO"
    image: "/assets/images/projects/waste-factor/gc24-mimo-2x2.png"
    caption: "In a two-input, two-output MIMO system, transmitter and channel waste factors form a first-stage W that cascades with the parallel receivers (Ying, Shakya and Rappaport, IEEE GLOBECOM 2024)."
    text: |
      This work gives the first W analysis of parallel systems. A MIMO system is treated as cascaded MISO or SIMO stages, combined at each interface either non-coherently (powers add) or coherently (amplitudes add). A radio unit with a DAC, a mixer and per-antenna phase shifters and power amplifiers is modeled as SIMO, a user device as MISO, and the channel's W, including antenna gains, is its effective path loss. In a 28 GHz coordinated multipoint simulation with 512 users and 1 to 20 base stations, the system Waste Figure drops steeply as base stations are added, then levels off ([Ying et al., GLOBECOM 2024](https://ieeexplore.ieee.org/document/10900955)).
  - title: "Data centers"
    image: "/assets/images/projects/waste-factor/data-center-a-vs-b.png"
    caption: "Two data centers with the same PUE (1.833) have different Waste Factors, 1.286 and 1.5, so W identifies the one that wastes less power (Ying, Shakya, Poddar and Rappaport, IEEE GLOBECOM 2023)."
    text: |
      Power usage effectiveness (PUE), total facility power over IT power, cannot separate power that moves information from power that does not. W maps a data center onto the cascade model: routers, switches and firewalls form the information path, processors, memory and storage are non-signal power, and cooling and power distribution are non-path power. Two data centers with the same PUE of 1.833 have W of 1.286 and 1.5, so W identifies the more efficient one ([Ying et al., GLOBECOM 2023](https://ieeexplore.ieee.org/document/10436843); [Rappaport, Ying & Shakya, Microwave Journal 2024](https://wireless.engineering.nyu.edu/wp-content/uploads/2024/05/5M31-FINALsm2.pdf)).
  - title: "Radio units and standard metrics"
    image: "/assets/images/projects/waste-factor/ru-efficiency-vs-waste-factor.png"
    caption: "For a radio unit, the ITU energy-efficiency metric (red) rises with output power while the Waste Factor (blue) stays at 3.5 (Rappaport et al., IEEE OJ-COMS 2024)."
    text: |
      ETSI, ITU and 3GPP metrics divide output by energy, so they depend on load: a base station spending 4 Wh/GB scores 0.2 GB/Wh and beats one spending 2 Wh/GB (0.14 GB/Wh) only because it carries more traffic. W does not depend on load: the slope of consumed versus delivered power in field data from 7500 radio units gives W = 3.5 at every output power, and two radio units with the same 24% ITU efficiency have W of 3 and 3.5. The paper derives W for each RAN part, from DACs, mixers, phase shifters, power amplifiers and LNAs to antennas and the channel ([Rappaport et al., OJ-COMS 2024](https://ieeexplore.ieee.org/document/10604822)).
  - title: "Distributed MU-MIMO across bands"
    image: "/assets/images/projects/waste-factor/network-waste-figure-vs-bs.png"
    caption: "In a simulated distributed MU-MIMO downlink with directional antennas, the system Waste Figure falls with more base stations and higher carrier frequency (Rappaport et al., IEEE OJ-COMS 2024)."
    text: |
      W reduces a whole multi-user network to one number. In a simulated distributed MU-MIMO downlink with 1024 users over a 1 km radius, the system Waste Figure falls as base stations are added, with diminishing returns, and as carrier frequency rises when antennas are directional. With 20 base stations, 28 GHz has a **12 dB lower Waste Figure** than 3.5 GHz, and 3.5 GHz draws 34% more total power. At 28 GHz, directional antennas cut total power to 4.4 kW/km², from 9 kW/km² with omnidirectional antennas ([Rappaport et al., OJ-COMS 2024](https://ieeexplore.ieee.org/document/10604822)).
  - title: "RAN design and operation"
    image: "/assets/images/projects/waste-factor/energy-strategy-quadrants-hires.png"
    caption: "Pairing data rate or consumed power with W maps each operating condition to an energy-saving action (Rappaport et al., IEEE OJ-COMS 2024)."
    text: |
      Along a radio unit, channel and user device, the channel's W dominates the system W, which favors small cells. Halving the radio unit's W (3.5, against 18.6 for the user device) or doubling the user device's gain lowers the system Waste Figure by 3 dB, while halving the user device's W changes it by a small fraction of a dB. Because W does not depend on load, operators can pair it with data rate or consumed power to choose an action: efficient hardware and smaller cells when rate is low and W high, more power or bandwidth when both are low, and shutdown or better cooling when consumed power is high but W low ([Rappaport et al., OJ-COMS 2024](https://ieeexplore.ieee.org/document/10604822)). W's simple form also suits AI/ML control, for example to tune base-station density ([Ying et al., GLOBECOM 2023](https://ieeexplore.ieee.org/document/10436843)). Open problems include nonlinear components, standby states, ring networks, and mixed coherent and non-coherent combining ([Rappaport et al., OJ-COMS 2024](https://ieeexplore.ieee.org/document/10604822)).
  - title: "Relays and fixed wireless access"
    image: "/assets/images/projects/waste-factor/relay-feasible-region.png"
    caption: "The region where a relay saves energy over a direct link grows as the relay transmitter's Waste Factor falls (Sevim et al., npj Wireless Technology 2025)."
    text: |
      Adding W to the consumption factor gives a link's minimum energy per bit: the non-path power per bit plus ln(2) times the noise spectral density times W, which reduces to Shannon's limit when W = 1 and there is no non-path power. The final stage sets a lower bound on a cascade's W, and over a weak channel a link's W is about the transmitter's W divided by the receiver and channel gains, so a high-gain receiver matters most. A closed-form rule tells when a relay saves energy over a direct link; in free space the useful relay region is an ellipse, and the region grows with relay receiver gain and path loss exponent and shrinks as the relay transmitter's W rises. In the fixed wireless access (FWA) case study, the region shrinks under uplink-heavy traffic and grows under downlink-heavy traffic, and reconfigurable intelligent surfaces fit the model as passive relays ([Sevim et al., npj Wireless Technology 2025](https://doi.org/10.1038/s44459-025-00001-2)).
  - title: "Circuits and links"
    image: "/assets/images/projects/waste-factor/homodyne-transmitter.png"
    caption: "The homodyne transmitter used to show that the amplifier nearest the sink dominates W (Rappaport, Ying and Shakya, Microwave Journal 2024)."
    text: |
      In a homodyne transmitter, halving the RF amplifier's efficiency from 52% to 26% raises W from 2.20 (3.42 dB) to 4.12 (6.15 dB), while in a second design halving the baseband amplifier's efficiency changes W by only 0.09 dB. In a transmitter–channel–receiver link with 80 dB channel loss, raising receiver gain from 60 to 70 dB lowers the system Waste Figure by about 10 dB, doubling transmitter efficiency lowers it by 3 dB, and a 25% more efficient receiver lowers it by only 0.02 dB. Devices with time-varying power states use a time-averaged W ([Rappaport, Ying & Shakya, Microwave Journal 2024](https://wireless.engineering.nyu.edu/wp-content/uploads/2024/05/5M31-FINALsm2.pdf)).
  - title: "Millimeter wave vs. sub-terahertz"
    image: "/assets/images/projects/waste-factor/cef-vs-bandwidth-downlink.png"
    caption: "In the downlink, a 140 GHz system beats a 28 GHz, 400 MHz system in bits per joule at bandwidths as low as 1 GHz (Kanhere et al., IEEE Wireless Commun. 2022)."
    text: |
      The consumption efficiency factor (CEF), maximum data rate per watt consumed, is computed from W. For the same antenna aperture, sub-THz arrays have more gain and need less RF power for the same SNR: over a 100 m line-of-sight downlink, a 140 GHz system with 4 GHz bandwidth draws 24.88 W against 4.95 W for a 28 GHz system with 400 MHz, but delivers 2.18 against 0.99 Gb/J. At 20 dB SNR, sub-THz wins above 950 MHz of bandwidth in the downlink and 3.25 GHz in the uplink, a 7%-efficient sub-THz power amplifier matches a 20%-efficient mmWave one, and shrinking cells helps down to an optimal 65 m radius, where inter-cell interference takes over ([Kanhere et al., IEEE Wireless Commun. 2022](https://ieeexplore.ieee.org/document/9864328)). At 28 and 142 GHz, CEF is most sensitive to phase-shifter insertion loss, more so in the uplink, and with more users the 142 GHz uplink stays the most efficient ([Ying et al., GLOBECOM 2023](https://ieeexplore.ieee.org/document/10436843)).
  - title: "From consumption factor to Waste Factor"
    image: "/assets/images/projects/waste-factor/cascade-equations.png"
    caption: "Friis's 1944 cascade noise factor (top) and the cascade Waste Factor (bottom) share one form, but W is referred to the output (Ying et al., IEEE GLOBECOM 2023)."
    text: |
      Murdock and Rappaport defined the consumption factor (CF), the maximum data rate per watt consumed, by splitting power into on- and off-signal-path parts; the transmitter antenna's efficiency affects CF most, and radios dominated by off-path power gain CF almost linearly with bandwidth ([Murdock & Rappaport, GLOBECOM Workshops 2011](https://ieeexplore.ieee.org/document/6162415)). Their power-efficiency factor extended this to any cascade, set the minimum energy per bit, and showed that whether a relay saves energy depends on the ratio of source and relay transmitter efficiencies ([Murdock & Rappaport, IEEE JSAC 2014](https://ieeexplore.ieee.org/document/6522957)). The theory shows that for a fixed antenna aperture, mmWave and THz bands give more bits per second per watt than sub-6 GHz ([Rappaport et al., IEEE Access 2019](https://ieeexplore.ieee.org/document/8732419)). In 2022, W was named as the reciprocal of the power-efficiency factor ([Kanhere et al., IEEE Wireless Commun. 2022](https://ieeexplore.ieee.org/document/9864328)).
publications:
  - title: "Theoretical foundations of waste factor and waste figure with applications to fixed wireless access and relay systems"
    authors: "N. Sevim, M. Ibrahim, S. Ekin, and T. S. Rappaport"
    venue: "npj Wirel. Technol, 2025"
    url: "https://doi.org/10.1038/s44459-025-00001-2"
  - title: "Waste figure and waste factor: New metrics for evaluating power efficiency in any circuit or cascade"
    authors: "T. S. Rappaport, M. Ying, and D. Shakya"
    venue: "Microwave Journal, 2024"
    url: "https://wireless.engineering.nyu.edu/wp-content/uploads/2024/05/5M31-FINALsm2.pdf"
  - title: "Using Waste Factor to Optimize Energy Efficiency in Multiple - Input Single - Output (MISO) and Multiple - Input Multiple - Output (MIMO) Systems"
    authors: "M. Ying, D. Shakya, and T. S. Rappaport"
    venue: "IEEE GLOBECOM, 2024"
    url: "https://ieeexplore.ieee.org/document/10900955"
  - title: "Waste Factor and Waste Figure: A Unified Theory for Modeling and Analyzing Wasted Power in Radio Access Networks for Improved Sustainability"
    authors: "T. S. Rappaport, M. Ying, N. Piovesan, A. De Domenico, and D. Shakya"
    venue: "IEEE Open Journal of the Communications Society, 2024"
    url: "https://ieeexplore.ieee.org/document/10604822"
  - title: "Waste Factor: A New Metric for Evaluating Power Efficiency in any Cascade"
    authors: "M. Ying, D. Shakya, H. Poddar, and T. S. Rappaport"
    venue: "IEEE GLOBECOM, 2023"
    url: "https://ieeexplore.ieee.org/document/10436843"
  - title: "A power efficiency metric for comparing energy consumption in future wireless networks in the millimeter wave and terahertz bands"
    authors: "O. Kanhere, H. Poddar, Y. Xing, D. Shakya, S. Ju, and T. S. Rappaport"
    venue: "IEEE Wirel. Commun, 2022"
    url: "https://ieeexplore.ieee.org/document/9864328"
  - title: "Wireless Communications and Applications Above 100 GHz: Opportunities and Challenges for 6G and Beyond"
    authors: "T. S. Rappaport, Y. Xing, O. Kanhere, S. Ju, A. Madanayake, S. Mandal, A. Alkhateeb, and G. C. Trichopoulos"
    venue: "IEEE Access, 2019"
    url: "https://ieeexplore.ieee.org/document/8732419"
  - title: "Consumption factor and power efficiency factor: A theory for evaluating the energy efficiency of cascaded communication systems"
    authors: "J. N. Murdock and T. S. Rappaport"
    venue: "IEEE J. Sel. Areas Commun, 2014"
    url: "https://ieeexplore.ieee.org/document/6522957"
  - title: "Consumption factor: A figure of merit for power consumption and energy efficiency in broadband wireless communications"
    authors: "J. N. Murdock and T. S. Rappaport"
    venue: "IEEE GLOBECOM Workshops, 2011"
    url: "https://ieeexplore.ieee.org/document/6162415"
  - title: "Noise Figures of Radio Receivers"
    authors: "H. T. Friis"
    venue: "Proc. IRE, 1944"
    url: "https://ieeexplore.ieee.org/document/1695024"
---

**Focus:** one metric, the **Waste Factor (W)**, that shows where power is wasted in any communication system, from a single circuit to a full network. The project defines W, extends it to MIMO arrays, radio access networks, relays, fixed wireless access and data centers, and uses it to compare frequency bands.

1. **Why a new metric**
2. **Definition, after Friis's 1944 noise figure**
3. **MISO, SIMO and MIMO**
4. **Data centers**
5. **Radio units and standard metrics**
6. **Distributed MU-MIMO across bands**
7. **RAN design and operation**
8. **Relays and fixed wireless access**
9. **Circuits and links**
10. **Millimeter wave vs. sub-terahertz**
11. **From consumption factor to Waste Factor**
