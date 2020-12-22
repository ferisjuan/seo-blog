import Link from 'next/link'

import Layout from '../components/Layout'

const Signup = () => (
	<Layout>
		<h2>Signup Page</h2>
		<Link href='/'>
			<a>Home</a>
		</Link>
	</Layout>
)

export default Signup
