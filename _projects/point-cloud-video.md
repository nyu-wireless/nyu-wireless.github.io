---
title: "Coding and Streaming of Point Cloud Video"
image: "/assets/images/projects/point-cloud-video/banner.jpg"
image_caption: "A dancer on a multi-camera volumetric capture stage, with the live 3D capture shown on the monitor in front."
faculty:
  - name: "Yong Liu"
    url: "https://engineering.nyu.edu/faculty/yong-liu"
  - name: "Yao Wang"
    url: "https://wp.nyu.edu/videolab/"
  - name: "R. Luke DuBois"
    url: "https://engineering.nyu.edu/faculty/r-luke-dubois"
  - name: "Todd Bryant"
    url: "https://engineering.nyu.edu/faculty/todd-bryant"
students:
  - name: "Tingyu Fan"
  - name: "Ran Gong"
  - name: "Yueyu Hu"
    url: "https://huzi96.github.io/"
  - name: "Chen Li"
  - name: "Tongyu Zong"
  - name: "Mingjian Li"
    url: "https://limjiannn.com/"
  - name: "Shihang Wei"
    url: "https://shihangvicwei.github.io/portfolio/"
  - name: "Reese Anspaugh"
  - name: "Moira Zhang"
  - name: "Adi Somaiah"
  - name: "Claudia Cerdas Vega"
  - name: "Marilyn Fang"
keywords: ["Point cloud video", "Volumetric video streaming", "3D Gaussian splatting", "Learned compression", "Field-of-view prediction", "Dance education"]
sections:
  - title: "Coding and rendering point cloud video"
    image: "/assets/images/projects/point-cloud-video/coding-pipeline.jpg"
    caption: "Point cloud video is coded as a geometry octree with scalable latent features, which a network decodes into 3D Gaussians for rendering (NYU Video Lab)."
    text: |
      Each frame is coded as an octree for geometry plus **scalable latent features**, so a receiver can decode at the quality its bandwidth allows. A feed-forward network, P2ENet, turns the decoded points into 3D Gaussians that render in real time on a GPU ([Hu et al., CVPRW 2024](https://arxiv.org/abs/2409.16504)). Bits-to-Photon trains compression and rendering end to end, so bits go where they most improve the rendered image ([Hu et al., ICIP 2025](https://arxiv.org/abs/2406.05915)). Follow-on work adds temporal prediction between frames (U-Motion), textured surfel octrees (TeSO) and multi-resolution Gaussian decoding (SplatTree).
  - title: "DanceNet3D dataset"
    image: "/assets/images/projects/point-cloud-video/dancenet3d-frames.jpg"
    caption: "Frames from two DanceNet3D sequences, rendered from 3D Gaussian splatting reconstructions (DanceNet3D)."
    text: |
      [**DanceNet3D**](https://nyuvideolab.github.io/DanceNet3D/) is a 3D dance dataset with multi-view video of each performance and a 3D Gaussian splatting reconstruction of every frame, for research on 3D human rendering, compression and dance analysis. The dataset paper received the **Best Paper Award** at the 3DMV Workshop at CVPR 2026 ([Wei, Li et al., CVPRW 2026](https://openaccess.thecvf.com/content/CVPR2026W/3DMV/papers/Wei_DanceNet3D_A_3D_Dance_Dataset_with_Multi-View_Videos_and_3DGS_CVPRW_2026_paper.pdf)).
  - title: "Streaming to dance students"
    image: "/assets/images/projects/point-cloud-video/mocap-session.jpg"
    caption: "Dancers in motion-capture suits during a capture session."
    text: |
      The project is building a point cloud video streaming testbed and will use it in modern dance education, streaming captures of professional dancers to dance students both on demand and live. It is a collaboration with the Mark Morris Dance Group and NYU Tisch ([NYU Tandon news](https://engineering.nyu.edu/news/nyu-tandon-cuts-rug-new-3d-video-technology)).
publications:
  - title: "DanceNet3D: A 3D Dance Dataset with Multi-View Videos and 3DGS Reconstructions"
    authors: "S. Wei, M. Li, R. Gong, Y. Hu, Y. Wang"
    venue: "CVPR Workshops (3DMV), 2026 (Best Paper Award)"
    url: "https://openaccess.thecvf.com/content/CVPR2026W/3DMV/papers/Wei_DanceNet3D_A_3D_Dance_Dataset_with_Multi-View_Videos_and_3DGS_CVPRW_2026_paper.pdf"
  - title: "SplatTree: Voxel-Based Multi-Resolution Decoding for Feed-Forward 3D Gaussian Generation"
    authors: "R. Gong, Z. Ren, T. Fan, Y. Hu, Y. Wang"
    venue: "CVPR Workshops (3DMV), 2026"
    url: "https://openaccess.thecvf.com/content/CVPR2026W/3DMV/html/Gong_SplatTree_Voxel-Based_Multi-Resolution_Decoding_for_Feed-Forward_3D_Gaussian_Generation_CVPRW_2026_paper.html"
  - title: "TeSO: Representing and Compressing 3D Point Cloud Scenes with Textured Surfel Octree"
    authors: "Y. Hu, R. Gong, T. Fan, Y. Wang"
    venue: "arXiv:2508.07083, 2025"
    url: "https://arxiv.org/abs/2508.07083"
  - title: "Progressive Frame Patching for FoV-based Point Cloud Video Streaming"
    authors: "T. Zong, Y. Mao, C. Li, Y. Liu, Y. Wang"
    venue: "IEEE Transactions on Multimedia, 2025"
    url: "https://arxiv.org/abs/2303.08336"
  - title: "Spatial Visibility and Temporal Dynamics: Rethinking Field of View Prediction in Adaptive Point Cloud Video Streaming"
    authors: "C. Li, T. Zong, Y. Hu, Y. Liu, Y. Wang"
    venue: "ACM Multimedia Systems Conference (MMSys), 2025"
    url: "https://arxiv.org/abs/2409.18236"
  - title: "Bits-to-Photon: End-to-End Learned Scalable Point Cloud Compression for Direct Rendering"
    authors: "Y. Hu, R. Gong, Y. Wang"
    venue: "IEEE ICIP, 2025"
    url: "https://arxiv.org/abs/2406.05915"
  - title: "U-Motion: Learned Point Cloud Video Compression with U-Structured Temporal Context Generation"
    authors: "T. Fan, Y. Hu, R. Gong, Y. Wang"
    venue: "arXiv:2411.14501, 2024"
    url: "https://arxiv.org/abs/2411.14501"
  - title: "Low Latency Point Cloud Rendering with Learned Splatting"
    authors: "Y. Hu, R. Gong, Q. Sun, Y. Wang"
    venue: "CVPR Workshops (AIS), 2024"
    url: "https://arxiv.org/abs/2409.16504"
---

**Point cloud video** captures a scene in 3D, so a viewer can move around a performer and watch from any angle. It needs far more bandwidth than 2D video and lower latency, and decoding and rendering it is computationally heavy for both the sender and the viewer. This NSF-funded project designs coding, streaming and edge processing together so that point cloud video can be streamed to ordinary Internet-connected devices.

The project has four thrusts: **learned point cloud video coding** that adapts to the available rate and the viewer's field of view; **progressive streaming** that refines each region of the predicted field of view as its playback time approaches; edge caching that works with edge-based post-processing; and a streaming testbed used for **modern dance education**. The team also released DanceNet3D, a multi-view 3D dance dataset.
