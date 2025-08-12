import { useEffect, useState } from "react";
import "./App.css";
import Splashscreen from "./components/SplashScreen";
import MainPage from "./components/MainPage";
import DarkAndLightTheme from "./Context/DarkAndLight";
import { BrowserRouter } from "react-router-dom";

function App() {
    const [darkTheme, setDarkMode] = useState(true);
    const [spashScreen, isSplashScreen] = useState(true);

    function handleDarkLightTheme() {
        let theTheme = !darkTheme;
        setDarkMode(theTheme);
        localStorage.setItem("theTheme", JSON.stringify(theTheme));
    }

    useEffect(() => {
        const theTheme = JSON.parse(localStorage.getItem("theTheme"));
        setDarkMode(theTheme);
    }, []);

    useEffect(() => {
        const splashShown = sessionStorage.getItem("splashScreen");
        if (splashShown) {
            isSplashScreen(false);
        } else {
            setTimeout(() => {
                isSplashScreen(false);
                sessionStorage.setItem("splashScreen", "true");
            }, 5700);
        }
    }, [spashScreen]);

    return (
        <>
            <BrowserRouter>
                <DarkAndLightTheme.Provider
                    value={{ darkTheme, handleDarkLightTheme }}
                >
                    {spashScreen ? <Splashscreen /> : <MainPage />}
                </DarkAndLightTheme.Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
