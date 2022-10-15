import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import Head from "next/head";
import BaseLayout from "../components/Layout/BaseLayout";
import {client} from "../graphql";
import {SWRConfig} from "swr";
import {Provider} from "react-redux";
import {setupStore} from "../store/store";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const fetcher = (query: any, variables: any) => client.request(query, variables);


function MyApp({Component, pageProps}: AppProps) {
    const store = setupStore();

    useEffect(() => {
        // here you can add your aos options
        AOS.init({
            offset: 200,
        });
    }, []);

    return (
        <SWRConfig value={{fetcher}}>
            <Provider store={store}>
                <BaseLayout>
                    <Head>
                        <title>Home</title>
                        <meta name={"viewport"} content={"initial-scale=1.0"}/>
                    </Head>
                    <Component {...pageProps} />
                </BaseLayout>
            </Provider>
        </SWRConfig>
    );
}

export default MyApp;
