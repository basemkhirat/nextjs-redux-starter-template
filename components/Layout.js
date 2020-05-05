import React from "react";
import Nav from "~/components/Nav";
import Head from "next/head";

const Layout = (props) => {
	return (
		<div className="wrapper">
			<Head>
				<title>My Site</title>
			</Head>

			<Nav></Nav>

			{props.children}
		</div>
	);
};

export default Layout;
