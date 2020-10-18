import React from "react";
import Head from "next/head";
import Layout from "~/layouts/default";

const Post = ({ id }) => {
	return (
		<Layout>
			<Head>
				<title>Post Details page</title>
			</Head>

			<div>Post details page of ID: {id}</div>
		</Layout>
	);
};

Post.getInitialProps = async ({ query }) => {
	let { id } = query;

	return {
		id: id,
	};
};

export default Post;
