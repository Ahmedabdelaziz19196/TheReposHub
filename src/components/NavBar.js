import { useState } from "react";
import DarkAndLightTheme from "../Context/DarkAndLight";
import { useContext } from "react";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "./NavBar.css";
import FilterForm from "./FilterForm";
// import Date from "./Date";
export default function NavBar({
    contentPerPage,
    setContentNumberPerPage,
    setFilterType,
}) {
    const { darkTheme } = useContext(DarkAndLightTheme);
    const [topic] = useState(["Explore", "Trending", "Recently", "Newest"]);
    const [activeTopic, setActiveTopic] = useState(0);
    const [showcontentPerPage, setShowcontentPerPage] = useState(false);
    const [formOpen, setFormOpen] = useState(false);

    function handleChangingFormat(e) {
        setContentNumberPerPage(e.target.value);
    }

    //close page formater
    window.addEventListener("click", (e) => {
        if (showcontentPerPage && !e.target.closest(".format-icon")) {
            setShowcontentPerPage(false);
        }
    });
    //close page formater
    //Open page Formater
    function openFormater() {
        setShowcontentPerPage(true);
        setTimeout(() => {
            setShowcontentPerPage(false);
        }, 5000);
    }
    //Open page Formater

    //handle filter form
    function handleOpenForm() {
        setFormOpen(true);
    }
    function handleCloseForm() {
        setFormOpen(false);
    }
    //handle filter form

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    margin: "20px 0",
                    fontWeight: "bold",
                }}
                className="the-nav-bar"
            >
                <ul
                    style={{
                        listStyle: "none",
                        display: "flex",
                        gap: "20px",
                        cursor: "pointer",
                    }}
                >
                    {topic.map((ele, index) => (
                        <li
                            key={index}
                            className={`the-list ${
                                index === activeTopic ? "active" : ""
                            }`}
                            onClick={(e) => {
                                setActiveTopic(index);
                                setFilterType(e.target.textContent);
                            }}
                        >
                            {ele}
                        </li>
                    ))}
                </ul>
                <div
                    className={`format ${showcontentPerPage ? "show" : ""}`}
                    style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        gap: "10px ",
                    }}
                >
                    <div
                        onClick={openFormater}
                        className={`format-icon ${
                            showcontentPerPage ? "clicked" : ""
                        }`}
                    >
                        <ViewModuleIcon sx={{ fontSize: 30 }} />
                    </div>
                    <ToggleButtonGroup
                        value={contentPerPage}
                        exclusive
                        onChange={handleChangingFormat}
                        aria-label="Platform"
                        className="format-number"
                        sx={{
                            maxHeight: "5px",
                            "& .MuiToggleButton-root": {
                                color: darkTheme
                                    ? "var(--color-dark)"
                                    : "var(--color-light)",
                                borderColor: darkTheme
                                    ? "var(--color-dark)"
                                    : "var(--color-light)",
                                "&:hover": {
                                    background: darkTheme
                                        ? "var(--secondry-dark-background)"
                                        : "var(--secondry-light-background)",
                                    color: "white",
                                },
                                "&.Mui-selected": {
                                    backgroundColor: "var(--color-theme)",
                                    color: "white",
                                },
                                "&.Mui-selected:hover": {
                                    backgroundColor: "var(--color-theme)",
                                },
                            },
                            "& .MuiButtonBase-root": {
                                padding: "11px 5px",
                            },
                        }}
                    >
                        <ToggleButton value="10">10X</ToggleButton>
                        <ToggleButton value="20">20X</ToggleButton>
                        <ToggleButton value="30">30X</ToggleButton>
                    </ToggleButtonGroup>
                    <div className="filter">
                        <FilterAltIcon
                            sx={{ fontSize: 25 }}
                            onClick={handleOpenForm}
                        />
                    </div>
                </div>
                <FilterForm
                    opne={formOpen}
                    closeForm={handleCloseForm}
                    setActiveTopic={setActiveTopic}
                />
            </div>
        </>
    );
}
