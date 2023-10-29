import { Stack, Typography } from "@mui/material";
import Head from "next/head";

const contact = () => {
    return (
        <>
            <Head>
                <title>Next | Contact</title>
                <meta name="keyword" content="home" />
            </Head>
            <Stack spacing={5} mt={10} mb={20}>
                <Typography variant="h3">Contact</Typography>
                <Typography color="gray">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatem dolor atque nulla non aspernatur repellat
                    officiis ratione iusto dolorem voluptatum amet molestias
                    ipsa expedita, voluptate repudiandae iure hic.
                    Necessitatibus, illo? c
                </Typography>
            </Stack>
        </>
    );
};

export default contact;
