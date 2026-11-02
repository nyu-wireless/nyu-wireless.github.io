---
title: "Learned Dirty Paper Coding"
image: "/assets/images/projects/learned-dirty-paper-coding/banner.svg"
image_caption: "The transmitter knows the interference S and the receiver does not. A neural encoder and decoder are trained jointly to communicate despite it."
figures:
  - src: "/assets/images/projects/learned-dirty-paper-coding/ser-qpsk.png"
    width: 760
    caption: "Symbol error rate with Gaussian interference and QPSK messages. Neural DPC has a lower error rate than Tomlinson–Harashima precoding and the Construction A lattice scheme across this range, with the largest gains at low SNR. Models trained with interference power 30 also perform well at lower test powers, approaching the interference-free limit. Data from Özyılkan, Ülger and Erkip, IEEE ITW 2025."
  - src: "/assets/images/projects/learned-dirty-paper-coding/encoder-map.png"
    width: 620
    caption: "Learned encoder for BPSK messages at high SNR. As the channel state varies, each symbol's output follows a sawtooth much like the modulo operation of Tomlinson–Harashima precoding, though shifted (Özyılkan, Ülger and Erkip, IEEE ITW 2025)."
  - src: "/assets/images/projects/learned-dirty-paper-coding/decision-regions.png"
    width: 760
    caption: "Decoder decision regions for QPSK messages, one color per message. With sinusoidal activations (left), the regions form a regular, near-hexagonal tiling. With leaky ReLU activations and all else equal (right), they are irregular (Özyılkan, Ülger and Erkip, IEEE ITW 2025)."
faculty:
  - name: "Elza Erkip"
    url: "https://wp.nyu.edu/elza_erkip/"
students:
  - name: "Ezgi Özyılkan"
  - name: "Oğuzhan Kubilay Ülger"
keywords: ["Dirty paper coding", "Interference pre-cancellation", "Tomlinson–Harashima precoding", "Lattice codes", "Interpretable machine learning"]
publications:
  - title: "Learning to Write on Dirty Paper"
    authors: "E. Özyılkan, O. K. Ülger, E. Erkip"
    venue: "IEEE Information Theory Workshop (ITW), 2025"
    url: "https://arxiv.org/abs/2507.17427"
---

Dirty paper coding (DPC) addresses communication when the transmitter knows the interference in advance and the receiver does not. Costa showed that such interference need not reduce capacity at all, a result central to multi-user MIMO downlinks. Practical schemes, such as **Tomlinson–Harashima precoding** and lattice precoding, rely on specific assumptions about the input, the interference and the channel.

This project replaces those designs with a neural encoder and decoder trained end to end, with no prior knowledge of the channel, interference or input statistics. With sinusoidal activations, the networks **recover modulo-like, lattice-like structure** from data alone. The learned schemes match or beat classical precoding, especially at low SNR, and hold up when the test interference differs from training. The approach builds on our work on [learned binning for distributed compression](/projects/neural-distributed-compression/), the dual problem. [Code is available on GitHub](https://github.com/kubiulger/learned_dirty_paper_coding_ITW2025).

The work was supported in part by NSF.
