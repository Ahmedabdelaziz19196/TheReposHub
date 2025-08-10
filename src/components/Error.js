import Button from "@mui/material/Button";
import DarkAndLightTheme from "../Context/DarkAndLight";
import { useContext } from "react";

export default function Error() {
    const { darkTheme } = useContext(DarkAndLightTheme);
    function handleReload() {
        window.location.reload();
    }
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
            }}
        >
            <p style={{ position: "relative", top: "45px" }}>Error code 404</p>
            <h1 style={{ fontSize: "100px" }}>OOOOPS!!!</h1>
            <div
                style={{
                    position: "relative",
                    bottom: "40px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <h3>Something went wrong</h3>
                <Button
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                        background: "var(--color-theme)",
                    }}
                    className="search-button"
                    onClick={handleReload}
                >
                    Reload
                </Button>
            </div>
        </div>
    );
}
