import Filter from "./Filter";
import ProductCategories from "./ProductCategories";
import StyleCategories from "./StyleCategories";
import ProductCardCollection from "./product/ProductCardCollection";

const Ranking = () => {
    return (
        <div
            style={{
                maxWidth: "1500px",
                margin: "0 auto",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    width: "100%",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        backgroundColor: "#ebebeb",
                        width: "100%",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        padding: "0 12px",
                    }}
                >
                    <StyleCategories></StyleCategories>
                    <ProductCategories></ProductCategories>
                    <Filter></Filter>
                </div>
                <ProductCardCollection></ProductCardCollection>
            </div>
        </div>
    );
};

export default Ranking;
