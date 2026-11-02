---
title: "Geometry of Fixed-Autocorrelation Codes"
image: "/assets/images/projects/fixed-autocorrelation-codes/banner.svg"
image_caption: "Bits choose among conjugate-reciprocal zeros. The resulting Huffman codewords differ, yet all four share one aperiodic autocorrelation."
figures:
  - src: "/assets/images/projects/fixed-autocorrelation-codes/zeros-and-sequences.jpg"
    width: 860
    caption: "Left: conjugate-reciprocal zeros of a code, on circles either side of the unit circle. Right: the corresponding Huffman sequences, drawn as unit vectors in three dimensions. The distances between these points determine how well codewords can be told apart."
faculty:
  - name: "Elza Erkip"
    url: "https://wp.nyu.edu/elza_erkip/"
students:
  - name: "Parker Huggins"
keywords: ["Noncoherent communication", "Aperiodic autocorrelation", "Huffman sequences", "Minimum distance", "Code design"]
publications:
  - title: "On the Distance Properties of Huffman Sequences"
    authors: "P. Huggins, A. Şahin, E. Erkip"
    venue: "Under review"
  - title: "Jutted BMOCZ for Non-Coherent OFDM"
    authors: "P. Huggins, A. Şahin"
    venue: "IEEE Transactions on Wireless Communications, vol. 25, 2026"
    url: "https://ieeexplore.ieee.org/abstract/document/11526940"
---

Emerging wireless applications, such as the Internet of Things, increasingly rely on short, sporadic transmissions. In these settings, training and synchronization take up a sizable fraction of the packet and can even dominate the information being sent. **Noncoherent communication**, where the receiver operates without instantaneous channel state information, is therefore an attractive approach for short packets.

This project studies code design based on **modulation on conjugate-reciprocal zeros** (MOCZ), a noncoherent technique that conveys digital information through the zeros of polynomials. All MOCZ codewords share an identical aperiodic autocorrelation. To understand how this constrains the geometry of the code, we characterize the pairwise distances in arbitrary fixed-autocorrelation codes and derive lower bounds on the minimum distance of codes built from Huffman sequences. The approach exploits the algebraic structure of the polynomial zeros and establishes a relationship with geometrically uniform codes.

The work is a collaboration with Alphan Şahin (University of South Carolina). Code is available for the [distance analysis](https://github.com/parkerkh/Huffman-Distances) and for [Jutted BMOCZ](https://github.com/parkerkh/Jutted-BMOCZ).
