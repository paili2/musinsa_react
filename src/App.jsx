import { useState } from "react";
import "./styles/reset.css";
import Header from "./features/header/Header";
import Ranking from "./features/main/ranking/Ranking";
import Footer from "./features/footer/Footer";

function App() {
    return (
        <>
            <div
                style={{
                    width: "100%",
                    maxWidth: "1500px",
                    border: "1px solid black",
                    margin: "0 auto",
                    borderLeft: "1px solid #8a8a8a",
                    borderRight: "1px solid #8a8a8a",
                }}
            >
                <Header></Header>
                <Ranking></Ranking>
                <Footer></Footer>
            </div>
        </>
    );
}

export default App;
