import Category from "./headerSubComponent/Category";
import EventPromotion from "./headerSubComponent/EventPromotion";
import Search from "./headerSubComponent/Search";

const Header = () => {
    return (
        <div
            style={{
                width: "100%",
                maxWidth: "1500px",
                margin: "0 auto",
                backgroundColor: "black",
                padding: "0 20px 20px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                fontSize: "15px",
                color: "#ffffffcc",
            }}
        >
            <Category></Category>
            <Search></Search>
            <EventPromotion></EventPromotion>
        </div>
    );
};

export default Header;
