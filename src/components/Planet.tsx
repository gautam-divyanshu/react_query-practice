
const Planet: React.FC<any> = ({ planet }) => {
  return (
    <div className="card">
      <h3 className="text-starWars">{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
};

export default Planet;
