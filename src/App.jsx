import "./App.css";
import { Map } from "./Components/Map/Map";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

// const tg = window.Telegram.WebApp;

// tg.on("location", (data) => {
// 	console.log(data);
// });

function App() {
  return <Map />;
}

export default App;
