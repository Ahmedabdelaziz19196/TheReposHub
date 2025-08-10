import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
export default function Loading() {
    return (
        // <div
        //     style={{
        //         // display: "flex",
        //         // justifyContent: "center",
        //         // alignItems: "center",
        //         height: "100%",
        //         // background: "rgb(0,0,0,.5)",
        //         // backdropFilter: "blur(2px)",
        //     }}
        // >

        // </div>
        <Box sx={{ width: "100%", position: "relative", top: "57px" }}>
            <LinearProgress />
        </Box>
    );
}
