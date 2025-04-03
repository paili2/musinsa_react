const ProductCategoryTab = (props) => {
    return (
        <span
            style={{ fontSize: "13px", color: "#8a8a8a", fontWeight: "bold" }}
        >
            {props.productCategoryName}
        </span>
    );
};

export default ProductCategoryTab;
