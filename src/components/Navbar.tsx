type NavbarProps = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar = ({ setPage }: NavbarProps) => {
  return (
    <nav>
      <div>
        <button onClick={() => setPage("people")}>People</button>
        <button onClick={() => setPage("planets")}>Planets</button>
      </div>
    </nav>
  );
};

export default Navbar;
