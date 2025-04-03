const StyleCategoryButton = (props) => {
    return (
        <button
            style={{
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid #8a8a8a",
                color: "#8a8a8a",
                fontWeight: "bold",
            }}
        >
            {props.categoryName}
        </button>
    );
};

export default StyleCategoryButton;
