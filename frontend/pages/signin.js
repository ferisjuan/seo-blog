import Link from 'next/link'

import Layout from '../components/Layout'

const Signin = () => (
	<Layout>
		<h2>Signin Page</h2>
		<Link href='/'>
			<a>Home</a>
		</Link>
	</Layout>
)

export default Signin
