---
title: "Privacy and Security Challenges in Integrated Sensing and Communications"
image: "/assets/images/projects/isac-privacy-security/banner.png"
image_caption: "Secure full-duplex ISAC: the base station serves uplink and downlink users while sensing eavesdroppers that are themselves the radar targets."
figures:
  - src: "/assets/images/projects/isac-privacy-security/transmitter-privacy.png"
    width: 560
    caption: "Transmitter privacy: a reconfigurable intelligent surface (RIS) prevents a malicious sensor from estimating the transmitter&ndash;sensor channel."
  - src: "/assets/images/projects/isac-privacy-security/target-privacy.png"
    width: 560
    caption: "Target privacy: while the transmitter illuminates a target, a malicious sensor should not be able to tell whether the target is present."
faculty:
  - name: "Marwa Chafii"
    url: "https://nyuad.nyu.edu/en/academics/divisions/engineering/faculty/marwa-chafii.html"
keywords: ["Integrated sensing and communications", "Physical layer security", "Privacy", "Full duplex", "Reconfigurable intelligent surfaces"]
publications:
  - title: "Sum Secrecy Rate Maximization for Secure ISAC"
    authors: "A. Boljević, M. Ying, A. Bazzi, T. S. Rappaport, M. Chafii"
    venue: "IEEE Integrated Sensing and Communication Conference (ISAC), 2026 (accepted)"
    url: "https://arxiv.org/abs/2609.14459"
  - title: "Investing Minimum Power in Secure Full Duplex ISAC Systems"
    authors: "A. Bazzi, M. Chafii"
    venue: "IEEE Globecom, 2025"
    url: "https://doi.org/10.1109/GLOBECOM59602.2025.11431758"
  - title: "Beamforming Design for Secure RIS-Enabled ISAC: Passive RIS vs. Active RIS"
    authors: "V. Kumar, M. Chafii"
    venue: "IEEE Transactions on Wireless Communications, 2025"
    url: "https://arxiv.org/abs/2501.19157"
  - title: "Secure Full Duplex Integrated Sensing and Communications"
    authors: "A. Bazzi, M. Chafii"
    venue: "IEEE Transactions on Information Forensics and Security, 2024"
    url: "https://arxiv.org/abs/2312.11367"
---

Integrated sensing and communication (ISAC) is a key enabler of next-generation wireless networks, but combining sensing and communication on one platform creates **new privacy risks for both the transmitter and the sensing targets**. Privacy for the transmitter resembles the problem in conventional communication systems, although sensing constraints make the optimization problems fundamentally different; privacy for sensing targets is entirely new to ISAC. ISAC also raises a **security** problem: when waveforms that carry data are used to sense the environment, that data can leak to the targets.

In this project, we develop optimization-based solutions for physical layer security and privacy in ISAC systems.

- **Transmitter privacy.** A transmitter should be able to communicate without being sensed. Using a reconfigurable intelligent surface (RIS), we prevent a malicious sensor from reliably estimating the transmitter&ndash;sensor channel: the transmit waveform and RIS configuration are designed jointly to guarantee a minimum communication quality of service while maximizing the sensor's channel estimation error, under a transmit power budget.
- **Target privacy.** When the base station illuminates a target, a malicious sensor should not be able to reliably detect whether the target is present.
- **Secure ISAC.** When the communication signal is used for sensing, the target should not be able to decode the communication data. We assess the achievable secrecy rates at minimal power consumption in half-duplex and full-duplex ISAC.
- **Secure full-duplex ISAC with multiple eavesdroppers.** Building on this, we study a base station that serves downlink and uplink users simultaneously while sensing multiple eavesdroppers that are themselves the radar targets and try to intercept both downlink and uplink exchanges. Under fixed power budgets, we maximize the sum secrecy rate across all uplink and downlink users.
