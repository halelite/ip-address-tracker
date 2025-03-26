export interface GeolocationData {
	ip: string;
	location: {
		country?: string;
		region: string;
		city: string;
		lat: number;
		lng: number;
		postalCode?: string;
		timezone: string;
	};
	domains?: string[];
	as?: {
		asn: number;
		name: string;
		route: string;
		domain: string;
		type: string;
	};
	isp: string;
}
