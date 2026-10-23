---
title: "Precision Timing in Channel Sounders and Distributed Systems"
image: "/assets/images/projects/precision-timing/banner.jpg"
image_caption: "Untethered transmitter (TX) and receiver (RX) of the NYU WIRELESS sliding-correlator channel sounder in the lab."
faculty:
  - name: "Theodore (Ted) Rappaport"
    url: "https://wireless.engineering.nyu.edu/tedrappaport/"
  - name: "Dipankar Shakya"
keywords: ["Precision Time Protocol", "Rubidium clocks", "Clock synchronization", "Absolute timing", "Channel sounding", "Sub-THz"]
sections:
  - title: "Clock drift in a 142 GHz sounder"
    image: "/assets/images/projects/precision-timing/time-drift-free-running.png"
    caption: "PDP peak drift between untethered Rb clocks: about 7000 samples per hour that took about 13 hours of 1 PPS cable training to recover (left), and 44–140 samples per hour after the cable is removed (right) (Shakya et al., GLOBECOM 2023)."
    text: |
      The transmitter and receiver each run from their own rubidium (Rb) atomic clock, and small phase and frequency differences make the two clocks drift apart, up to 350 ns per hour when free-running. A sliding correlator stretches time by a factor of 8000, so this **time drift** circularly shifts every power delay profile (PDP) and creates false or missed paths when directional measurements are combined into omnidirectional models. Recovering from a fast drift took 10–13 hours of cable training ([Shakya, Poddar & Rappaport, IEEE GLOBECOM 2023](https://ieeexplore.ieee.org/document/10436748)).
  - title: "PTP over Wi-Fi at 142 GHz"
    image: "/assets/images/projects/precision-timing/ptp-wifi-timing-chain.png"
    caption: "Each Rb clock references its side of the sounder, and two Raspberry Pi CM4 boards carry 1 PPS timing between them with PTP over a Wi-Fi hotspot (Shakya et al., GLOBECOM 2023)."
    text: |
      Two Raspberry Pi CM4 computers, a master at the transmitter and a slave at the receiver, run IEEE 1588 **Precision Time Protocol (PTP)** over a dedicated Wi-Fi hotspot. Every second, four timestamps give the slave the clock offset and link delay, and its one-pulse-per-second (1 PPS) output trains the receiver Rb clock. PTP synchronization cuts the drift to 7.5 ns per hour, from up to 350 ns per hour. PTP sits between network time protocol (NTP, milliseconds) and GPS (tens of nanoseconds) in accuracy and costs less than GPS.
  - title: "Fewer Wi-Fi hops, better sync"
    image: "/assets/images/projects/precision-timing/ptp-drift-vs-cable.png"
    caption: "PDP drift with a 1 PPS cable between the Rb clocks (left) and with PTP over Wi-Fi (right), where drift stays near zero for six hours and then reaches about 150 samples per hour (Shakya et al., GLOBECOM 2023)."
    text: |
      Wi-Fi adds varying propagation and packet-processing delays, so PTP timestamps err by a few microseconds. Of four network setups tested, the single-hop hotspot on the master was best, at about 5 µs, against 30–40 ms through bridged routers. Time dilation makes microsecond-level PTP enough: drift stayed near zero for six hours, then rose to about 150 samples per hour, while a direct 1 PPS cable between the clocks still drifted up to 60 samples per hour.
  - title: "Successive drift correction"
    image: "/assets/images/projects/precision-timing/periodic-drift-correction.png"
    caption: "The same path in three successive sweeps is offset by 937 and 865 samples with PTP alone (left) and aligned after periodic drift correction (right) (Shakya et al., GLOBECOM 2023)."
    text: |
      After each 3-minute, 360° sweep, the transmitter and receiver return to the direction of the strongest path, and the shift of that identical PDP is undone with an opposite circular shift. The successive correction keeps residual drift to a few tens of picoseconds per hour and gives sub-nanosecond absolute timing, applied during measurement and without ray tracing. A 15-minute drift-tracking run handles moves to new locations ([Shakya, Poddar & Rappaport, IEEE GLOBECOM 2023](https://ieeexplore.ieee.org/document/10436748)).
  - title: "Absolute timing at 73 GHz"
    image: "/assets/images/projects/precision-timing/jsac-absolute-delay-verification.png"
    caption: "Absolute-delay check at 73.5 GHz: line-of-sight and ground-bounce paths measured at 13.40 and 18.60 ns, within 0.023 ns of theory (MacCartney and Rappaport, JSAC 2017)."
    text: |
      Our earlier sounder recorded absolute propagation delay between untethered carts, because GPS was unreliable in the urban canyons of New York City ([MacCartney & Rappaport, IEEE JSAC 2017](https://ieeexplore.ieee.org/document/7887768)). The receiver Rb clock trained on the transmitter 1 PPS for about an hour, then free-ran with 7 ns of drift after 2 hours, removed in post-processing. Tests at 73.5 GHz measured line-of-sight and ground-bounce delays within 0.023 ns of theory, with 1 GHz of radio-frequency (RF) bandwidth and up to 185 dB of measurable path loss.
  - title: "Related measurements at 140–142 GHz"
    image: "/assets/images/projects/precision-timing/factory-142ghz-measurements.jpg"
    caption: "142 GHz measurements in an electronics manufacturing factory with steerable 27 dBi, 8° horn antennas (Ju and Rappaport, ICC 2023)."
    text: |
      Absolute timing also underpins the sub-terahertz (sub-THz) sounder and the 142 GHz models built with it. The 140 GHz sounder uses two separate Rb clocks without cables and 4 GHz of bandwidth ([Xing & Rappaport, IEEE GLOBECOM 2018](https://ieeexplore.ieee.org/document/8647921)). The 142 GHz factory campaign recorded more than 75,000 directional PDPs in four factories, giving the first indoor-factory path loss models at 142 GHz ([Ju & Rappaport, IEEE ICC 2023](https://ieeexplore.ieee.org/document/10278815)). Omnidirectional models come from summing directional powers over all pointing angles, a method shown to be independent of antenna beamwidth ([Sun et al., IEEE GLOBECOM 2015](https://ieeexplore.ieee.org/document/7417335)).
publications:
  - title: "A Sub-Terahertz Sliding Correlator Channel Sounder with Absolute Timing using Precision Time Protocol over Wi-Fi"
    authors: "D. Shakya, H. Poddar, and T. S. Rappaport"
    venue: "IEEE GLOBECOM, 2023"
    url: "https://ieeexplore.ieee.org/document/10436748"
  - title: "142 GHz Multipath Propagation Measurements and Path Loss Channel Modeling in Factory Buildings"
    authors: "S. Ju and T. S. Rappaport"
    venue: "IEEE ICC, 2023"
    url: "https://ieeexplore.ieee.org/document/10278815"
  - title: "Propagation Measurement System and Approach at 140 GHz-Moving to 6G and Above 100 GHz"
    authors: "Y. Xing and T. S. Rappaport"
    venue: "IEEE GLOBECOM, 2018"
    url: "https://ieeexplore.ieee.org/document/8647921"
  - title: "A Flexible Millimeter-Wave Channel Sounder With Absolute Timing"
    authors: "G. R. MacCartney and T. S. Rappaport"
    venue: "IEEE Journal on Selected Areas in Communications, 2017"
    url: "https://ieeexplore.ieee.org/document/7887768"
  - title: "Synthesizing Omnidirectional Antenna Patterns, Received Power and Path Loss from Directional Antennas for 5G Millimeter-Wave Communications"
    authors: "S. Sun, G. R. MacCartney, M. K. Samimi, and T. S. Rappaport"
    venue: "IEEE GLOBECOM, 2015"
    url: "https://ieeexplore.ieee.org/document/7417335"
---

**Focus:** wideband channel models need multipath arrival times with sub-nanosecond accuracy, but the free-running clocks of an untethered transmitter and receiver drift apart by up to 350 ns per hour. NYU WIRELESS keeps the two clocks aligned with precision time protocol (PTP) over Wi-Fi and a successive drift correction. The method serves any distributed system that needs a shared time base where GPS is unreliable: distributed multiple-input multiple-output (MIMO) systems, unmanned aerial vehicles (UAVs), robots, data loggers and sensor networks.

1. **Clock drift in a 142 GHz sounder**
2. **PTP over Wi-Fi at 142 GHz**
3. **Fewer Wi-Fi hops, better sync**
4. **Successive drift correction**
5. **Absolute timing at 73 GHz**
6. **Related measurements at 140–142 GHz**
