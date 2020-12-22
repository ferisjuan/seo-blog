import Link from 'next/link'

import Layout from '../components/Layout'

const Index = () => (
	<Layout>
		<h2>Index Page</h2>
		<Link href='/signin'>
			<a>Signin</a>
		</Link>
		<br />
		<Link href='/signup'>
			<a>Signup</a>
		</Link>
	</Layout>
)

export default Index
