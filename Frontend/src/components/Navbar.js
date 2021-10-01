import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div className="navbar">
      <Link to="/" id="logo-class">
        <img className="logo" src="YEYE.png" alt=""/>
      </Link>
      <Link to="add-item" className="add-item-link">
        <div>Add Item</div>
      </Link>
      <Link to="cart" className="cart">
        <img src="cart.svg" alt=""/>
      </Link>
    </div>
  );
}

// alumine tehke ise

export default Navbar;