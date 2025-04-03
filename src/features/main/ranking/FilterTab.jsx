import { MdKeyboardArrowDown } from "react-icons/md";

const FilterTab = (props) => {
    return (
        <div style={{ display: "flex", fontSize: "12px", color: "#8a8a8a" }}>
            <span>{props.filterType}</span>
            <MdKeyboardArrowDown />
        </div>
    );
};

export default FilterTab;
