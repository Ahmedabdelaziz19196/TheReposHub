import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DarkAndLightTheme from "../Context/DarkAndLight";
import { useContext } from "react";
import FilterInput from "./FilterInput";

export default function FilterForm({ opne, closeForm, setActiveTopic }) {
    const { darkTheme } = useContext(DarkAndLightTheme);

    const handleClose = () => {
        closeForm();
    };

    return (
        <>
            <Dialog
                open={opne}
                onClose={handleClose}
                sx={{
                    "& .MuiPaper-root": {
                        background: "transparent",
                        width: "400px",
                        borderRadius: "10px",
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        background: darkTheme
                            ? "var(--secondry-dark-background)"
                            : "var(--secondry-light-background)",
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                        fontFamily: "inherit",
                    }}
                >
                    Filter
                </DialogTitle>
                <DialogContent
                    sx={{
                        paddingBottom: 0,
                        paddingTop: "10px !important",
                        background: darkTheme
                            ? "var(--secondry-dark-background)"
                            : "var(--secondry-light-background)",
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                    }}
                >
                    <FilterInput
                        opne={opne}
                        closeForm={closeForm}
                        setActiveTopic={setActiveTopic}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
}
