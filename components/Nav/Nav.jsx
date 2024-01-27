import home from "./home.png";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="brand">
        <a href="index.html">
          <h1>Puppybowl</h1>
        </a>
      </div>
      <div class="links-container">
        <img src={home} alt="home logo" />
      </div>
    </nav>
  );
};

export default Nav;
