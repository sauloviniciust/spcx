const Header = () => {
  return (
    <header
      style={{ backgroundImage: "url('/saceback.png')" }}
      className="bg-cover bg-center"
    >
      <div className="relative hidden mb-20 md:block">
        <div>
          <img
            className="animate-pulse transform scale-50 hover:scale-75"
            src="/logo personalizado sf black.png"
            alt="spacechronix Logo"
          />
        </div>
      </div>
    </header>
  );
};

export { Header };
