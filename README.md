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
| 00 | Cover | Landsat 9 sweeps the town from true color to near-infrared false color; the six highlights at a glance |
| 01 | What is GeoAI | Data layers, a vision encoder and a transformer with live attention |
| 02 | Highlight 1 · Segment Anything | Point and text prompts (SAM 3) |
| 03 | Highlight 2 · Earth embeddings | Map, similarity search, classification and change detection |
| 04 | Highlight 3 · H3 hexagons | A day of ride demand; equal-distance neighbors vs. squares |
| 05 | Case study: Springfield commuting | Real 2022 LODES commutes over Ozarks relief, embedding scores on 1,431 H3 cells, and spatially blocked cross-validation ([Springfield-flow](https://github.com/ShaneM73/Springfield-flow)) |
| 06 | Highlight 4 · Digital twin | Digital-twin flood forecast with an uncertainty band |
| 07 | Side story to highlight 4 · Reality capture | Photogrammetry, LiDAR, NeRF, Gaussian splats and hybrids on one scene |
| 08 | Highlight 5 · GIS agents | An LLM agent runs a five-step flood-exposure analysis |
| 09 | Highlight 6 · Cloud and open data | Cloud Optimized GeoTIFF tiles vs. downloading the whole file |
| 10 | Careers | BLS outlook and a skill map |
| 11 | Takeaways | Links to the tools in the talk |

The town, sensors and data in the 3D scenes are illustrative, except chapter 05, which uses real Springfield data; each chapter's footnote cites its real sources.

## Live demo

- `demo/gisday_live_demo.js`: Earth Engine script for the live demo with real AlphaEarth embeddings around Springfield, MO. Paste it into the [Earth Engine Code Editor](https://code.earthengine.google.com/) and press Run.

## Gaussian splatting demos

Real captures to pair with chapter 07 (reality capture). Both open in the browser and need an internet connection.

- [Esri ArcGIS Maps SDK for JavaScript: GaussianSplatLayer sample](https://developers.arcgis.com/javascript/latest/sample-code/layers-gaussiansplatlayer/): an industrial area in Vietnam, produced with ArcGIS Reality, shown as a splat layer on a 3D globe over satellite imagery and terrain.
- [Get lost in the alleys of historical Trogir, Croatia](https://superspl.at/scene/14bac5b2) on SuperSplat: a street-level capture of a UNESCO old town, 45.8 million Gaussians, by Paolo Tosolini with an XGRIDS PortalCam (CC BY 4.0).

## License

MIT. three.js r128 is © three.js authors, MIT.
