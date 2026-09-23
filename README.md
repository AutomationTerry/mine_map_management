# MineLife: Lifelong Map Management for Underground Mining

> Lifecycle-based underground mine map management through initialization, incremental updating, and **obsolete structure identification**.

This repository contains the source code, dataset, and project page for MineLife, a lifelong map management framework for underground mining. It supports map initialization, incremental updating, and obsolete structure identification throughout evolving mining operations.

**Project page:** [automationterry.github.io/mine_map_management](https://automationterry.github.io/mine_map_management/)

## Overview

Maps of underground mines need to be continuously updated and maintained as mining operations progress to support reliable equipment localization, path planning, and task scheduling. The lack of absolute positioning references and highly repetitive tunnel structures makes reliable long-term mapping particularly challenging. MineLife performs map management through two complementary processes:

- **MSGR** — *Mine Semantic-Guided Registration*: incorporates semantic priors with non-rigid refinement to improve short-term incremental registration in geometrically degenerate mine environments.
- **DLGN** — *Dual-Gated Lifecycle Graph Network*: evaluates tunnel states through spatial observability and temporal evolution, distinguishing persistent obsolete structures from temporarily unobserved regions.

The dataset is a long-sequence point cloud collection captured at the 1300 sublevel IV stope of the Jinchuan Nickel-Cobalt No. 3 Mining Area over five months (46 continuous 3D map sequences), covering the full roadway life cycle from initial excavation to final backfilling.

## Repository Structure

```
.
├── docs/          # Project page (GitHub Pages source)
│   ├── index.html
│   ├── style.css
│   ├── main.js
│   └── ... (figures and demo video)
├── code/          # Source code (to be added)
├── data/          # Dataset (to be added)
└── README.md
```

## Citation

If you find this work useful, please cite:

```bibtex
@inproceedings{minelife2026,
  title     = {MineLife: Lifelong Map Management for Underground Mining},
  author    = {},
  booktitle = {},
  year      = {2026},
}
```

## License

To be determined.
