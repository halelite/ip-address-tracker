import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;

export const useGeolocation = (search: string = "") => {
	return useQuery({
		queryKey: ["ip-geolocation", search],
		queryFn: async () => {
			try {
				const isIp = ipPattern.test(search);
				const url = search
					? `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${
							isIp ? "ipAddress" : "domain"
					  }=${search}`
					: `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

				const response = await axios.get(url);
				return response.data;
			} catch (err) {
				console.log(err);
			}
		},
		// enabled: false,
	});
};
