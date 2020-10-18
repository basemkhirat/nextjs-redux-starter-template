import React from "react";
import Link from "next/link";
import Layout from "~/layouts/default";
import Head from "next/head";

const Index = () => {
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

export default Index;
