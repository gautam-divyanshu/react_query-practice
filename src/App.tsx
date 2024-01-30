import { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";

export default function App() {
  const [page, setPage] = useState<string>("people");
  return (
    <div className="App">
      <h1 className="text-starWars mt-8 text-5xl font-bold">STAR WARS INFO</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </div>
  );
}
