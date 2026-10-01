import { NavLink } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        {/* NavLink is Link plus an "active" class on the route that matches,
            which the stylesheet uses to highlight the current page. "end"
            stops "/" matching every path. */}
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
        <LogoutLink />
      </nav>
    </header>
  );
}
