# Dual-Gated Semantic Graph Network for Life-Cycle Map Management in Underground Mines

> Builds, updates, and prunes the underground map in real time as mining trucks operate — **without interrupting normal production**.

This repository contains the source code, dataset, and project page for our framework on full life-cycle map management in underground mines. It continuously constructs, incrementally updates, and automatically prunes the global map of obsolete (backfilled) roadway structures while mining operations proceed normally.

**Project page:** [automationterry.github.io/mine_map_management](https://automationterry.github.io/mine_map_management/)

## Overview

Underground mines lack absolute positioning signals (GPS), so autonomous mining trucks depend on high-precision, continuously updatable maps for perception, path planning, and control. Mine roadways are weakly textured, structurally repetitive, and geometrically sparse, making point-cloud registration prone to pose drift; meanwhile, the cyclic "extraction–backfilling" routine continuously reshapes roadways. We propose a graph-based framework with two complementary components:

- **SGGR** — *Semantic-Guided Gaussian Registration*: achieves stable short-term incremental mapping in feature-sparse, degraded mining environments.
- **DGGN** — *Dual-Gated Graph Network*: provides long-term map maintenance by detecting backfilled roadways and dynamically pruning invalid regions.

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
@inproceedings{dualgated2026,
  title     = {Dual-Gated Semantic Graph Network for Life-Cycle Map Management in Underground Mines},
  author    = {},
  booktitle = {},
  year      = {2026},
}
```

## License

To be determined.
