import * as React from "react";
import Pagination from "@mui/material/Pagination";
import DarkAndLightTheme from "../Context/DarkAndLight";
import { useContext } from "react";
export default function ThePagination({
    handlePageNumber,
    pageNumber,
    total,
    contentPerPage,
}) {
    const { darkTheme } = useContext(DarkAndLightTheme);

    function getPageNumber(e) {
        if (
            e.target.closest("[aria-label]").getAttribute("aria-label") ===
            "Go to next page"
        ) {
            return handlePageNumber(+pageNumber + 1);
        }
        if (
            e.target.closest("[aria-label]").getAttribute("aria-label") ===
            "Go to previous page"
        ) {
            return handlePageNumber(+pageNumber - 1);
        }
        return handlePageNumber(+e.target.textContent);
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "20px",
            }}
        >
            <Pagination
                page={pageNumber}
                onChange={(e) => getPageNumber(e)}
                count={
                    total > 200
                        ? Math.ceil(200 / contentPerPage)
                        : Math.ceil(total / contentPerPage)
                }
                variant="outlined"
                shape="rounded"
                sx={{
                    "& .MuiPaginationItem-root": {
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                    },

                    "& .MuiButtonBase-root": {
                        border: "none",
                    },
                    "& .MuiPaginationItem-root.Mui-selected": {
                        backgroundColor: "var(--color-theme)",
                        color: "white",
                        borderColor: "var(--color-theme)",
                    },
                }}
            />
        </div>
    );
}
