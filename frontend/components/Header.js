import { useCallback, useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'

import { APP_NAME } from '../config'
import { signout, signin, authN } from '../actions/auth'

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap'

const Header = _props => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => setIsOpen(!isOpen)

	const handleSignOut = useCallback(() => {
		signout(() => Router.replace('/signin'))
	}, [signout])

	return (
		<div>
			<Navbar color='light' light expand='md'>
				<Link href='/'>
					<NavbarBrand className='font-weigth-bold'>{APP_NAME}</NavbarBrand>
				</Link>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						{!authN() && (
							<>
								<NavItem>
									<Link href='/signin'>
										<NavLink>Signin</NavLink>
									</Link>
								</NavItem>
								<NavItem>
									<Link href='/signup'>
										<NavLink>Signup</NavLink>
									</Link>
								</NavItem>
							</>
						)}

						{authN() && (
							<NavItem>
								<NavLink style={{ cursor: 'pointer' }} onClick={handleSignOut}>
									Signout
								</NavLink>
							</NavItem>
						)}
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	)
}

export default Header
