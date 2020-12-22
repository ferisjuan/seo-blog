import Link from 'next/link'
import SignupComponent from '../components/auth/SignupComponent'

import Layout from '../components/Layout'

const Signup = () => (
	<Layout>
		<h2>Signup page</h2>
		<SignupComponent />
		<Link href='/'>
			<a>Home</a>
		</Link>
	</Layout>
)

export default Signup
