import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='viewport-fit=cover' />
				<meta charSet='UTF-8' />

				<link
					rel='stylesheet'
					href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
					integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
					crossOrigin='anonymous'
				></link>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
