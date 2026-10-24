---
title: "WirelessNerd: Question Answering over Wireless Research and 3GPP Standards"
image: "/assets/images/projects/wirelessnerd/banner.jpg"
image_caption: "A WirelessNerd answer on connectivity in aeronautical ad-hoc networks, with each claim linked to its 3GPP source document."
faculty:
  - name: "Dennis Shasha"
    url: "https://cs.nyu.edu/~shasha/"
keywords: ["Large language models", "Retrieval-augmented generation", "Vector databases", "3GPP standards", "arXiv"]
---

Wireless research and standards work spans thousands of arXiv papers and 3GPP documents: technical documents (TDocs) from the working groups, and the technical specifications and reports (TS/TRs) that come out of them. Finding which document answers a specific technical question is slow, even for experts.

[**WirelessNerd**](https://wirelessnerd.org) is a **language model and vector database system** that answers technical questions from these sources. The user picks a source (arXiv papers, 3GPP TDocs, or 3GPP TS/TRs) and asks a question, such as how TR 38.901 models radar cross section or whether a 6G base station could detect a drone that is not connected to the network. WirelessNerd returns a structured answer with numbered references to the documents it drew on, and the answer can be downloaded as a PDF. The arXiv search is open to everyone; the 3GPP sources are available to NYU WIRELESS industrial affiliates, who log in with a one-time code sent to their company email. Questions and feedback go to Dennis Shasha (shasha@cs.nyu.edu).
