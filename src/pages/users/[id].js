import { Stack, Typography } from "@mui/material";
import React from "react";

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = await response.json();

    return {
        props: {
            user,
        },
    };
};

export const getStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const json = await response.json();

    const paths = json.map((user) => {
        return {
            params: {
                id: user.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

const Detail = ({ user }) => {
    return (
        <Stack spacing={5} m={20}>
            <Typography variant="h3">{user.name}</Typography>
            <Typography variant="subtitle1" color="gray">
                {user.username}
            </Typography>
            <Typography variant="subtitle1" color="gray">
                {user.email}
            </Typography>
        </Stack>
    );
};

export default Detail;
