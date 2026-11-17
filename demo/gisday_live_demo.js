// GIS Day 2026 live demo: real Earth embeddings around Springfield, MO
// Paste into https://code.earthengine.google.com/ and press Run.
// Then click anywhere on the map: every place with a similar 64-number vector lights up.

var YEAR = 2024;
var CAMPUS = ee.Geometry.Point([-93.2810, 37.1997]);      // Missouri State University (adjust if needed)
var AOI = CAMPUS.buffer(20000);                          // 20 km around campus

var COLL = ee.ImageCollection('GOOGLE/SATELLITE_EMBEDDING/V1/ANNUAL');
function embeddings(year) {
  return COLL.filterDate(year + '-01-01', (year + 1) + '-01-01')
             .filterBounds(AOI).mosaic().clip(AOI);
}
var emb = embeddings(YEAR);

Map.centerObject(CAMPUS, 12);
Map.setOptions('HYBRID');

// 1. The map: three of the 64 bands shown as color. Similar colors = similar places.
Map.addLayer(emb, {bands: ['A01', 'A16', 'A09'], min: -0.3, max: 0.3}, '1 · Embeddings as color');

// 2. Similarity search: the dot product with one reference vector.
//    Embeddings are unit length, so the dot product is the cosine similarity.
function similarTo(point) {
  var ref = emb.reduceRegion({reducer: ee.Reducer.mean(), geometry: point.buffer(15), scale: 10});
  var refImg = ee.Image.constant(emb.bandNames().map(function (b) { return ref.get(b); }));
  return emb.multiply(refImg).reduce(ee.Reducer.sum());
}
var simViz = {min: 0.6, max: 0.95, palette: ['000004', '51127c', 'b73779', 'fc8961', 'fcfdbf']};
Map.addLayer(similarTo(CAMPUS), simViz, '2 · Places like campus');

// 3. Change detection: low similarity between 2017 and 2024 = the land changed.
var change = embeddings(2017).multiply(emb).reduce(ee.Reducer.sum());
Map.addLayer(change, {min: 0.4, max: 0.95, palette: ['ff3b30', 'ffcc00', 'ffffff']}, '3 · Change 2017→2024 (red = changed)', false);

// Click to search again from any place (a cornfield, Lake Springfield, a parking lot...)
Map.onClick(function (c) {
  var p = ee.Geometry.Point([c.lon, c.lat]);
  var layers = Map.layers();
  layers.set(1, ui.Map.Layer(similarTo(p), simViz, '2 · Places like the clicked point'));
});
print('Click the map to find places like any point. Toggle layer 3 for change since 2017.');
