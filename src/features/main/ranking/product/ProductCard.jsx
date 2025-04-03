const ProductCard = (props) => {
    return (
        <div
            style={{
                width: "100%",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                backgroundColor: "white",
                paddingBottom: "30px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "300px",
                }}
            >
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    src={props.src}
                    alt=""
                />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 10px",
                    gap: "10px",
                }}
            >
                <span style={{ fontSize: "11px", fontWeight: "bold" }}>
                    {props.brand}
                </span>
                <span style={{ fontSize: "13px" }}>{props.productName}</span>
                <strong
                    style={{ display: "flex", gap: "10px", fontWeight: "bold" }}
                >
                    <span style={{ color: "red", fontSize: "13px" }}>
                        {props.discountRate}
                    </span>

                    <span style={{ fontSize: "13px" }}>{props.price}원</span>
                </strong>
            </div>
        </div>
    );
};

export default ProductCard;
