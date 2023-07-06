const MYID = localStorage.getItem("myid");
const opid = localStorage.getItem("opid");


var r = document.querySelector(':root');

const Dark = localStorage.getItem("Dark");

const L = localStorage.getItem("lang");

var x = document.getElementById("XBTN");

var d = document.getElementById("div");

var validate_location = false;

var validate_image = false;

var fin = false;
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getStorage ,ref as sRef,uploadBytes,uploadBytesResumable,getDownloadURL  } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";

import { getDatabase, ref, push, child, get,set,onValue ,onChildRemoved,runTransaction,update,remove,increment} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgTMI7utlWWWoIzJYeuy6xnEjMcwjbjdQ",
  authDomain: "samsarly-43a16.firebaseapp.com",
  databaseURL: "https://samsarly-43a16-default-rtdb.firebaseio.com",
  projectId: "samsarly-43a16",
  storageBucket: "samsarly-43a16.appspot.com",
  messagingSenderId: "235856823865",
  appId: "1:235856823865:web:15e7f78bf7159c620fafe8"
};
const firebaseConfig2 = {
  apiKey: "AIzaSyCWjR-SzTBkaJMVj9gcA6g_spcn6YS9Rg0",
  authDomain: "test-45ec8.firebaseapp.com",
  databaseURL: "https://test-45ec8-default-rtdb.firebaseio.com",
  projectId: "test-45ec8",
  storageBucket: "test-45ec8.appspot.com",
  messagingSenderId: "1038009051334",
  appId: "1:1038009051334:web:69f178ad59e73683bbcfc7"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const app2 = initializeApp(firebaseConfig2, 'secondary');
const db2 = getDatabase(app2);

const starCountRef3 = ref(db2, '/' + opid + '/tokens');
onValue(starCountRef3, (snapshot) => {
  const da = snapshot.val();
  window.cur=da  //document.getElementById("menu_addressssAndClose").src==""
});
var xyz = { "version": 8, "name": "Example: conditional labels", "metadata": { "mapbox:type": "default", "mapbox:origin": "streets-v11", "mapbox:sdk-support": { "android": "10.6.0", "ios": "10.6.0", "js": "2.9.0" }, "mapbox:autocomposite": true, "mapbox:groups": { "Transit, transit-labels": { "name": "Transit, transit-labels", "collapsed": false }, "Administrative boundaries, admin": { "name": "Administrative boundaries, admin", "collapsed": true }, "Land & water, built": { "name": "Land & water, built", "collapsed": true }, "Transit, bridges": { "name": "Transit, bridges", "collapsed": true }, "Buildings, building-labels": { "name": "Buildings, building-labels", "collapsed": true }, "Transit, surface": { "name": "Transit, surface", "collapsed": true }, "Land & water, land": { "name": "Land & water, land", "collapsed": true }, "Road network, bridges": { "name": "Road network, bridges", "collapsed": true }, "Road network, tunnels": { "name": "Road network, tunnels", "collapsed": true }, "Road network, road-labels": { "name": "Road network, road-labels", "collapsed": true }, "Buildings, built": { "name": "Buildings, built", "collapsed": true }, "Natural features, natural-labels": { "name": "Natural features, natural-labels", "collapsed": true }, "Road network, surface": { "name": "Road network, surface", "collapsed": true }, "Walking, cycling, etc., barriers-bridges": { "name": "Walking, cycling, etc., barriers-bridges", "collapsed": true }, "Place labels, place-labels": { "name": "Place labels, place-labels", "collapsed": true }, "Transit, ferries": { "name": "Transit, ferries", "collapsed": true }, "Transit, elevated": { "name": "Transit, elevated", "collapsed": true }, "Point of interest labels, poi-labels": { "name": "Point of interest labels, poi-labels", "collapsed": true }, "Walking, cycling, etc., tunnels": { "name": "Walking, cycling, etc., tunnels", "collapsed": true }, "Terrain, land": { "name": "Terrain, land", "collapsed": true }, "Road network, tunnels-case": { "name": "Road network, tunnels-case", "collapsed": true }, "Walking, cycling, etc., walking-cycling-labels": { "name": "Walking, cycling, etc., walking-cycling-labels", "collapsed": true }, "Walking, cycling, etc., surface": { "name": "Walking, cycling, etc., surface", "collapsed": true }, "Transit, built": { "name": "Transit, built", "collapsed": true }, "Road network, surface-icons": { "name": "Road network, surface-icons", "collapsed": true }, "Land & water, water": { "name": "Land & water, water", "collapsed": true }, "Transit, ferry-aerialway-labels": { "name": "Transit, ferry-aerialway-labels", "collapsed": true } } }, "center": [-73.79913017542174, 40.63350284980356], "zoom": 10.806185439181258, "bearing": 0, "pitch": 0, "fog": { "range": [0.5, 10], "color": "hsl(0, 0%, 100%)", "high-color": ["interpolate", ["exponential", 1.2], ["zoom"], 0, "hsl(207, 100%, 50%)", 8, "hsl(38, 63%, 84%)"], "space-color": ["interpolate", ["exponential", 1.2], ["zoom"], 5.5, "hsl(240, 46%, 11%)", 6, "hsl(199, 61%, 87%)"], "horizon-blend": ["interpolate", ["exponential", 1.2], ["zoom"], 5.5, 0.05, 6, 0.1], "star-intensity": ["interpolate", ["exponential", 1.2], ["zoom"], 5.5, 0.1, 6, 0] }, "sources": { "composite": { "url": "mapbox://mapbox.mapbox-bathymetry-v2,mapbox.mapbox-streets-v8,mapbox.mapbox-terrain-v2", "type": "vector" } }, "sprite": "mapbox://sprites/mapbox-map-design/cl5uulddi002215l38x5mn5xf/7ynps4lwbi3v1xzo06ag5yhh5", "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf", "projection": { "name": "globe" }, "layers": [{ "id": "land", "type": "background", "layout": {}, "paint": { "background-color": ["interpolate", ["linear"], ["zoom"], 11, "rgba(29,41,53,0.9)", 13, "rgba(29,41,53,0.9)"] }, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, land" } }, { "layout": {}, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, land" }, "maxzoom": 7, "type": "fill", "source": "composite", "id": "landcover", "paint": { "fill-color": ["match", ["get", "class"], "snow", "hsl(35, 14%, 100%)", "hsl(81, 38%, 81%)"], "fill-opacity": ["interpolate", ["exponential", 1.5], ["zoom"], 2, 0.3, 7, 0], "fill-antialias": false }, "source-layer": "landcover" }, { "minzoom": 5, "layout": {}, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, land" }, "filter": ["==", ["get", "class"], "national_park"], "type": "fill", "source": "composite", "id": "national-park", "paint": { "fill-color": "hsl(99, 57%, 75%)", "fill-opacity": ["interpolate", ["linear"], ["zoom"], 5, 0, 6, 0.5, 10, 0.5] }, "source-layer": "landuse_overlay" }, { "minzoom": 5, "layout": {}, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, land" }, "filter": ["all", [">=", ["to-number", ["get", "sizerank"]], 0], ["match", ["get", "class"], ["park", "airport", "glacier", "pitch", "sand", "facility"], true, "residential", ["step", ["zoom"], true, 12, false], "cemetery", true, "school", true, "hospital", true, "commercial_area", true, false], ["<=", ["-", ["to-number", ["get", "sizerank"]], ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0, 18, 14]], 14]], "type": "fill", "source": "composite", "id": "landuse", "paint": { "fill-color": ["interpolate", ["linear"], ["zoom"], 15, ["match", ["get", "class"], "park", "rgba(29,41,53,255)", "airport", "rgba(29,41,53,255)", "cemetery", "rgba(29,41,53,255)", "glacier", "rgba(29,41,53,255)", "hospital", "rgba(29,41,53,255)", "pitch", "rgba(29,41,53,255)", "sand", "rgba(29,41,53,255)", "school", "rgba(29,41,53,255)", "commercial_area", "rgba(29,41,53,255)", "residential", "rgba(29,41,53,255)", "rgba(29,41,53,255)"], 16, ["match", ["get", "class"], "park", "rgba(29,41,53,255)", "airport", "rgba(29,41,53,255)", "cemetery", "rgba(29,41,53,255)", "glacier", "rgba(29,41,53,255)", "hospital", "rgba(29,41,53,255)", "pitch", "rgba(29,41,53,255)", "sand", "rgba(29,41,53,255)", "school", "rgba(29,41,53,255)", "commercial_area", "rgba(29,41,53,255)", "rgba(29,41,53,255)"]], "fill-opacity": ["interpolate", ["linear"], ["zoom"], 5, ["match", ["get", "class"], "residential", 1, 0], 6, ["match", ["get", "class"], "glacier", 0.5, 1], 12, ["match", ["get", "class"], "glacier", 0.5, "residential", 0, 1]] }, "source-layer": "landuse" }, { "minzoom": 15, "layout": {}, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, land" }, "filter": ["==", ["get", "class"], "pitch"], "type": "line", "source": "composite", "id": "pitch-outline", "paint": { "line-color": "hsl(81, 33%, 84%)" }, "source-layer": "landuse" }, { "id": "waterway-shadow", "type": "line", "source": "composite", "source-layer": "waterway", "minzoom": 8, "layout": { "line-cap": ["step", ["zoom"], "butt", 11, "round"], "line-join": "round" }, "paint": { "line-color": "hsl(215, 84%, 69%)", "line-width": ["interpolate", ["exponential", 1.3], ["zoom"], 9, ["match", ["get", "class"], ["canal", "river"], 0.1, 0], 20, ["match", ["get", "class"], ["canal", "river"], 8, 3]], "line-translate": ["interpolate", ["exponential", 1.2], ["zoom"], 7, ["literal", [0, 0]], 16, ["literal", [-1, -1]]], "line-translate-anchor": "viewport", "line-opacity": ["interpolate", ["linear"], ["zoom"], 8, 0, 8.5, 1] }, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, water" } }, { "id": "water-shadow", "type": "fill", "source": "composite", "source-layer": "water", "minzoom": 7, "layout": {}, "paint": { "fill-color": "hsl(215, 84%, 69%)", "fill-translate": ["interpolate", ["exponential", 1.2], ["zoom"], 7, ["literal", [0, 0]], 16, ["literal", [-1, -1]]], "fill-translate-anchor": "viewport" }, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, water" } }, { "id": "waterway", "type": "line", "source": "composite", "source-layer": "waterway", "minzoom": 8, "layout": { "line-cap": ["step", ["zoom"], "butt", 11, "round"], "line-join": "round" }, "paint": { "line-color": "#2d4051", "line-width": ["interpolate", ["exponential", 1.3], ["zoom"], 9, ["match", ["get", "class"], ["canal", "river"], 0.1, 0], 20, ["match", ["get", "class"], ["canal", "river"], 8, 3]], "line-opacity": ["interpolate", ["linear"], ["zoom"], 8, 0, 8.5, 1] }, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, water" } }, { "id": "water", "type": "fill", "source": "composite", "source-layer": "water", "layout": {}, "paint": { "fill-color": "#2d4051" }, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, water" } }, { "layout": {}, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, water" }, "maxzoom": 8, "type": "fill", "source": "composite", "id": "water-depth", "paint": { "fill-color": ["interpolate", ["linear"], ["zoom"], 6, ["interpolate", ["linear"], ["get", "min_depth"], 0, "#2d4051", 200, "#2d4051", 7000, "#2d4051"], 8, ["interpolate", ["linear"], ["get", "min_depth"], 0, "#2d4051", 200, "#2d4051", 7000, "#2d4051"]] }, "source-layer": "depth" }, { "layout": {}, "metadata": { "mapbox:featureComponent": "terrain", "mapbox:group": "Terrain, land" }, "maxzoom": 16, "type": "fill", "source": "composite", "id": "hillshade", "paint": { "fill-color": ["match", ["get", "class"], "shadow", "hsl(56, 36%, 21%)", "hsl(35, 14%, 100%)"], "fill-opacity": ["interpolate", ["linear"], ["zoom"], 14, ["match", ["get", "level"], [67, 56], 0.06, [89, 78], 0.05, 0.12], 16, 0], "fill-antialias": false }, "source-layer": "hillshade" }, { "minzoom": 13, "layout": {}, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, built" }, "filter": ["all", ["==", ["get", "class"], "land"], ["==", ["geometry-type"], "Polygon"]], "type": "fill", "source": "composite", "id": "land-structure-polygon", "paint": { "fill-color": "hsl(35, 12%, 89%)" }, "source-layer": "structure" }, { "minzoom": 13, "layout": { "line-cap": "square" }, "metadata": { "mapbox:featureComponent": "land-and-water", "mapbox:group": "Land & water, built" }, "filter": ["all", ["==", ["get", "class"], "land"], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "land-structure-line", "paint": { "line-width": ["interpolate", ["exponential", 1.99], ["zoom"], 14, 0.75, 20, 40], "line-color": "hsl(35, 12%, 89%)" }, "source-layer": "structure" }, { "id": "aeroway-polygon", "type": "fill", "source": "composite", "source-layer": "aeroway", "minzoom": 11, "filter": ["all", ["match", ["get", "type"], ["runway", "taxiway", "helipad"], true, false], ["==", ["geometry-type"], "Polygon"]], "paint": { "fill-color": ["interpolate", ["linear"], ["zoom"], 15, "hsl(230, 23%, 82%)", 16, "hsl(230, 37%, 84%)"], "fill-opacity": ["interpolate", ["linear"], ["zoom"], 11, 0, 11.5, 1] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, built" } }, { "id": "aeroway-line", "type": "line", "source": "composite", "source-layer": "aeroway", "minzoom": 9, "filter": ["==", ["geometry-type"], "LineString"], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 15, "hsl(230, 23%, 82%)", 16, "hsl(230, 37%, 84%)"], "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 9, ["match", ["get", "type"], "runway", 1, 0.5], 18, ["match", ["get", "type"], "runway", 80, 20]] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, built" } }, { "minzoom": 15, "layout": {}, "metadata": { "mapbox:featureComponent": "buildings", "mapbox:group": "Buildings, built" }, "filter": ["all", ["!=", ["get", "type"], "building:part"], ["==", ["get", "underground"], "false"]], "type": "fill", "source": "composite", "id": "building", "paint": { "fill-color": ["interpolate", ["linear"], ["zoom"], 15, "#1d2935", 16, "#1d2935"], "fill-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 1], "fill-outline-color": "#1d2935" }, "source-layer": "building" }, { "minzoom": 15, "layout": {}, "metadata": { "mapbox:featureComponent": "buildings", "mapbox:group": "Buildings, built" }, "filter": ["all", ["==", ["get", "underground"], "true"], ["==", ["geometry-type"], "Polygon"]], "type": "fill", "source": "composite", "id": "building-underground", "paint": { "fill-color": "#1d2935", "fill-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 0.5] }, "source-layer": "building" }, { "minzoom": 13, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels-case" }, "maxzoom": 14, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["step", ["zoom"], ["match", ["get", "class"], ["street", "street_limited", "primary_link", "track"], true, false], 14, ["match", ["get", "class"], ["street", "street_limited", "track", "primary_link", "secondary_link", "tertiary_link", "service"], true, false]], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "tunnel-street-minor-low", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 2, "track", 1, 0.5], 18, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 18, 12]], "line-color": "hsl(0, 0%, 100%)" }, "source-layer": "road" }, { "id": "tunnel-street-minor-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["step", ["zoom"], ["match", ["get", "class"], ["street", "street_limited", "primary_link", "track"], true, false], 14, ["match", ["get", "class"], ["street", "street_limited", "track", "primary_link", "secondary_link", "tertiary_link", "service"], true, false]], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "hsl(230, 19%, 75%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 2, "track", 1, 0.5], 18, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 18, 12]], "line-opacity": ["step", ["zoom"], 0, 14, 1], "line-dasharray": [3, 3] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels-case" } }, { "id": "tunnel-primary-secondary-tertiary-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["match", ["get", "class"], ["primary", "secondary", "tertiary"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, ["match", ["get", "class"], "primary", 1, 0.75], 18, 2], "line-color": "hsl(230, 19%, 75%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, ["match", ["get", "class"], "primary", 0.75, 0.1], 18, ["match", ["get", "class"], "primary", 32, 26]], "line-dasharray": [3, 3] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels-case" } }, { "id": "tunnel-major-link-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "hsl(0, 0%, 100%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-dasharray": [3, 3] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels-case" } }, { "id": "tunnel-motorway-trunk-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 1, 18, 2], "line-color": "hsl(230, 26%, 100%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32], "line-dasharray": [3, 3] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels-case" } }, { "id": "tunnel-construction", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["==", ["get", "class"], "construction"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 2, 18, 18], "line-color": "hsl(230, 26%, 88%)", "line-dasharray": ["step", ["zoom"], ["literal", [0.4, 0.8]], 15, ["literal", [0.3, 0.6]], 16, ["literal", [0.2, 0.3]], 17, ["literal", [0.2, 0.25]], 18, ["literal", [0.15, 0.15]]] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels-case" } }, { "minzoom": 14, "layout": {}, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., tunnels" }, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["==", ["get", "class"], "path"], ["!=", ["get", "type"], "steps"], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "tunnel-path", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 1, 18, 4], "line-color": "hsl(35, 26%, 95%)", "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 15, ["literal", [1.75, 1]], 16, ["literal", [1, 0.75]], 17, ["literal", [1, 0.5]]] }, "source-layer": "road" }, { "id": "tunnel-steps", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["==", ["get", "type"], "steps"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 1, 16, 1.6, 18, 6], "line-color": "hsl(35, 26%, 95%)", "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 15, ["literal", [1.75, 1]], 16, ["literal", [1, 0.75]], 17, ["literal", [0.3, 0.3]]] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., tunnels" } }, { "id": "tunnel-pedestrian", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["==", ["get", "class"], "pedestrian"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 18, 12], "line-color": "hsl(0, 0%, 100%)", "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 15, ["literal", [1.5, 0.4]], 16, ["literal", [1, 0.2]]] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., tunnels" } }, { "id": "tunnel-major-link", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-color": ["match", ["get", "class"], "motorway_link", "hsl(26, 100%, 78%)", "hsl(46, 77%, 78%)"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels" } }, { "id": "tunnel-street-minor", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["step", ["zoom"], ["match", ["get", "class"], ["street", "street_limited", "primary_link", "track"], true, false], 14, ["match", ["get", "class"], ["street", "street_limited", "track", "primary_link", "secondary_link", "tertiary_link", "service"], true, false]], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 2, "track", 1, 0.5], 18, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 18, 12]], "line-color": ["match", ["get", "class"], "street_limited", "hsl(35, 16%, 93%)", "hsl(0, 0%, 100%)"], "line-opacity": ["step", ["zoom"], 0, 14, 1] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels" } }, { "id": "tunnel-primary-secondary-tertiary", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["match", ["get", "class"], ["primary", "secondary", "tertiary"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, ["match", ["get", "class"], "primary", 0.75, 0.1], 18, ["match", ["get", "class"], "primary", 32, 26]], "line-color": "hsl(0, 0%, 100%)" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels" } }, { "minzoom": 15, "layout": { "symbol-placement": "line", "icon-image": ["step", ["zoom"], "oneway-small", 18, "oneway-large"], "symbol-spacing": 200, "icon-rotation-alignment": "map" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels" }, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["==", ["get", "oneway"], "true"], ["step", ["zoom"], ["match", ["get", "class"], ["primary", "secondary", "street", "street_limited", "tertiary"], true, false], 16, ["match", ["get", "class"], ["primary", "secondary", "tertiary", "street", "street_limited", "primary_link", "secondary_link", "tertiary_link", "service", "track"], true, false]]], "type": "symbol", "source": "composite", "id": "tunnel-oneway-arrow-blue", "paint": {}, "source-layer": "road" }, { "id": "tunnel-motorway-trunk", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32], "line-color": ["match", ["get", "class"], "motorway", "hsl(26, 100%, 78%)", "hsl(46, 77%, 78%)"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels" } }, { "minzoom": 16, "layout": { "symbol-placement": "line", "icon-image": ["step", ["zoom"], "oneway-white-small", 18, "oneway-white-large"], "symbol-spacing": 200 }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, tunnels" }, "filter": ["all", ["==", ["get", "structure"], "tunnel"], ["match", ["get", "class"], ["motorway", "motorway_link", "trunk", "trunk_link"], true, false], ["==", ["get", "oneway"], "true"]], "type": "symbol", "source": "composite", "id": "tunnel-oneway-arrow-white", "paint": {}, "source-layer": "road" }, { "id": "ferry", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 8, "filter": ["==", ["get", "type"], "ferry"], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 15, "hsl(205, 73%, 63%)", 17, "hsl(230, 73%, 63%)"], "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 20, 1], "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 13, ["literal", [12, 4]]] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, ferries" } }, { "id": "ferry-auto", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 8, "filter": ["==", ["get", "type"], "ferry_auto"], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 15, "hsl(205, 73%, 63%)", 17, "hsl(230, 73%, 63%)"], "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 20, 1] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, ferries" } }, { "minzoom": 12, "layout": { "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" }, "filter": ["all", ["==", ["get", "class"], "path"], ["step", ["zoom"], ["!", ["match", ["get", "type"], ["steps", "sidewalk", "crossing"], true, false]], 16, ["!=", ["get", "type"], "steps"]], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-path-bg", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 2, 18, 7], "line-color": "#2c3d4f" }, "source-layer": "road" }, { "minzoom": 14, "layout": { "line-join": "round" }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" }, "filter": ["all", ["==", ["get", "type"], "steps"], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-steps-bg", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 2, 17, 4.6, 18, 7], "line-opacity": 0.75, "line-color": "#2c3d4f" }, "source-layer": "road" }, { "minzoom": 14, "layout": { "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" }, "filter": ["all", ["==", ["get", "class"], "pedestrian"], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-pedestrian-case", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 2, 18, 14.5], "line-color": "#2c3d4f" }, "source-layer": "road" }, { "minzoom": 12, "layout": { "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" }, "filter": ["all", ["==", ["get", "class"], "path"], ["step", ["zoom"], ["!", ["match", ["get", "type"], ["steps", "sidewalk", "crossing"], true, false]], 16, ["!=", ["get", "type"], "steps"]], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-path", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 13, 0.5, 14, 1, 15, 1, 18, 4], "line-color": "#2c3d4f", "line-dasharray": ["step", ["zoom"], ["literal", [4, 0.3]], 15, ["literal", [1.75, 0.3]], 16, ["literal", [1, 0.3]], 17, ["literal", [1, 0.25]]] }, "source-layer": "road" }, { "minzoom": 14, "layout": { "line-join": "round" }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" }, "filter": ["all", ["==", ["get", "type"], "steps"], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-steps", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 1, 16, 1.6, 18, 6], "line-color": "#2c3d4f", "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 15, ["literal", [1.75, 1]], 16, ["literal", [1, 0.75]], 17, ["literal", [0.3, 0.3]]] }, "source-layer": "road" }, { "minzoom": 12, "layout": { "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" }, "filter": ["all", ["==", ["get", "class"], "pedestrian"], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-pedestrian", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 18, 12], "line-color": "#2c3d4f", "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 15, ["literal", [1.5, 0.4]], 16, ["literal", [1, 0.2]]] }, "source-layer": "road" }, { "id": "road-pedestrian-polygon-fill", "type": "fill", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["match", ["get", "class"], ["path", "pedestrian"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["case", ["has", "layer"], [">=", ["get", "layer"], 0], true], ["==", ["geometry-type"], "Polygon"]], "paint": { "fill-color": ["interpolate", ["linear"], ["zoom"], 16, "#2c3d4f", 16.25, "#2c3d4f"], "fill-outline-color": "#2c3d4f" }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" } }, { "id": "road-pedestrian-polygon-pattern", "type": "fill", "source": "composite", "source-layer": "road", "minzoom": 16, "filter": ["all", ["match", ["get", "class"], ["path", "pedestrian"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["case", ["has", "layer"], [">=", ["get", "layer"], 0], true], ["==", ["geometry-type"], "Polygon"]], "paint": { "fill-pattern": "pedestrian-polygon", "fill-opacity": ["interpolate", ["linear"], ["zoom"], 16, 0, 16.25, 1] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" } }, { "id": "golf-hole-line", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 16, "filter": ["==", ["get", "class"], "golf"], "paint": { "line-color": "hsl(99, 27%, 69%)" }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., surface" } }, { "id": "turning-feature-outline", "type": "circle", "source": "composite", "source-layer": "road", "minzoom": 15, "filter": ["all", ["match", ["get", "class"], ["turning_circle", "turning_loop"], true, false], ["==", ["geometry-type"], "Point"]], "paint": { "circle-radius": ["interpolate", ["linear"], ["zoom"], 15, 4.5, 16, 8, 18, 20], "circle-color": "hsl(0, 0%, 100%)", "circle-stroke-width": ["interpolate", ["linear"], ["zoom"], 15, 0.8, 16, 1.2, 18, 2], "circle-stroke-color": "#2c3d4f", "circle-pitch-alignment": "map" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" } }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "maxzoom": 14, "filter": ["all", ["step", ["zoom"], ["==", ["get", "class"], "track"], 14, ["match", ["get", "class"], ["track", "secondary_link", "tertiary_link", "service"], true, false]], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-minor-low", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, ["match", ["get", "class"], "track", 1, 0.5], 18, 12], "line-color": "hsl(0, 0%, 100%)" }, "source-layer": "road" }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["step", ["zoom"], ["==", ["get", "class"], "track"], 14, ["match", ["get", "class"], ["track", "secondary_link", "tertiary_link", "service"], true, false]], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-minor-case", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "#2c3d4f", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, ["match", ["get", "class"], "track", 1, 0.5], 18, 12], "line-opacity": ["step", ["zoom"], 0, 14, 1] }, "source-layer": "road" }, { "minzoom": 11, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "maxzoom": 14, "filter": ["all", ["match", ["get", "class"], ["street", "street_limited", "primary_link"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-street-low", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-color": "#2c3d4f" }, "source-layer": "road" }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["street", "street_limited", "primary_link"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-street-case", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "#2c3d4f", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-opacity": ["step", ["zoom"], 0, 14, 1] }, "source-layer": "road" }, { "minzoom": 10, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["secondary", "tertiary"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-secondary-tertiary-case", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 0.75, 18, 2], "line-color": "#2c3d4f", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.1, 18, 26] }, "source-layer": "road" }, { "minzoom": 10, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["==", ["get", "class"], "primary"], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-primary-case", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 1, 18, 2], "line-color": "#2c3d4f", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32] }, "source-layer": "road" }, { "minzoom": 10, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-major-link-case", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "#2c3d4f", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-opacity": ["step", ["zoom"], 0, 11, 1] }, "source-layer": "road" }, { "minzoom": 5, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-motorway-trunk-case", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 1, 18, 2], "line-color": "#2c3d4f", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32], "line-opacity": ["step", ["zoom"], ["match", ["get", "class"], "motorway", 1, 0], 6, 1] }, "source-layer": "road" }, { "id": "road-construction", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["==", ["get", "class"], "construction"], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 2, 18, 18], "line-color": "#2c3d4f", "line-dasharray": ["step", ["zoom"], ["literal", [0.4, 0.8]], 15, ["literal", [0.3, 0.6]], 16, ["literal", [0.2, 0.3]], 17, ["literal", [0.2, 0.25]], 18, ["literal", [0.15, 0.15]]] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" } }, { "minzoom": 10, "layout": { "line-cap": ["step", ["zoom"], "butt", 13, "round"], "line-join": ["step", ["zoom"], "miter", 13, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-major-link", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-color": ["match", ["get", "class"], "motorway_link", "#2c3d4f", "#2c3d4f"] }, "source-layer": "road" }, { "id": "road-polygon", "type": "fill", "source": "composite", "source-layer": "road", "minzoom": 12, "filter": ["all", ["match", ["get", "class"], ["primary", "secondary", "tertiary", "primary_link", "secondary_link", "tertiary_link", "trunk", "trunk_link", "street", "street_limited", "track", "service"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "Polygon"]], "paint": { "fill-color": "#2d4051", "fill-outline-color": "#2d4051" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" } }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["step", ["zoom"], ["==", ["get", "class"], "track"], 14, ["match", ["get", "class"], ["track", "secondary_link", "tertiary_link", "service"], true, false]], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-minor", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, ["match", ["get", "class"], "track", 1, 0.5], 18, 12], "line-color": "#2c3d4f", "line-opacity": ["step", ["zoom"], 0, 14, 1] }, "source-layer": "road" }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["street", "street_limited", "primary_link"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-street", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-color": ["match", ["get", "class"], "street_limited", "#2c3d4f", "#2c3d4f"], "line-opacity": ["step", ["zoom"], 0, 14, 1] }, "source-layer": "road" }, { "minzoom": 8, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["secondary", "tertiary"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-secondary-tertiary", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.1, 18, 26], "line-color": "#2d4051" }, "source-layer": "road" }, { "minzoom": 6, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"], "line-join": ["step", ["zoom"], "miter", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["==", ["get", "class"], "primary"], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-primary", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32], "line-color": "#2d4051" }, "source-layer": "road" }, { "minzoom": 15, "layout": { "symbol-placement": "line", "icon-image": ["step", ["zoom"], "oneway-small", 18, "oneway-large"], "symbol-spacing": 200, "icon-rotation-alignment": "map" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["==", ["get", "oneway"], "true"], ["step", ["zoom"], ["match", ["get", "class"], ["primary", "secondary", "tertiary", "street", "street_limited"], true, false], 16, ["match", ["get", "class"], ["primary", "secondary", "tertiary", "street", "street_limited", "primary_link", "secondary_link", "tertiary_link", "service", "track"], true, false]], ["match", ["get", "structure"], ["none", "ford"], true, false]], "type": "symbol", "source": "composite", "id": "road-oneway-arrow-blue", "paint": {}, "source-layer": "road" }, { "minzoom": 5, "layout": { "line-cap": ["step", ["zoom"], "butt", 13, "round"], "line-join": ["step", ["zoom"], "miter", 13, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface" }, "filter": ["all", ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "road-motorway-trunk", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32], "line-color": ["step", ["zoom"], ["match", ["get", "class"], "motorway", "#2d4051", "#2d4051"], 6, ["match", ["get", "class"], "motorway", "#2d4051", "#2d4051"], 9, ["match", ["get", "class"], "motorway", "#2d4051", "hsl(46, 87%, 68%)"]] }, "source-layer": "road" }, { "id": "road-rail", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["match", ["get", "class"], ["major_rail", "minor_rail"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false]], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 13, "#2d4051", 16, "#2d4051"], "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 20, 1] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, surface" } }, { "id": "road-rail-tracks", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["match", ["get", "class"], ["major_rail", "minor_rail"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false]], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 13, "#2d4051", 16, "#2d4051"], "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 4, 20, 8], "line-dasharray": [0.1, 15], "line-opacity": ["interpolate", ["linear"], ["zoom"], 13.75, 0, 14, 1] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, surface" } }, { "minzoom": 16, "layout": { "icon-image": "level-crossing", "icon-allow-overlap": true }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface-icons" }, "filter": ["==", ["get", "class"], "level_crossing"], "type": "symbol", "source": "composite", "id": "level-crossing", "paint": {}, "source-layer": "road" }, { "minzoom": 16, "layout": { "symbol-placement": "line", "icon-image": ["step", ["zoom"], "oneway-white-small", 18, "oneway-white-large"], "symbol-spacing": 200 }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface-icons" }, "filter": ["all", ["==", ["get", "oneway"], "true"], ["match", ["get", "class"], ["motorway", "trunk", "motorway_link", "trunk_link"], true, false], ["match", ["get", "structure"], ["none", "ford"], true, false]], "type": "symbol", "source": "composite", "id": "road-oneway-arrow-white", "paint": {}, "source-layer": "road" }, { "id": "turning-feature", "type": "circle", "source": "composite", "source-layer": "road", "minzoom": 15, "filter": ["all", ["match", ["get", "class"], ["turning_circle", "turning_loop"], true, false], ["==", ["geometry-type"], "Point"]], "paint": { "circle-radius": ["interpolate", ["linear"], ["zoom"], 15, 4.5, 16, 8, 18, 20], "circle-color": "hsl(0, 0%, 100%)", "circle-pitch-alignment": "map" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, surface-icons" } }, { "minzoom": 14, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., barriers-bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["==", ["get", "class"], "path"], ["step", ["zoom"], ["!", ["match", ["get", "type"], ["steps", "sidewalk", "crossing"], true, false]], 16, ["!=", ["get", "type"], "steps"]], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-path-bg", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 2, 18, 7], "line-color": "hsl(230, 17%, 82%)" }, "source-layer": "road" }, { "id": "bridge-steps-bg", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["==", ["get", "type"], "steps"], ["==", ["get", "structure"], "bridge"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 2, 17, 4.6, 18, 7], "line-opacity": 0.75, "line-color": "hsl(230, 17%, 82%)" }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., barriers-bridges" } }, { "id": "bridge-pedestrian-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["==", ["get", "class"], "pedestrian"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 2, 18, 14.5], "line-color": "hsl(230, 26%, 88%)" }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., barriers-bridges" } }, { "minzoom": 14, "layout": {}, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., barriers-bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["==", ["get", "class"], "path"], ["!=", ["get", "type"], "steps"], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-path", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 1, 18, 4], "line-color": "hsl(0, 0%, 100%)", "line-dasharray": ["step", ["zoom"], ["literal", [4, 0.3]], 15, ["literal", [1.75, 0.3]], 16, ["literal", [1, 0.3]], 17, ["literal", [1, 0.25]]] }, "source-layer": "road" }, { "id": "bridge-steps", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["==", ["get", "type"], "steps"], ["==", ["get", "structure"], "bridge"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 15, 1, 16, 1.6, 18, 6], "line-color": "hsl(0, 0%, 100%)", "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 15, ["literal", [1.75, 1]], 16, ["literal", [1, 0.75]], 17, ["literal", [0.3, 0.3]]] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., barriers-bridges" } }, { "id": "bridge-pedestrian", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["==", ["get", "class"], "pedestrian"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 18, 12], "line-color": "hsl(0, 0%, 100%)", "line-dasharray": ["step", ["zoom"], ["literal", [1, 0]], 15, ["literal", [1.5, 0.4]], 16, ["literal", [1, 0.2]]] }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., barriers-bridges" } }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "maxzoom": 14, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["step", ["zoom"], ["match", ["get", "class"], ["street", "street_limited", "primary_link", "track"], true, false], 14, ["match", ["get", "class"], ["street", "street_limited", "track", "primary_link", "secondary_link", "tertiary_link", "service"], true, false]], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-street-minor-low", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 2, "track", 1, 0.5], 18, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 18, 12]], "line-color": "hsl(0, 0%, 100%)" }, "source-layer": "road" }, { "id": "bridge-street-minor-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["step", ["zoom"], ["match", ["get", "class"], ["street", "street_limited", "primary_link", "track"], true, false], 14, ["match", ["get", "class"], ["street", "street_limited", "track", "primary_link", "secondary_link", "tertiary_link", "service"], true, false]], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "hsl(230, 26%, 88%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 2, "track", 1, 0.5], 18, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 18, 12]], "line-opacity": ["step", ["zoom"], 0, 14, 1] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" } }, { "id": "bridge-primary-secondary-tertiary-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["primary", "secondary", "tertiary"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, ["match", ["get", "class"], "primary", 1, 0.75], 18, 2], "line-color": "hsl(230, 26%, 88%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, ["match", ["get", "class"], "primary", 0.75, 0.1], 18, ["match", ["get", "class"], "primary", 32, 26]], "line-opacity": ["step", ["zoom"], 0, 10, 1] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" } }, { "id": "bridge-major-link-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["<=", ["get", "layer"], 1], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "hsl(230, 26%, 100%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" } }, { "id": "bridge-motorway-trunk-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["<=", ["get", "layer"], 1], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 1, 18, 2], "line-color": "hsl(230, 26%, 100%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" } }, { "id": "bridge-construction", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 14, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["==", ["get", "class"], "construction"], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 2, 18, 18], "line-color": "hsl(230, 26%, 88%)", "line-dasharray": ["step", ["zoom"], ["literal", [0.4, 0.8]], 15, ["literal", [0.3, 0.6]], 16, ["literal", [0.2, 0.3]], 17, ["literal", [0.2, 0.25]], 18, ["literal", [0.15, 0.15]]] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" } }, { "minzoom": 13, "layout": { "line-cap": "round" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["<=", ["get", "layer"], 1], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-major-link", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-color": ["match", ["get", "class"], "motorway_link", "hsl(26, 100%, 68%)", "hsl(46, 87%, 68%)"] }, "source-layer": "road" }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["step", ["zoom"], ["match", ["get", "class"], ["street", "street_limited", "primary_link", "track"], true, false], 14, ["match", ["get", "class"], ["street", "street_limited", "track", "primary_link", "secondary_link", "tertiary_link", "service"], true, false]], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-street-minor", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 2, "track", 1, 0.5], 18, ["match", ["get", "class"], ["street", "street_limited", "primary_link"], 18, 12]], "line-color": ["match", ["get", "class"], "street_limited", "hsl(35, 16%, 93%)", "hsl(0, 0%, 100%)"], "line-opacity": ["step", ["zoom"], 0, 14, 1] }, "source-layer": "road" }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["primary", "secondary", "tertiary"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-primary-secondary-tertiary", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, ["match", ["get", "class"], "primary", 0.75, 0.1], 18, ["match", ["get", "class"], "primary", 32, 26]], "line-color": "hsl(0, 0%, 100%)" }, "source-layer": "road" }, { "minzoom": 15, "layout": { "symbol-placement": "line", "icon-image": ["step", ["zoom"], "oneway-small", 18, "oneway-large"], "symbol-spacing": 200, "icon-rotation-alignment": "map" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["==", ["get", "oneway"], "true"], ["step", ["zoom"], ["match", ["get", "class"], ["primary", "secondary", "tertiary", "street", "street_limited"], true, false], 16, ["match", ["get", "class"], ["primary", "secondary", "tertiary", "street", "street_limited", "primary_link", "secondary_link", "tertiary_link", "service", "track"], true, false]]], "type": "symbol", "source": "composite", "id": "bridge-oneway-arrow-blue", "paint": {}, "source-layer": "road" }, { "minzoom": 13, "layout": { "line-cap": "round" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["<=", ["get", "layer"], 1], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-motorway-trunk", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32], "line-color": ["match", ["get", "class"], "motorway", "hsl(26, 100%, 68%)", "hsl(46, 87%, 68%)"] }, "source-layer": "road" }, { "id": "bridge-major-link-2-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], [">=", ["get", "layer"], 2], ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 2], "line-color": "hsl(230, 26%, 100%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" } }, { "id": "bridge-motorway-trunk-2-case", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], [">=", ["get", "layer"], 2], ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["==", ["geometry-type"], "LineString"]], "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 1, 18, 2], "line-color": "hsl(230, 26%, 100%)", "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" } }, { "minzoom": 13, "layout": { "line-cap": "round" }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], [">=", ["get", "layer"], 2], ["match", ["get", "class"], ["motorway_link", "trunk_link"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-major-link-2", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 14, 2, 18, 18], "line-color": ["match", ["get", "class"], "motorway_link", "hsl(26, 100%, 68%)", "hsl(46, 87%, 68%)"] }, "source-layer": "road" }, { "minzoom": 13, "layout": { "line-cap": ["step", ["zoom"], "butt", 14, "round"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], [">=", ["get", "layer"], 2], ["match", ["get", "class"], ["motorway", "trunk"], true, false], ["==", ["geometry-type"], "LineString"]], "type": "line", "source": "composite", "id": "bridge-motorway-trunk-2", "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 5, 0.75, 18, 32], "line-color": ["match", ["get", "class"], "motorway", "hsl(26, 100%, 68%)", "hsl(46, 87%, 68%)"] }, "source-layer": "road" }, { "minzoom": 16, "layout": { "symbol-placement": "line", "icon-image": "oneway-white-small", "symbol-spacing": 200 }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, bridges" }, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["motorway", "trunk", "motorway_link", "trunk_link"], true, false], ["==", ["get", "oneway"], "true"]], "type": "symbol", "source": "composite", "id": "bridge-oneway-arrow-white", "paint": {}, "source-layer": "road" }, { "id": "bridge-rail", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["major_rail", "minor_rail"], true, false]], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 13, "hsl(50, 19%, 81%)", 16, "hsl(230, 10%, 74%)"], "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 20, 1] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, bridges" } }, { "id": "bridge-rail-tracks", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 13, "filter": ["all", ["==", ["get", "structure"], "bridge"], ["match", ["get", "class"], ["major_rail", "minor_rail"], true, false]], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 13, "hsl(50, 19%, 81%)", 16, "hsl(230, 10%, 74%)"], "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 4, 20, 8], "line-dasharray": [0.1, 15], "line-opacity": ["interpolate", ["linear"], ["zoom"], 13.75, 0, 14, 1] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, bridges" } }, { "id": "aerialway", "type": "line", "source": "composite", "source-layer": "road", "minzoom": 12, "filter": ["==", ["get", "class"], "aerialway"], "paint": { "line-color": "hsl(230, 10%, 74%)", "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 0.5, 20, 1] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, elevated" } }, { "id": "admin-1-boundary-bg", "type": "line", "source": "composite", "source-layer": "admin", "minzoom": 7, "filter": ["all", ["==", ["get", "admin_level"], 1], ["==", ["get", "maritime"], "false"], ["match", ["get", "worldview"], ["all", "US"], true, false]], "paint": { "line-color": ["interpolate", ["linear"], ["zoom"], 8, "hsl(35, 12%, 89%)", 16, "hsl(230, 49%, 90%)"], "line-width": ["interpolate", ["linear"], ["zoom"], 7, 3.75, 12, 5.5], "line-opacity": ["interpolate", ["linear"], ["zoom"], 7, 0, 8, 0.75], "line-dasharray": [1, 0], "line-blur": ["interpolate", ["linear"], ["zoom"], 3, 0, 8, 3] }, "metadata": { "mapbox:featureComponent": "admin-boundaries", "mapbox:group": "Administrative boundaries, admin" } }, { "id": "admin-0-boundary-bg", "type": "line", "source": "composite", "source-layer": "admin", "minzoom": 1, "filter": ["all", ["==", ["get", "admin_level"], 0], ["==", ["get", "maritime"], "false"], ["match", ["get", "worldview"], ["all", "US"], true, false]], "paint": { "line-width": ["interpolate", ["linear"], ["zoom"], 3, 3.5, 10, 8], "line-color": ["interpolate", ["linear"], ["zoom"], 6, "hsl(35, 12%, 89%)", 8, "hsl(230, 49%, 90%)"], "line-opacity": ["interpolate", ["linear"], ["zoom"], 3, 0, 4, 0.5], "line-blur": ["interpolate", ["linear"], ["zoom"], 3, 0, 10, 2] }, "metadata": { "mapbox:featureComponent": "admin-boundaries", "mapbox:group": "Administrative boundaries, admin" } }, { "minzoom": 2, "layout": {}, "metadata": { "mapbox:featureComponent": "admin-boundaries", "mapbox:group": "Administrative boundaries, admin" }, "filter": ["all", ["==", ["get", "admin_level"], 1], ["==", ["get", "maritime"], "false"], ["match", ["get", "worldview"], ["all", "US"], true, false]], "type": "line", "source": "composite", "id": "admin-1-boundary", "paint": { "line-dasharray": ["step", ["zoom"], ["literal", [2, 0]], 7, ["literal", [2, 2, 6, 2]]], "line-width": ["interpolate", ["linear"], ["zoom"], 7, 0.75, 12, 1.5], "line-opacity": ["interpolate", ["linear"], ["zoom"], 2, 0, 3, 1], "line-color": ["interpolate", ["linear"], ["zoom"], 3, "hsl(230, 15%, 77%)", 7, "hsl(230, 8%, 62%)"] }, "source-layer": "admin" }, { "minzoom": 1, "layout": {}, "metadata": { "mapbox:featureComponent": "admin-boundaries", "mapbox:group": "Administrative boundaries, admin" }, "filter": ["all", ["==", ["get", "admin_level"], 0], ["==", ["get", "disputed"], "false"], ["==", ["get", "maritime"], "false"], ["match", ["get", "worldview"], ["all", "US"], true, false]], "type": "line", "source": "composite", "id": "admin-0-boundary", "paint": { "line-color": "hsl(230, 8%, 51%)", "line-width": ["interpolate", ["linear"], ["zoom"], 3, 0.5, 10, 2], "line-dasharray": [10, 0] }, "source-layer": "admin" }, { "id": "admin-0-boundary-disputed", "type": "line", "source": "composite", "source-layer": "admin", "minzoom": 1, "filter": ["all", ["==", ["get", "disputed"], "true"], ["==", ["get", "admin_level"], 0], ["==", ["get", "maritime"], "false"], ["match", ["get", "worldview"], ["all", "US"], true, false]], "paint": { "line-color": "hsl(230, 8%, 51%)", "line-width": ["interpolate", ["linear"], ["zoom"], 3, 0.5, 10, 2], "line-dasharray": ["step", ["zoom"], ["literal", [3.25, 3.25]], 6, ["literal", [2.5, 2.5]], 7, ["literal", [2, 2.25]], 8, ["literal", [1.75, 2]]] }, "metadata": { "mapbox:featureComponent": "admin-boundaries", "mapbox:group": "Administrative boundaries, admin" } }, { "id": "building-number-label", "type": "symbol", "source": "composite", "source-layer": "housenum_label", "minzoom": 17, "layout": { "text-field": ["get", "house_num"], "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"], "text-padding": 4, "text-max-width": 7, "text-size": 9.5 }, "paint": { "text-color": "hsl(35, 2%, 68%)", "text-halo-color": "hsl(35, 7%, 90%)", "text-halo-width": 0.5 }, "metadata": { "mapbox:featureComponent": "buildings", "mapbox:group": "Buildings, building-labels" } }, { "minzoom": 16, "layout": { "text-field": ["get", "name"], "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"], "text-max-width": 7, "text-size": 11 }, "metadata": { "mapbox:featureComponent": "buildings", "mapbox:group": "Buildings, building-labels" }, "filter": ["all", ["==", ["get", "class"], "settlement_subdivision"], ["==", ["get", "type"], "block"]], "type": "symbol", "source": "composite", "id": "block-number-label", "paint": { "text-color": "hsl(35, 12%, 55%)", "text-halo-color": "hsl(35, 11%, 99%)", "text-halo-width": 0.5, "text-halo-blur": 0.5 }, "source-layer": "place_label" }, { "minzoom": 10, "layout": { "text-size": ["interpolate", ["linear"], ["zoom"], 10, ["match", ["get", "class"], ["motorway", "trunk", "primary", "secondary", "tertiary"], 10, ["motorway_link", "trunk_link", "primary_link", "secondary_link", "tertiary_link", "street", "street_limited"], 9, 6.5], 18, ["match", ["get", "class"], ["motorway", "trunk", "primary", "secondary", "tertiary"], 16, ["motorway_link", "trunk_link", "primary_link", "secondary_link", "tertiary_link", "street", "street_limited"], 14, 13]], "text-max-angle": 30, "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"], "symbol-placement": "line", "text-padding": 1, "text-rotation-alignment": "map", "text-pitch-alignment": "viewport", "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-letter-spacing": 0.01 }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, road-labels" }, "filter": ["all", ["has", "name"], ["step", ["zoom"], ["match", ["get", "class"], ["motorway", "trunk", "primary", "secondary", "tertiary"], true, false], 12, ["match", ["get", "class"], ["motorway", "trunk", "primary", "secondary", "tertiary", "street", "street_limited"], true, false], 15, ["match", ["get", "class"], ["path", "pedestrian", "golf", "ferry", "aerialway"], false, true]]], "type": "symbol", "source": "composite", "id": "road-label", "paint": { "text-color": "hsl(0,0%, 0%)", "text-halo-color": ["match", ["get", "class"], ["motorway", "trunk"], "hsla(35, 19%, 100%, 0.75)", "hsl(35, 19%, 100%)"], "text-halo-width": 1, "text-halo-blur": 1 }, "source-layer": "road" }, { "minzoom": 15, "layout": { "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "icon-image": "intersection", "icon-text-fit": "both", "icon-text-fit-padding": [1, 2, 1, 2], "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 15, 9, 18, 12], "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, road-labels" }, "filter": ["all", ["==", ["get", "class"], "intersection"], ["has", "name"]], "type": "symbol", "source": "composite", "id": "road-intersection", "paint": { "text-color": "hsl(230, 57%, 64%)" }, "source-layer": "road" }, { "minzoom": 6, "layout": { "text-size": 9, "icon-image": ["concat", ["get", "shield"], "-", ["to-string", ["get", "reflen"]]], "icon-rotation-alignment": "viewport", "text-max-angle": 38, "symbol-spacing": ["interpolate", ["linear"], ["zoom"], 11, 400, 14, 600], "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"], "symbol-placement": ["step", ["zoom"], "point", 11, "line"], "text-rotation-alignment": "viewport", "text-field": ["get", "ref"], "text-letter-spacing": 0.05 }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, road-labels" }, "filter": ["all", ["has", "reflen"], ["<=", ["get", "reflen"], 6], ["match", ["get", "class"], ["pedestrian", "service"], false, true], ["step", ["zoom"], ["==", ["geometry-type"], "Point"], 11, [">", ["get", "len"], 5000], 12, [">", ["get", "len"], 2500], 13, [">", ["get", "len"], 1000], 14, true]], "type": "symbol", "source": "composite", "id": "road-number-shield", "paint": { "text-color": ["match", ["get", "shield_text_color"], "white", "hsl(0, 0%, 100%)", "yellow", "hsl(50, 100%, 70%)", "orange", "hsl(25, 100%, 75%)", "blue", "hsl(230, 57%, 44%)", "hsl(230, 18%, 13%)"] }, "source-layer": "road" }, { "minzoom": 14, "layout": { "text-field": ["get", "ref"], "text-size": 9, "icon-image": ["concat", "motorway-exit-", ["to-string", ["get", "reflen"]]], "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"] }, "metadata": { "mapbox:featureComponent": "road-network", "mapbox:group": "Road network, road-labels" }, "filter": ["all", ["has", "reflen"], ["<=", ["get", "reflen"], 9]], "type": "symbol", "source": "composite", "id": "road-exit-shield", "paint": { "text-color": "hsl(0, 0%, 100%)", "text-translate": [0, 0] }, "source-layer": "motorway_junction" }, { "minzoom": 12, "layout": { "text-size": ["interpolate", ["linear"], ["zoom"], 10, ["match", ["get", "class"], "pedestrian", 9, 6.5], 18, ["match", ["get", "class"], "pedestrian", 14, 13]], "text-max-angle": 30, "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"], "symbol-placement": "line", "text-padding": 1, "text-rotation-alignment": "map", "text-pitch-alignment": "viewport", "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-letter-spacing": 0.01 }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., walking-cycling-labels" }, "filter": ["step", ["zoom"], ["match", ["get", "class"], ["pedestrian"], true, false], 15, ["match", ["get", "class"], ["path", "pedestrian"], true, false]], "type": "symbol", "source": "composite", "id": "path-pedestrian-label", "paint": { "text-color": "hsl(0,0%, 0%)", "text-halo-color": "hsl(0, 0%, 100%)", "text-halo-width": 1, "text-halo-blur": 1 }, "source-layer": "road" }, { "minzoom": 16, "layout": { "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-size": 12 }, "metadata": { "mapbox:featureComponent": "walking-cycling", "mapbox:group": "Walking, cycling, etc., walking-cycling-labels" }, "filter": ["==", ["get", "class"], "golf"], "type": "symbol", "source": "composite", "id": "golf-hole-label", "paint": { "text-halo-color": "hsl(99, 62%, 100%)", "text-halo-width": 0.5, "text-halo-blur": 0.5, "text-color": "hsl(105, 30%, 32%)" }, "source-layer": "road" }, { "minzoom": 15, "layout": { "text-size": ["interpolate", ["linear"], ["zoom"], 10, 6.5, 18, 13], "text-max-angle": 30, "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"], "symbol-placement": "line", "text-padding": 1, "text-rotation-alignment": "map", "text-pitch-alignment": "viewport", "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-letter-spacing": 0.01 }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, ferry-aerialway-labels" }, "filter": ["match", ["get", "class"], "aerialway", true, "ferry", true, false], "type": "symbol", "source": "composite", "id": "ferry-aerialway-label", "paint": { "text-color": ["match", ["get", "class"], "ferry", "hsl(196, 48%, 50%)", "hsl(0,0%, 0%)"], "text-halo-color": ["match", ["get", "class"], "ferry", "hsl(196, 80%, 70%)", "hsl(35, 19%, 100%)"], "text-halo-width": 1, "text-halo-blur": 1 }, "source-layer": "road" }, { "minzoom": 13, "layout": { "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"], "text-max-angle": 30, "symbol-spacing": ["interpolate", ["linear", 1], ["zoom"], 15, 250, 17, 400], "text-size": ["interpolate", ["linear"], ["zoom"], 13, 12, 18, 18], "symbol-placement": "line", "text-pitch-alignment": "viewport", "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]] }, "metadata": { "mapbox:featureComponent": "natural-features", "mapbox:group": "Natural features, natural-labels" }, "filter": ["all", ["match", ["get", "class"], ["canal", "river", "stream"], ["match", ["get", "worldview"], ["all", "US"], true, false], ["disputed_canal", "disputed_river", "disputed_stream"], ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["==", ["geometry-type"], "LineString"]], "type": "symbol", "source": "composite", "id": "waterway-label", "paint": { "text-color": "hsl(196, 48%, 57%)", "text-halo-color": "hsla(35, 11%, 99%, 0.5)" }, "source-layer": "natural_label" }, { "minzoom": 4, "layout": { "text-size": ["step", ["zoom"], ["step", ["get", "sizerank"], 18, 5, 12], 17, ["step", ["get", "sizerank"], 18, 13, 12]], "text-max-angle": 30, "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "symbol-placement": "line-center", "text-pitch-alignment": "viewport" }, "metadata": { "mapbox:featureComponent": "natural-features", "mapbox:group": "Natural features, natural-labels" }, "filter": ["all", ["match", ["get", "class"], ["glacier", "landform"], ["match", ["get", "worldview"], ["all", "US"], true, false], ["disputed_glacier", "disputed_landform"], ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["<=", ["get", "filterrank"], 2], ["==", ["geometry-type"], "LineString"]], "type": "symbol", "source": "composite", "id": "natural-line-label", "paint": { "text-halo-width": 0.5, "text-halo-color": "hsl(35, 19%, 100%)", "text-halo-blur": 0.5, "text-color": ["step", ["zoom"], ["step", ["get", "sizerank"], "hsl(26, 30%, 45%)", 5, "hsl(26, 35%, 35%)"], 17, ["step", ["get", "sizerank"], "hsl(26, 30%, 45%)", 13, "hsl(26, 35%, 35%)"]] }, "source-layer": "natural_label" }, { "minzoom": 4, "layout": { "text-size": ["step", ["zoom"], ["step", ["get", "sizerank"], 18, 5, 12], 17, ["step", ["get", "sizerank"], 18, 13, 12]], "icon-image": ["get", "maki"], "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-offset": ["step", ["zoom"], ["step", ["get", "sizerank"], ["literal", [0, 0]], 5, ["literal", [0, 0.75]]], 17, ["step", ["get", "sizerank"], ["literal", [0, 0]], 13, ["literal", [0, 0.75]]]], "text-anchor": ["step", ["zoom"], ["step", ["get", "sizerank"], "center", 5, "top"], 17, ["step", ["get", "sizerank"], "center", 13, "top"]], "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]] }, "metadata": { "mapbox:featureComponent": "natural-features", "mapbox:group": "Natural features, natural-labels" }, "filter": ["all", ["match", ["get", "class"], ["dock", "glacier", "landform", "water_feature", "wetland"], ["match", ["get", "worldview"], ["all", "US"], true, false], ["disputed_dock", "disputed_glacier", "disputed_landform", "disputed_water_feature", "disputed_wetland"], ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["<=", ["get", "filterrank"], 2], ["==", ["geometry-type"], "Point"]], "type": "symbol", "source": "composite", "id": "natural-point-label", "paint": { "icon-opacity": ["step", ["zoom"], ["step", ["get", "sizerank"], 0, 5, 1], 17, ["step", ["get", "sizerank"], 0, 13, 1]], "text-halo-color": "hsl(35, 19%, 100%)", "text-halo-width": 0.5, "text-halo-blur": 0.5, "text-color": ["step", ["zoom"], ["step", ["get", "sizerank"], "hsl(26, 30%, 45%)", 5, "hsl(26, 35%, 35%)"], 17, ["step", ["get", "sizerank"], "hsl(26, 30%, 45%)", 13, "hsl(26, 35%, 35%)"]] }, "source-layer": "natural_label" }, { "minzoom": 1, "layout": { "text-size": ["interpolate", ["linear"], ["zoom"], 0, ["*", ["-", 16, ["sqrt", ["get", "sizerank"]]], 1], 22, ["*", ["-", 22, ["sqrt", ["get", "sizerank"]]], 1]], "text-max-angle": 30, "text-letter-spacing": ["match", ["get", "class"], "ocean", 0.25, ["sea", "bay"], 0.15, 0], "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"], "symbol-placement": "line-center", "text-pitch-alignment": "viewport", "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]] }, "metadata": { "mapbox:featureComponent": "natural-features", "mapbox:group": "Natural features, natural-labels" }, "filter": ["all", ["match", ["get", "class"], ["bay", "ocean", "reservoir", "sea", "water"], ["match", ["get", "worldview"], ["all", "US"], true, false], ["disputed_bay", "disputed_ocean", "disputed_reservoir", "disputed_sea", "disputed_water"], ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["==", ["geometry-type"], "LineString"]], "type": "symbol", "source": "composite", "id": "water-line-label", "paint": { "text-color": ["match", ["get", "class"], ["bay", "ocean", "sea"], "hsl(196, 76%, 47%)", "hsl(196, 48%, 57%)"], "text-halo-color": "hsla(35, 11%, 99%, 0.5)" }, "source-layer": "natural_label" }, { "minzoom": 1, "layout": { "text-line-height": 1.3, "text-size": ["interpolate", ["linear"], ["zoom"], 0, ["*", ["-", 16, ["sqrt", ["get", "sizerank"]]], 1], 22, ["*", ["-", 22, ["sqrt", ["get", "sizerank"]]], 1]], "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"], "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-letter-spacing": ["match", ["get", "class"], "ocean", 0.25, ["bay", "sea"], 0.15, 0.01], "text-max-width": ["match", ["get", "class"], "ocean", 4, "sea", 5, ["bay", "water"], 7, 10] }, "metadata": { "mapbox:featureComponent": "natural-features", "mapbox:group": "Natural features, natural-labels" }, "filter": ["all", ["match", ["get", "class"], ["bay", "ocean", "reservoir", "sea", "water"], ["match", ["get", "worldview"], ["all", "US"], true, false], ["disputed_bay", "disputed_ocean", "disputed_reservoir", "disputed_sea", "disputed_water"], ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["==", ["geometry-type"], "Point"]], "type": "symbol", "source": "composite", "id": "water-point-label", "paint": { "text-color": ["match", ["get", "class"], ["bay", "ocean", "sea"], "hsl(196, 76%, 47%)", "hsl(196, 48%, 57%)"], "text-halo-color": "hsla(35, 11%, 99%, 0.5)" }, "source-layer": "natural_label" }, { "minzoom": 6, "layout": { "text-size": ["step", ["zoom"], ["step", ["get", "sizerank"], 18, 5, 12], 17, ["step", ["get", "sizerank"], 18, 13, 12]], "icon-image": ["case", ["has", "maki_beta"], ["coalesce", ["image", ["get", "maki_beta"]], ["image", ["get", "maki"]]], ["image", ["get", "maki"]]], "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-offset": ["step", ["zoom"], ["step", ["get", "sizerank"], ["literal", [0, 0]], 5, ["literal", [0, 0.75]]], 17, ["step", ["get", "sizerank"], ["literal", [0, 0]], 13, ["literal", [0, 0.75]]]], "text-anchor": ["step", ["zoom"], ["step", ["get", "sizerank"], "center", 5, "top"], 17, ["step", ["get", "sizerank"], "center", 13, "top"]], "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]] }, "metadata": { "mapbox:featureComponent": "point-of-interest-labels", "mapbox:group": "Point of interest labels, poi-labels" }, "filter": ["<=", ["get", "filterrank"], ["+", ["step", ["zoom"], 0, 16, 1, 17, 2], 3]], "type": "symbol", "source": "composite", "id": "poi-label", "paint": { "icon-opacity": ["step", ["zoom"], ["step", ["get", "sizerank"], 0, 5, 1], 17, ["step", ["get", "sizerank"], 0, 13, 1]], "text-halo-color": ["match", ["get", "class"], "park_like", "hsl(99, 62%, 100%)", "education", "hsl(50, 62%, 100%)", "medical", "hsl(340, 68%, 100%)", "hsl(35, 19%, 100%)"], "text-halo-width": 0.5, "text-halo-blur": 0.5, "text-color": ["step", ["zoom"], ["step", ["get", "sizerank"], ["match", ["get", "class"], "food_and_drink", "hsl(20, 42%, 58%)", "park_like", "hsl(105, 31%, 43%)", "education", "hsl(50, 40%, 40%)", "medical", "hsl(340, 30%, 52%)", "hsl(26, 30%, 45%)"], 5, ["match", ["get", "class"], "food_and_drink", "hsl(20, 74%, 41%)", "park_like", "hsl(105, 30%, 32%)", "education", "hsl(50, 100%, 20%)", "medical", "hsl(340, 39%, 42%)", "hsl(26, 35%, 35%)"]], 17, ["step", ["get", "sizerank"], ["match", ["get", "class"], "food_and_drink", "hsl(20, 42%, 58%)", "park_like", "hsl(105, 31%, 43%)", "education", "hsl(50, 40%, 40%)", "medical", "hsl(340, 30%, 52%)", "hsl(26, 30%, 45%)"], 13, ["match", ["get", "class"], "food_and_drink", "hsl(20, 74%, 41%)", "park_like", "hsl(105, 30%, 32%)", "education", "hsl(50, 100%, 20%)", "medical", "hsl(340, 39%, 42%)", "hsl(26, 35%, 35%)"]]] }, "source-layer": "poi_label" }, { "minzoom": 12, "layout": { "text-size": 12, "icon-image": ["get", "network"], "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-justify": ["match", ["get", "stop_type"], "entrance", "left", "center"], "text-offset": ["match", ["get", "stop_type"], "entrance", ["literal", [1, 0]], ["literal", [0, 0.8]]], "text-anchor": ["match", ["get", "stop_type"], "entrance", "left", "top"], "text-field": ["step", ["zoom"], "", 14, ["match", ["get", "mode"], ["rail", "metro_rail"], ["coalesce", ["get", "name_en"], ["get", "name"]], ""], 16, ["match", ["get", "mode"], ["bus", "bicycle"], "", ["coalesce", ["get", "name_en"], ["get", "name"]]], 18, ["coalesce", ["get", "name_en"], ["get", "name"]]], "text-letter-spacing": 0.01, "text-max-width": ["match", ["get", "stop_type"], "entrance", 15, 9] }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, transit-labels" }, "filter": ["step", ["zoom"], ["all", ["match", ["get", "mode"], "rail", true, "metro_rail", true, false], ["!=", ["get", "stop_type"], "entrance"]], 15, ["all", ["match", ["get", "mode"], "rail", true, "metro_rail", true, "ferry", true, "light_rail", true, false], ["!=", ["get", "stop_type"], "entrance"]], 16, ["all", ["match", ["get", "mode"], "bus", false, true], ["!=", ["get", "stop_type"], "entrance"]], 17, ["!=", ["get", "stop_type"], "entrance"], 19, true], "type": "symbol", "source": "composite", "id": "transit-label", "paint": { "text-halo-color": "hsl(35, 19%, 100%)", "text-color": ["match", ["get", "network"], "tokyo-metro", "hsl(180, 50%, 30%)", "mexico-city-metro", "hsl(25, 100%, 63%)", ["barcelona-metro", "delhi-metro", "hong-kong-mtr", "milan-metro", "osaka-subway"], "hsl(0, 90%, 47%)", ["boston-t", "washington-metro"], "hsl(230, 18%, 20%)", ["chongqing-rail-transit", "kiev-metro", "singapore-mrt", "taipei-metro"], "hsl(140, 90%, 25%)", "hsl(230, 48%, 44%)"], "text-halo-blur": 0.5, "text-halo-width": 0.5 }, "source-layer": "transit_stop_label" }, { "minzoom": 8, "layout": { "text-line-height": 1.1, "text-size": ["step", ["get", "sizerank"], 18, 9, 12], "icon-image": ["get", "maki"], "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-offset": [0, 0.75], "text-rotation-alignment": "viewport", "text-anchor": "top", "text-field": ["case", ["has", "ref"], ["concat", ["get", "name"], "\n(", ["get", "ref"], ")"], ["get", "name"]], "text-letter-spacing": 0.01, "text-max-width": 9 }, "metadata": { "mapbox:featureComponent": "transit", "mapbox:group": "Transit, transit-labels" }, "filter": ["match", ["get", "class"], ["military", "civil"], ["match", ["get", "worldview"], ["all", "US"], true, false], ["disputed_military", "disputed_civil"], ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], "type": "symbol", "source": "composite", "id": "airport-label", "paint": { "text-color": "hsl(230, 48%, 44%)", "text-halo-color": "hsl(230, 34%, 100%)", "text-halo-width": 1 }, "source-layer": "airport_label" }, { "minzoom": 10, "layout": { "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-transform": "uppercase", "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"], "text-letter-spacing": ["match", ["get", "type"], "suburb", 0.15, 0.1], "text-max-width": 7, "text-padding": 3, "text-size": ["interpolate", ["cubic-bezier", 0.5, 0, 1, 1], ["zoom"], 11, ["match", ["get", "type"], "suburb", 11, 10.5], 15, ["match", ["get", "type"], "suburb", 15, 14]] }, "metadata": { "mapbox:featureComponent": "place-labels", "mapbox:group": "Place labels, place-labels" }, "maxzoom": 15, "filter": ["all", ["match", ["get", "class"], "settlement_subdivision", ["match", ["get", "worldview"], ["all", "US"], true, false], "disputed_settlement_subdivision", ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["<=", ["get", "filterrank"], 4]], "type": "symbol", "source": "composite", "id": "settlement-subdivision-label", "paint": { "text-halo-color": "hsla(35, 19%, 100%, 0.75)", "text-halo-width": 1, "text-color": "hsl(230, 29%, 36%)", "text-halo-blur": 0.5 }, "source-layer": "place_label" }, { "minzoom": 2, "layout": { "text-line-height": 1.1, "text-size": ["interpolate", ["cubic-bezier", 0.2, 0, 0.9, 1], ["zoom"], 3, ["step", ["get", "symbolrank"], 12, 9, 11, 10, 10.5, 12, 9.5, 14, 8.5, 16, 6.5, 17, 4], 13, ["step", ["get", "symbolrank"], 23, 9, 21, 10, 19, 11, 17, 12, 16, 13, 15, 15, 13]], "text-radial-offset": ["step", ["zoom"], ["match", ["get", "capital"], 2, 0.6, 0.55], 8, 0], "icon-image": ["step", ["zoom"], ["case", ["==", ["get", "capital"], 2], "border-dot-13", ["step", ["get", "symbolrank"], "dot-11", 9, "dot-10", 11, "dot-9"]], 8, ""], "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"], "text-justify": "auto", "text-anchor": ["step", ["zoom"], ["get", "text_anchor"], 8, "center"], "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-max-width": 7 }, "metadata": { "mapbox:featureComponent": "place-labels", "mapbox:group": "Place labels, place-labels" }, "maxzoom": 13, "filter": ["all", ["<=", ["get", "filterrank"], 3], ["match", ["get", "class"], "settlement", ["match", ["get", "worldview"], ["all", "US"], true, false], "disputed_settlement", ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["step", ["zoom"], [">", ["get", "symbolrank"], 6], 4, [">=", ["get", "symbolrank"], 7], 6, [">=", ["get", "symbolrank"], 8], 7, [">=", ["get", "symbolrank"], 10], 10, [">=", ["get", "symbolrank"], 11], 11, [">=", ["get", "symbolrank"], 13], 12, [">=", ["get", "symbolrank"], 15]]], "type": "symbol", "source": "composite", "id": "settlement-minor-label", "paint": { "text-color": "hsl(230, 29%, 0%)", "text-halo-color": "hsl(35, 19%, 100%)", "text-halo-width": 1, "text-halo-blur": 1 }, "source-layer": "place_label" }, { "minzoom": 2, "layout": { "text-line-height": 1.1, "text-size": ["interpolate", ["cubic-bezier", 0.2, 0, 0.9, 1], ["zoom"], 3, ["step", ["get", "symbolrank"], 13, 6, 12], 6, ["step", ["get", "symbolrank"], 16, 6, 15, 7, 14], 8, ["step", ["get", "symbolrank"], 18, 9, 17, 10, 15], 15, ["step", ["get", "symbolrank"], 23, 9, 22, 10, 20, 11, 18, 12, 16, 13, 15, 15, 13]], "text-radial-offset": ["step", ["zoom"], ["match", ["get", "capital"], 2, 0.6, 0.55], 8, 0], "icon-image": ["step", ["zoom"], ["case", ["==", ["get", "capital"], 2], "border-dot-13", ["step", ["get", "symbolrank"], "dot-11", 9, "dot-10", 11, "dot-9"]], 8, ""], "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-justify": ["step", ["zoom"], ["match", ["get", "text_anchor"], ["left", "bottom-left", "top-left"], "left", ["right", "bottom-right", "top-right"], "right", "center"], 8, "center"], "text-anchor": ["step", ["zoom"], ["get", "text_anchor"], 8, "center"], "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-max-width": 7 }, "metadata": { "mapbox:featureComponent": "place-labels", "mapbox:group": "Place labels, place-labels" }, "maxzoom": 15, "filter": ["all", ["<=", ["get", "filterrank"], 3], ["match", ["get", "class"], "settlement", ["match", ["get", "worldview"], ["all", "US"], true, false], "disputed_settlement", ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], ["step", ["zoom"], false, 2, ["<=", ["get", "symbolrank"], 6], 4, ["<", ["get", "symbolrank"], 7], 6, ["<", ["get", "symbolrank"], 8], 7, ["<", ["get", "symbolrank"], 10], 10, ["<", ["get", "symbolrank"], 11], 11, ["<", ["get", "symbolrank"], 13], 12, ["<", ["get", "symbolrank"], 15], 13, [">=", ["get", "symbolrank"], 11], 14, [">=", ["get", "symbolrank"], 15]]], "type": "symbol", "source": "composite", "id": "settlement-major-label", "paint": { "text-color": "hsl(230, 29%, 0%)", "text-halo-color": "hsl(35, 19%, 100%)", "text-halo-width": 1, "text-halo-blur": 1 }, "source-layer": "place_label" }, { "minzoom": 3, "layout": { "text-size": ["interpolate", ["cubic-bezier", 0.85, 0.7, 0.65, 1], ["zoom"], 4, ["step", ["get", "symbolrank"], 10, 6, 9.5, 7, 9], 9, ["step", ["get", "symbolrank"], 21, 6, 16, 7, 13]], "text-transform": "uppercase", "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"], "text-field": ["step", ["zoom"], ["step", ["get", "symbolrank"], ["coalesce", ["get", "name_en"], ["get", "name"]], 5, ["coalesce", ["get", "abbr"], ["get", "name_en"], ["get", "name"]]], 5, ["coalesce", ["get", "name_en"], ["get", "name"]]], "text-letter-spacing": 0.15, "text-max-width": 6 }, "metadata": { "mapbox:featureComponent": "place-labels", "mapbox:group": "Place labels, place-labels" }, "maxzoom": 9, "filter": ["match", ["get", "class"], "state", ["match", ["get", "worldview"], ["all", "US"], true, false], "disputed_state", ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], "type": "symbol", "source": "composite", "id": "state-label", "paint": { "text-color": "hsl(230, 29%, 0%)", "text-halo-color": "hsl(35, 19%, 100%)", "text-halo-width": 1 }, "source-layer": "place_label" }, { "minzoom": 1, "layout": { "icon-image": "", "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-line-height": 1.1, "text-max-width": 6, "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-radial-offset": ["step", ["zoom"], 0.6, 8, 0], "text-justify": ["step", ["zoom"], ["match", ["get", "text_anchor"], ["left", "bottom-left", "top-left"], "left", ["right", "bottom-right", "top-right"], "right", "center"], 7, "auto"], "text-size": ["interpolate", ["cubic-bezier", 0.2, 0, 0.7, 1], ["zoom"], 1, ["step", ["get", "symbolrank"], 11, 4, 9, 5, 8], 9, ["step", ["get", "symbolrank"], 22, 4, 19, 5, 17]] }, "metadata": { "mapbox:featureComponent": "place-labels", "mapbox:group": "Place labels, place-labels" }, "maxzoom": 10, "filter": ["match", ["get", "class"], "country", ["match", ["get", "worldview"], ["all", "US"], true, false], "disputed_country", ["all", ["==", ["get", "disputed"], "true"], ["match", ["get", "worldview"], ["all", "US"], true, false]], false], "type": "symbol", "source": "composite", "id": "country-label", "paint": { "icon-opacity": ["step", ["zoom"], ["case", ["has", "text_anchor"], 1, 0], 7, 0], "text-color": "hsl(230, 29%, 0%)", "text-halo-color": ["interpolate", ["linear"], ["zoom"], 2, "hsla(35, 19%, 100%, 0.75)", 3, "hsl(35, 19%, 100%)"], "text-halo-width": 1.25 }, "source-layer": "place_label" }, { "minzoom": 0.75, "layout": { "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]], "text-line-height": 1.1, "text-max-width": 6, "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"], "text-size": ["interpolate", ["exponential", 0.5], ["zoom"], 0, 10, 2.5, 15], "text-transform": "uppercase", "text-letter-spacing": 0.05 }, "metadata": { "mapbox:featureComponent": "place-labels", "mapbox:group": "Place labels, place-labels" }, "maxzoom": 3, "filter": ["==", ["get", "class"], "continent"], "type": "symbol", "source": "composite", "id": "continent-label", "paint": { "text-color": "hsl(230, 29%, 0%)", "text-halo-color": ["interpolate", ["linear"], ["zoom"], 0, "hsla(35, 19%, 100%, 0.75)", 3, "hsl(35, 19%, 100%)"], "text-halo-width": 1.5, "text-opacity": ["interpolate", ["linear"], ["zoom"], 0, 0.8, 1.5, 0.5, 2.5, 0] }, "source-layer": "natural_label" }], "created": "2022-07-21T09:45:28.597Z", "modified": "2022-07-21T09:46:26.926Z", "id": "cl5uulddi002215l38x5mn5xf", "owner": "mapbox-map-design", "visibility": "public", "protected": false, "draft": false } // style URL for Mapbox Light

// mapboxgl.setRTLTextPlugin(
//   'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
//   null,
//   true // Lazy load the plugin
//   );
mapboxgl.accessToken = 'pk.eyJ1IjoibWF6ZW54ZWxnYXlhciIsImEiOiJjbDV3eDEwejAwZmU3M2NwaXU4YzY5dTE0In0.ywGQXbcUzmKG1zk8e8ZYyg';
var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/mapbox/streets-v11',
    center: [32.276847, 30.606981],
    zoom: 13,
    
});




var locae = new mapboxgl.GeolocateControl({positionOptions: {enableHighAccuracy: true},
  // When active the map will receive updates to the device's location as it changes.
  trackUserLocation: true,
  // Draw an arrow next to the location dot to indicate which direction the device is heading.
  showUserHeading: true
  })
  map.addControl(locae, 'bottom-right');
  map.addControl(new mapboxgl.NavigationControl(),'top-left');
  class HomeButton {
    onAdd(map) {
        this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
    // this._container.addEventListener('contextmenu', (e) => e.preventDefault());
    this._container.onclick = function() {
        if (document.getElementById("23d").checked) {
            document.getElementById("23d").checked = false;
            document.getElementById("togle23d").innerHTML = "<b>3d</b>";
        } else {
            document.getElementById("23d").checked = true;
            document.getElementById("togle23d").innerHTML = "<b>2d</b>";
        }
        
        if(document.getElementById("23d").checked){
            map.easeTo({bearing:-17.6,pitch: 60, duration: 500});
            
        // Insert the layer beneath any symbol layer.
        const layers = map.getStyle().layers;
        const labelLayerId = layers.find(
            (layer) => layer.type === 'symbol' && layer.layout['text-field']
        ).id;
  
        // The 'building' layer in the Mapbox Streets
        // vector tileset contains building height data
        // from OpenStreetMap.
        map.addLayer(
            {
                'id': 'add-3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',
  
                    // Use an 'interpolate' expression to
                    // add a smooth transition effect to
                    // the buildings as the user zooms in.
                    'fill-extrusion-height': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'height']
                    ],
                    'fill-extrusion-base': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            },
            labelLayerId
        );
        }else{
            map.easeTo({bearing:0,pitch: 0, duration: 500});
  
            map.removeLayer('add-3d-buildings')
        }
    // });
    }
  
    this._container.innerHTML =
      '<div class="tools-box">' +
        '<input type="checkbox" id="23d" style="display: none;">'+
      '<button>' +
      '<span id="togle23d" class="mapboxgl-ctrl-icon my-image-button" aria-hidden="true" title="Description"  style="display: flex;align-items: center;justify-content: center;"><b>3d</b></span>' +
      '</button>' +
      '</div>';
  
    return this._container;
    }
  }
  map.addControl(new HomeButton(), "bottom-right");

  const geocoer = new MapboxGeocoder({
    // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: false, // Do not use the default marker style
    // placeholder: 'Search for places in Berkeley', // Placeholder text for the search bar
    // bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
    // proximity: {
    //   longitude: -122.25948,
    //   latitude: 37.87221
    // } // Coordinates of UC Berkeley
  });

  map.addControl(geocoer);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
var i = document.createElement('img')
i.src = "../imgs/mark.png"
i.style.cursor = 'pointer'
var marker = new mapboxgl.Marker(i).setLngLat(map.getCenter()).addTo(map);
map.on('move', function (e) {
    console.log(`Current Map Center: ${map.getCenter()}`);
    marker.setLngLat(map.getCenter());
});

i.addEventListener("click", function()
{
  // document.getElementById("map").style.width = "0%"
  // document.getElementById("map").style.height = "0%"
  // document.getElementById("map").style.top = "50%"
  map.dragPan.disable()
  document.getElementById("map").style.visibility = "hidden"
  document.getElementById("map").style.opacity = "0"
  
  console.log(map.getCenter())
  document.getElementById("test").innerHTML =" LNG " +  map.getCenter().lng + "<br><br>LAT " + map.getCenter().lat
  validate_location = true;
})

// map.on('moveend', function (e) {
//     console.log(`Current Map Center: ${map.getCenter()}`);
//     marker.setLngLat(map.getCenter());
// });

// map.on('click', (e) => {
  
//   console.log(JSON.stringify(e.lngLat.wrap()))
//   });
window.onload = function(){ 
  if (opid==null) {
    window.location.replace('../sign/index.html');

  }  
  const starCountRef2 = ref(db2, '/');
  // onDisconnect(starCountRef2).set(serverTimestamp());
onValue(starCountRef2, (snapshot2) => {
  const P = snapshot2.val();
  window.profile = []
  window.pic = P[opid]['profilepic']
  // console.log
  // document.getElementsByClassName("profile-pic")[0].src=pic;
  // $('.profile-pic').attr('src', e.target.result);
document.getElementById("profilepic").src = pic;
    
  })
  // document.getElementById("inner_tokens").innerHTML=MYID  //document.getElementById("menu_addressssAndClose").src==""
const starCountRef3 = ref(db2, '/' + opid + '/tokens');
onValue(starCountRef3, (snapshot) => {
  const da = snapshot.val();
  document.getElementById("inner_tokens").innerHTML=da  //document.getElementById("menu_addressssAndClose").src==""
});

    
    // document.getElementById("map").style.display = "none"
    // document.getElementById("map").style.width = "0%"
    // document.getElementById("map").style.height = "0%"
    // document.getElementById("map").style.position = "fixed"
    // document.getElementById("map").style.top = "50%"
    map.dragPan.disable()
    document.getElementById("map").style.visibility = "hidden"
    document.getElementById("map").style.opacity = "0"
    
    if (Dark=="true") {
    r.style.setProperty('--TitleParbackground-color', 'black');
    r.style.setProperty('--ATitleParbackground-color', 'black');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)');
    r.style.setProperty('--Apartment', '#151515');
    r.style.setProperty('--FontColor', 'white');
    // r.style.setProperty('--IconColor','blue');
    r.style.setProperty('--IconColor','white');

    r.style.setProperty('--menu','black');
    r.style.setProperty('--BodyBackground','gray');
    r.style.setProperty('--PreloaderBackground','black');
    // map.setStyle('mapbox://styles/mapbox/dark-v11');
    map.setStyle(xyz);
    document.getElementById("SAMSARLYLOGOo").src="../imgs/dd.jpg"


  } else {
    r.style.setProperty('--TitleParbackground-color', '#526DA1');
    r.style.setProperty('--ATitleParbackground-color', '#526DA1');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff)');
    r.style.setProperty('--Apartment', '#eee');
    r.style.setProperty('--FontColor', '#526DA1');
    // r.style.setProperty('--IconColor','white');
    r.style.setProperty('--IconColor','#526DA1');

    r.style.setProperty('--menu','#526DA1');
    r.style.setProperty('--BodyBackground','white');
    r.style.setProperty('--PreloaderBackground','white');
    map.setStyle('mapbox://styles/mapbox/streets-v12');
    document.getElementById("SAMSARLYLOGOo").src="../imgs/l.jpg"

  }
  // document.body.style.flexDirection = "column";
  // document.body.style.alignItems = "center";
   

  //   var pic = localStorage.getItem("pic")
   
  // if (pic == null) {
  //       document.getElementById("profilepic").src = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
  //   }
  //   else {
      
  //     document.getElementById("profilepic").src = pic;
  //   }
    






  





    var b = document.getElementById("MyPropertiesBody");
    // fetch('../database/csvjson.json')
    // .then(function(response) {
      
    // console.log(response)
    
    // return response.json();
    
    // })
    // .then(function(d) {
      // const starCountRef = ref(db, '/');
      get(child(ref(db), '/')).then((snapshot) => {
  const d = snapshot.val();
  window.SH = []
  for(var key in d) {
    // d.innerHTML=SH.stringify(d[key]); 
    SH.push(d[key])
  }
  console.log(SH)
  
      // SH = d;
      console.log(SH)
if (SH.length!=0) {
        SH.forEach(({host_id,id,name,address,price,rooms,location,neighbourhood,imgs,latitude,longitude,number_of_rooms,number_of_bathrooms,furnished,gas,state})=>{
        if (host_id==MYID) {/////////////////////////////////this should be the user id
            var p = document.createElement("div")
            p.style.width="100%";
            p.style.height="15%";
            p.style.borderRadius="15px";
            p.style.marginTop="20px"
            p.style.padding="10px 10px"
            p.style.cursor="pointer"
            Dark=="true"?p.style.backgroundColor="#000000b3":p.style.backgroundColor="rgb(82 109 161 / 65%)";
            // Dark=="true"?p.style.backgroundColor="black":p.style.backgroundColor="#526DA1";
            p.style.Color="black";
            p.style.fontSize="30px"
            // var c = document.createElement("p")
            // c.setAttribute("lng-tag", 'lng-tag');
            // p.appendChild(c);

            // p.innerHTML="<div style=\"display: flex;\"><p lng-tag=\"apart_name\"></p> <p>:&nbsp"+name+"</p></div>"
            // b.appendChild(p)
            // p.addEventListener('click',function(){
var clip = document.createElement("div")
              clip.innerHTML="<div style='width: -webkit-fill-available;'><div style=\"display: flex;\"><p lng-tag=\"apart_name\"></p> <p>:&nbsp"+name+"</p></div>"
              clip.style.width='-webkit-fill-available'
              p.style.display='flex'
              p.style.justifyContent='space-between'

              var Xp = document.createElement("div")
              Xp.style.backgroundColor='red';
              Xp.style.height='90%';
              Xp.style.width = '25%';
              Xp.innerHTML='X';
              Xp.style.fontSize = '24px'
              Xp.style.padding='2%'
              Xp.style.borderRadius='26px'
              Xp.style.display='flex'
              Xp.style.justifyContent='center'
              Xp.style.alignItems='center'
              Xp.style.transition = "all 0.5s";

              b.appendChild(p)
              p.appendChild(clip)
              p.appendChild(Xp)

              Xp.addEventListener('mouseover',function(){
                Xp.style.height='100%';
              Xp.style.width = '30%';
              })

              Xp.addEventListener('mouseout',function(){
                Xp.style.height='90%';
              Xp.style.width = '25%';
              })

              Xp.addEventListener('click',function(){
                get(child(ref(db), '/')).then((snapshot) => {
                  // console.log(snapshot.val());
                  window.dataa = snapshot.val();
                  for (var key in dataa) {
                    if (id == dataa[key]['id']) {
                        console.log('1')
                        console.log('2')
                        remove(ref(getDatabase(app), `/${key}`))
                        break;
    
                    }
                }
              }).catch((error) => {
                console.error(error);
              });
                // console.log(savedpages.indexOf(savedpages[ss]))
                // orderByChild(ref(getDatabase(app2), `/${opid}/savedapp/${0}`)).equalTo(savedpages[ss]);
                // dataRef.once('value', (snapshot) => {
                //     snapshot.forEach((userSnapshot) => {
                //         console.log(userSnapshot.val());
                //     });
                // });
                // remove(dbRef, opid+'/savedapp/')
                // console.log(key)
                // savedpagesno.pop()
                p.remove();
                // savedpages.splice(savedpages.indexOf(id), 1);
                // localStorage.setItem('savedpages', JSON.stringify(savedpages));
                // console.log(savedpages.length)

                // if (savedpagesno.length==0) {
                //   console.log(savedpages.length)

                //   b.innerHTML="<div style='width:100%;display: flex;justify-content: center;'><h1 lng-tag='nosave'></h1></div>"
                //   if(L=='ar'){
                //     translate(L,'lng-tag');  
                //     document.body.dir="rtl" 
                //     // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
                //     r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
                //     r.style.setProperty('--cp2', 'circle(75%)');
                //     // document.getElementById("titlepadding").style.paddingRight="0%"
                //     // document.getElementById("titlepadding").style.paddingLeft="8%"
              
                //   }else if(L==null){
                //     translate('en','lng-tag'); 
                //     document.body.dir="ltr" 
                //     // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
                //     r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
                //     r.style.setProperty('--cp2', 'circle(75%)');
                //     // document.getElementById("titlepadding").style.paddingLeft="0%"
                //     // document.getElementById("titlepadding").style.paddingRight="13%"
              
                //   }else{
                //     // translate('en','lng-tag'); 
                //     translate(L,'lng-tag');  
                //     document.body.dir="ltr" 
                //     // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
                //     r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
                //     r.style.setProperty('--cp2', 'circle(75%)');
                //     // document.getElementById("titlepadding").style.paddingLeft="0%"
                //     // document.getElementById("titlepadding").style.paddingRight="13%"
              
                //   }
                // }
              })

              clip.addEventListener('click',function(){




              var addresss = document.getElementById("addresss");
              var pricee = document.getElementById("pricee");
              var roomss = document.getElementById("roomss");
              var bathroomss = document.getElementById("bathroomss");
              var gass = document.getElementById("gass");
              var furnishedd = document.getElementById("furnishedd");
              var ApartmentImagess = document.getElementById("ApartmentImagesPar");
              if (state=="rent") {
                
                // document.getElementById('state').setAttribute('lng-tag','rent')
                document.getElementById('state').setAttribute('lng-tag','rent')
              } else {
                // document.getElementById('state').setAttribute('lng-tag','sell')    
                document.getElementById('state').setAttribute('lng-tag','sell')
    
              }



              // map.on('click', 'places', (e) => {
                // map.on('click', function(e) {
                //   var coordinates = e.lngLat;
                // for (let i = 0; i < SH.length; i++) {
                //   addresss.innerHTML = address;
                //   pricee.innerHTML = price;
                //   roomss.innerHTML = rooms;
                //   var cDivimgs = ApartmentImagess.children;
           
                // }
                // addresss.innerHTML = address;
                // pricee.innerHTML = price;
                // roomss.innerHTML = rooms;
          
                addresss.innerHTML = neighbourhood;
                pricee.innerHTML = price;
                roomss.innerHTML = number_of_rooms;
                bathroomss.innerHTML = number_of_bathrooms;
          
                if (gas=="yes") {
                  gass.setAttribute("class", "fas fa-check");
                  gass.setAttribute("style", "cursor: auto;");
                  // gass.disabled = true;
                } else {
                  gass.setAttribute("class", "fas fa-close");
                  gass.setAttribute("style", "cursor: auto;");
          
                  // gass.disabled = true;
          
                }
                if (furnished=="yes") {
                  furnishedd.setAttribute("class", "fas fa-check");
                  furnishedd.setAttribute("style", "cursor: auto;");
          
                  // furnishedd.disabled = true;
          
          
                } else {
                  furnishedd.setAttribute("class", "fas fa-close");
                  furnishedd.setAttribute("style", "cursor: auto;");
          
                  // furnishedd.disabled = true;
          
          
                }
                // var cDivimgs = ApartmentImagess.children;
                // for (var g = 0; g < cDivimgs.length; g++) {
                //   //cDiv[g].style.transition = "visibility 0s";
                //   // cDiv[g].style.visibility= "hidden";  //do styling here
                //   cDivimgs[g].remove();
                // }
                      ApartmentImagess.innerHTML="";
                      // console.log(imgs)
                    //  var images = imgs.replace(/[\[\]']+/g,'').replaceAll('"', '').split(",");
                    //  console.log(images)
                for (let j = 0; j < imgs.length; j++) {
                  // console.log(imgs.length);
                  // console.log(j);
                  var img = document.createElement("img");
                  // var dvi = document.createElement("div")
                  img.setAttribute('src',imgs[j])
                  img.setAttribute('width','100%');//500px
                  img.setAttribute('height','100%');//200px
                  img.style.padding="10px"
                  // dvi.innerHTML = "lk;k"
                  // dvi.style.backgroundColor = "blue";
                  // dvi.style.padding = "10px";
                  
                  // dvi.setAttribute("width","200px");
                  // dvi.setAttribute("height","10px")
                  
                  ApartmentImagess.appendChild(img);
                  // ApartmentImagess.appendChild(dvi);
                  //ApartmentImagess.innerHTML = "<img srs = \'"++"\>'";
                  
                }
                // });
                
                // if (d.style.display === "none") {
                //   d.style.display = "block";
                // } else {
                //   d.style.display = "none";
                // }
          
                // if (d.style.width="0") {
                //   d.style.width="57vw";
                // } else {
                //   d.style.width="0px";
                // }
                //x.style.display = "block";
                document.getElementById("div").style.transition = "width 0.5s,height 0.5s";
                addresss.style.transition = "width 0.5s";
                pricee.style.transition = "width 0.5s";
                roomss.style.transition = "width 0.5s";
                
                // function responsive(x) {
                //   if (x.matches) { // If media query matches
                //     document.getElementById("div").style.width="57vw";//570
                //     document.getElementById("div").style.height="640px";//500//570
                //     addresss.style.width="482px";
                //     pricee.style.width="176px";
                //     roomss.style.width="176px";
                //     ApartmentImagess.style.height='50%';
                    
                //     } else {
                //     document.getElementById("div").style.width="270px";//570
                //     document.getElementById("div").style.height="560px";//500//570/420
                //     addresss.style.width="182px";
                //     pricee.style.width="56px";
                //     roomss.style.width="56px";
                //     ApartmentImagess.style.height='35%';
                //     if (L=='ar') {
                //       document.getElementsByClassName("XBTN")[0].style.right = '86%'
                //     }
                //   }
                // }
          
                // var x = window.matchMedia("(min-width: 600px)")
                // responsive(x) 
                // x.addListener(responsive)
          
          
                // function responsive(x) {
                //   if (x.matches) { // If media query matches
                //     document.getElementById("divPar").style.width="57vw";//570
                //     document.getElementById("divPar").style.height="85vh";//500//570/640
                //     addresss.style.width="482px";
                //     pricee.style.width="176px";
                //     roomss.style.width="176px";
                //     ApartmentImagess.style.height='50%';
                    
                //     } else {
                    
                // function responsiv(y) {
                  
                //   if (y.matches) { // If media query matches
                //     console.log(y.matches)
                //     document.getElementById("divPar").style.width="568px";//570
                //     document.getElementById("divPar").style.height="78vh";//500//570
                //     addresss.style.width="482px";
                //     pricee.style.width="176px";
                //     roomss.style.width="176px";
                //     ApartmentImagess.style.height='100%';
                    
                //     } else {
                //       console.log(y.matches)
                //     document.getElementById("divPar").style.width="270px";//570
                //     document.getElementById("divPar").style.height="86vh";//500//570
                //     addresss.style.width="182px";
                //     pricee.style.width="56px";
                //     roomss.style.width="56px";
                //     ApartmentImagess.style.height='34%';
                //     if (L=='ar') {
                //       document.getElementsByClassName("XBTN")[0].style.right = '86%'
                //     }
                //   }
               
                // }
          
                // var y = window.matchMedia("(max-width: 800px) and (orientation : landscape)")
                // responsiv(y) 
                // y.addListener(function () {
          
                //   if(document.getElementById("ApartmentTitleParPar").getAttribute("class")=="m-fadeIn"){
                //   responsiv(y)
                // }
                // })
                //   }
                // }
          
                // var x = window.matchMedia("(min-height: 700px")
                // responsive(x) 
                function responsive(x) {
                  if (x.matches) { // If media query matches
                    document.getElementById("divPar").style.width="57vw";//570
                    document.getElementById("divPar").style.height="85vh";//500//570
                    addresss.style.width="482px";
                    pricee.style.width="176px";
                    roomss.style.width="176px";
                    ApartmentImagess.style.height='50%';
                    } else {
                    document.getElementById("divPar").style.width="86vw";//570
                    document.getElementById("divPar").style.height="78vh";//500//570
                    addresss.style.width="182px";
                    pricee.style.width="56px";
                    roomss.style.width="56px";
                    ApartmentImagess.style.height='100%';//35%
                    if (L=='ar') {
                            document.getElementById("XBTNPar").style.right = '86%'
                          }
                  }
                }
            
                var x = window.matchMedia("(min-width: 800px)")
                responsive(x)
            
                x.addListener(responsive)
          
          
                //document.getElementById("div").style.top = screen.height + "px";
                //addresss.display="block";
                var cDivPar = document.getElementById('divPar').children;
                for (var i = 0; i < cDivPar.length; i++) {
                    //cDivPar[i].style.transition = "visibility 10s";
                    //cDivPar[i].style.visibility= "visible";  //do styling here
                    cDivPar[i].setAttribute("class","m-fadeIn");
                }
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          window.cord = [longitude,latitude];
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              
          
              // })
          
          // });
          
          
            // })






            if(L=='ar'){
              translate(L,'lng-tag');  
              document.body.dir="rtl" 
              // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
              r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
              r.style.setProperty('--cp2', 'circle(75%)');
              document.getElementById("titlepadding").style.paddingRight="0%"
              document.getElementById("titlepadding").style.paddingLeft="8%"
        
            }else if(L==null){
              translate('en','lng-tag'); 
              document.body.dir="ltr" 
              // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
              r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
              r.style.setProperty('--cp2', 'circle(75%)');
              document.getElementById("titlepadding").style.paddingLeft="0%"
              document.getElementById("titlepadding").style.paddingRight="13%"
        
            }else{
              // translate('en','lng-tag'); 
              translate(L,'lng-tag');  
              document.body.dir="ltr" 
              // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
              r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
              r.style.setProperty('--cp2', 'circle(75%)');
              document.getElementById("titlepadding").style.paddingLeft="0%"
              document.getElementById("titlepadding").style.paddingRight="13%"
        
            }
            


            })
        }
        document.getElementById("PreLoader").style.display="none";

    })
} else {
  // document.getElementById('MyPropertiesBody').innerHTML='There is no Appartment';
  document.getElementById("PreLoader").style.display="none";

}

    
if (L=='ar') {
  
  document.getElementsByClassName("toggler-knob")[0].setAttribute('yes', 'ايجار');
  document.getElementsByClassName("toggler-knob")[0].setAttribute('no', 'بيع');
} else if(L=='en'||L==null) {
  
  document.getElementsByClassName("toggler-knob")[0].setAttribute('yes', 'rent');
  document.getElementsByClassName("toggler-knob")[0].setAttribute('no', 'sell');
}else if(L=='es') {
  
  document.getElementsByClassName("toggler-knob")[0].setAttribute('yes', 'alquilar');
  document.getElementsByClassName("toggler-knob")[0].setAttribute('no', 'vender');
}else if(L=='tr') {
  
  document.getElementsByClassName("toggler-knob")[0].setAttribute('yes', 'kira');
  document.getElementsByClassName("toggler-knob")[0].setAttribute('no', 'satmak');
}else if(L=='fr') {
  
  document.getElementsByClassName("toggler-knob")[0].setAttribute('yes', 'louer');
  document.getElementsByClassName("toggler-knob")[0].setAttribute('no', 'vendre');
}else if(L=='de') {
  
  document.getElementsByClassName("toggler-knob")[0].setAttribute('yes', 'mieten');
  document.getElementsByClassName("toggler-knob")[0].setAttribute('no', 'verkaufen');
}
    if(L=='ar'){
      translate(L,'lng-tag');  
      document.body.dir="rtl" 
      // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
      r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
      r.style.setProperty('--cp2', 'circle(75%)');
      document.getElementById("titlepadding").style.paddingRight="0%"
      document.getElementById("titlepadding").style.paddingLeft="8%"

    }else if(L==null){
      translate('en','lng-tag'); 
      document.body.dir="ltr" 
      // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
      r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
      r.style.setProperty('--cp2', 'circle(75%)');
      document.getElementById("titlepadding").style.paddingLeft="0%"
      document.getElementById("titlepadding").style.paddingRight="13%"

    }else{
      // translate('en','lng-tag'); 
      translate(L,'lng-tag');  
      document.body.dir="ltr" 
      // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
      r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
      r.style.setProperty('--cp2', 'circle(75%)');
      document.getElementById("titlepadding").style.paddingLeft="0%"
      document.getElementById("titlepadding").style.paddingRight="13%"

    }
    });
    



    // document.getElementById("PreLoader").style.display="none";



  }
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
        console.log('jh')
    }
    
}
document.getElementsByClassName('addapp')[0].addEventListener('click',addappartement)

  function addappartement(){
    document.getElementById("div").style.transition = "width 0.5s,height 0.5s";
    // function responsive(x) {
    //   if (x.matches) { // If media query matches
    //     document.getElementById("div").style.width="57vw";//570
    //     document.getElementById("div").style.height="570px";//500//570
    //     // document.getElementsByClassName("mapboxgl-canvas")[0].style.width="100%";
    //     // document.getElementsByClassName("mapboxgl-canvas")[0].style.height="100%";
    //     // ApartmentImagess.style.height='50%';
    //     } else {
    //     document.getElementById("div").style.width="270px";//570
    //     document.getElementById("div").style.height="420px";//500//570
        
    //     // ApartmentImagess.style.height='35%';

    //   }
    // }

    // var x = window.matchMedia("(min-width: 600px)")
    // responsive(x) 

    // function responsive(x) {
    //   if (x.matches) { // If media query matches
    //     document.getElementById("div").style.width="57vw";//570
    //     document.getElementById("div").style.height="85vh";//500//570
        
    //     // ApartmentImagess.style.height='50%';
        
    //     } else {
        
    // function responsiv(y) {
      
    //   if (y.matches) { // If media query matches
    //     console.log(y.matches)
    //     document.getElementById("div").style.width="568px";//570
    //     document.getElementById("div").style.height="78vh";//500//570
        
    //     // ApartmentImagess.style.height='100%';
        
    //     } else {
    //       console.log(y.matches)
    //     document.getElementById("div").style.width="270px";//570
    //     document.getElementById("div").style.height="86vh";//500//570
        
    //     // ApartmentImagess.style.height='100%';
        
    //   }
   
    // }

    // var y = window.matchMedia("(max-width: 800px) and (orientation : landscape)")
    // responsiv(y) 
    // y.addListener(function () {

    //   if(document.getElementById("ApartmentTitlePar").getAttribute("class")=="m-fadeIn"){
    //   responsiv(y)
    // }
    // })
    //   }
    // }

    // var x = window.matchMedia("(min-height: 700px")
    // responsive(x) 
    function responsive(x) {
      if (x.matches) { // If media query matches
        document.getElementById("div").style.width="57vw";//570
        document.getElementById("div").style.height="85vh";//500//570
        addresss.style.width="482px";
        pricee.style.width="176px";
        roomss.style.width="176px";
        document.getElementById("selectedimages").style.height='50%';
        } else {
        document.getElementById("div").style.width="86vw";//570
        document.getElementById("div").style.height="78vh";//500//570
        addresss.style.width="182px";
        pricee.style.width="56px";
        roomss.style.width="56px";
        document.getElementById("selectedimages").style.height='100%';//35%
        // if (L=='ar') {
        //         document.getElementsByClassName("XBTN")[0].style.right = '86%'
        //       }
      }
    }

    var x = window.matchMedia("(min-width: 800px)")
    responsive(x)

    x.addListener(responsive)


    // x.addListener(responsive)
    //document.getElementById("div").style.top = screen.height + "px";
    //addresss.display="block";
    var cDiv = d.children;
    for (var i = 0; i < cDiv.length; i++) {
        //cDiv[i].style.transition = "visibility 10s";
        //cDiv[i].style.visibility= "visible";  //do styling here
        cDiv[i].setAttribute("class","m-fadeIn");
    }


    // removeAllChildNodes(document.getElementById("MyPropertiesBody"))
    // document.getElementById("map").style.width = "100%"
    // document.getElementById("map").style.height = "100%"
    // document.getElementById("map").style.top = "0%"

    // document.getElementById("map").style.transition = "all 0.5s";

    // document.getElementById("map").style.display = "block"
  }

  document.getElementById('XBTN').addEventListener('click',Xbtn)

  function Xbtn(elm) {
    //document.getElementById(elm.addresssentNode.id).style.display="none"
    //x.style.display = "none";
    d.style.height="0px";
    d.style.width="0px";
    
     // console.log("ali");
     var cDiv = d.children;
         for (var i = 0; i < cDiv.length; i++) {
             //cDiv[i].style.transition = "visibility 0s";
             // cDiv[i].style.visibility= "hidden";  //do styling here
             cDiv[i].setAttribute("class","m-fadeOut");
         }
  //    var cDivimgs = ApartmentImagess.children; //ملهاش لازمة
  //    for (var g = 0; g < cDivimgs.length; g++) {
  //      //cDiv[g].style.transition = "visibility 0s";
  //      // cDiv[g].style.visibility= "hidden";  //do styling here
  //      cDivimgs[g].remove();
  //  }
   // document.getElementById("32.274186,30.607398").remove();
   }
   document.getElementById('XBTNPar').addEventListener('click',XbtnPar)
   function XbtnPar(elm) {
    //document.getElementById(elm.addresssentNode.id).style.display="none"
    //x.style.display = "none";
    document.getElementById('divPar').style.height="0px";
    document.getElementById('divPar').style.width="0px";
    
     // console.log("ali");
     var cDivPar = document.getElementById('divPar').children;
         for (var i = 0; i < cDivPar.length; i++) {
             //cDivPar[i].style.transition = "visibility 0s";
             // cDivPar[i].style.visibility= "hidden";  //do styling here
             cDivPar[i].setAttribute("class","m-fadeOut");
         }
  //    var cDivimgs = ApartmentImagess.children; //ملهاش لازمة
  //    for (var g = 0; g < cDivimgs.length; g++) {
  //      //cDiv[g].style.transition = "visibility 0s";
  //      // cDiv[g].style.visibility= "hidden";  //do styling here
  //      cDivimgs[g].remove();
  //  }
   // document.getElementById("32.274186,30.607398").remove();
   }

   document.getElementsByClassName('map_open')[0].addEventListener('click',map_open)

   function map_open(){
    // document.getElementById("map").style.width = "100%"
    // document.getElementById("map").style.height = "100%"
    // document.getElementById("map").style.top = "0%"
    map.dragPan.enable()
    document.getElementById("map").style.visibility = "visible"
    document.getElementById("map").style.opacity = "1"
    document.getElementById("map").style.transition = "all 0.5s";

    // document.getElementById("map").style.display = "block"
   }

function stor() {
  
}
   var myform = document.getElementById("myform")

  //  function addappartement2() {

    myform.addEventListener("submit",async (e) => {
      // console.log(validate_location)
      if (!validate_location) {
        e.preventDefault();
        document.getElementById("test").innerHTML = "you should enter the location"
      }else if(!validate_image){
        e.preventDefault();
        console.log(validate_image)
        document.getElementById("test").innerHTML = "you should enter an image"
      }else if (!fin) {
        e.preventDefault();
        document.getElementById("test").innerHTML = "wait"
      } else {
        e.preventDefault();
// var usersRef = firebase.database().ref("users");
//   usersRef.child(user.uid).set({ 
//     displayName: displayName,
//     email: email,
//     photoUrl: photoUrl,
//     emailVerified: emailVerified
//   });
// const update = {
//   [`/users/${localUser.key}/booksPurchased/${newId}`]: true]
// }
// firebase.db.ref().update(update);
// update(ref(db), updates);
             
// const newPostKey = push(child(ref(db), 'posts')).key;
// push(ref(db, '/'), {
//         "id": newPostKey,
//         "name": document.getElementById("i1").value,
//         "host_id": MYID,
//         "neighbourhood": document.getElementById("i2").value,
//         "latitude": map.getCenter().lat,
//         "longitude": map.getCenter().lng,
//         "state":document.getElementById("check_state").checked?'rent':'sell',
//         "price": document.getElementById("i3").value,
//         "gas": document.getElementById('vehicle1').checked?"yes":"no",
//         "furnished": document.getElementById('vehicle2').checked?"yes":"no",
//         "imgs": tttt,
//         "number_of_rooms": document.getElementById("i4").value,
//         "number_of_bathrooms": document.getElementById("i5").value
          
  
// });
        // const postListRef = ref(db, '/0');
        // const newPostRef = update(postListRef);
        // update(newPostRef, {
       
        //   "id": 1234,
        // "name": document.getElementById("i1").value,
        // "host_id": 494281,
        // "host_name": "Michiel",
        // "neighbourhood_group": "",
        // "neighbourhood": document.getElementById("i2").value,
        // "latitude": map.getCenter().lat,
        // "longitude": map.getCenter().lng,
        // "room_type": "Entire home/apt",
        // "price": document.getElementById("i3").value,
        // "minimum_nights": 3,
        // "number_of_reviews": 29,
        // "last_review": "2018-10-15",
        // "reviews_per_month": 0.32,
        // "calculated_host_listings_count": 1,
        // "availability_365": 0,
        // "gas": "no",
        // "furnished": "yes",
        // "imgs": [
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg",
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg",
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg",
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg",
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg",
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg",
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg",
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg",
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg",
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg",
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg",
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg",
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg",
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg",
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg",
        //     "https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg"
        // ],
        // "number_of_rooms": document.getElementById("i4").value,
        // "number_of_bathrooms": document.getElementById("i5").value
          
        // });
//         const updates = {};
//   updates[`/${opid}/tokens`] = increment(-10);
//   update(ref(db2), updates).then(function () {
//     // window.history.back()
//         myform.submit()

//  })








 if (cur>=10) {
  const newPostKey = push(child(ref(db), 'posts')).key;
push(ref(db, '/'), {
        "id": newPostKey,
        "name": document.getElementById("i1").value,
        "host_id": MYID,
        "neighbourhood": document.getElementById("i2").value,
        "latitude": map.getCenter().lat,
        "longitude": map.getCenter().lng,
        "state":document.getElementById("check_state").checked?'rent':'sell',
        "price": document.getElementById("i3").value,
        "gas": document.getElementById('vehicle1').checked?"yes":"no",
        "furnished": document.getElementById('vehicle2').checked?"yes":"no",
        "imgs": tttt,
        "number_of_rooms": document.getElementById("i4").value,
        "number_of_bathrooms": document.getElementById("i5").value
          
  
});
  const updates = {};
updates[`/${opid}/tokens`] = increment(-10);

 update(ref(db2), updates).then(function () {
  // window.history.back()
      myform.submit()

})



} else {
  var toast = document.getElementById("snackbar");
  toast.innerHTML='<p lng-tag="lowtoken"></p>'
  toast.className = "show";
  setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);  }

  if(L=='ar'){
    translate(L,'lng-tag');  
    document.body.dir="rtl" 
    // document.getElementsByClassName("mapboxgl-user-location-accuracy-circle")[0].style.dir="ltr" 
    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    document.getElementsByClassName("XBTN")[0].style.right = '94%'
    // r.style.setProperty('--trensbefore', 'translate(-0.5px,-28px) skewY(20deg);');
    // r.style.setProperty('--transafter', 'translate(-7.5px,-28px) skewY(-20deg);');
    // document.getElementsByClassName("mapboxgl-user-location mapboxgl-marker mapboxgl-marker-anchor-center mapboxgl-user-location-show-heading")[0].dir = "ltr" 
    var X = true; 
  }else if(L==null){
    translate('en','lng-tag'); 
    // translate(L,'lng-tag');  
    document.body.dir="ltr" 
    // document.getElementsByClassName("mapboxgl-user-location-accuracy-circle")[0].style.dir="ltr" 

    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    document.getElementsByClassName("XBTN")[0].style.right = '2%'
    var X = true; 
  }else{
    // translate('en','lng-tag'); 
    translate(L,'lng-tag');  
    document.body.dir="ltr" 
    // document.getElementsByClassName("mapboxgl-user-location-accuracy-circle")[0].style.dir="ltr" 

    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    document.getElementsByClassName("XBTN")[0].style.right = '2%'
    var X = true; 

  }






      }
      // validate_location?myform.submit():
      
    
      // handle submit
    });
    // console.log(document.getElementById("myform").noValidate=true)
    // document.getElementById("i1").required;
    // document.getElementById("i2").required;
    // document.getElementById("i3").required;
    // document.getElementById("i4").required;
  //  }
window.tttt=[]

  const fileInput = document.getElementById('select-image');


  document.getElementsByClassName('select_images')[0].addEventListener('click',select_images)
  function select_images(){ 

    fileInput.click();
    fileInput.addEventListener('change', ()=>{
    if(!fileInput.files.length == 0){
      //Cancel clicked
       console.log("djlhljhlh")
       document.getElementById("test").innerHTML = ""
       validate_image = true;
    } 
    console.log(fileInput.files.length)
  })
  }

let imagesArray = []
var xhe = 0;
const output = document.getElementById("selectedimages")

fileInput.addEventListener("change", () => {
  validate_image = false;

  window.file = fileInput.files
  for (let gg = 0; gg < file.length; gg++) {
    imagesArray.push(file[gg]) 
  }

  for (let hj = 0; hj < file.length; hj++) {
    const storage = getStorage();
    const imageRef = sRef(storage, 'images/' + file[hj].name);
    uploadBytesResumable(imageRef, file[hj])
      .then((snapshot) => {
        fin = false;

        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        // console.log('File metadata:', snapshot.metadata);
        // Let's get a download URL for the file.
        getDownloadURL(snapshot.ref).then((url) => {
          xhe+=1;
          // console.log('File available at', url);
          console.log('xhe: '+xhe)
console.log("khkhh "+file.length)
          tttt.push(url)
          if (xhe==file.length) {
                      fin = true;
                      document.getElementById("test").innerHTML = ""
                      validate_image = true;
                      xhe=0

          }

          // ...
        });
      }).catch((error) => {
        console.error('Upload failed', error);
        // ...
      });  
  }


// Create a root reference
// const storage = getStorage(app);

// // Create a reference to 'mountains.jpg'
// const storageRef = sRef(storage, '../imgs/3t.png');
// uploadBytes(storageRef, file[0]).then((snapshot) => {
//   console.log(snapshot);
// });
// Create a reference to 'images/mountains.jpg'
// const mountainImagesRef = ref(storage, 'images/'+'../imgs/3t.png');

// While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name;           // true
// mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 
  // const reff = firebase.storage().reff();
  // const name = +new Date() + "-" + file.name;
  // const metadata = {
  //    contentType: file.type
  // };
  // const task = reff.child(name).put(file, metadata);task
  // .then(snapshot => snapshot.reff.getDownloadURL())
  // .then(url => {
  // console.log(url);
  // })

console.log(tttt)
  displayImages()
})



function displayImages() {
  console.log(tttt)

  let images = ""
  console.log(imagesArray)
  imagesArray.forEach((image, index) => {
    images += `<div class="image">
                <img src="${URL.createObjectURL(image)}"alt="image" style='width: 100%;' title="image">
              </div>`
              // <span onclick="deleteImage(${index})" style="font-size: xxx-large; position: absolute; top: 0px; right: 0px">&times;</span>

  })
  output.innerHTML = images
}



// function deleteImage(index) {
//   imagesArray.splice(index, 1)
//   displayImages()
// }










document.getElementsByClassName('direction')[0].addEventListener('click',GetToMe)

function GetToMe() {
  // var cord, url;

  // $("#map").on('click', function () {
    // coordinates = $('#coordinates').val();
    var url         = "https://www.google.com.sa/maps/search/"+ cord[1]+","+cord[0] ;
  
    window.open(url, '_blank');
  // });
}




onChildRemoved(ref(db2, '/' + opid),(snapshot) => {
  window.location.replace('../sign/index.html');
localStorage.removeItem('myid');
localStorage.removeItem('opid');
localStorage.removeItem('google');
localStorage.removeItem('ic');
})