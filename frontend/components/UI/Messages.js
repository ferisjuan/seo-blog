import React from 'react'

export const Messages = ({ loading, error, message }) => {
	const showLoading = () =>
		loading ? <div className='alert alert-info'>Loading...</div> : null

	const showError = () =>
		error ? <div className='alert alert-danger'>{error}</div> : null

	const showMessage = () =>
		message ? <div className='alert alert-info'>{message}</div> : null
	return (
		<>
			{showError()}
			{showLoading()}
			{showMessage()}
		</>
	)
}
