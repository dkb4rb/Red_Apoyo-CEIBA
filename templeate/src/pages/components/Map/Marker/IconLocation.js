import React from 'react'
import L from "leaflet"

export const IconLocation = L.icon({
    iconUrl: require("../../../../assets/img/Public/icon.png"),
    iconRetinaUrl:  require("../../../../assets/img/Public/icon.png"),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [65, 65],
    className: "Leaflet-venue-icon",
})
