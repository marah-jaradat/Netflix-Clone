import { Link } from "react-router-dom";

export default function Navbar() {
  <>
    <nav>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/favorite"> favorites</Link>
        </li>
      </ul>
    </nav>
  </>;
}
