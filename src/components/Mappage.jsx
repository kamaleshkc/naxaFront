import React from "react";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

const Mappage = () => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    var Provience = L.tileLayer(
        " https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}",
        {
          id: "MapID",
          tileSize: 512,
          accessToken:
            "pk.eyJ1Ijoia2FtYWxlc2hrYyIsImEiOiJja3g5NW1kOHQxb2R5MnJvNTlvMWpwNHMxIn0.IKFchZIP74-BcOupWgtTYg",
          zoomOffset: -1,
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        }
      ),
      District = L.tileLayer("", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1Ijoia2FtYWxlc2hrYyIsImEiOiJja3g5NW1kOHQxb2R5MnJvNTlvMWpwNHMxIn0.IKFchZIP74-BcOupWgtTYg",
      }),
      Municipality = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 10,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1Ijoia2FtYWxlc2hrYyIsImEiOiJja3g5NW1kOHQxb2R5MnJvNTlvMWpwNHMxIn0.IKFchZIP74-BcOupWgtTYg",
        }
      );

    var map = L.map("map", {
      center: [27.7172, 85.324],
      zoom: 10,
      layers: [Provience],
    });
    var baseMaps = {
      Provience: Provience,
      District: District,
      Municipality: Municipality,
    };

    L.control.layers(baseMaps).addTo(map);
  });

  return <div id="map" style={{ width: "100", height: "600px" }}></div>;
};

export default Mappage;
