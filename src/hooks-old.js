

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    // if (browser) {
    //     console.log('Browser')
    //     // window.localStorage.get('authToken')
    // }
    
    event.locals.user = {
        autheticated: false
    };

  console.log('Hooks user : ', event.locals.user)
 
  const response = await resolve(event);
//   response.headers.set('x-custom-header', 'potato');
 
  return response;
}

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
  return event.locals.user
    ? {
        user: {
          // only include properties needed client-side —
          // exclude anything else attached to the user
          // like access tokens etc
          autheticated: event.locals.user.autheticated,
        }
      }
    : {};
}