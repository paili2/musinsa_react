import Info from "./Info";
import LinkCollection from "./LinkCollection";
import Services from "./Services";

const Footer = () => {
    return (
        <div>
            <div
                style={{
                    width: "100%",
                    maxWidth: "1500px",
                    margin: "0 auto",
                    backgroundColor: "#f0f0f0",
                    padding: " 0 20px 70px",
                    color: "#666",
                    fontWeight: "bold",
                }}
            >
                <LinkCollection></LinkCollection>
                <Services></Services>
                <Info></Info>
            </div>
        </div>
    );
};

export default Footer;
