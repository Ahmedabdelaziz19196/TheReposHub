import "./Splashscreen.css";
import DarkAndLightTheme from "../Context/DarkAndLight";
import { useContext } from "react";
export default function Splashscreen() {
    const { darkTheme } = useContext(DarkAndLightTheme);

    return (
        <div
            className="theScreen"
            style={{
                background: darkTheme
                    ? "var(--main-light-background)"
                    : "var(--main-dark-background)",
            }}
            data-theme={darkTheme ? "dark" : "light"}
        >
            <div
                className="theball"
                style={{
                    background: darkTheme
                        ? "var(--main-dark-background)"
                        : "var(--main-light-background)",
                }}
            ></div>
            <div className="logo">
                <img
                    src={
                        darkTheme
                            ? require("../img/GitHub-Logo-edit-dark.png")
                            : require("../img/GitHub-Logo-edit-dark2.png")
                    }
                    alt="logo"
                    className="thelogo"
                />
                <div
                    style={{
                        display: "flex",
                        color: darkTheme
                            ? "var(--main-dark-background)"
                            : "var(--main-light-background)",
                    }}
                >
                    <p className="R title ">R</p>
                    <p className="e title ">e</p>
                    <p className="p title ">p</p>
                    <p className="o title ">o</p>
                    <p className="s title ">s</p>
                    <p className="H title ">H</p>
                    <p className="u title ">u</p>
                    <p className="b title ">b</p>
                </div>
            </div>
            <h1
                className="mobile-title"
                style={{
                    color: darkTheme
                        ? "var(--main-dark-background)"
                        : "var(--main-light-background)",
                }}
            >
                ReposHub
            </h1>
        </div>
    );
}
