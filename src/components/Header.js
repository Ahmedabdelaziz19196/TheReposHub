import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import DarkAndLightTheme from "../Context/DarkAndLight";
import Button from "@mui/material/Button";
import Loading from "./Loading";

export default function Header({
    mobileSreach,
    handleSreachBar,
    setUserSearch,
    setFilterType,
    isLoading,
}) {
    const { darkTheme, handleDarkLightTheme } = useContext(DarkAndLightTheme);
    const [Scrolled, setIsScrolled] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    function handleSreachBarDisplay() {
        if (window.innerWidth < 769) {
            handleSreachBar();
        }
    }
    function handleThemeIcon() {
        handleDarkLightTheme();
    }
    function handleScroll() {
        setIsScrolled(window.scrollY >= 20 ? true : false);
    }
    window.addEventListener("scroll", handleScroll);

    function handlePersonalRepoSearch() {
        setUserSearch(searchInput);
        setSearchInput("");
        setFilterType("");
    }

    return (
        <div style={{ position: "sticky", top: "0px", zIndex: "9999" }}>
            <div
                style={{
                    height: "57px",
                    width: "100%",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backdropFilter: "blur(10px)",
                }}
                className={`top-bar ${Scrolled ? "scrolled" : ""}`}
                data-theme={darkTheme ? "dark" : "light"}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px   ",
                        cursor: "pointer",
                    }}
                >
                    <img
                        src={
                            darkTheme
                                ? require("../img/GitHub-Logo-edit-dark2.png")
                                : require("../img/GitHub-Logo-edit-dark.png")
                        }
                        alt="logo"
                        className="thelogo"
                    />
                    <p
                        style={{ fontWeight: "bold" }}
                        className={`title ${mobileSreach ? "clicked" : ""}`}
                    >
                        ReposHub
                    </p>
                </div>
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <input
                        type="text"
                        className={`sreach-input ${
                            mobileSreach ? "clicked" : ""
                        }`}
                        style={{
                            height: "32px",
                            background: "transparent",
                            border: "1px solid #5e6369ff",
                            borderRadius: "10px",
                            padding: "10px  10px 10px 40px ",
                            width: "300px",
                            color: "#5e6369ff",
                        }}
                        placeholder="Search..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <SearchIcon
                        style={{
                            color: "#5e6369ff",
                            position: "absolute",
                            top: "50%",
                            left: "20px",
                            transform: "translate(-50%, -50%)",
                        }}
                        className={`search-icon ${
                            mobileSreach ? "clicked" : ""
                        }`}
                        onClick={handleSreachBarDisplay}
                    />
                    <Button
                        sx={{
                            color: darkTheme
                                ? "var(--secondry-dark-background)"
                                : "var(--secondry-light-background)",
                            background: "rgb(94, 99, 105)",
                            padding: "10px 0px 7px 0px",
                            position: "absolute",
                            right: "47px",
                            height: "24px",
                            borderRadius: "6px",
                            fontSize: "13px",
                        }}
                        onClick={handlePersonalRepoSearch}
                        className={`personalRepo-search ${
                            mobileSreach ? "clicked" : ""
                        }`}
                    >
                        Search
                    </Button>
                    <div
                        style={{
                            color: "#5e6369ff",
                            border: "1px solid #5e6369ff",
                            padding: "3px",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                            cursor: "pointer",
                            width: "32px",
                            height: "32px",
                            position: "relative",
                            overflow: "hidden",
                        }}
                        onClick={handleThemeIcon}
                    >
                        <FontAwesomeIcon
                            icon={faMoon}
                            className={`moon-icon ${darkTheme ? "clickd" : ""}`}
                        />
                        <FontAwesomeIcon
                            icon={faSun}
                            className={`sun-icon ${darkTheme ? "clickd" : ""}`}
                        />
                    </div>
                </div>
            </div>
            <div>
                {isLoading ? (
                    <div
                        style={{
                            // position: "fixed    ",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                        }}
                    >
                        <Loading />
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
