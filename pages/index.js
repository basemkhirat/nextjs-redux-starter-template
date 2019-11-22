import React from 'react';
import Layout from '~/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import {connect} from "react-redux";


class Index extends React.Component {

    static getInitialProps({store}) {

        // Dispatch on server
        store.dispatch({type: "MESSAGE", payload: "Hello Nextjs Homepage"});
    }

    render() {
        return (
            <Layout>
                <Head>
                    <title>{this.props.app.message}</title>
                </Head>
                <Link href="/about"><a>Go To About</a></Link>
            </Layout>
        );
    }
}

export default connect(state => state)(Index);
