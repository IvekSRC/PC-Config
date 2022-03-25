import { FaAddressCard, FaDesktop, FaShoppingCart, FaWrench } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li className="navBarPart">
            <Link 
              to="/systembuilder">
              System Builder
              <FaWrench className="navBarLogo"></FaWrench>
            </Link>
          </li>
          <li className="navBarPart">
            <Link 
              to="/completedbuilds">
              Completed Builds
              <FaDesktop className="navBarLogo"></FaDesktop>
            </Link>
          </li>
          <li className="navBarPart">
            <Link 
              to="/about">
              About
              <FaAddressCard className="navBarLogo"></FaAddressCard>
            </Link>
          </li>
        </ul>
        <div className="navBarCartPart navBarPart">
          <Link 
            to="/shoppingbag">
            <span className="navBarCartPartText">Cart</span>
            <FaShoppingCart className="navBarLogo"></FaShoppingCart>
          </Link>          
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar;