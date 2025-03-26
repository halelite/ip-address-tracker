import { GeolocationData } from "../assets/interface";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

interface LayoutProps {
	children: React.ReactNode;
	data?: GeolocationData;
	isLoading?: boolean;
	setSearch?: (search: string) => void;
}

export const Layout = ({
	children,
	data,
	isLoading,
	setSearch,
}: LayoutProps) => {
	return (
		<div className="flex flex-col h-screen">
			<Header data={data} isLoading={isLoading} setSearch={setSearch} />
			<Main>{children}</Main>
			<Footer />
		</div>
	);
};
