---
title: "THz Measurement Facility (THz Lab)"
image: "/assets/images/projects/thz-lab/banner.jpg"
image_caption: "Two of the world's first four-port probe stations in the THz Lab: FormFactor with angled positioners (left) and MPI with flat positioners (right)."
faculty:
  - name: "Theodore (Ted) Rappaport"
    url: "https://wireless.engineering.nyu.edu/tedrappaport/"
  - name: "Davood Shahrjerdi"
    url: "https://engineering.nyu.edu/faculty/davood-shahrjerdi"
  - name: "Michael Knox"
    url: "https://engineering.nyu.edu/faculty/michael-knox"
  - name: "Hamed Rahmani"
    url: "https://wp.nyu.edu/rahmani/"
students:
  - name: "Dipankar Shakya"
  - name: "Ethan Shieh"
  - name: "Mingjun Ying"
keywords: ["Sub-THz and THz measurement", "On-wafer probing", "VNA calibration", "RFIC characterization", "Channel sounding", "Shared facility"]
sections:
  - title: "The facility"
    image: "/assets/images/projects/thz-lab/facility-concept.png"
    caption: "Facility concept proposed to NSF: one multiport network analyzer with frequency extenders and a switching matrix serves probe stations, an antenna chamber and an isolation chamber (Shakya et al., IEEE Microwave Magazine 2024)."
    text: |
      Built with CU Boulder, Florida International University and the University of Nebraska–Lincoln under a US$3 million NSF Major Research Instrumentation grant awarded in 2022, the THz Lab supports RFIC measurements, radio propagation and channel modeling, and metrology and calibration from DC to 500 GHz; its current RF inventory covers DC to 330 GHz ([Shakya et al., IEEE Microwave Magazine 2024](https://ieeexplore.ieee.org/document/10388019)). A Keysight PNA-X with a four-port test set drives Virginia Diodes frequency extenders in six waveguide bands, from 50–75 GHz (WR15) to 330–500 GHz (WR2.2). In the concept proposed to NSF, a switching matrix shares the one analyzer among probe stations, an anechoic antenna chamber and an isolation chamber, so users run separate experiments without tearing down calibrated setups. The first build focuses on the probe stations; later upgrades aim at 1 THz or more.
  - title: "Four-port probe stations"
    image: "/assets/images/projects/thz-lab/four-port-probe-stations.jpg"
    caption: "The FormFactor (left) and MPI (right) four-port probing designs, with probes landing from the East, West, North and South (Shakya et al., IEEE APMC 2025)."
    text: |
      **Two of the world's first four-port probe stations**, designed independently for the lab by MPI Corporation and FormFactor, probe a die from the East, West, North and South at once, so MIMO and multi-band chips, couplers and quadrature mixers give full four-port S-parameters without repositioning probes ([Shakya et al., IEEE APMC 2025](https://ieeexplore.ieee.org/document/11378035)). The FormFactor station builds on its EPS-200 platform, with 45° angled positioners on three sides and a flat North positioner. The MPI station builds on the 200 mm TS200-THZ and mounts any VDI extender directly on its probe in all four directions, with no S-bends or extra waveguide. The stations take wafers up to 200 mm, with extra DC bias probes for active devices.
  - title: "SOLR calibration to 125 GHz on 28 nm CMOS"
    image: "/assets/images/projects/thz-lab/solr-cal-chip.png"
    caption: "Layout of the 4 mm × 4 mm SOLR calibration chip in UMC 28 nm CMOS, with Short, Open and Load standards on each edge and reciprocal Thrus at the corners (Shakya et al., IEEE APMC 2025)."
    text: |
      Orthogonal probes cannot be joined by an ideal Thru, which rules out SOLT and TRL calibration, and earlier on-wafer SOLR for orthogonal ports stayed below 26 GHz. The team taped out a 4 mm × 4 mm Short-Open-Load-Reciprocal standard set in UMC 28 nm CMOS, with four replica sets and arc, diagonal and straight Thrus, and characterized the standards with a virtual multiline TRL ([Shakya et al., IEEE APMC 2025](https://ieeexplore.ieee.org/document/11378035)). HFSS simulations show valid calibration up to 125 GHz (Load |S11| below −15 dB), Open and Short |S11| above −0.18 dB and −0.7 dB up to 170 GHz, and a corrected Thru loss below 1.5 dB. CU Boulder leads further on-wafer standards that suppress coupling between standards ([Shakya et al., IEEE Microwave Magazine 2024](https://ieeexplore.ieee.org/document/10388019)).
  - title: "Circuits measured beyond earlier limits"
    image: "/assets/images/projects/thz-lab/distributed-amplifier.jpg"
    caption: "A Nokia Bell Labs SiGe distributed amplifier measured in the lab from 140 to 220 GHz, with peak gain over 18 dB (Shakya et al., IEEE Microwave Magazine 2024)."
    text: |
      A single-stage, ten-section Nokia Bell Labs distributed amplifier in 130 nm SiGe BiCMOS was measured with WR5.1 extenders from 140 to 220 GHz, past the 170 GHz reached before, showing over 18 dB peak gain and a 1.4 THz gain-bandwidth product ([Shakya et al., IEEE Microwave Magazine 2024](https://ieeexplore.ieee.org/document/10388019)). CU Boulder GaN MMICs in HRL 40 nm, including a W-band balanced power amplifier whose earlier large-signal tests did not reach saturation in the upper band, are being re-evaluated. The lab also pursues free-space probing, where on-chip antennas replace fragile contact probes, building on a CU Boulder G-band (200–260 GHz) chip with dipole antenna probes that couple to WR4.3 waveguides.
  - title: "Multiuser access and partners"
    image: "/assets/images/projects/thz-lab/channel-sounder-front-ends.png"
    caption: "A channel sounder built from frequency up- and down-converters with high-gain horn antennas, the type of front end the lab loans to remote collaborators (Shakya et al., IEEE Microwave Magazine 2024)."
    text: |
      Registered partners and collaborators get **no-cost access**, by visiting or by borrowing frequency extenders, converters and antennas; borrowers pay two-way shipping and insurance, and all access follows U.S. export-control checks ([Shakya et al., IEEE Microwave Magazine 2024](https://ieeexplore.ieee.org/document/10388019)). Ruggedized VDI converters serve as shippable channel-sounder front ends, with transmit power, path loss and synchronization calibrated before and after transport; a first planned loan sends them to UNL to measure propagation in Nebraska farm fields, and shared use is expected to yield methods to calibrate out unit-to-unit and transport differences. CU Boulder contributes metrology and calibration standards, FIU real-time RFSoC signal processing and a 140 GHz software-defined radio baseband with reusable VHDL blocks, and UNL rural propagation and RIS work, with ETH Zürich's IDEAS group as advisor. Users include the 17 companies supporting NYU WIRELESS and the 8 supporting CU Boulder's RFIC program, plus new THz courses, workshops and summer internships; details are on the [THz Lab website](https://engineering.nyu.edu/thzlab).
  - title: "Projects planned on the facility"
    image: "/assets/images/projects/thz-lab/research-areas-tree.png"
    caption: "Research areas the facility supports, unified by THz metrology, and the projects they spawn (Shakya et al., IEEE Microwave Magazine 2024)."
    text: |
      UNL designs dielectric-metamaterial reconfigurable intelligent surfaces (RIS) with full-wave simulation over 100–500 GHz and 3D-printed prototypes, then tests them in the lab and inside a channel sounder as a second signal source and range extender ([Shakya et al., IEEE Microwave Magazine 2024](https://ieeexplore.ieee.org/document/10388019)). The multiport analyzers support mutual-coupling studies for radio-astronomy focal-plane arrays with 100 or more dual-polarized Vivaldi antennas. Other planned work includes the first multipixel, high-speed, low-noise graphene THz receiver built from hBN-encapsulated graphene, RF safety studies with tissue-mimicking phantoms, and over-the-air tests of phased-array side lobes and out-of-band emissions for spectrum sharing.
  - title: "Spectrum above 100 GHz and next campaigns"
    image: "/assets/images/projects/thz-lab/sub-thz-spectrum.png"
    caption: "ITU allocations from 170 to 350 GHz over atmospheric attenuation, showing the 183 GHz absorption peak and contiguous bands of up to 21 GHz (Rappaport, Humphreys & Nie, npj Wireless Technology 2025)."
    text: |
      The FCC opened 95 GHz to 3 THz in March 2019. A survey of ITU, FCC and ETSI rules identifies candidate 6G bands: 3.1–3.3 GHz, 7.125–8.4 GHz, a 180 GHz short-range "whisper radio" band with 7.8 GHz of spectrum, 209–225 GHz with 17 GHz contiguous, and 275–296 GHz with 21 GHz contiguous and no service allocation yet ([Rappaport, Humphreys & Nie, npj Wireless Technology 2025](https://doi.org/10.1038/s44459-025-00008-9)). For direct-to-device satellites, a 40 MHz beam carries about 120 Mb/s, roughly 500 kb/s per active user in a rural footprint, so more bandwidth is needed. NYU WIRELESS campaigns planned next target 3.7, 180, 220 and 285 GHz.
  - title: "Channel sounder baseband in 65 nm CMOS"
    image: "/assets/images/projects/thz-lab/channel-sounder-evb.jpg"
    caption: "The 7.2 × 5.7 inch evaluation board with the 65 nm CMOS channel sounder IC at its center (Shakya et al., IEEE TCAS-II 2021)."
    text: |
      Earlier NYU WIRELESS work put the sliding-correlator baseband on a 1 mm × 0.66 mm, 65 nm CMOS chip, the first gigabit-per-second channel-sounder baseband in low-cost CMOS, on an evaluation board that works as transmitter or receiver: 1 Gcps PN sequences, 2 GHz null-to-null RF bandwidth, 1 ns multipath resolution, 6 mA at 1.1 V, and an on-board sync output ([Shakya, Wu & Rappaport, IEEE GLOBECOM 2020](https://ieeexplore.ieee.org/document/9322622)). In the 142 GHz sounder it replaced the PXIe baseband chassis, cutting weight by over 40 lb and volume from 18×18×8 in to 7.2×5.7×0.1 in, and measured an antenna cross-polarization discrimination of 27.28 dB (σ = 1.07 dB) ([Shakya et al., IEEE TCAS-II 2021](https://ieeexplore.ieee.org/document/9447829)). The authors estimate sounder system cost falls from hundreds of thousands to a few thousand dollars.
  - title: "Energy per bit above 100 GHz"
    image: "/assets/images/projects/thz-lab/cef-vs-bandwidth.png"
    caption: "Downlink bits per joule of a 140 GHz system versus bandwidth, compared with a 28 GHz, 400 MHz system (dashed) (Kanhere et al., IEEE Wireless Communications 2022)."
    text: |
      Using the power waste factor and the consumption efficiency factor (CEF, bits per joule), a 140 GHz link with 4 GHz of bandwidth was compared with a 28 GHz, 400 MHz link over 100 m with equal antenna apertures ([Kanhere et al., IEEE Wireless Communications 2022](https://ieeexplore.ieee.org/document/9864328)). Line-of-sight downlink power rises from 4.95 W to 24.88 W, but CEF improves from 0.99 to 2.18 Gb/J. The 140 GHz system wins above 950 MHz of bandwidth on the downlink and 3.25 GHz on the uplink, and its power amplifier needs only 7% efficiency to match a 28 GHz downlink using 20%. Shrinking cells raises CEF further.
publications:
  - title: "Four-Port Probe Stations and SOLR Calibration Standard Design up to 125 GHz on 28 nm CMOS"
    authors: "D. Shakya, T. S. Rappaport, E. Shieh, M. E. Knox, H. Rahmani, D. Shahrjerdi, M. Ying, K. Fan, M. Lu, A. Rumiantsev, V. Mallette, G. Fisher, G. De Chirico, P. Ghate, and S. McMahon"
    venue: "IEEE Asia Pacific Microwave Conference, South Korea, 2025"
    url: "https://ieeexplore.ieee.org/document/11378035"
  - title: "Spectrum Opportunities for the Wireless Future: From Direct-to-Device Satellite Applications to 6G Cellular"
    authors: "T. S. Rappaport, T. E. Humphreys, and S. Nie"
    venue: "npj Wireless Technology, 2025"
    url: "https://doi.org/10.1038/s44459-025-00008-9"
  - title: "Exploring Millimeter-Wave and Terahertz Circuits and Systems With a Novel Multiuser Measurement Facility: Multiuser Terahertz Measurement Facility (THz Lab)"
    authors: "D. Shakya, T. S. Rappaport, D. Shahrjerdi, M. E. Knox, S. Nie, A. Madanayake, Z. Popovic, and H. Wang"
    venue: "IEEE Microwave Magazine, 2024"
    url: "https://ieeexplore.ieee.org/document/10388019"
  - title: "A power efficiency metric for comparing energy consumption in future wireless networks in the millimeter wave and terahertz bands"
    authors: "O. Kanhere, H. Poddar, Y. Xing, D. Shakya, S. Ju, and T. S. Rappaport"
    venue: "IEEE Wirel. Commun, 2022"
    url: "https://ieeexplore.ieee.org/document/9864328"
  - title: "A Wideband Sliding Correlation Channel Sounder in 65 nm CMOS: Evaluation Board Performance"
    authors: "D. Shakya, T. Wu, M. E. Knox, and T. S. Rappaport"
    venue: "IEEE Transactions on Circuits and Systems II: Express Briefs, 2021"
    url: "https://ieeexplore.ieee.org/document/9447829"
  - title: "A Wideband Sliding Correlator based Channel Sounder in 65 nm CMOS: An Evaluation Board Design"
    authors: "D. Shakya, T. Wu, and T. S. Rappaport"
    venue: "IEEE GLOBECOM, 2020"
    url: "https://ieeexplore.ieee.org/document/9322622"
---

**Focus:** a shared, multiuser facility at NYU WIRELESS for measuring devices, circuits and radio channels above 100 GHz, where test equipment is costly and usually set up for one kind of measurement.

1. **The facility**
2. **Four-port probe stations**
3. **SOLR calibration to 125 GHz on 28 nm CMOS**
4. **Circuits measured beyond earlier limits**
5. **Multiuser access and partners**
6. **Projects planned on the facility**
7. **Spectrum above 100 GHz and next campaigns**
8. **Channel sounder baseband in 65 nm CMOS**
9. **Energy per bit above 100 GHz**
