import React from "react";
import Layout from "~/layouts/default";
import Head from "next/head";
import Link from "next/link";
import { connect } from "react-redux";

const Index = ({ app }) => {
	return (
		<Layout>
			<Head>
				<title>{app.message}</title>
			</Head>
			<Link href="/posts">
				<a>Posts</a>
			</Link>
			-
			<Link href="/about">
				<a>About</a>
			</Link>
		</Layout>
	);
};

Index.getInitialProps = async ({ store }) => {
	store.dispatch({ type: "MESSAGE", payload: "Hello Homepage" });
	return {};
};

export default connect((state) => state)(Index);
