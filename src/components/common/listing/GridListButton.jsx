import { useDispatch, useSelector } from "react-redux";
import { toggleGridAndList } from "../../../features/filter/filterSlice";

const GridListButton = ({ isAssignment }) => {
  const { isGridOrList } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <ul className="mb-3 grid_or_list_ul">
      <button className="btn btn_propertiesOrAssig mx-3">
        {/* {isAssignment == true ? 'Assignments' : "Properties"} */}
        {isAssignment == true
          ? "Assignments"
          : isAssignment == false
          ? "Properties"
          : "Rentals"}
      </button>
      <div className="right_gridorlist">
        <li
          className={`list-inline-item ${!isGridOrList ? "active" : ""}`}
          onClick={() => dispatch(toggleGridAndList(false))}
        >
          <a>
            <span className="fa fa-th-large"></span>
          </a>
        </li>
        {/* End li */}

        <li
          className={`list-inline-item ${isGridOrList ? "active" : ""}`}
          onClick={() => dispatch(toggleGridAndList(true))}
        >
          <a>
            <span className="fa fa-th-list"></span>
          </a>
        </li>
      </div>

      {/* End li */}
    </ul>
  );
};

export default GridListButton;
