import { Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PageNotFound = () => {
    const router = useRouter();
    useEffect(() => {
        const id = setTimeout(() => {
            router.push("/");
        }, 3000);

        return () => clearTimeout(id);
    });
    return (
        <Box sx={{ margin: 20 }}>
            <Typography variant="h5">whoops! Page not found</Typography>
            <Link href="/">
                <Button Buttonvariant="text">Go To Home</Button>
            </Link>
        </Box>
    );
};

export default PageNotFound;
