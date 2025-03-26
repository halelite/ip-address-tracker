import { useMap } from "react-leaflet";
import { LocationPosition } from "../assets/type";
import { useEffect } from "react";

export const MapUpdater = ({ position }: { position: LocationPosition }) => {
	const map = useMap();
	useEffect(() => {
		map.setView(position, 13);
	}, [map, position]);

	return null;
};
