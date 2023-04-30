import { Link } from "react-router-dom";
import "./LeftSideBar.css"
const LeftSideBar = () => {
  return (
    <div className="LeftSideBarr">
      <ul>
        <li>
          <Link to="/allproduct">Products</Link>
        </li>
        <li>
          <Link to="/allcategory">Category</Link>
        </li>
        <li>
          <Link to="/allpost">Posts</Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftSideBar;
