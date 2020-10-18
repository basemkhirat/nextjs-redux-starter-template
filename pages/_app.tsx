import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import store from "~/store";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "~/theme";
import "~/assets/scss/style.scss";

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		const pageProps = Component.getInitialProps
			? await Component.getInitialProps(ctx)
			: {};

		return { pageProps };
	}

	render() {
		const { Component, pageProps, store } = this.props;
		return (
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<CSSReset />
					<Component {...pageProps} />
				</ThemeProvider>
			</Provider>
		);
	}
}

export default withRedux(store)(MyApp);
