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
  - title: "The problem: clock drift"
    image: "/assets/images/projects/precision-timing/time-drift-free-running.png"
    caption: "PDP peak drift between untethered Rb clocks: about 7000 samples per hour that took about 13 hours of 1 PPS cable training to recover (left), and 44–140 samples per hour after the cable is removed (right) (Shakya et al., GLOBECOM 2023)."
    text: |
      Wideband mmWave and sub-THz channel models need multipath arrival times with sub-nanosecond accuracy. The transmitter and receiver each run from their own rubidium (Rb) atomic clock, and small phase and frequency differences make the clocks drift apart. A sliding correlator stretches time by a factor of 8000, so one power delay profile (PDP) holds 81,880 samples of 50 ps each, and free-running drift of up to 350 ns per hour appears as 2.8 ms per hour. This **time drift** circularly shifts every PDP, which creates false or missed paths when directional measurements are combined into omnidirectional models. A 1 PPS cable locks the clocks in 15–20 minutes, but recovering from a fast drift of about 7000 samples per hour took 10–13 hours of cable training ([Shakya, Poddar & Rappaport, IEEE GLOBECOM 2023](https://ieeexplore.ieee.org/document/10436748)).
  - title: "PTP over Wi-Fi"
    image: "/assets/images/projects/precision-timing/ptp-wifi-timing-chain.png"
    caption: "Each Rb clock references its side of the sounder, and two Raspberry Pi CM4 boards carry 1 PPS timing between them with PTP over a Wi-Fi hotspot (Shakya et al., GLOBECOM 2023)."
    text: |
      Two Raspberry Pi CM4 computers, a master at the transmitter and a slave at the receiver, run IEEE 1588 **Precision Time Protocol (PTP)** over a dedicated Wi-Fi hotspot. The transmitter Rb clock's 1 PPS output disciplines the master; every second, four timestamps (Sync, Follow-up, Delay-request, Delay-reply) give the slave both the clock offset and the link delay, and the slave's 1 PPS output trains the receiver Rb clock. On the NYU WIRELESS 142 GHz sounder this cuts drift to 7.5 ns per hour (60 µs per hour after time dilation), from up to 350 ns per hour without synchronization. PTP sits between NTP (milliseconds) and GPS (tens of nanoseconds) in accuracy, costs less than GPS, and works where GPS coverage is poor ([Shakya, Poddar & Rappaport, IEEE GLOBECOM 2023](https://ieeexplore.ieee.org/document/10436748)).
  - title: "Wi-Fi timing errors and network setup"
    image: "/assets/images/projects/precision-timing/ptp-drift-vs-cable.png"
    caption: "PDP drift with a 1 PPS cable between the Rb clocks (left) and with PTP over Wi-Fi (right), where drift stays near zero for six hours and then reaches about 150 samples per hour (Shakya et al., GLOBECOM 2023)."
    text: |
      Wired PTP is accurate to sub-nanosecond, but the Raspberry Pi's hardware-timestamping network chip serves only its Ethernet port, so PTP over Wi-Fi uses software timestamps. Varying propagation and packet-processing delays on the Wi-Fi link cause timestamp errors of a few microseconds, and motion in the wireless medium changes the accuracy over time. Of four network setups tested, fewer hops gave better sync: 30–40 ms through two bridged routers (3 hops), about 50–80 µs through one router (2 hops), and about 5 µs on the master's own hotspot (1 hop), with Wi-Fi power management turned off. Time dilation relaxes the requirement, so microsecond-level PTP is enough: drift stayed near zero for six hours and then rose to about 150 samples per hour, while a direct 1 PPS cable between the clocks still drifted up to 60 samples per hour ([Shakya, Poddar & Rappaport, IEEE GLOBECOM 2023](https://ieeexplore.ieee.org/document/10436748)).
  - title: "Successive drift correction"
    image: "/assets/images/projects/precision-timing/periodic-drift-correction.png"
    caption: "The same path in three successive sweeps is offset by 937 and 865 samples with PTP alone (left) and aligned after periodic drift correction (right) (Shakya et al., GLOBECOM 2023)."
    text: |
      Even 1 ns matters for channel statistics: at 360 samples per hour, a 3-minute sweep accumulates 18 samples, about 1 ns. After each 360° sweep, the transmitter and receiver return to a reference direction with the strongest path, and the shift of that identical PDP is removed with an opposite circular shift; this keeps residual drift to a few tens of picoseconds per hour and gives sub-nanosecond absolute timing. For moves to new locations, a 15-minute drift-tracking run measures the drift rate, and the PDP is pre-shifted by elapsed time × rate. Unlike ray tracing, drift-tracking logs, mid-measurement clock re-sync, or prior clock-drift modeling, the method runs during measurement with no prerequisites, and it removes the need for ray tracing to synthesize omnidirectional PDPs ([Shakya, Poddar & Rappaport, IEEE GLOBECOM 2023](https://ieeexplore.ieee.org/document/10436748)).
  - title: "Absolute-timing mmWave sounder"
    image: "/assets/images/projects/precision-timing/jsac-absolute-delay-verification.png"
    caption: "Absolute-delay check at 73.5 GHz: line-of-sight and ground-bounce paths measured at 13.40 and 18.60 ns, within 0.023 ns of theory (MacCartney and Rappaport, JSAC 2017)."
    text: |
      Our earlier sounder recorded absolute propagation delay (true time of flight) between untethered carts, because GPS was unreliable in New York City's urban canyons ([MacCartney & Rappaport, IEEE JSAC 2017](https://ieeexplore.ieee.org/document/7887768)). Its sliding-correlator mode gives 1 GHz RF bandwidth, 2 ns resolution and up to 185 dB of measurable path loss, and its real-time spread-spectrum mode takes snapshots every 32.753 µs for Doppler and blockage. Cable-connected, the line-of-sight peak drifted less than 1 ns over 6 hours; untethered, the receiver Rb clock trained on the transmitter 1 PPS for about an hour, then free-ran with 7 ns of drift after 2 hours (1.9 ns RMSE), tracked with reference PDPs every 20–30 minutes and removed in post-processing. Tests at 73.5 GHz matched free-space path loss (path loss exponent 1.99, 0.2 dB standard deviation) and measured line-of-sight and ground-bounce delays within 0.023 ns of theory. In real-time mode, a person walking near either end of a 73 GHz link caused more than 40 dB of shadowing at 0.4 dB/ms, matched by a new double knife-edge diffraction model that includes antenna gains.
  - title: "142 GHz factory measurements"
    image: "/assets/images/projects/precision-timing/factory-142ghz-measurements.jpg"
    caption: "142 GHz measurements in an electronics manufacturing factory with steerable 27 dBi, 8° horn antennas (Ju and Rappaport, ICC 2023)."
    text: |
      With the 142 GHz sliding-correlator sounder, 82 transmitter-receiver locations in four Brooklyn factories were measured over 5–85 m, about 1000 directional PDPs per location and more than 75,000 in total, giving the first indoor-factory path loss models at 142 GHz ([Ju & Rappaport, IEEE ICC 2023](https://ieeexplore.ieee.org/document/10278815)). The omnidirectional non-line-of-sight (NLOS) path loss exponent is 3.1, above the 2.7 of offices and 2.9 of urban streets, and pointing to the strongest NLOS direction lowers the directional exponent from 5.01 to 3.27. A receiver at 0.5 m, as on automated guided vehicles, sees 10.7 dB (LOS) and 6.0 dB (NLOS) more path loss than at 1.5 m. A rotatable 1 m × 1 m metal plate used as a passive reflector adds 0.5–22 dB (mean 6.5 dB) of omnidirectional gain, and cross-polarization discrimination is 27.1 dB in line of sight.
  - title: "140 GHz measurement system"
    image: "/assets/images/projects/precision-timing/140ghz-sounder-block-diagram.png"
    caption: "Block diagram of the 140 GHz sliding-correlator channel sounder with a 2 Gcps PN sequence and 27 dBi, 8° horn antennas (Xing and Rappaport, GLOBECOM 2018)."
    text: |
      The NYU WIRELESS 140 GHz sliding-correlator sounder upconverts a 2 Gcps PN sequence on a 7 GHz IF to 142 GHz, with 4 GHz null-to-null bandwidth, 27 dBi horns with 8° beamwidth on rotating gimbals, 66 dB processing gain and 145 dB measurable dynamic range at 0 dBm transmit power ([Xing & Rappaport, IEEE GLOBECOM 2018](https://ieeexplore.ieee.org/document/8647921)). Two separate Rb clocks synchronize the transmitter and receiver without cables. Free-space tests at 28, 73 and 140 GHz matched Friis's equation (5.85 dB measured vs. 5.66 dB theory between 73 and 140 GHz), so the 1 m close-in path loss model holds above 100 GHz. Penetration losses not previously measured at 140 GHz were 8.24–9.07 dB for 0.6 cm clear glass, 16.2 dB for a glass door and 15.02 dB for 14.5 cm drywall; average glass loss rises from 3.2 dB/cm at 28 GHz to 14 dB/cm at 140 GHz.
  - title: "Omnidirectional patterns from directional scans"
    image: "/assets/images/projects/precision-timing/omni-pattern-synthesis.png"
    caption: "A single narrowbeam horn pattern (top) and the near-flat equivalent pattern from summing nine adjacent narrowbeam pointing angles (bottom) (Sun et al., GLOBECOM 2015)."
    text: |
      Omnidirectional channel models are built by combining many directional measurements, which is why aligned timing across pointing angles matters. Summing received powers over all non-overlapping pointing angles, at half-power-beamwidth steps in azimuth and elevation, gives an equivalent omnidirectional pattern and path loss that do not depend on antenna beamwidth ([Sun, MacCartney, Samimi & Rappaport, IEEE GLOBECOM 2015](https://ieeexplore.ieee.org/document/7417335)). In theory, 3 × 3 narrowbeam pointings differ from one widebeam antenna by only 0.08 dB; in 28 GHz New York City data, full-azimuth narrowbeam and widebeam sweeps agreed within 2.9 dB, with identical path loss exponents. At 73 GHz, the strongest azimuth plane held over 70%, and up to 95%, of the power received across it and its two adjacent elevation planes, so outdoors a scan at the strongest elevation, or a few adjacent ones, is enough when time is limited. Directional horns also extend the measurement range over omnidirectional antennas.
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

**Focus:** keeping the clocks of an untethered transmitter and receiver aligned, so that a channel sounder measures the absolute arrival time of each multipath component with sub-nanosecond accuracy. The same method serves any distributed system that needs a shared time base where GPS is unreliable: distributed MIMO antennas and repeaters, UAVs, robots, data loggers and wireless sensor networks.

1. **The problem: clock drift**
2. **PTP over Wi-Fi**
3. **Wi-Fi timing errors and network setup**
4. **Successive drift correction**
5. **Absolute-timing mmWave sounder**
6. **142 GHz factory measurements**
7. **140 GHz measurement system**
8. **Omnidirectional patterns from directional scans**
