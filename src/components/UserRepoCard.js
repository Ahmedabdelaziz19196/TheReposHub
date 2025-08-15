import "./Card.css";
// import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import DarkAndLightTheme from "../Context/DarkAndLight";
import { useContext } from "react";
export default function UserRepoCard({ index, userDate, totalResposedDate }) {
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
                    marginBottom: "15px",
                }}
                className="card"
            >
                <div
                    className="repo-info"
                    style={{
                        width: "100%",
                    }}
                >
                    <div className="repo-name-id">
                        <h4 className="repo-name">
                            - Repo Name :
                            <span style={{ fontWeight: "normal" }}>
                                {userDate[index].name}
                            </span>
                        </h4>
                        <p
                            style={{
                                fontSize: "12px",
                                color: darkTheme
                                    ? "1px solid #3d444d"
                                    : "1px solid #d1d9e0",
                                bottom: "12px",
                            }}
                        >
                            id: {userDate[index].id}
                        </p>
                    </div>
                    <h4>
                        - Language :
                        <span style={{ fontWeight: "normal" }}>
                            {userDate[index].language}
                        </span>
                    </h4>
                    <h4>
                        - Description :
                        <span style={{ fontWeight: "normal" }}>
                            {userDate[index].description || "No Description"}
                        </span>
                    </h4>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <h4>
                            - Forks Count :
                            <span style={{ fontWeight: "normal" }}>
                                {userDate[index].forks_count || "No Forks"}
                            </span>
                        </h4>
                        <h4>
                            - Stars Count :
                            <span style={{ fontWeight: "normal" }}>
                                {userDate[index].stargazers_count || "No Stars"}
                            </span>
                        </h4>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <h4>
                            - Fork :
                            <span style={{ fontWeight: "normal" }}>
                                {userDate[index].fork.toString()}
                            </span>
                        </h4>
                        <h4>
                            - Watchers :
                            <span style={{ fontWeight: "normal" }}>
                                {userDate[index].watchers_count}
                            </span>
                        </h4>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <h4>
                            - Create Date :
                            <span style={{ fontWeight: "normal" }}>
                                {
                                    userDate[index].created_at
                                        .split(":")[0]
                                        .split("T")[0]
                                }
                            </span>
                        </h4>
                        <h4>
                            - Last Update :
                            <span style={{ fontWeight: "normal" }}>
                                {
                                    userDate[index].updated_at
                                        .split(":")[0]
                                        .split("T")[0]
                                }
                            </span>
                        </h4>
                    </div>
                    <div
                        style={{
                            textAlign: "center",
                            marginTop: "15px",
                        }}
                    >
                        <Button
                            component="a"
                            href={userDate[index].html_url}
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
                            View The Repo
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
