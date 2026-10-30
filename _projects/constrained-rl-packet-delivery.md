---
title: "Constrained Deep Reinforcement Learning for Cost-Efficient and Timely Packet Delivery"
image: "/assets/images/projects/constrained-rl-packet-delivery/banner.svg"
image_caption: "Packets age as they wait in queues and are dropped at their deadline. A centralized RL router and RL schedulers at each node decide where each packet goes."
figures:
  - src: "/assets/images/projects/constrained-rl-packet-delivery/reliability-cost.png"
    caption: "Edge-network simulation with two commodities (traffic flows) and reliability targets of 0.7 and 0.6. CDRL-NC meets both targets at every arrival rate and uses the least resources. Backpressure falls below the commodity-1 target at the highest arrival rate, and both baselines cost more. Data from Aygün et al., Asilomar 2025."
faculty:
  - name: "Elza Erkip"
    url: "https://wp.nyu.edu/elza_erkip/"
students:
  - name: "Ozan Aygün"
keywords: ["Constrained reinforcement learning", "Network control", "Routing and scheduling", "Latency-sensitive applications", "Multi-agent RL"]
publications:
  - title: "A Constrained RL Approach for Cost-Efficient Delivery of Latency-Sensitive Applications"
    authors: "O. Aygün, V. N. Vitale, A. M. Tulino, H. Feng, E. Erkip, J. Llorca"
    venue: "Asilomar Conference on Signals, Systems, and Computers, 2025"
    url: "https://arxiv.org/abs/2603.04353"
---

Real-time interactive services such as extended reality need packets delivered **before strict per-packet deadlines**, and network operators want to do so using as few resources as possible. Stochastic network optimization methods, such as backpressure, give efficient routing and scheduling under *average* delay constraints. They fall short when each packet has its own deadline.

This project formulates minimum-cost, deadline-constrained network control as a **constrained Markov decision process**. Each packet is tracked by its remaining lifetime, and packets that expire are dropped. The resulting method, CDRL-NC, uses constrained deep reinforcement learning with a dual subgradient algorithm. It has a multi-agent design: a **centralized routing agent** and **distributed scheduling agents** at each node. In network simulations, CDRL-NC keeps timely throughput above the target reliability where baselines fall short, at lower resource cost than throughput-maximizing methods.

The work is a collaboration with Antonia Tulino and Jaime Llorca (NYU), Vincenzo Norman Vitale (University of Naples Federico II) and Hao Feng (Intel Labs). It was supported in part by NYU WIRELESS and by the NSF Resilient & Intelligent NextG Systems (RINGS) program.
