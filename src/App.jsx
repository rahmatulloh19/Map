import { useEffect } from "react";
import "./App.css";

const tg = window.Telegram.WebApp;

function App() {
	const handleClick = () => {
		tg.close();
	};

	useEffect(() => {
		tg.ready();
	}, []);

	return (
		<>
			<h1 className="text-orange-500 text-2xl">Hello world</h1>
			<button onClick={handleClick}>Close window</button>
		</>
	);
}

export default App;
