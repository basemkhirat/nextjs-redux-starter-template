import React from "react";
import Link from "next/link";
import Layout from "~/layouts/Default";
import Head from 'next/head';

export default (props) => {
	return (
		<Layout>
			<Head>
				<title>Post Details page</title>
			</Head>

			<div>
				<div>
					<Link href="/posts/1">First Post</Link>
				</div>

				<div>
					<Link href="/posts/2">Second Post</Link>
				</div>
			</div>
		</Layout>
	);
};
