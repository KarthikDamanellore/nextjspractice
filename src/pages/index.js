import Image from "next/image";
import image from "../assets/images/nextjslogo.png";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <Box sx={{ marginBottom: "10" }}>
            <Head>
                <title>Next | Home</title>
                <meta name="keyword" content="home" />
            </Head>
            <Stack alignItems="center" justifyContent="center">
                <Image src={image} width={500} height={200} marginTop={20} />
                <Stack alignSelf="flex-start" spacing={2} m={10}>
                    <Typography variant="h3">Introduction</Typography>
                    <Typography color="gray">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptatem dolor atque nulla non aspernatur
                        repellat officiis ratione iusto dolorem voluptatum amet
                        molestias ipsa expedita, voluptate repudiandae iure hic.
                        Necessitatibus, illo? c
                    </Typography>
                </Stack>
                <Link href="/users/users">
                    <Chip label="Go to Users"></Chip>
                </Link>
            </Stack>
        </Box>
    );
}
