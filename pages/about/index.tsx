import React, {FC} from 'react';
import AboutHeader from "../../components/About/AboutHeader";
import Head from "next/head";
import AboutCommunityLibraries from "../../components/About/AboutCommunityLibraries";

interface IAboutProps {
}

const About: FC<IAboutProps> = () => {
    let pageHeadData = (
        <Head>
            <title>About</title>
            <meta
                name={"About description"}
                content={`get about description`}
            />
        </Head>
    );

    return (
        <article className={'page about-page'}>
            {pageHeadData}
            <AboutHeader/>
            <AboutCommunityLibraries/>
        </article>
    );
};

export default About;
