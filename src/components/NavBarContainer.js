import React from 'react';
import { Link } from 'react-router-dom'

function NavBarContainer() {
  return (
    <nav>
        <ul>
            <Link to="/"><li>Cat Votes</li></Link>
            <Link to="/breeds"><li>Breeds</li></Link>
            <Link to="/search"><li>Search</li></Link>
        </ul>
    </nav>
  );
}

export default NavBarContainer;