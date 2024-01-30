import React from "react";
import { useQuery } from "@tanstack/react-query";
import Person from "./Person";

const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people/");
  return res.json();
};

const People: React.FC = () => {
  const { data, status } = useQuery({
    queryKey: ["people"],
    queryFn: fetchPeople,
  });

  return (
    <div>
      <h1 className="text-xl font-medium mb-7 text-starWars">People</h1>
      <div>
        {status === "error" && <h1>Error in fetching data from api</h1>}
        {status === "pending" && <h1>Loading...</h1>}
        {status === "success" && (
          <div>
            {data.results.map((person: any) => (
              <Person key={person.name} person={person} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default People;
