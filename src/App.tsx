import { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";

export default function App() {
  const [page, setPage] = useState<string>("people");
  return (
    <div className="container w-3/5 ml-auto mr-auto flex items-center gap-5 flex-col">
      <h1 className="text-starWars mt-8 text-5xl font-bold">STAR WARS INFO</h1>
      <Navbar setPage={setPage} />
      <div className="self-start">
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </div>
  );
}
