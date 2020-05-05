import React from "react";
import Layout from "~/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { connect } from "react-redux";

const Index = (props) => {
	return (
		<Layout>
			<Head>
				<title>{props.app.message}</title>
			</Head>
			<Link href="/about">
				<a>Go To About</a>
			</Link>
		</Layout>
	);
};

Index.getInitialProps = ({ store }) => {
	// Dispatch on server
	store.dispatch({ type: "MESSAGE", payload: "Hello Nextjs Homepage" });
};
export default connect((state) => state)(Index);
