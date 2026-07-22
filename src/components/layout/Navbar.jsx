const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <h2 className="text-2xl font-bold">
        tcongs
      </h2>

      <div className="flex gap-8">
        <a href="#">Services</a>
        <a href="#">Work</a>
        <a href="#">About</a>
        <button className="rounded-full bg-black px-5 py-2 text-white">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;