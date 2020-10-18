import React from "react";
import Head from "next/head";
import { connect } from "react-redux";

const Default = ({ children, app }) => {
	return (
		<>
			<Head>
				<title>Nextjs Site</title>
			</Head>

			<div className="wrapper">
				<header>
					<img src={require("~/assets/images/nextjs.png")} />
					<h1>{app.message}</h1>
				</header>

				<div className="content">{children}</div>
			</div>
		</>
	);
};

export default connect((state) => state)(Default);
