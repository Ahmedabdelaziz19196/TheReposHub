import Button from "@mui/material/Button";
import DarkAndLightTheme from "../Context/DarkAndLight";
import { useContext } from "react";
export default function UserPersonalCard(userDate) {
    const { darkTheme } = useContext(DarkAndLightTheme);

    return (
        <>
            <div
                style={{
                    background: darkTheme
                        ? "var(--card-dark-background)"
                        : "var(--secondry-light-background)",
                    width: "100%",
                    borderRadius: "10px",
                    boxShadow: darkTheme
                        ? "0 8px 24px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)"
                        : " rgba(0, 0, 0, 0.1) 0 0 10px",
                    border: darkTheme
                        ? "1px solid #3d444d"
                        : "1px solid #d1d9e0",
                    display: "flex",
                    flexDirection: "column",
                    color: darkTheme
                        ? "var(--color-dark)"
                        : "var(--color-light)",
                    marginBottom: "10px",
                }}
                className="card"
            >
                <div
                    className="personal-info"
                    style={{
                        width: "100%",
                        paddingBottom: "0px",
                    }}
                >
                    <div className="image-name">
                        <a
                            href={userDate.userDate[0].owner.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={userDate.userDate[0].owner.avatar_url}
                                alt="Profile"
                            />
                        </a>
                        <div className="name">
                            <h4>{userDate.userDate[0].owner.login}</h4>
                            <p
                                style={{
                                    fontSize: "12px",
                                    color: darkTheme
                                        ? "1px solid #3d444d"
                                        : "1px solid #d1d9e0",
                                }}
                            >
                                id:{userDate.userDate[0].owner.id}
                            </p>
                        </div>
                    </div>
                    <div>
                        <Button
                            component="a"
                            href={userDate.userDate[0].owner.html_url}
                            target="_blank"
                            sx={{
                                transition: "0.2s",
                                color: "white",
                                background: "var(--color-theme)",
                                "&:hover": {
                                    background: "#0a61c4ff",
                                },
                            }}
                            className="search-button"
                        >
                            Profile
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
