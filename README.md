# Introduction to GeoAI · GIS Day 2026

**▶ [Open the interactive presentation](https://shanem73.github.io/GIS-Day-2026/)**

Interactive 3D presentation for GIS Day, Wednesday, November 18, 2026.

**Xin (Shane) Miao, Ph.D.**, Professor, School of Earth, Environment and Sustainability (SEES), Missouri State University

## View

Open `index.html` in a desktop browser with WebGL (Chrome or Edge recommended). It runs offline: three.js and all scenes are inlined. With GitHub Pages enabled (Settings → Pages → `main`, root), the talk is at `https://shanem73.github.io/GIS-Day-2026/`.

- `→` / Space: next chapter · `←`: previous · `F`: fullscreen
- Drag the 3D view to rotate it; each chapter has controls in the right panel.
- Auto-play, sound, and light/dark toggles are at the top right.

## Chapters

| # | Chapter | Interactive demo |
| --- | --- | --- |
| 00 | Cover | Landsat 9 sweeps the town from true color to near-infrared false color |
| 01 | What is GeoAI | Data layers, a vision encoder and a transformer with live attention |
| 02 | Reality capture | Photogrammetry, LiDAR, NeRF, Gaussian splats and hybrids on one scene |
| 03 | Segment Anything | Point and text prompts (SAM 3) |
| 04 | Earth embeddings | Map, similarity search, classification and change detection |
| 05 | H3 hexagons | A day of ride demand; equal-distance neighbors vs. squares |
| 06 | Case study: Springfield commuting | Real 2022 LODES commutes over Ozarks relief, embedding scores on 1,431 H3 cells, and spatially blocked cross-validation ([Springfield-flow](https://github.com/ShaneM73/Springfield-flow)) |
| 07 | Prediction | Digital-twin flood forecast with an uncertainty band |
| 08 | GIS agents | An LLM agent runs a five-step flood-exposure analysis |
| 09 | Cloud | Cloud Optimized GeoTIFF tiles vs. downloading the whole file |
| 10 | Careers | BLS outlook and a skill map |
| 11 | Takeaways | Links to the tools in the talk |

The town, sensors and data in the 3D scenes are illustrative, except chapter 06, which uses real Springfield data; each chapter's footnote cites its real sources.

## Live demo

- `demo/gisday_live_demo.js`: Earth Engine script for the live demo with real AlphaEarth embeddings around Springfield, MO. Paste it into the [Earth Engine Code Editor](https://code.earthengine.google.com/) and press Run.

## License

MIT. three.js r128 is © three.js authors, MIT.
