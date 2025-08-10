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
import { debounce } from "lodash";

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

    // Request Data From GitHub API
    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchData = debounce(() => {
            let params = {
                q: `created:>2023-01-01`,
                per_page: contentPerPage,
                page: pageNumber,
            };

            if (filterType === "Explore") {
                params.q = `language:${
                    apiSearchParams.language || "javascript"
                } stars:${apiSearchParams.stars || ">=0"} created:>${
                    repoCreationDate || "2023-01-01"
                } pushed:>${repoUpdateDate || "2024-01-01"}`;
                params.sort = "stars";
                params.order = apiSearchParams.sorting || "desc";
            } else {
                switch (filterType) {
                    case "Trending":
                        params.sort = "stars";
                        params.order = "desc";
                        break;
                    case "Recently":
                        params.sort = "updated";
                        params.order = "desc";
                        break;
                    case "Newest":
                        params.sort = "created";
                        params.order = "desc";
                        break;
                    default:
                        return;
                }
            }

            axios
                .get("https://api.github.com/search/repositories", {
                    params,
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        Accept: "application/vnd.github+json",
                    },
                    cancelToken: source.token,
                })
                .then((response) => {
                    setResponsedDate(response.data.items);
                    setTotalResposedDate(response.data.total_count);
                })
                .catch((error) => {
                    if (axios.isCancel(error)) {
                        console.log("Request canceled:", error.message);
                    } else {
                        console.error("Error fetching data:", error);
                        if (error.response && error.response.status === 403) {
                            console.error(
                                "Rate limit exceeded. Check your GitHub token or try again later."
                            );
                        }
                    }
                });

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 500); // تأخير 500 مللي ثانية

        fetchData();

        return () => {
            fetchData.cancel(); // إلغاء الطلبات المؤجلة
            source.cancel("Operation canceled by the user.");
        };
    }, [
        pageNumber,
        contentPerPage,
        apiSearchParams,
        repoCreationDate,
        repoUpdateDate,
        filterType,
    ]);

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
