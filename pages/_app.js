import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>North of Zero - A Foundation For Scalable Growth</title>
				<link rel="icon" href="favicon.png" />
				<link
					href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
					rel="stylesheet"
				/>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta name="description" content="A FOUNDATION FOR SCALABLE GROWTH" />
				<meta
					property="og:description"
					content="A FOUNDATION FOR SCALABLE GROWTH"
				/>
				<meta property="og:image" content="thumbnail.png" />
				<meta property="og:type" content="website" />
				<link rel="apple-touch-icon" href="favicon.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="favicon.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="favicon.png" />
				<link rel="apple-touch-icon" sizes="167x167" href="favicon.png" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black" />
				<meta property="og:url" content="www.northofzero.dev" />
				<meta
					property="og:title"
					content="North of Zero - A Foundation For Scalable Growth"
				/>
				<meta name="theme-color" content="#000000" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
