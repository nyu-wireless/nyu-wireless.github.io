---
title: "Neural Distributed Compression"
image: "/assets/images/projects/neural-distributed-compression/banner.svg"
image_caption: "Wyner–Ziv compression: the decoder alone sees correlated side information. Learned compressors discover binning, reusing one index on intervals far apart."
figures:
  - src: "/assets/images/projects/neural-distributed-compression/rate-distortion.png"
    width: 760
    caption: "Rate–distortion for a Laplacian source whose sign is known at the decoder. Neural transform coding, even when given the side information, stays close to the optimal quantizer that ignores it. The learned Wyner–Ziv compressor reaches the optimal scalar quantizer with side information. Data from Özyılkan, Ballé and Erkip, IEEE JSAIT 2024."
  - src: "/assets/images/projects/neural-distributed-compression/learned-binning.png"
    width: 520
    caption: "Learned compressor for a Gaussian source with correlated side information y. Colored bands are the quantization regions, one color per index; each curve is the decoder's estimate for one index as a function of y. The same index is reused on intervals far apart, the binning used in information-theoretic proofs (Özyılkan, Ballé and Erkip, IEEE JSAIT 2024)."
faculty:
  - name: "Elza Erkip"
    url: "https://wp.nyu.edu/elza_erkip/"
students:
  - name: "Ezgi Özyılkan"
keywords: ["Distributed source coding", "Wyner–Ziv coding", "Learned compression", "Binning", "Interpretable machine learning"]
publications:
  - title: "Breaking Smoothness: The Struggles of Neural Compressors with Discontinuous Mappings"
    authors: "E. Özyılkan, J. Ballé, S. Bhadane, A. B. Wagner, E. Erkip"
    venue: "NeurIPS Workshop on Machine Learning and Compression, 2024"
    url: "https://openreview.net/forum?id=qcM1fkFj3Y"
  - title: "Neural Distributed Compressor Discovers Binning"
    authors: "E. Özyılkan, J. Ballé, E. Erkip"
    venue: "IEEE Journal on Selected Areas in Information Theory, 2024"
    url: "https://doi.org/10.1109/JSAIT.2024.3393429"
  - title: "Robust Distributed Compression with Learned Heegard–Berger Scheme"
    authors: "E. Taşçı, E. Özyılkan, O. K. Ülger, E. Erkip"
    venue: "IEEE ISIT Workshops, 2024"
    url: "https://arxiv.org/abs/2403.08411"
  - title: "Distributed Deep Joint Source-Channel Coding with Decoder-Only Side Information"
    authors: "S. F. Yilmaz, E. Özyılkan, D. Gündüz, E. Erkip"
    venue: "IEEE ICMLCN, 2024"
    url: "https://doi.org/10.1109/ICMLCN59089.2024.10625214"
  - title: "Distributed Compression in the Era of Machine Learning: A Review of Recent Advances"
    authors: "E. Özyılkan, E. Erkip"
    venue: "CISS, 2024"
    url: "https://arxiv.org/abs/2402.07997"
  - title: "Learned Wyner–Ziv Compressors Recover Binning"
    authors: "E. Özyılkan, J. Ballé, E. Erkip"
    venue: "IEEE ISIT, 2023"
    url: "https://arxiv.org/abs/2305.04380"
  - title: "Neural Distributed Image Compression with Cross-Attention Feature Alignment"
    authors: "N. Mital, E. Özyılkan, A. Garjani, D. Gündüz"
    venue: "IEEE/CVF WACV, 2023"
    url: "https://arxiv.org/abs/2207.08489"
  - title: "Neural Distributed Image Compression Using Common Information"
    authors: "N. Mital, E. Özyılkan, A. Garjani, D. Gündüz"
    venue: "Data Compression Conference (DCC), 2022"
    url: "https://arxiv.org/abs/2106.11723"
---

Camera arrays, sensor networks and edge devices often compress data that is correlated with data held elsewhere. In the **Wyner–Ziv** setting, the decoder has correlated side information and the encoder does not. Information theory shows that the encoder can still benefit, by **binning**: it assigns the same index to source values that are far apart, and the decoder uses its side information to tell them apart. Practical compressors rarely exploit this, and standard neural compressors do not learn it.

This project develops learned distributed compressors that are both practical and interpretable. Trained only from data, our neural Wyner–Ziv compressors **recover binning** and approach theoretical rate–distortion limits. They outperform neural transform coding that is given the same side information. Related work covers robust compression when the side information may be missing (the Heegard–Berger problem), image compression with side information, and joint source-channel coding. The same ideas power [learned compress-and-forward relaying](/projects/learned-compress-and-forward/).

The Wyner–Ziv work is a collaboration with Johannes Ballé (Google Research) and was supported in part by the Google Research Collabs Program.
