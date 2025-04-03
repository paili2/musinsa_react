import CategoryTab from "./CategoryTab";

const Category = () => {
    return (
        <div style={{ width: "100%", padding: "20px 0" }}>
            <div
                style={{
                    width: "100%",
                    maxWidth: "1500px",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div style={{ display: "flex", gap: "20px" }}>
                    <CategoryTab categoryName={"MUSINSA"}></CategoryTab>
                    <CategoryTab categoryName={"BEAUTY"}></CategoryTab>
                    <CategoryTab categoryName={"PLAYER"}></CategoryTab>
                    <CategoryTab categoryName={"OUTLET"}></CategoryTab>
                    <CategoryTab categoryName={"BOUTIQUE"}></CategoryTab>
                    <CategoryTab categoryName={"SNEAKERS"}></CategoryTab>
                    <CategoryTab categoryName={"KIDS"}></CategoryTab>
                    <CategoryTab categoryName={"(S)SNAP"}></CategoryTab>
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                    <CategoryTab categoryName={"오프라인 스토어"}></CategoryTab>
                    <CategoryTab categoryName={"검색"}></CategoryTab>
                    <CategoryTab categoryName={"좋아요"}></CategoryTab>
                    <CategoryTab categoryName={"마이"}></CategoryTab>
                    <CategoryTab categoryName={"장바구니"}></CategoryTab>
                </div>
            </div>
        </div>
    );
};

export default Category;
