import "../styles/globals.css";
import { BuildTheme } from "../assets/global/Theme-variable";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import FullLayout from "../layouts/full-layout/FullLayout";
import BlankLayout from "../layouts/blank-layout/BlankLayout";
import { CacheProvider } from "@emotion/react";
import {
    useSession,
    signIn,
    signOut,
    getSession,
    Provider as AuthProvider,
} from "next-auth/client";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { nanoid } from "nanoid";
import "../assets/css/all.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
// CSS For Agents
import "../assets/agents/css/responsive.css";
import "../assets/agents/css/style.css";
import "../assets/mentors/style.css";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
// import "../styles/globals.css";

import createEmotionCache from "../src/createEmotionCache";


//Smartmates Development
import "../components/ss-task-monitor/SsTaskMonitor.css"
import "../components/PDF_Carousel/PDFCarousel.css"
import "@madzadev/image-slider/dist/index.css";


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
// some comment

function MyApp({
    Component,
    pageProps,
    session,
    emotionCache = clientSideEmotionCache,
}) {
    const customizer = {
        direction: "ltr",
        theme: "PURPLE_THEME",
        activeMode: "light",
    };
    const theme = BuildTheme(customizer);

    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <script
                    src='https://code.jquery.com/jquery-1.12.4.min.js'
                    integrity='sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ'
                    crossorigin='anonymous'></script>
                <link
                    href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'
                    rel='stylesheet'
                    integrity='sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1'
                    crossorigin='anonymous'
                />
                <script
                    src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'
                    integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW'
                    crossorigin='anonymous'></script>
                <script
                    src='https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js'
                    integrity='sha512-9CWGXFSJ+/X0LWzSRCZFsOPhSfm6jbnL+Mpqo0o8Ke2SYr8rCTqb4/wGm+9n13HtDE1NQpAEOrMecDZw4FXQGg=='
                    crossorigin='anonymous'
                    referrerpolicy='no-referrer'></script>
            </Head>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <BlankLayout>
                        <AuthProvider session={session}>
                            {/* <Layout customizer={customizer}> */}
                            <Component {...pageProps} customizer={customizer} />
                            {/* </Layout> */}
                        </AuthProvider>
                    </BlankLayout>
                </ThemeProvider>
            </CacheProvider>
        </>
    );
}

export default MyApp;
