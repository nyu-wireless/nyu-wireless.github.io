---
title: "Security Testing and Analysis of 5G Cellular Networks"
image: "/assets/images/projects/5g-security-testing/banner.svg"
image_caption: "Test cases drawn from the 3GPP specifications run over the air against a real phone in a Faraday cage. Rule-based checks and large language models then evaluate how the phone responded."
figures:
  - src: "/assets/images/projects/5g-security-testing/testbed.png"
    width: 497
    caption: "The ASTRA-5G testbed. A USRP driven by a laptop acts as the 5G base station, with the phone under test and the USRP antenna shielded inside a Faraday cage (Khandker et al., ACM WiSec 2024)."
  - src: "/assets/images/projects/5g-security-testing/llm-accuracy.png"
    width: 680
    caption: "How well large language models assess device security, over 300 test cases. Two human experts reviewed each model's analysis of the over-the-air results. A general-purpose model, GPT-4.1, and a telecom-specific one, TelecomGPT, performed best. Data from Khandker, Kornas and Pöpper, NextG-Sec 2026."
faculty:
  - name: "Christina Pöpper"
    url: "https://nyuad.nyu.edu/en/academics/divisions/science/faculty/christina-popper.html"
students:
  - name: "Syed Khandker"
  - name: "Michele Guerra"
keywords: ["Cellular network security", "5G Standalone", "User equipment testing", "Over-the-air testing", "LLM-assisted security testing"]
publications:
  - title: "AI-Assisted 5G Security Testing: Leveraging LLMs for the Assessment of User Equipment"
    authors: "S. Khandker, Z. Kornas, C. Pöpper"
    venue: "NextG-Sec Workshop (co-located with ACNS), 2026"
    url: "https://poepper.net/papers/NextG-Sec2026.pdf"
  - title: "ASTRA-5G: Automated Over-the-Air Security Testing and Research Architecture for 5G SA Devices"
    authors: "S. Khandker, M. Guerra, E. Bitsikas, R. Piqueras Jover, A. Ranganathan, C. Pöpper"
    venue: "ACM WiSec, 2024"
    url: "https://poepper.net/papers/WiSec24_ASTRA-5G.pdf"
  - title: "Freaky Leaky SMS: Extracting User Locations by Analyzing SMS Timings"
    authors: "E. Bitsikas, T. Schnitzler, C. Pöpper, A. Ranganathan"
    venue: "USENIX Security, 2023"
    url: "https://poepper.net/papers/TimingAttacks_SMS_DeliveryReport_USENIXSec2023.pdf"
---

Cellular networks carry critical communications, yet implementation flaws and misconfigurations can expose users and devices to attacks. Security testing of **5G standalone** devices is still largely manual and labor-intensive. This project develops frameworks to test and analyze the security of operational 5G systems, with a focus on user-side devices.

Our open-source framework, [ASTRA-5G](https://github.com/s21sm/ASTRA-5G), automates the **generation, over-the-air execution and evaluation** of security test cases at the Non-Access Stratum layer. Testing commercial phones revealed issues we reported to their manufacturers, such as the acceptance of arbitrary ABBA values. We have also explored how large language models help assess device security, with the best models reaching about 89% accuracy. The work builds on earlier results on LTE protocol weaknesses, location leakage and abuse of emergency systems, including a study showing that SMS delivery timing can reveal a recipient's location. We are now extending it towards the security of non-terrestrial networks.
