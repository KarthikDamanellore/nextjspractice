import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const json = await response.json();

    return {
        props: {
            users: json,
        },
    };
};

const users = ({ users }) => {
    console.log("users", users);
    return (
        <>
            <List>
                {users &&
                    users.map((user, index) => {
                        return (
                            <Link href={`/users/${user.id}`} key={user.id}>
                                <ListItem button>
                                    <ListItemText primary={user.name} />
                                </ListItem>
                            </Link>
                        );
                    })}
            </List>
        </>
    );
};

export default users;
