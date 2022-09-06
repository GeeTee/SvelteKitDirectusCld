export async function post({ request }) {
	// body: { email, password }
	const { email, password } = await request.json()
	// console.log('login js', {email}, {password})
	return {
		status: 200,
		body: {
			message: 'Successfully signed in'
		},
	};
}