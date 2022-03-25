import { FaCheckDouble, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Component from "./Component";

const RightNavBar = () => {
  return (
    <>
      <div className="rightNavBarHeader">
        <span className="rightNavBarHeaderTitle">Selected Component</span>
        <span><FaCheckDouble style={{ color: 'blue' }}></FaCheckDouble></span>
      </div>
      <ul className="nav">
        <Component title='CPU' />
        <Component title='CPU Cooler' />
        <Component title='Motherboard' />
        <Component title='Memory' />
        <Component title='Storage' />
        <Component title='Video Card' />
        <Component title='Case' />
        <Component title='Power Suply' />
        <Component title='Monitor' />
        <Link 
          to="/shoppingbag"
          className="rightNavBarCartPart"
        >
          <span>Go to Cart</span>
          <FaShoppingCart className="navBarLogo"></FaShoppingCart>
        </Link>
      </ul>
    </>
  )
}

export default RightNavBar;