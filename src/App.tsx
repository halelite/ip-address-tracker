import { useState } from "react";
import { useGeolocation } from "./assets/useGeolocation";
import { Layout } from "./components/Layout";
import { Map } from "./components/Map";

function App() {
	const [search, setSearch] = useState("");
	const { data, isLoading, isError, error } = useGeolocation(search);

	return (
		<>
			<Layout data={data} isLoading={isLoading} setSearch={setSearch}>
				<Map
					data={data}
					isLoading={isLoading}
					isError={isError}
					error={error}
				/>
			</Layout>
		</>
	);
}

export default App;
