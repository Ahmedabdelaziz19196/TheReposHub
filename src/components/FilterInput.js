import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DarkAndLightTheme from "../Context/DarkAndLight";
import HnadleFilterForms from "../Context/HandleSearchedDate";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useEffect, useState } from "react";
// import Date from "./Date";

export default function FilterInput({ closeForm, setActiveTopic }) {
    const { darkTheme } = useContext(DarkAndLightTheme);
    const {
        apiSearchParams,
        setApiSearchParams,
        setPageNumber,
        setFilterType,
    } = useContext(HnadleFilterForms);

    const [filteredData, setFilteredData] = useState({
        language: "",
        stars: "",
        creationDate: "",
        lastUpdate: "",
        sorting: "",
    });

    useEffect(() => {
        setFilteredData({
            language: apiSearchParams.language || "",
            stars: apiSearchParams.stars || "",
            creationDate: apiSearchParams.creationDate || "",
            lastUpdate: apiSearchParams.lastUpdate || "",
            sorting: apiSearchParams.sorting || "",
        });
    }, [apiSearchParams]);

    const languageList = [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C++",
        "C#",
        "PHP",
        "Ruby",
        "Go",
        "Rust",
        "Swift",
        "Kotlin",
        "Dart",
        "Scala",
        "Perl",
        "Shell",
        "Objective-C",
        "R",
        "Lua",
        "Haskell",
    ];

    function handleClose() {
        closeForm();
    }

    function handleSentData() {
        setApiSearchParams({
            language: filteredData.language,
            stars: filteredData.stars,
            creationDate: filteredData.creationDate,
            lastUpdate: filteredData.lastUpdate,
            sorting: filteredData.sorting,
        });
        setPageNumber(1);
        setFilterType("Explore");
        setActiveTopic(0);
        closeForm();
    }

    function clearField(field) {
        setFilteredData({
            ...filteredData,
            [field]: "",
        });
    }

    function handleResetDate() {
        setFilteredData({
            language: "",
            stars: "",
            creationDate: "",
            lastUpdate: "",
            sorting: "",
        });

        setApiSearchParams({
            language: "",
            stars: "",
            creationDate: "",
            lastUpdate: "",
            sorting: "",
        });
        closeForm();
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            {/* language selection */}
            <FormControl
                fullWidth
                sx={{ marginBottom: "20px", position: "relative" }}
            >
                <InputLabel
                    id="language-label"
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                        background: darkTheme
                            ? "var(--secondry-dark-background)"
                            : "var(--secondry-light-background)",
                        padding: "0px 5px",
                    }}
                >
                    Language
                </InputLabel>
                <Select
                    labelId="language-label"
                    id="language"
                    value={filteredData.language}
                    label="Language"
                    onChange={(e) =>
                        setFilteredData({
                            ...filteredData,
                            language: e.target.value,
                        })
                    }
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                "& .MuiList-root": {
                                    backgroundColor: darkTheme
                                        ? "var(--main-dark-background)"
                                        : "var(--main-light-background)",
                                    color: darkTheme
                                        ? "var(--color-dark)"
                                        : "var(--color-light)",
                                },
                                "& .MuiList-root .MuiMenuItem-root": {
                                    "&:hover": {
                                        background: darkTheme
                                            ? "var(--secondry-dark-background)"
                                            : "var(--secondry-light-background)",
                                    },
                                },
                            },
                        },
                    }}
                    sx={{
                        "& .MuiSvgIcon-root": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: darkTheme
                                ? "1px solid var(--color-dark)"
                                : "1px solid var(--color-light)",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiSelect-select": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                            paddingRight: "48px",
                        },
                        "& .MuiSelect-icon": {
                            right: "24px",
                        },
                    }}
                >
                    <MenuItem value="">Select Language</MenuItem>
                    {languageList.map((lang, index) => (
                        <MenuItem key={index} value={lang.toLowerCase()}>
                            {lang}
                        </MenuItem>
                    ))}
                </Select>
                <IconButton
                    onClick={() => clearField("language")}
                    sx={{
                        position: "absolute",
                        right: "0px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                    }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </FormControl>
            {/* language selection */}

            {/* stars selection */}
            <FormControl
                fullWidth
                sx={{ marginBottom: "20px", position: "relative" }}
            >
                <InputLabel
                    id="stars-label"
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                        background: darkTheme
                            ? "var(--secondry-dark-background)"
                            : "var(--secondry-light-background)",
                        padding: "0px 5px",
                    }}
                >
                    Stars
                </InputLabel>
                <Select
                    labelId="stars-label"
                    id="stars"
                    value={filteredData.stars}
                    label="Stars"
                    onChange={(e) =>
                        setFilteredData({
                            ...filteredData,
                            stars: e.target.value,
                        })
                    }
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                "& .MuiList-root": {
                                    backgroundColor: darkTheme
                                        ? "var(--main-dark-background)"
                                        : "var(--main-light-background)",
                                    color: darkTheme
                                        ? "var(--color-dark)"
                                        : "var(--color-light)",
                                },
                                "& .MuiList-root .MuiMenuItem-root": {
                                    "&:hover": {
                                        background: darkTheme
                                            ? "var(--secondry-dark-background)"
                                            : "var(--secondry-light-background)",
                                    },
                                },
                            },
                        },
                    }}
                    sx={{
                        "& .MuiSvgIcon-root": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: darkTheme
                                ? "1px solid var(--color-dark)"
                                : "1px solid var(--color-light)",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiSelect-select": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                            paddingRight: "48px",
                        },
                        "& .MuiSelect-icon": {
                            right: "24px",
                        },
                    }}
                >
                    <MenuItem value="<500">Less than 500</MenuItem>
                    <MenuItem value="500..1000">500 - 1000</MenuItem>
                    <MenuItem value=">1000">More than 1000</MenuItem>
                </Select>
                <IconButton
                    onClick={() => clearField("stars")}
                    sx={{
                        position: "absolute",
                        right: "0px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                    }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </FormControl>
            {/* stars selection */}

            {/* creation date */}
            <FormControl
                fullWidth
                sx={{ marginBottom: "20px", position: "relative" }}
            >
                <InputLabel
                    id="create-label"
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                        background: darkTheme
                            ? "var(--secondry-dark-background)"
                            : "var(--secondry-light-background)",
                        padding: "0px 5px",
                    }}
                >
                    Creation Date
                </InputLabel>
                <Select
                    labelId="create-label"
                    id="creationDate"
                    value={filteredData.creationDate}
                    label="Creation Date"
                    onChange={(e) =>
                        setFilteredData({
                            ...filteredData,
                            creationDate: e.target.value,
                        })
                    }
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                "& .MuiList-root": {
                                    backgroundColor: darkTheme
                                        ? "var(--main-dark-background)"
                                        : "var(--main-light-background)",
                                    color: darkTheme
                                        ? "var(--color-dark)"
                                        : "var(--color-light)",
                                },
                                "& .MuiList-root .MuiMenuItem-root": {
                                    "&:hover": {
                                        background: darkTheme
                                            ? "var(--secondry-dark-background)"
                                            : "var(--secondry-light-background)",
                                    },
                                },
                            },
                        },
                    }}
                    sx={{
                        "& .MuiSvgIcon-root": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: darkTheme
                                ? "1px solid var(--color-dark)"
                                : "1px solid var(--color-light)",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiSelect-select": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                            paddingRight: "72px",
                        },
                        "& .MuiSelect-icon": {
                            right: "24px",
                        },
                    }}
                >
                    <MenuItem value="1year">Last year</MenuItem>
                    <MenuItem value="6months">Last 6 months</MenuItem>
                    <MenuItem value="1month">Last month</MenuItem>
                </Select>
                <IconButton
                    onClick={() => clearField("creationDate")}
                    sx={{
                        position: "absolute",
                        right: "0px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                    }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
                <div
                    style={{
                        position: "absolute",
                        right: "24px",
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}
                >
                    {/* <Date /> */}
                </div>
            </FormControl>
            {/* creation date */}

            {/* Last Update */}
            <FormControl
                fullWidth
                sx={{ marginBottom: "20px", position: "relative" }}
            >
                <InputLabel
                    id="update-label"
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                        background: darkTheme
                            ? "var(--secondry-dark-background)"
                            : "var(--secondry-light-background)",
                        padding: "0px 5px",
                    }}
                >
                    Last Update
                </InputLabel>
                <Select
                    labelId="update-label"
                    id="lastUpdate"
                    value={filteredData.lastUpdate}
                    label="Last Update"
                    onChange={(e) =>
                        setFilteredData({
                            ...filteredData,
                            lastUpdate: e.target.value,
                        })
                    }
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                "& .MuiList-root": {
                                    backgroundColor: darkTheme
                                        ? "var(--main-dark-background)"
                                        : "var(--main-light-background)",
                                    color: darkTheme
                                        ? "var(--color-dark)"
                                        : "var(--color-light)",
                                },
                                "& .MuiList-root .MuiMenuItem-root": {
                                    "&:hover": {
                                        background: darkTheme
                                            ? "var(--secondry-dark-background)"
                                            : "var(--secondry-light-background)",
                                    },
                                },
                            },
                        },
                    }}
                    sx={{
                        "& .MuiSvgIcon-root": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: darkTheme
                                ? "1px solid var(--color-dark)"
                                : "1px solid var(--color-light)",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiSelect-select": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                            paddingRight: "72px",
                        },
                        "& .MuiSelect-icon": {
                            right: "24px",
                        },
                    }}
                >
                    <MenuItem value="1week">Updated in last week</MenuItem>
                    <MenuItem value="1month">Updated in last month</MenuItem>
                    <MenuItem value="6month">Updated in last 6 months</MenuItem>
                    <MenuItem value="1year">Updated in last year</MenuItem>
                </Select>
                <IconButton
                    onClick={() => clearField("lastUpdate")}
                    sx={{
                        position: "absolute",
                        right: "0px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                    }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
                <div
                    style={{
                        position: "absolute",
                        right: "24px",
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}
                >
                    {/* <Date /> */}
                </div>
            </FormControl>
            {/* Last Update */}

            {/* Stars sorting */}
            <FormControl
                fullWidth
                sx={{ marginBottom: "20px", position: "relative" }}
            >
                <InputLabel
                    id="sorting-label"
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                        background: darkTheme
                            ? "var(--secondry-dark-background)"
                            : "var(--secondry-light-background)",
                        padding: "0px 5px",
                    }}
                >
                    Stars Sorting
                </InputLabel>
                <Select
                    labelId="sorting-label"
                    id="sorting"
                    value={filteredData.sorting}
                    label="Stars Sorting"
                    onChange={(e) =>
                        setFilteredData({
                            ...filteredData,
                            sorting: e.target.value,
                        })
                    }
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                "& .MuiList-root": {
                                    backgroundColor: darkTheme
                                        ? "var(--main-dark-background)"
                                        : "var(--main-light-background)",
                                    color: darkTheme
                                        ? "var(--color-dark)"
                                        : "var(--color-light)",
                                },
                                "& .MuiList-root .MuiMenuItem-root": {
                                    "&:hover": {
                                        background: darkTheme
                                            ? "var(--secondry-dark-background)"
                                            : "var(--secondry-light-background)",
                                    },
                                },
                            },
                        },
                    }}
                    sx={{
                        "& .MuiSvgIcon-root": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: darkTheme
                                ? "1px solid var(--color-dark)"
                                : "1px solid var(--color-light)",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiSelect-select": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                            paddingRight: "48px",
                        },
                        "& .MuiSelect-icon": {
                            right: "24px",
                        },
                    }}
                >
                    <MenuItem value="desc">Descending</MenuItem>
                    <MenuItem value="asc">Ascending</MenuItem>
                </Select>
                <IconButton
                    onClick={() => clearField("sorting")}
                    sx={{
                        position: "absolute",
                        right: "0px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                    }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </FormControl>
            {/* Stars sorting */}

            <DialogActions sx={{ marginBottom: "20px" }}>
                <Button
                    onClick={handleResetDate}
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                    }}
                >
                    Reset
                </Button>
                <Button
                    onClick={handleClose}
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                    }}
                >
                    Cancel
                </Button>
                <Button
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                        "&:hover": {
                            background: "var(--color-theme)",
                        },
                    }}
                    className="search-button"
                    onClick={handleSentData}
                >
                    Search
                </Button>
            </DialogActions>
        </Box>
    );
}
