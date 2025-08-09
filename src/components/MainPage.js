import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { useContext, useEffect, useState } from "react";
import DarkAndLightTheme from "../Context/DarkAndLight";
import NavBar from "./NavBar";
import Card from "./Cards";
import ThePagination from "./Pagination";
import Header from "./Header";
import axios from "axios";
import HnadleFilterForms from "../Context/HandleSearchedDate";
import { subWeeks, subMonths, format } from "date-fns";

export default function MainPage() {
    const { darkTheme } = useContext(DarkAndLightTheme);
    const [mobileSreach, isMobileSearch] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [responsedDate, setResponsedDate] = useState([]);
    const [totalResposedDate, setTotalResposedDate] = useState(0);
    const [contentPerPage, setContentPerPage] = useState("10");
    const [apiSearchParams, setApiSearchParams] = useState({
        language: "javascript",
        stars: "",
        creationDate: "",
        lastUpdate: "",
        sorting: "",
    });
    const [filterType, setFilterType] = useState("Explore");
    const today = new Date();
    //Set Creating Date
    let repoCreationDate = "";
    switch (apiSearchParams.creationDate) {
        case "1year":
            repoCreationDate = format(subMonths(today, 12), "yyyy-MM-dd");
            break;
        case "6months":
            repoCreationDate = format(subMonths(today, 6), "yyyy-MM-dd");
            break;
        case "1month":
            repoCreationDate = format(subMonths(today, 1), "yyyy-MM-dd");
            break;
        default:
            break;
    }
    //Set Creating Date
    //Set Update Date
    let repoUpdateDate = "";
    switch (apiSearchParams.lastUpdate) {
        case "1week":
            repoUpdateDate = format(subWeeks(today, 1), "yyyy-MM-dd");
            break;
        case "1month":
            repoUpdateDate = format(subMonths(today, 1), "yyyy-MM-dd");
            break;
        case "6month":
            repoUpdateDate = format(subMonths(today, 6), "yyyy-MM-dd");
            break;
        case "1year":
            repoUpdateDate = format(subMonths(today, 12), "yyyy-MM-dd");
            break;
        default:
            break;
    }

    //Set Update Date

    function handleSreachBar() {
        isMobileSearch(true);
    }
    function setSearchBarOffMobile() {
        if (window.innerWidth < 769) {
            isMobileSearch(false);
        }
    }
    function handlePageNumber(number) {
        setPageNumber(number);
    }

    function setContentNumberPerPage(e) {
        setContentPerPage(e);
    }

    //request Data From Search Github API
    useEffect(() => {
        if (filterType === "Explore") {
            axios
                .get("https://api.github.com/search/repositories", {
                    params: {
                        q: `language:${
                            apiSearchParams.language || "javascript"
                        } stars:${apiSearchParams.stars || ">=0"}  created:>${
                            repoCreationDate || "2023-01-01"
                        } pushed:>${repoUpdateDate || "2024-01-01"}`,
                        sort: "stars",
                        order: `${apiSearchParams.sorting || "desc"}`,
                        per_page: contentPerPage,
                        page: pageNumber,
                    },
                })
                .then(function (response) {
                    setResponsedDate(response.data.items);
                    setTotalResposedDate(response.data.total_count);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [
        pageNumber,
        contentPerPage,
        apiSearchParams,
        repoCreationDate,
        repoUpdateDate,
        filterType,
    ]);
    //request Data From Search Github API

    //request filtered topics (trending, newest, recentely updated)
    useEffect(() => {
        if (filterType !== "Explore") {
            switch (filterType) {
                case "Trending":
                    axios
                        .get("https://api.github.com/search/repositories", {
                            params: {
                                q: `created:>2023-01-01`,
                                sort: "stars",
                                order: `desc`,
                                per_page: contentPerPage,
                                page: pageNumber,
                            },
                        })
                        .then(function (response) {
                            setResponsedDate(response.data.items);
                            setTotalResposedDate(response.data.total_count);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    break;
                case "Recently":
                    axios
                        .get("https://api.github.com/search/repositories", {
                            params: {
                                q: `created:>2023-01-01`,
                                sort: "updated",
                                order: `desc`,
                                per_page: contentPerPage,
                                page: pageNumber,
                            },
                        })
                        .then(function (response) {
                            setResponsedDate(response.data.items);
                            setTotalResposedDate(response.data.total_count);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    break;
                case "Newest":
                    axios
                        .get("https://api.github.com/search/repositories", {
                            params: {
                                q: `created:>2023-01-01`,
                                sort: "created",
                                order: `desc`,
                                per_page: contentPerPage,
                                page: pageNumber,
                            },
                        })
                        .then(function (response) {
                            setResponsedDate(response.data.items);
                            setTotalResposedDate(response.data.total_count);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    break;
                default:
                    break;
            }
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [
        pageNumber,
        contentPerPage,
        apiSearchParams,
        repoCreationDate,
        repoUpdateDate,
        filterType,
    ]);
    //request filtered topics (trending, newest, recentely updated)

    return (
        <HnadleFilterForms.Provider
            value={{
                apiSearchParams,
                setApiSearchParams,
                setPageNumber,
                setFilterType,
            }}
        >
            <>
                <div
                    style={{
                        minHeight: "100vh",
                        background: darkTheme
                            ? "var(--main-dark-background)"
                            : "var(--main-light-background)",
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                    }}
                >
                    <Header
                        mobileSreach={mobileSreach}
                        handleSreachBar={handleSreachBar}
                        setSearchBarOffMobile={setSearchBarOffMobile}
                    />
                    <Divider
                        sx={{
                            backgroundColor: darkTheme ? "#3d444d" : "#d1d9e0",
                            position: "sticky",
                            top: "57px",
                            zIndex: "1000",
                        }}
                    />
                    <Container
                        maxWidth="md"
                        className="main-page"
                        sx={{ height: "calc(100% - 58px)" }}
                        onClick={setSearchBarOffMobile}
                    >
                        <NavBar
                            contentPerPage={contentPerPage}
                            setContentNumberPerPage={setContentNumberPerPage}
                            setFilterType={setFilterType}
                        />
                        <div>
                            {responsedDate.map((_, index) => (
                                <Card
                                    key={index}
                                    responsedDate={responsedDate}
                                    index={index}
                                />
                            ))}
                        </div>

                        <ThePagination
                            handlePageNumber={handlePageNumber}
                            pageNumber={pageNumber}
                            total={totalResposedDate}
                            contentPerPage={+contentPerPage}
                        />
                    </Container>
                </div>
            </>
        </HnadleFilterForms.Provider>
    );
}
