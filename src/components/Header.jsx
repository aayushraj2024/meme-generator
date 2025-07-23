import brandLogo from "../images/troll-face.png";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={brandLogo}
        alt="logo of meme generator that is troll face"
      />
      <h1 className="header__title">Meme Generator</h1>
    </header>
  );
}

export default Header;
