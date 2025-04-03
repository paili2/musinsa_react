import CategoryTab from "./CategoryTab";
const EventPromotion = () => {
    return (
        <div>
            <div
                style={{
                    width: "100%",
                    maxWidth: "1500px",
                    margin: "0 auto",
                    display: "flex",
                    gap: "20px",
                }}
            >
                <CategoryTab categoryName={"추천"}></CategoryTab>
                <CategoryTab categoryName={"랭킹"}></CategoryTab>
                <CategoryTab categoryName={"세일"}></CategoryTab>
                <CategoryTab categoryName={"브랜드"}></CategoryTab>
                <CategoryTab categoryName={"신상"}></CategoryTab>
                <CategoryTab categoryName={"멤버스 데이"}></CategoryTab>
                <CategoryTab categoryName={"뷰티위크"}></CategoryTab>
            </div>
        </div>
    );
};

export default EventPromotion;
