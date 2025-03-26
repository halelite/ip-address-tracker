export const Main = ({ children }: React.PropsWithChildren) => {
	return (
		<main className="flex-1 h-full w-full bg-amber-100 relative">
			{children}
		</main>
	);
};
