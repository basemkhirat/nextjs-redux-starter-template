import React, { useEffect } from "react";
import { connect } from "react-redux";

const Nav = (props) => {
	return (
		<div>
			<img src={require("~/assets/images/nextjs.png")} />
			<h1>{props.app.message}</h1>
		</div>
	);
};

export default connect((state) => state)(Nav);
