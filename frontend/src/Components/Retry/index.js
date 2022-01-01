import React from "react";
import { Replay } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";

export default function Retry({ fetchFunc, page }) {
    return (
        <div>
            <IconButton onClick={() => fetchFunc(page)}>
                <Replay/>
            </IconButton>
            <Typography>
                Tentar novamente
            </Typography>
        </div>
    )
} 