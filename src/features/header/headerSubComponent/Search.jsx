import { PiBellThin } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
const Search = () => {
    return (
        <div>
            <div
                style={{
                    width: "100%",
                    maxWidth: "1500px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div style={{ width: "100px", height: "30px" }}>
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                            src="logo.png"
                            alt=""
                        />
                    </div>
                    <PiBellThin style={{ fontSize: "30px", color: "white" }} />
                </div>
                <div
                    style={{
                        backgroundColor: "white",
                        width: "100%",
                        padding: "7px 5px",
                        borderRadius: "5px",
                        display: "flex",
                    }}
                >
                    <input
                        style={{ width: "100%" }}
                        type="text"
                        placeholder="멤버스 데이 최대 30% 쿠폰"
                    />
                    <IoIosSearch style={{ fontSize: "30px", color: "gray" }} />
                </div>
            </div>
        </div>
    );
};

export default Search;
