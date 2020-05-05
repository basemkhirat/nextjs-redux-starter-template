import React from 'react';
import Nav from '~/components/Nav';
import Head from "next/head";

class Layout extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <Head>
                    <title>My Site</title>
                </Head>

                <Nav></Nav>

                {this.props.children}
            </div>
        );
    }

}

export default Layout;
