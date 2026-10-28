---
title: "Multi-Band ISAC in the Upper Mid-Band"
image: "/assets/images/projects/multiband-isac-fr3/banner.jpg"
image_caption: "Measurement setup with the NYU WIRELESS Pi-Radio FR3 software-defined radio, an RFSoC 4x2 board, Vivaldi antennas and a rotating receiver platform."
figures:
  - src: "/assets/images/projects/multiband-isac-fr3/localization.png"
    width: 520
    caption: "Bistatic localization of a target from measurements at 6.5, 8.75, 10, 15 and 21.7 GHz."
faculty:
  - name: "Marwa Chafii"
    url: "https://nyuad.nyu.edu/en/academics/divisions/engineering/faculty/marwa-chafii.html"
  - name: "Sundeep Rangan"
    url: "https://sdrangan.github.io/"
  - name: "Aditya Dhananjay"
keywords: ["Integrated sensing and communications", "Upper mid-band (FR3)", "Multi-band sensing", "Channel measurements", "Localization"]
publications:
  - title: "Multi-Band Integrated Sensing and Communication Channel Measurements in the FR3"
    authors: "R. Bomfin, A. Rasteh, M. Kim, H. Park, H. Guo, H. Lee, M. Mezzavilla, S. Rangan, J. Choi, M. Chafii"
    venue: "IEEE ICC, 2026"
    url: "https://doi.org/10.1109/ICC59461.2026.11587310"
  - title: "Compressed Multiband Sensing in FR3 Using Alternating Direction Method of Multipliers"
    authors: "D. Wang, I. Jariwala, A. Bazzi, S. Rangan, T. S. Rappaport, M. Chafii"
    venue: "IEEE WCNC, 2026"
    url: "https://doi.org/10.1109/WCNC65185.2026.11555501"
  - title: "ISAC in FR3: Joint Specular and Dense Multipath Estimation with Multi-Band Experimental Results"
    authors: "R. Bomfin, A. Rasteh, A. Bazzi, H. Guo, H. Lee, M. Mezzavilla, S. Rangan, J. Choi, M. Chafii"
    venue: "IEEE Transactions on Wireless Communications, 2025"
    url: "https://arxiv.org/abs/2510.03055"
  - title: "Multi-Band Channel Sensing in the Upper Mid-Band (FR3)"
    authors: "R. Bomfin, A. Rasteh, A. Bazzi, H. Guo, H. Lee, M. Mezzavilla, S. Rangan, J. Choi, M. Chafii"
    venue: "IEEE Globecom, 2025"
    url: "https://arxiv.org/abs/2411.12888"
  - title: "Cellular Wireless Networks in the Upper Mid-Band"
    authors: "S. Kang, M. Mezzavilla, S. Rangan, A. Madanayake, S. B. Venkatakrishnan, G. Hellbourg, M. Ghosh, H. Rahmani, A. Dhananjay"
    venue: "IEEE Open Journal of the Communications Society, 2024"
    url: "https://ieeexplore.ieee.org/document/10459211"
  - title: "A Frequency Hopping Software-Defined Radio Platform for Communications and Sensing in the Upper Mid-Band"
    authors: "M. Mezzavilla, A. Dhananjay, M. Zappe, S. Rangan"
    venue: "IEEE SPAWC, 2024"
    url: "https://ieeexplore.ieee.org/abstract/document/10694319"
---

Integrated sensing and communications (ISAC) and the upper mid-band, or frequency range 3 (FR3, about 7 to 24 GHz), are two promising directions for future wireless systems. ISAC brings sensing to networks historically designed only for communication, while FR3 offers wide channel diversity and new deployment options. Each strengthens the other: FR3 gives ISAC many degrees of freedom, and ISAC adds new functions that help unlock the band. This project is an **experimental study of the multi-band ISAC channel in FR3** under realistic conditions.

Using the NYU WIRELESS Pi-Radio software-defined radio at 6.5, 8.75, 10, 15 and 21.7 GHz, the study:

- developed a new parameter estimator for ISAC with negligible mobility in the presence of dense multipath component (DMC) clutter;
- used a new ESNR sensing metric to assess the sensing channel;
- identified multi-band tradeoffs and resource allocation strategies;
- resolved angular ambiguity in the higher bands by using the lower-band estimate as a reference;
- achieved **bistatic localization with a root mean squared error of about 0.2 m**, despite a ranging resolution of c/B = 0.62 m and only a 2&times;2 MIMO system.

We also studied how the presence of objects in the environment affects communication performance, finding that some frequency bands offer especially good balances between sensing and communication. In addition, we developed a new method that **combines information from several frequency bands** to locate users and surrounding objects more accurately than conventional approaches.
