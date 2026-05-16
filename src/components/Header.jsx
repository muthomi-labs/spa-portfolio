import logo from "../assets/hero.png";

function Header() {
  return (
    <header className="header">
      <img className="header-logo-img" src={logo} alt="logo" />
      <h1 className="header-title">Personal Project Showcase</h1>
      <p className="header-sub">A curated list of things I've built</p>
    </header>
  );
}

export default Header;