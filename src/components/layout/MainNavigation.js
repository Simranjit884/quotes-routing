import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <div>Great Quotes</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/quotes">All Quotes</NavLink>
          </li>
          <li>
            <NavLink to="/new-quote">New Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
