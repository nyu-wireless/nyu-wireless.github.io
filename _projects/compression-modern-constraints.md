---
title: "Theoretical Approaches to Compression under Modern Constraints"
image: "/assets/images/projects/compression-modern-constraints/banner.svg"
image_caption: "Modern systems depart from classical source coding in four ways: single-shot operation, sources with memory, distributed side information and multiple decoding tasks."
figures:
  - src: "/assets/images/projects/compression-modern-constraints/entropy-distortion.png"
    width: 760
    caption: "Entropy needed at each distortion for one-shot compression of a uniform source when the decoder has correlated side information (K = 1/α = 32). The achievable curves sit close to the lower bound, and the bounds tighten at higher rates. Data from Ülger and Erkip, ISIT 2024."
faculty:
  - name: "Elza Erkip"
    url: "https://wp.nyu.edu/elza_erkip/"
students:
  - name: "Oğuzhan Kubilay Ülger"
keywords: ["Source coding", "Single-shot compression", "Logarithmic loss", "Wyner–Ziv coding", "Information bottleneck", "Sources with memory"]
publications:
  - title: "On Source Coding for Stationary Sources Under Logarithmic Loss"
    authors: "O. K. Ülger, E. Erkip"
    venue: "IEEE ISIT, 2025"
    url: "https://doi.org/10.1109/ISIT63088.2025.11195659"
  - title: "One-Shot Wyner–Ziv Compression of a Uniform Source"
    authors: "O. K. Ülger, E. Erkip"
    venue: "IEEE ISIT, 2024"
    url: "https://ieeexplore.ieee.org/abstract/document/10619513"
  - title: "Single-Shot Lossy Compression for Joint Inference and Reconstruction"
    authors: "O. K. Ülger, E. Erkip"
    venue: "Allerton Conference on Communication, Control, and Computing, 2023"
    url: "https://ieeexplore.ieee.org/abstract/document/10313437"
---

Classical source coding theory assumes long blocklengths, i.i.d. sources and a decoder whose only job is to reconstruct the data. Autonomous driving, the Internet of Things, distributed sensing and federated learning break these assumptions. Data must be sent under **strict delay constraints**, sources have memory, devices compress correlated data separately, and the receiver may need an inference as well as a reconstruction.

This project extends compression theory to these settings, with an emphasis on **logarithmic loss**, a distortion measure for probabilistic predictions that connects to the information bottleneck framework. For single-shot compression with joint inference and reconstruction, we bound the probability of excess distortion, with an easily computable achievability bound when reconstruction is measured by logarithmic loss. For the one-shot Wyner–Ziv problem, we derive upper and lower bounds on the entropy–distortion function of a uniform source with quantized or noisy side information. Further work studies stationary sources under logarithmic loss.
