import React, { useState, useRef } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
// import dayjs from "dayjs";
import DarkAndLightTheme from "../Context/DarkAndLight";
import { useContext } from "react";

export default function Date() {
    const { darkTheme } = useContext(DarkAndLightTheme);
    const [open, setOpen] = useState(false);
    // const [selectedDate, setSelectedDate] = useState(dayjs());
    const iconRef = useRef(null);

    function handleDateChange(date) {
        console.log(date);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ position: "relative", bottom: "2px" }}>
                <DatePicker
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    // value={selectedDate}
                    onChange={handleDateChange}
                    slots={{ field: () => null }}
                    slotProps={{
                        popper: {
                            anchorEl: iconRef.current,
                            placement: "bottom-start",
                            modifiers: [
                                {
                                    name: "offset",
                                    options: {
                                        offset: [0, 8],
                                    },
                                },
                            ],
                            sx: {
                                "& .MuiPaper-root": {
                                    backgroundColor: darkTheme
                                        ? "var(--main-dark-background)"
                                        : "var(--main-light-background)",
                                    color: darkTheme
                                        ? "var(--color-dark)"
                                        : "var(--color-light)",
                                },
                                "& .MuiPickersDay-root": {
                                    backgroundColor: darkTheme
                                        ? "var(--main-light-background)"
                                        : "var(--main-dark-background)",
                                    color: darkTheme
                                        ? "var(--color-light)"
                                        : "var(--color-dark)",
                                    "&:hover": {
                                        backgroundColor: darkTheme
                                            ? "var(--secondry-dark-background)"
                                            : "var(--secondry-light-background)",
                                        color: darkTheme
                                            ? "var(--color-dark)"
                                            : "var(--color-light)",
                                    },
                                    "&.Mui-selected": {
                                        backgroundColor:
                                            "var(--color-theme) !important",
                                        color: "#fff",
                                    },
                                },
                                "& .MuiPickersCalendarHeader-root": {
                                    backgroundColor: darkTheme
                                        ? "var(--main-dark-background)"
                                        : "var(--main-light-background)",
                                    color: darkTheme
                                        ? "var(--color-dark)"
                                        : "var(--color-light)",
                                },
                                "& .MuiPickersDay-dayOutsideMonth": {
                                    color: "#666",
                                },
                                "& .MuiDayCalendar-weekDayLabel": {
                                    color: darkTheme
                                        ? "var(--color-dark)"
                                        : "var(--color-light)",
                                },
                                "& .MuiPickersArrowSwitcher-button": {
                                    color: darkTheme
                                        ? "var(--color-dark)"
                                        : "var(--color-light)",
                                    "&:hover": {
                                        color: "var(--color-theme)",
                                    },
                                },
                            },
                        },
                    }}
                />
                <IconButton
                    onClick={() => setOpen((prev) => !prev)}
                    ref={iconRef}
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                        transition: "0.2s",
                        padding: "2px",
                        "&:hover": {
                            backgroundColor: "var(--color-theme)",
                            opacity: "0.5",
                        },
                    }}
                >
                    <CalendarMonthIcon />
                </IconButton>
            </Box>
        </LocalizationProvider>
    );
}
