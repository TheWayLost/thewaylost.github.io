---
permalink: /
title: "Tianyu Hu"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a third-year undergraduate student ('26) in School of EECS, Peking University. I am also a member of the [**Zhi-Class**](https://zhi-class.ai/), an honors program in Artificial Intelligence at Peking University.

Currently, I am a Research Intern at Dartmouth College, advised by Prof. [Yaoqing Yang](https://yaoqingly.github.io/).

My research interests include:
*   **Interpretability**: Understanding the mechanisms, dynamics, and generalization of Large Language Models (LLMs) and other machine learning models.
*   **AI Safety**: Especially for LLMs and autonomous agents.
*   **Memory Systems**: Developing and analyzing memory systems in LLMs and agents.

## Recent News
<ul>
  <li><b>[05/2025]</b> I will be joining Dartmouth College as a research intern, advised by Prof. <a href="https://yaoqingly.github.io/" target="_blank" rel="noopener noreferrer">Yaoqing Yang</a>.</li>
  <li><b>[01/2025]</b> One paper was accepted to ICLR 2025.</li>
  <li><b>[05/2024]</b> I started a summer internship at GersteinLab, Yale University.</li>
</ul>

## Publications
*   **ChemAgent: Self-updating Memories in Large Language Models Improves Chemical Reasoning**<br>
    Xiangru Tang\*, **Tianyu Hu**\*, Muyang Ye\*, Yanjun Shao\*, Xunjian Yin, Siru Ouyang, Wangchunshu Zhou, Pan Lu, Zhuosheng Zhang, Yilun Zhao, Arman Cohan, Mark Gerstein.  
    *ICLR 2025*  
    "Enable LLMs to continuously improve through experience." <br>
    [<a href="https://arxiv.org/abs/2501.06590" target="_blank">PDF</a>]
    [<a href="javascript:void(0);" onclick="toggleBibtex('chemagent_abs')">Abstract</a>]
    [<a href="javascript:void(0);" onclick="toggleBibtex('chemagent_bib')">BibTeX</a>]
    <div id="chemagent_abs" style="display: none; background-color: #f9f9f9; border: 1px solid #ddd; padding: 10px; margin-top: 5px;">
        <strong>Abstract:</strong> Chemical reasoning usually involves complex, multi-step processes that demand precise calculations, where even minor errors can lead to cascading failures. Furthermore, large language models (LLMs) encounter difficulties handling domain-specific formulas, executing reasoning steps accurately, and integrating code effectively when tackling chemical reasoning tasks. To address these challenges, we present ChemAgent, a novel framework designed to improve the performance of LLMs through a dynamic, self-updating library. This library is developed by decomposing chemical tasks into sub-tasks and compiling these sub-tasks into a structured collection that can be referenced for future queries. Then, when presented with a new problem, ChemAgent retrieves and refines pertinent information from the library, which we call memory, facilitating effective task decomposition and the generation of solutions. Our method designs three types of memory and a library-enhanced reasoning component, enabling LLMs to improve over time through experience. Experimental results on four chemical reasoning datasets from SciBench demonstrate that ChemAgent achieves performance gains of up to 46% (GPT-4), significantly outperforming existing methods. Our findings suggest substantial potential for future applications, including tasks such as drug discovery and materials science.
    </div>
    <div id="chemagent_bib" style="display: none; background-color: #f9f9f9; border: 1px solid #ddd; padding: 10px; margin-top: 5px;">
        <pre>@inproceedings{tang2025chemagent,
  title={ChemAgent: Self-updating Library in Large Language Models Improves Chemical Reasoning},
  author={Tang, Xiangru and Hu, Tianyu and Ye, Muyang and Shao, Yanjun and Yin, Xunjian and Ouyang, Siru and Zhou, Wangchunshu and Lu, Pan and Zhang, Zhuosheng and Zhao, Yilun and others},
  booktitle={The Thirteenth International Conference on Learning Representations}
} </pre>
    </div>