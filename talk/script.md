# Introduction to GeoAI: Presentation Script

GIS Day, Wednesday, November 18, 2026. Cues in [brackets] are clicks on the slides.

## Script, part 1

### 00 · Cover (1.5 min)

Good afternoon, everyone, and happy GIS Day. I'm Shane Miao, from the School of Earth, Environment and Sustainability here at Missouri State.

Before I say anything else, look at the screen. That satellite crossing the town is Landsat 9. It sees eleven bands of light, including near-infrared that our eyes can't see. Watch the ground as it passes. In true color, the fields are green. In false color, healthy vegetation turns bright red, because plants reflect near-infrared strongly. Geographers have used that trick for fifty years.

Today I want to show you what happens when we add artificial intelligence to that picture. I'll walk through six ideas that are changing how we read the Earth, and what they mean for your career.

[Press → to go to chapter 01.]

### 01 · What is GeoAI (3 min)

So what is GeoAI? Here's my working definition. GeoAI combines artificial intelligence, especially machine learning and deep learning, with geospatial data and spatial thinking, to extract information, find patterns and make predictions about places.

The 3D model on the screen shows how it fits together. At the bottom are our familiar layers: imagery, elevation, vectors and attributes. Above them sits the model. On the left, a vision encoder cuts the map into small patches and turns each one into a token. Next to them are text tokens, the words of a question like "where is flood risk." A transformer, the same architecture behind today's large language models, lets every token pay attention to every other token. Watch the blue lines: when the word "flood" is asking, it looks hardest at the patches near the river.

What makes it *geo*, though, is that space is part of the model. [Click "Spatial autocorrelation."] Tobler's First Law says near things are more related than distant things. Hot pavement clusters downtown, and the river cools its banks. [Click "Scale."] Change the size of your units and the pattern changes. [Click "Spatial heterogeneity."] And one rule doesn't fit everywhere: north of the river the value rises to the east, south of it to the west. A model that ignores these properties wastes a lot of signal.

[Press →.]

### 02 · Reality capture (4 min)

Before any AI can read the world, we have to capture it. That's reality capture, and it has a long history.

[Click "Photo."] Photogrammetry goes back to 1849, when a French army officer made the first maps from photographs. Today we match features across overlapping photos, solve where every camera stood, and build a dense point cloud.

[Click "LiDAR."] LiDAR came with the laser in 1960. The scanner times millions of light pulses to measure distance directly. The colors show height. It's the most accurate method we have, but it's expensive.

[Click "NeRF."] In 2020, neural radiance fields stored a whole scene inside a neural network. The views look photoreal, but rendering is slow: the network is sampled many times along every pixel's ray.

[Click "Splats."] Then in 2023, 3D Gaussian splatting changed the game. The scene becomes millions of soft, colored blobs. Watch it train: big gray blurry blobs split, shrink and take on true color. And it renders at more than 30 frames per second. It is not a neural network.

[Click "Hybrid."] Here's the catch. Splats win on looks, but in recent studies they trailed LiDAR, and usually photogrammetry, on accuracy. So the industry is moving to hybrids: the splat for the view, LiDAR underneath for the numbers. This facade measures 35 meters on the laser points.

[Press →.]

### 03 · Segment Anything (3 min)

Once we have imagery, we want to pull features out of it. For decades, that meant a student digitizing buildings by hand for days.

Meta's Segment Anything models changed that. [Click the tall tower.] One click, and the model returns the outline. [Click a crop field, then the pond.] Any object, no training on that specific class.

[Click "Text prompt," then "building."] SAM 3, released in November 2025, added text prompts. Type the word "building," and every building in the scene is outlined at once. [Click "crop field."] Same with crop fields.

Open-source tools like samgeo bring this to satellite and drone imagery. What does that mean for you? Digitizing that took days now takes minutes. Your job shifts to checking and labeling what the model found, and deciding whether it's right.

[Press →.]

### 04 · Earth embeddings (3 min + 2 min live demo)

The next idea is subtle but powerful. Google DeepMind's AlphaEarth Foundations model looks at every 10-meter patch of land on Earth, across many satellites and a whole year, and compresses it into just 64 numbers. That list of numbers is called an embedding.

[Stay on "Map."] Here, every cell of our town has its own 64 numbers. I've colored the cells by their three strongest patterns. Notice that crops, water, buildings and parks separate on their own. Nobody labeled anything.

[Click "Similar," then click a building.] Now I click one building, and the model finds every place whose vector is close to it. That's one multiplication per cell. [Click "Classify."] With five labeled examples, every other cell takes the class of its nearest example. No model training. [Click "Change."] And comparing 2023 with 2024, one field south of the river lights up: it became new housing.

This isn't just Google. NASA and IBM released an open model called Prithvi, and there's an open-source one called Clay. It's a whole family.

**[Live demo, 2 min. Switch to the Earth Engine tab.]** Now let me show you this on real data, right here in Springfield. These are the real AlphaEarth embeddings within 20 kilometers of campus. [Point at layer 1.] Farms, forest, water and city separate with no labels. [Click a cornfield.] Every cornfield in the county lights up. [Click Lake Springfield.] Now the water. [Turn on layer 3.] And red shows land that changed between 2017 and 2024, the new subdivisions toward Nixa and Ozark. No model was trained for any of this. That's the shift: from raw pixels to ready-made embeddings.

[Switch back to the slides. Press →.]

### 05 · H3 hexagons (3 min)

Here's a question. Why did Uber tile the entire Earth in hexagons?

Uber needed to price rides and dispatch drivers by measuring supply and demand in small areas. So in 2018 they open-sourced H3, a grid of hexagons covering the planet, at 16 resolutions. Each column here is ride requests in one cell. [Let the day play.] Watch demand move: downtown in the morning rush, campus at midday, the riverfront at night.

Why hexagons? [Click any cell.] Every hexagon's six neighbors sit at exactly the same distance. [Click "Squares," then a cell.] A square has two kinds of neighbors: four at one distance and four at 1.41 times that. That makes smoothing and movement lopsided.

[Click "Coarse," then "Fine."] And because the grid is hierarchical, you can zoom from coarse to fine. Data with messy boundaries, ZIP codes, sensors, GPS points, all land in the same cells and can be joined by ID. H3 is now built into Databricks, Snowflake, DuckDB and ArcGIS Pro. It's where GIS meets data science.

[Press →.]

## Script, part 2

### 06 · Prediction (3.5 min)

So far, everything we've seen maps what already exists. But my definition of GeoAI ended with "make predictions." This is where it gets exciting.

This is a digital twin: a 3D model of a place, connected to live sensors. Here we have a river gauge and a rain gauge, reporting every minute. [Point at the two blue pins.] With the forecast switched on, the model takes terrain, rainfall and the gauge's trend, and asks: where will the water be in six hours, and who lives there?

[Let the forecast clock play.] Watch the river rise. Buildings turn orange when they're at risk and red when they flood. The counter on the right shows how many residents live inside the likely flood extent.

Now look at the chart. The black line is what the gauge has observed. The blue line is the forecast, and the shaded band around it is the range. That band matters. A good forecast gives you a range, not a single line, and planners prepare for the 90th percentile, the likely worst case.

[Drag the rainfall slider up.] More rain, a higher peak, more homes affected.

The same idea works for crop yield, wildfire spread and ride demand by H3 cell. Google's Flood Hub already forecasts river floods up to seven days ahead in many countries.

[Press →.]

### 07 · GIS agents (3.5 min)

So we can capture, segment, embed, organize and predict. What if you could just ask?

That's what a GIS agent does. A large language model turns a plain-language question into a GIS workflow. It chooses the tools, writes the code, runs it and reports back. Researchers at Penn State built one called GIS Copilot right inside QGIS.

Here's the question: "Which neighborhoods have the most people at risk of river flooding?" [Click "Next step" through each step.] First, the agent loads the rivers, elevation and neighborhoods. Then it buffers the river by 150 meters. Then it selects ground less than 12 meters above the river. Then it overlays both with neighborhood population. And finally, it ranks and maps the top three.

The answer appears in seconds. But here's the important part for you. Notice that every step is a classic GIS operation you learn in our courses: buffer, query, overlay. The agent can only be trusted if someone in the room knows whether a 150-meter buffer makes sense, and whether that buffer was in meters or in degrees. Knowing which analysis is right, and checking the code, matters more than knowing where the menu is.

[Press →.]

### 08 · Cloud and open data (2.5 min)

All of this runs on a big shift in infrastructure. Analysis is moving to where the data lives.

Start with the data itself. Landsat and Sentinel imagery is free. NISAR, the NASA and ISRO radar satellite, launched in July 2025. OpenStreetMap and Overture give us open maps of the whole world.

[Click "Download file."] In the old way, to look at one block of downtown, you downloaded the entire image, every level, 85 tiles. [Click "Cloud-optimized," then drag the zoom slider.] With a Cloud Optimized GeoTIFF, your notebook asks for just the four tiles it needs over the web. That's about five percent of the file.

Formats like GeoParquet and Zarr, tools like Google Earth Engine, and fast open-source libraries, some now written in Rust, mean that a laptop and a browser can do what used to need a lab.

[Press →.]

### 09 · Your career (3 min)

So, what does this mean for your career? The good news: according to the Bureau of Labor Statistics, jobs for cartographers and photogrammetrists are projected to grow 7 percent from 2025 to 2035, much faster than average. The median pay was about 81,000 dollars in May 2025. And many GeoAI jobs are also posted as data scientist, remote sensing analyst or software developer.

[Click cells on the skill map.] Here's how I think about the skills. At the center is spatial thinking. Around it are six neighbors, like an H3 cell: Python, remote sensing, machine learning, cloud computing, databases and formats, and cartography and 3D. You don't need to master all of them, but you need range.

If you want to explore where the jobs actually are, I built a 3D map of the U.S. job market. The link is on the right.

[Press →.]

### 10 · Takeaways (2 min)

Let me bring it together. 3D is getting cheap: splats for the look, LiDAR and photogrammetry for the numbers. AI reads the imagery, but you decide what the outline means. Embeddings are replacing raw pixels. Grids like H3 join the world's data. Digital twins forecast, not just map, and a good forecast gives a range. Language is becoming a new interface to GIS. And open data and cloud tools travel with you to any job.

Through all of it, one thing stays at the center: spatial thinking. The tools will keep changing. Your ability to ask the right geographic question, and to tell whether the answer makes sense, is what makes you valuable.

Thank you, and happy GIS Day. I'm happy to take your questions.

### Questions (6 min)

Have one or two answers ready:

- *"Will AI replace GIS jobs?"* It replaces repetitive digitizing and clicking. It increases demand for people who can design analyses, validate results and explain them.
- *"Where should I start?"* Learn Python with GeoPandas, try Google Earth Engine for free, and run one samgeo notebook on imagery you care about.
- *"How accurate are these models?"* It depends on the place and the training data. Always validate against ground truth, ideally with test areas that are geographically separate from the training data.
