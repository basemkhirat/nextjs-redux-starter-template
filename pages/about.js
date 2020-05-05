import Layout from "~/layouts/Default";
import Head from "next/head";
import React from "react";
import { connect } from "react-redux";

const About = ({app}) => {
	return (
		<Layout>
			<Head>
				<title>{app.message}</title>
			</Head>
		</Layout>
	);
};

About.getInitialProps = async ({ store }) => {
	store.dispatch({ type: "MESSAGE", payload: "Hello About" });
	return {};
};

export default connect(state => state)(About);
