type NavbarProps = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar = ({ setPage }: NavbarProps) => {
  return (
    <nav>
      <div className="flex gap-8">
        <button className="button" onClick={() => setPage("people")}>
          People
        </button>
        <button className="button" onClick={() => setPage("planets")}>
          Planets
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
