---
title: "Connected Wearables for People with Blindness and Low-Vision"
award: "NSF Convergence Accelerator &middot; Track H &middot; Award 2345139"
award_url: "https://www.nsf.gov/awardsearch/show-award?AWD_ID=2345139"
video: "/assets/videos/projects/unav.mp4"
video_caption: 'UNav vision-based navigation in action. Video: <a href="https://rizzolabs.org/projects.html">Rizzo Labs</a>.'
figure: "/assets/images/projects/connected-wearables.svg"
figure_caption: "The wearable streams rate-adapted video and voice queries over a 5G link to an edge server, where a vision-language model agent uses spatial memory and maps to return guidance as audio and haptic feedback."
faculty:
  - name: "John-Ross (JR) Rizzo"
    url: "https://engineering.nyu.edu/faculty/john-ross-rizzo"
  - name: "Yao Wang"
    url: "http://wp.nyu.edu/videolab"
  - name: "Sundeep Rangan"
    url: "https://sdrangan.github.io/"
  - name: "Marco Mezzavilla"
    url: "https://www.deib.polimi.it/eng/people/details/2083580"
keywords: ["Assistive technology", "Wearables", "Edge computing", "Adaptive video", "Spatial memory", "Vision-language models"]
publications:
  - title: "5G Edge Vision: Wearable Assistive Technology for People with Blindness and Low Vision"
    authors: "T. Azzino, M. Mezzavilla, S. Rangan, Y. Wang, J.-R. Rizzo"
    venue: "IEEE WCNC, 2024"
    url: "https://doi.org/10.1109/WCNC57260.2024.10570607"
  - title: "A Multi-Modal Foundation Model to Assist People with Blindness and Low Vision in Environmental Interaction"
    authors: "Y. Hao, F. Yang, H. Huang, S. Yuan, S. Rangan, J.-R. Rizzo, Y. Wang, Y. Fang"
    venue: "Journal of Imaging, vol. 10, no. 5, 2024"
    url: "https://doi.org/10.3390/jimaging10050103"
  - title: "Network-Aware 5G Edge Computing for Object Detection: Augmenting Wearables to “See” More, Farther and Faster"
    authors: "Z. Yuan, T. Azzino, Y. Hao, Y. Lyu, H. Pei, A. Boldini, M. Mezzavilla, M. Beheshti, M. Porfiri, T. E. Hudson, W. Seiple, Y. Fang, S. Rangan, Y. Wang, J.-R. Rizzo"
    venue: "IEEE Access, vol. 10, 2022"
    url: "https://ieeexplore.ieee.org/abstract/document/9730919"
---

Tens of millions of people worldwide live with blindness, and many more with low vision. Wearable assistants with cameras, microphones and inertial sensors can help them navigate, avoid obstacles and understand their surroundings. But the most capable perception and reasoning models, including large vision-language models, are far too heavy to run on a discreet, battery-powered wearable.

This project, a collaboration with [Rizzo Labs](https://rizzolabs.org/projects.html) at NYU Langone, **connects the wearable to AI services at the network edge**. The wearable runs fast, local perception for time-critical alerts and streams video, sensor data and voice queries over a 5G link to an edge server. There, a vision-language model agent draws on a **spatial memory** of what the user has seen and on **maps** of the environment, building on the [UNav](https://arxiv.org/abs/2209.11336) vision-based navigation system, to answer questions, give directions and describe the scene. Responses come back as audio and haptic feedback.

The wireless link is central to the design. Camera video needs high uplink bandwidth, while collision avoidance and conversation need low latency, and both must hold up as the user moves through buildings and city streets. The server continuously **estimates the link rate** and feeds it back so the wearable can adapt its video to what the channel can carry.
