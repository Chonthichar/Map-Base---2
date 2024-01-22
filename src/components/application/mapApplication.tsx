import React, {MutableRefObject, useEffect, useRef} from "react";

import "./application.css"
import {Map, View} from "ol";
import {OSM} from "ol/source";
import TileLayer from "ol/layer/Tile";

// Add a map
const map = new Map({
    layers: [
        new TileLayer({
            source: new OSM()
        })
        ],
    view: new View({
        center: [10, 59], zoom: 5
    })
});

export function MapApplication() {
    const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        map.setTarget(mapRef.current);
    }, []);

    return <>
        <header><h1>Application 2</h1></header>
        <nav>Actions</nav>
        <main ref={mapRef}>Here is the map</main>
    </>;
}