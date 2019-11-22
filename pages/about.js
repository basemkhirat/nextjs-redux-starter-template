import Layout from '~/components/Layout';
import Head from "next/head";
import React from "react";

const About = (props) => {
    return (
        <Layout>
            <Head>
                <title>About Page</title>
            </Head>
        </Layout>
    );
};

About.getInitialProps = ({store}) => {

    // Dispatch on server
    store.dispatch({type: "MESSAGE", payload: "Hello Nextjs About"});
}

export default About;
