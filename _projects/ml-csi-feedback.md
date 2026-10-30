---
title: "Learned CSI Feedback for Massive MIMO"
image: "/assets/images/projects/ml-csi-feedback/banner.svg"
image_caption: "Pilots, user-side encoders and quantizers, and the base station's precoding network are learned jointly, end to end."
figures:
  - src: "/assets/images/projects/ml-csi-feedback/rate-overhead.png"
    width: 760
    caption: "Sum rate versus feedback overhead per user. Over most of the range, the learned precoding-oriented design reaches a higher sum rate for the same number of feedback bits than three alternatives: reconstruction-oriented feedback followed by zero-forcing (ZF), the same followed by maximum ratio transmission (MRT), and an earlier precoding-oriented design (Sohrabi et al., 2021). Data from Carpi et al., ICC 2023."
faculty:
  - name: "Elza Erkip"
    url: "https://wp.nyu.edu/elza_erkip/"
  - name: "Siddharth Garg"
    url: "https://engineering.nyu.edu/faculty/siddharth-garg"
students:
  - name: "Fabrizio Carpi"
keywords: ["Massive MIMO", "CSI feedback", "FDD", "Precoding", "Deep learning", "Task-oriented communication"]
publications:
  - title: "Learned Precoding-Oriented CSI Feedback in Multi-Cell Multi-User MIMO Systems"
    authors: "F. Carpi, S. Venkatesan, J. Du, H. Viswanathan, S. Garg, E. Erkip"
    venue: "IEEE Transactions on Wireless Communications, 2026"
    url: "https://ieeexplore.ieee.org/document/11123644"
  - title: "Precoding-Oriented Massive MIMO CSI Feedback Design"
    authors: "F. Carpi, S. Venkatesan, J. Du, H. Viswanathan, S. Garg, E. Erkip"
    venue: "IEEE ICC, 2023"
    url: "https://arxiv.org/abs/2302.11526"
---

In frequency division duplexing (FDD) massive MIMO systems, the base station cannot infer the downlink channel from the uplink. Each user estimates its channel from downlink pilots and sends channel state information (CSI) back to the base station, which uses it to compute precoders. As arrays grow, this feedback takes up more and more uplink resources. Most designs compress the CSI so that the base station can **reconstruct the channel**, even though the base station only needs it to choose precoders.

This project designs the feedback for the precoding task instead. A deep learning architecture learns the **pilots, the users' encoders and quantizers, and the base station's precoding network** jointly. Training uses a loss that maximizes the users' sum rate while minimizing the number of feedback bits. In simulations, this precoding-oriented design reaches higher sum rates than reconstruction-oriented feedback, especially at low overhead. A journal version extends the design to multi-cell, multi-user MIMO systems.

The work is a collaboration with Sivarama Venkatesan, Jinfeng Du and Harish Viswanathan of Nokia Bell Labs.
