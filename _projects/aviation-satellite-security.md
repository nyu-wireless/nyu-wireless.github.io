---
title: "Securing Air-Traffic Surveillance and Satellite-Based Communication"
image: "/assets/images/projects/aviation-satellite-security/banner.svg"
image_caption: "Receivers on the ground and in space can check the position an aircraft reports. A distress beacon can prove its uplink is genuine by appending a timestamp and a message authentication code (MAC)."
figures:
  - src: "/assets/images/projects/aviation-satellite-security/ground-space-mlat.png"
    width: 480
    caption: "Combining space-based and ground receivers extends ADS-B coverage and enables multilateration with both types of receiver in the aircraft's line of sight (Darabseh and Pöpper, DASC 2025)."
  - src: "/assets/images/projects/aviation-satellite-security/receiver-placement.png"
    width: 720
    caption: "Where ADS-B receivers are today. Ground receivers concentrate in Europe, while space receivers are spread across the globe. The placement problem is to add ground sensors where they complement the satellites (Darabseh and Pöpper, DASC 2025)."
  - src: "/assets/images/projects/aviation-satellite-security/iss-experiment.png"
    caption: "A COSPAS-Sarsat beacon message with timestamp and MAC, sent through the amateur radio repeater on the International Space Station. Even when the station was about 2,200 km away, the preamble (red dots) could be found in the noisy received signal and the message validated (Khandker, Jurczok and Pöpper, SpaceSec 2024)."
faculty:
  - name: "Christina Pöpper"
    url: "https://nyuad.nyu.edu/en/academics/divisions/science/faculty/christina-popper.html"
students:
  - name: "Syed Khandker"
  - name: "Ala' Darabseh"
keywords: ["ADS-B security", "Air-traffic surveillance", "Multilateration", "Satellite communication", "COSPAS-SARSAT", "GNSS/GPS spoofing"]
publications:
  - title: "Placement Synergy: Bridging ADS-B Ground and Space Sensors for Secure Wide-Area Multilateration"
    authors: "A. Darabseh, C. Pöpper"
    venue: "Digital Avionics Systems Conference (DASC), 2025"
    url: "https://poepper.net/papers/DASC2025_Darabseh.pdf"
  - title: "COSPAS Search and Rescue Satellite Uplink: A MAC-Based Security Enhancement"
    authors: "S. Khandker, K. Jurczok, C. Pöpper"
    venue: "Workshop on the Security of Space and Satellite Systems (SpaceSec), 2024"
    url: "https://poepper.net/papers/SpaceSec24.pdf"
  - title: "Trust the Crowd: Wireless Witnessing to Detect Attacks on ADS-B-Based Air-Traffic Surveillance"
    authors: "K. Jansen, L. Niu, N. Xue, I. Martinovic, C. Pöpper"
    venue: "NDSS, 2021"
    url: "https://www.ndss-symposium.org/ndss-paper/trust-the-crowd-wireless-witnessing-to-detect-attacks-on-ads-b-based-air-traffic-surveillance/"
---

Aviation and satellite communication systems such as ADS-B and search-and-rescue beacons were designed without strong authentication, so messages can be forged or manipulated. This project develops practical defenses that verify signals using **sensor networks and physical-layer information**.

For ADS-B, multilateration can verify an aircraft's reported position, but it needs at least four receivers to hear each message. We study how to place ground and space-based sensors to get the most security from the fewest sensors. In two test regions, ten optimized ground sensors working with space-based receivers were enough for multilateration. For satellite links, we add **message authentication** to the COSPAS-Sarsat search-and-rescue uplink. The added timestamp and MAC leave the original message intact, so existing receivers can still decode it, and we validated the design in the lab and through the International Space Station. Related earlier work covers detecting GPS spoofing on aerial vehicles.
