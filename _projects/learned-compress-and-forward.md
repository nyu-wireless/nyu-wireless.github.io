---
title: "Learning-Based Compress-and-Forward for Relay and Diamond Relay Channels"
image: "/assets/images/projects/learned-compress-and-forward/banner.svg"
image_caption: "In compress-and-forward, each relay quantizes its noisy observation with a learned quantizer and forwards the bits over a finite-rate, out-of-band link."
figures:
  - src: "/assets/images/projects/learned-compress-and-forward/relay-mutual-info.png"
    width: 760
    caption: "Relay channel at 3 dB SNR on both links. As the relay rate R grows, learned compress-and-forward with BPSK, 4-PAM and 8-PAM approaches the rate each modulation achieves with a perfect relay link (dotted lines). Higher-order modulation narrows the gap to the Gaussian-codebook bound. Data from Özyılkan et al., IEEE JSAC 2025."
  - src: "/assets/images/projects/learned-compress-and-forward/learned-binning.png"
    width: 420
    caption: "Learned relay quantizer and demodulator decisions for 4-PAM at a relay rate of about 1 bit. Horizontal bands are the relay's two indices; each index covers intervals of Y<sub>R</sub> that are far apart (binning). Vertical lines are the destination's decision boundaries (Özyılkan et al., IEEE JSAC 2025)."
  - src: "/assets/images/projects/learned-compress-and-forward/diamond-mutual-info.png"
    width: 760
    caption: "Diamond relay channel at 5 dB SNR to each relay. With two relays that compress separately and no coordination between them, each modulation approaches its rate with perfect relay links (dotted lines) as the average relay rate grows. The other curves are theoretical bounds for the Gaussian diamond relay channel. Data from Aygün, Özyılkan and Erkip, Asilomar 2025."
faculty:
  - name: "Elza Erkip"
    url: "https://wp.nyu.edu/elza_erkip/"
  - name: "Siddharth Garg"
    url: "https://engineering.nyu.edu/faculty/siddharth-garg"
students:
  - name: "Ezgi Özyılkan"
  - name: "Fabrizio Carpi"
  - name: "Ozan Aygün"
keywords: ["Relay channel", "Compress-and-forward", "Diamond relay channel", "Learned quantization", "Wyner–Ziv coding", "Cooperative communication"]
publications:
  - title: "Neural Compress-and-Forward for the Primitive Diamond Relay Channel"
    authors: "O. Aygün, E. Özyılkan, E. Erkip"
    venue: "Asilomar Conference on Signals, Systems, and Computers, 2025"
    url: "https://arxiv.org/abs/2512.07662"
  - title: "Learning-Based Compress-and-Forward Schemes for the Relay Channel"
    authors: "E. Özyılkan, F. Carpi, S. Garg, E. Erkip"
    venue: "IEEE Journal on Selected Areas in Communications, vol. 43, no. 7, 2025"
    url: "https://arxiv.org/abs/2405.09534"
  - title: "Neural Compress-and-Forward for the Relay Channel"
    authors: "E. Özyılkan, F. Carpi, S. Garg, E. Erkip"
    venue: "IEEE SPAWC, 2024"
    url: "https://arxiv.org/abs/2404.14594"
---

Relays are a basic building block of cooperative communication. In **compress-and-forward** (CF), the relay sends the destination a quantized version of what it received. The destination already holds a correlated signal, so the relay can compress far more efficiently with distributed (Wyner–Ziv) coding. Optimal CF relies on asymptotic arguments with Gaussian codebooks, however, and practical CF schemes with finite-order modulation are not well developed.

This project builds CF relaying from the [learned distributed compressors](/projects/neural-distributed-compression/) developed in our group. For the primitive relay channel, with a finite-rate, out-of-band link from the relay to the destination, a learned one-shot Wyner–Ziv quantizer is trained end to end with the demodulator. The learned relay **recovers binning** and operates close to the rate achievable with a Gaussian codebook. We then extend the approach to the **diamond relay channel**, where two relays each compress their observation separately, without coordinating. The destination decodes jointly, and the scheme approaches known theoretical bounds while remaining interpretable.

The work was supported in part by the NYU WIRELESS Industrial Affiliates Program and by NSF.
