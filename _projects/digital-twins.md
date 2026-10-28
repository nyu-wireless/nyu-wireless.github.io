---
title: "Digital Twins for Next Generation Wireless Networks"
image: "/assets/images/projects/digital-twins/banner.jpg"
image_caption: "LOCUS-DT location maps for three indoor scenes: the digital twin (left) and the likelihood of each position for six test cases, with the true location starred."
figures:
  - src: "/assets/images/projects/digital-twins/baselines.jpg"
    caption: "LOCUS-DT compared with Gaussian and Gaussian-mixture baselines on the same test cases. The digital-twin maps follow the room geometry and can show several likely regions (Lei, Bomfin, Chafii and Rangan, 2026)."
faculty:
  - name: "Marwa Chafii"
    url: "https://nyuad.nyu.edu/en/academics/divisions/engineering/faculty/marwa-chafii.html"
keywords: ["Digital twins", "Localization", "Integrated sensing and communications", "Upper mid-band (FR3)", "6G"]
publications:
  - title: "LOCUS-DT: Localization via Observation-Conditioned Uncertainty Scoring with Digital Twins"
    authors: "H. Lei, R. Bomfin, M. Chafii, S. Rangan"
    venue: "arXiv preprint, 2026"
    url: "https://arxiv.org/abs/2608.00406"
  - title: "From Coverage to Sensing: ISAC Meets FR3"
    authors: "A. Bazzi, F. Gast, F. Liu, S. Jin, G. Fettweis, M. Chafii"
    venue: "IEEE Communications Magazine, 2026"
    url: "https://doi.org/10.1109/MCOM.001.2500787"
---

We are exploring **digital twins**: virtual replicas of real environments that let us test and train new sensing and communication techniques safely, without disrupting live networks. To be trustworthy, these virtual models must be carefully calibrated against real-world measurements, especially in the new frequency bands planned for 6G, where little real data exists yet.

Building on this idea, we developed a method that uses a digital twin of a known indoor space to **locate a device by comparing what it actually receives with what the virtual model predicts**, and it works even in rooms it was never trained on. Rather than settling on a single guess, the method produces a map of all the likely locations. This is valuable in cluttered indoor spaces, where signals bounce off walls and objects and several positions can look equally plausible.
