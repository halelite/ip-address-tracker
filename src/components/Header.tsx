import { useRef } from "react";
import arrowIcon from "../images/icon-arrow.svg";
import { GeolocationData } from "../assets/interface";

interface HeaderProps {
	data?: GeolocationData;
	isLoading?: boolean;
	setSearch?: (search: string) => void;
}

export const Header = ({ data, isLoading, setSearch }: HeaderProps) => {
	const searchRef = useRef<HTMLInputElement>(null);

	const handleSearch = (value: string) => {
		if (value.trim() && setSearch) {
			setSearch(value);
			console.log(value);
		}
	};

	return (
		<div className="header relative">
			<h2 className="text-white text-h2 !mb-18 md:text-h1">
				IP Address Tracker
			</h2>

			<div className="flex justify-center">
				<div className="flex h-[46px] w-full bg-white rounded-10 sm:w-3/5 lg:w-1/3">
					<input
						ref={searchRef}
						className="flex-1 border-0 !p-12 truncate bg-transparent text-12 focus:outline-0 placeholder:text-dark-gray-2 md:text-14"
						placeholder="Search for any IP address or domain"
					/>
					<button
						onClick={() => handleSearch(searchRef.current?.value || "")}
						className="w-46 cursor-pointer bg-dark-gray-1 center rounded-e-10"
					>
						<img className="w-10" src={arrowIcon} />
					</button>
				</div>
			</div>

			<div className="flex flex-col bg-white justify-center z-20 gap-y-16 min-h-[220px] rounded-8 !p-18 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[calc(100%-40px)] sm:w-4/6 md:w-5/6 md:min-h-auto md:flex-row lg:w-4/6">
				<div className="md:border-e md:border-e-[#ccc] md:flex-1 md:text-start md:!ps-4">
					<div className="text-dark-gray-2 text-caption tracking-2 uppercase md:!mb-4">
						IP Address
					</div>
					<div className="text-zinc-700 text-bodyLg">
						{isLoading ? "Loading..." : data?.ip || "__"}
					</div>
				</div>

				<div className="md:border-e md:border-e-[#ccc] md:flex-1 md:text-start md:!ps-18">
					<div className="text-dark-gray-2 text-caption tracking-2 uppercase md:!mb-4">
						Location
					</div>
					<div className="text-zinc-700 text-bodyLg">
						{isLoading
							? "Loading..."
							: data?.location?.city && data?.location?.region
							? `${data?.location?.city}, ${data?.location?.region}`
							: "__"}
					</div>
				</div>

				<div className="md:border-e md:border-e-[#ccc] md:flex-1 md:text-start md:!ps-18">
					<div className="text-dark-gray-2 text-caption tracking-2 uppercase md:!mb-4">
						Timezone
					</div>
					<div className="text-zinc-700 text-bodyLg">
						{isLoading
							? "Loading..."
							: data?.location?.timezone
							? `UTC ${data?.location?.timezone}`
							: "__"}
					</div>
				</div>

				<div className="md:flex-1 md:text-start md:!ps-18">
					<div className="text-dark-gray-2 text-caption tracking-2 uppercase md:!mb-4">
						ISP
					</div>
					<div className="text-zinc-700 text-bodyLg">
						{isLoading ? "Loading..." : data?.isp || "__"}
					</div>
				</div>
			</div>
		</div>
	);
};
