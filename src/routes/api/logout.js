import { parse } from 'cookie';

export async function get({ event }) {
	// headers: { cookie }
    console.log('logout JS')
	// const cookies = parse(event.request.headers.cookie || '');
	return {
		status: 200,
		body: {
			message: "deconnected"
		}
	};
}

// export async function get({ headers: { cookie } }) {
// 	// headers: { cookie }
//     console.log('logout JS')
// 	const cookies = parse(cookie || '');
// 	return {
// 		status: 200,
// 		body: {
// 			message: "deconnected"
// 		}
// 	};
// }