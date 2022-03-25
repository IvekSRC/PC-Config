import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectedItem } from "../../features/selected/selectedItems";
import { isSelected } from "../../functions/otherFunctions";

const Component = (props: { title: string }) => {
  const selectedItems = Object.entries(useSelector(selectedItem));

  return (
    <li>
      <p className="checkedItem">
        {props.title}
        <span className="checkedItemIcon">
          {
            isSelected(props.title, selectedItems) ? 
            <FaCheckCircle
              style={{ color: 'green' }}
            /> 
            : 
            <FaCheckCircle
              style={{ color: 'red' }}
            />          
          }
        </span>
      </p>
    </li>
  )
}

export default Component;