---
title: "AI-Based Integrated Sensing and Communications"
image: "/assets/images/projects/ai-isac/banner.png"
image_caption: "A communication-centric ISAC system: a radar receiver senses multiple targets from the base station's downlink signals."
figures:
  - src: "/assets/images/projects/ai-isac/cnn-estimator.png"
    caption: "A complex-valued neural network predicts the time of arrival, angle of arrival and angle of departure of each path directly from the channel state information (CSI)."
  - src: "/assets/images/projects/ai-isac/csi-world-model.jpg"
    caption: "Learning the radio environment from CSI alone, on four indoor measurement sets: ground-truth user trajectories (top), a PCA baseline (middle), and the learned latent map aligned to physical coordinates (bottom) (Naoumi, Bennis and Chafii, ICC 2026)."
faculty:
  - name: "Marwa Chafii"
    url: "https://nyuad.nyu.edu/en/academics/divisions/engineering/faculty/marwa-chafii.html"
keywords: ["Integrated sensing and communications", "Bistatic sensing", "Complex-valued neural networks", "World models", "6G"]
publications:
  - title: "Structured Latent Dynamics in Wireless CSI via Homomorphic World Models"
    authors: "S. Naoumi, M. Bennis, M. Chafii"
    venue: "IEEE ICC, 2026"
    url: "https://doi.org/10.1109/ICC59461.2026.11587668"
  - title: "High-Resolution Sensing in Communication-Centric ISAC: Deep Learning and Parametric Methods"
    authors: "S. Naoumi, A. Bazzi, R. Bomfin, M. Chafii"
    venue: "IEEE Journal on Selected Areas in Communications, 2025"
    url: "https://arxiv.org/abs/2509.02137"
  - title: "Complex Neural Network Based Joint AoA and AoD Estimation for Bistatic ISAC"
    authors: "S. Naoumi, A. Bazzi, R. Bomfin, M. Chafii"
    venue: "IEEE Journal of Selected Topics in Signal Processing, 2024"
    url: "https://arxiv.org/abs/2404.00582"
  - title: "Deep Learning-Enabled Angle Estimation in Bistatic ISAC Systems"
    authors: "S. Naoumi, A. Bazzi, R. Bomfin, M. Chafii"
    venue: "IEEE Globecom Workshops, 2023"
    url: "https://ieeexplore.ieee.org/document/10464930"
---

Next-generation wireless networks are expected to do more than carry information: they will also act as distributed sensors of their surroundings. Our work shows that ordinary cellular transmissions can be reused for sensing. In a practical bistatic setup, with separate transmitter and receiver units, the system estimates the angles of arrival and departure, the time of arrival and the Doppler shift of each propagation path from the **channel estimates already computed for communication**, with no extra spectrum and no dedicated radar waveform.

The estimators are **neural networks that operate directly on complex-valued channel data**, preserving the amplitude and phase relationships of radio propagation. They learn the nonlinear mapping from channel responses to physical parameters and reach high-resolution accuracy even at low signal-to-noise ratio. Compared with parametric estimators that require costly multidimensional searches, they match or exceed the accuracy at much lower complexity and latency, which makes real-time operation feasible in large MIMO-OFDM systems.

Building on this, we have also explored how AI can learn to anticipate how wireless signals change as users move, without any location labels. Our approach learns a **compact internal map of the radio environment from the signals alone**; this map reflects the users' physical positions and can predict how the signal will evolve along a user's path. On real indoor measurements, it outperformed existing approaches and remained accurate on movement paths it had never seen, laying the groundwork for localization and mobility-aware network management.
