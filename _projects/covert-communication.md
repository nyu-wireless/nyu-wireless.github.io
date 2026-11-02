---
title: "Covert Communication in the Presence of Legitimate Transmission"
image: "/assets/images/projects/covert-communication/banner.svg"
image_caption: "Tom, a covert transmitter, tries to reach the rogue receiver Eve without being detected by the warden Willie, who is decoding Alice's legitimate transmission at the same time."
figures:
  - src: "/assets/images/projects/covert-communication/covert-rate.png"
    width: 620
    caption: "Achievable covert rate for a hardware Trojan that scales the pilots of a legitimate transmitter operating at 80% of capacity. A positive rate is possible only for a range of pilot scaling and transmit power. With too much scaling, the covert rate falls off, since the attack becomes visible to the legitimate receiver (Bakirtas, Bloch and Erkip, IEEE GLOBECOM 2024)."
faculty:
  - name: "Elza Erkip"
    url: "https://wp.nyu.edu/elza_erkip/"
students:
  - name: "Aritra Roy"
  - name: "Serhat Bakirtas"
keywords: ["Covert communication", "Physical-layer security", "Hardware Trojans", "Pilot attacks", "Channel state information"]
publications:
  - title: "Impact of State Knowledge on Covert Communication in the Presence of Simultaneous Transmission"
    authors: "A. Roy, E. Erkip"
    venue: "Allerton Conference on Communication, Control, and Computing, 2026"
  - title: "Pilot-Attacks Can Enable Positive-Rate Covert Communications of Wireless Hardware Trojans"
    authors: "S. Bakirtas, M. R. Bloch, E. Erkip"
    venue: "IEEE GLOBECOM, 2024"
    url: "https://arxiv.org/abs/2404.09922"
---

Covert communication hides a transmission within the randomness of a wireless channel, so that an adversarial warden cannot detect it. When receiver noise is the only source of randomness, the achievable covert rate goes to zero. Earlier work showed that a **positive covert rate** needs additional uncertainty, such as channel state known at the transmitter, noise variance unknown to the warden, or channel tampering the warden does not observe. For example, a hardware Trojan inside a legitimate transmitter can scale the pilots to corrupt the receiver's channel estimate, then use the resulting mismatch to communicate covertly.

This project asks what happens when a legitimate link is active at the same time. We show that when the legitimate link operates **at capacity**, a positive covert rate is unattainable, even if the covert transmitter has better state or interference knowledge than the legitimate parties. A positive covert rate becomes possible when the covert transmitter has access to channel randomness unknown to the legitimate transmitter.

The pilot-attack work is a collaboration with Matthieu Bloch (Georgia Tech) and was supported in part by NSF.
