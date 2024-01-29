import React, {MutableRefObject, useEffect, useRef} from "react";
import ReactDOM from "react-dom/client";
import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";

const root = ReactDOM.createRoot(document.getElementById("root")!);

import "./components/application/application.css"

const map = new Map({
    layers: [
        new TileLayer({source: new OSM()})
    ],
    view: new View({
        center: [11, 59], zoom: 5
    })
})

function MapApplication() {
    const mapRef = useRef() as MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        map.setTarget(mapRef.current);
    }, []);
    return <div ref={mapRef} style={{width: '100%', height: '100vh'}}></div>;
}

root.render(<MapApplication/>)