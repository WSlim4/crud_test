import React from "react";
import Skeleton from "@mui/material/Skeleton";

export default function TableLoading() {
    return (
        <tr>
            <td>
                <Skeleton variant="rectangular" width={200} height={20} />
            </td>
            <td>
                <Skeleton variant="rectangular" width={200} height={20} />
            </td>
            <td>
                <Skeleton variant="rectangular" width={200} height={20} />
            </td>
            <td>
                <Skeleton variant="rectangular" width={200} height={20} />
            </td>
            <td>
                <Skeleton variant="rectangular" width={200} height={20} />
            </td>
        </tr>
    )
}