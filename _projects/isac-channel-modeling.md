---
title: "Channel Modeling for Integrated Sensing and Communications"
image: "/assets/images/projects/isac-channel-modeling/banner.jpg"
image_caption: "Propagation conditions for the ISAC channel: line-of-sight and non-line-of-sight paths between the transmitter, the target and the receiver."
figures:
  - src: "/assets/images/projects/isac-channel-modeling/bistatic-geometry.jpg"
    width: 480
    caption: "Measurement configuration: drones, a robotic arm and a quadruped robot are measured at bistatic angles from 10&deg; to 60&deg;."
  - src: "/assets/images/projects/isac-channel-modeling/measurement-setup.jpg"
    width: 640
    caption: "The bistatic measurement setup in an indoor factory environment."
faculty:
  - name: "Marwa Chafii"
    url: "https://nyuad.nyu.edu/en/academics/divisions/engineering/faculty/marwa-chafii.html"
keywords: ["Integrated sensing and communications", "Channel modeling", "Radar cross section", "Channel measurements", "3GPP"]
publications:
  - title: "Indoor Statistical and Deterministic RCS Characterization for ISAC Channel Modeling"
    authors: "A. W. Azim, A. Bazzi, R. Bomfin, N. Giakoumidis, T. S. Rappaport, M. Chafii"
    venue: "IEEE Transactions on Wireless Communications, 2026"
    url: "https://doi.org/10.1109/TWC.2026.3718356"
  - title: "A Framework for Geometry-Based Statistical Channel Modeling in ISAC Systems"
    authors: "A. W. Azim, A. Bazzi, T. S. Rappaport, M. Chafii"
    venue: "IEEE Transactions on Wireless Communications, 2026"
    url: "https://doi.org/10.1109/TWC.2026.3703753"
  - title: "3GPP-Compliant Radar Cross Section Characterization of Indoor Factory Targets"
    authors: "A. W. Azim, A. Bazzi, R. Bomfin, M. Chafii"
    venue: "IEEE Globecom, 2025"
    url: "https://arxiv.org/abs/2505.08754"
---

Integrated sensing and communications (ISAC) uses the same radio signals for communication and for sensing, which creates new challenges for channel modeling. Classical channel models serve communication only and do not explicitly capture how signals interact with sensing targets, so new ISAC channel models are needed. A key element is the **radar cross section (RCS)** of a target: its reflective signature, which depends on its size, material and geometry and determines how detectable it is. Standardized communication models treat all objects as passive reflectors and miss the RCS variations that matter for sensing.

This project develops a channel modeling framework for ISAC, together with the real-world measurements needed to support it in 6G.

- In our first study, we are building a channel modeling framework designed for ISAC. Its core idea is a **"dual-channel" approach** that separates the background channel from the paths that bounce off a sensing target, so the model can represent a target's RCS. The model is geometrically consistent for reliable sensing and supports all standard propagation conditions and system configurations.
- In our second study, we conducted a **measurement campaign at 25&ndash;28 GHz in an indoor factory environment**. We characterized the RCS of typical industrial targets (two drones, a robotic arm and a quadruped robot) in quasi-monostatic and bistatic configurations. Fitting candidate distributions to the measured data, we identified lognormal and gamma (and in some cases Weibull) as the best-fitting models and reported parameters compatible with 3GPP TR 38.901. In a separate indoor campaign, we developed and validated deterministic near-field bistatic RCS models for a canonical planar reflector, capturing how the RCS depends on bistatic angle and range.
