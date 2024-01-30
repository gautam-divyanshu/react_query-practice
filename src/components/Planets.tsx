import React from "react";
import { useQuery } from "@tanstack/react-query";
import Planet from "./Planet";

const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets/");
  return res.json();
};

const Planets: React.FC = () => {
  const { data, status } = useQuery({
    queryKey: ["planets"],
    queryFn: fetchPlanets,
  });

  return (
    <div>
      <h1 className="text-xl font-medium mb-7 text-starWars">Planets</h1>
      <div>
        {status === "error" && <h1>Error in fetching data from api</h1>}
        {status === "pending" && <h1>Loading...</h1>}
        {status === "success" && (
          <div>
            {data.results.map((planet: any) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Planets;
