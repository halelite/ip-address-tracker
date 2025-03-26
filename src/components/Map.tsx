import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import { LocationPosition } from "../assets/type";
import { MapUpdater } from "./MapUpdater";
import { GeolocationData } from "../assets/interface";

interface MapPropsType {
	data: GeolocationData;
	isLoading: boolean;
	isError?: boolean;
	error?: any;
}

export const Map = ({ data, isLoading, isError, error }: MapPropsType) => {
	const [position, setPosition] = useState<LocationPosition | null>(null);

	useEffect(() => {
		if (data?.location?.lat && data?.location?.lng) {
			setPosition([data.location.lat, data.location.lng]);
		}
	}, [data]);

	/* useEffect(() => {
		let map = L.map("map", {
			center: [51.505, -0.09],
			zoom: 13,
		});

		L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 19,
			attribution:
				'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		}).addTo(map);

		return () => {
			map.remove(); // Removes the map to prevent memory leaks
		};
	}, []); */

	if (isLoading || !position) {
		return (
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				Loading the map...
			</div>
		);
	}

	if (isError) {
		console.log(error);
		return (
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				An error happened while generating the map
			</div>
		);
	}

	return (
		// <div className="h-screen w-full z-10" id="map"></div>
		<MapContainer
			center={position}
			zoom={13}
			className="h-full w-full z-10"
			zoomControl={false}
		>
			<ZoomControl position="bottomleft" />
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}></Marker>
			<MapUpdater position={position} />
		</MapContainer>
	);
};
