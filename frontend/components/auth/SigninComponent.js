import Router from 'next/router'
import { useState } from 'react'

import { signin, authenticate, authN } from '../../actions/auth'

import { Messages } from '../UI/Messages'

const SigninComponent = () => {
	const [values, setValues] = useState({
		email: 'juan@gmail.com',
		password: 'test123',
		error: '',
		message: '',
		loading: false,
	})

	const { email, password, error, message, loading } = values

	const handleSubmit = event => {
		event.preventDefault()

		setValues({ ...values, loading: true, error: false })

		const user = { email, password }

		signin(user)
			.then(data => {
				if (data?.error) {
					setValues({ ...values, error: data.error, loading: false })
				} else {
					authenticate(data, () => Router.push(`/`))
				}
			})
			.catch(console.error)
	}

	const handleChange = e => {
		setValues({
			...values,
			error: false,
			[e.target.name]: e.target.value,
		})
	}

	const SignupForm = () => {
		return (
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<input
						name='email'
						type='email'
						className='form-control'
						placeholder='Type your email'
						value={email}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<input
						name='password'
						type='password'
						className='form-control'
						placeholder='Type your password'
						value={password}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</div>
			</form>
		)
	}

	return (
		<>
			<Messages loading={loading} error={error} message={message} />
			{!loading && !message && SignupForm()}
		</>
	)
}

export default SigninComponent
