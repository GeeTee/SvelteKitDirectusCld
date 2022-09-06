import f from '$lib/helpers/scripts'

import { v2 as cloudinary } from 'cloudinary'



import {CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET} from '$lib/helpers/Env'

cloudinary.config({ 
  cloud_name: CLOUDINARY_NAME, 
  api_key: CLOUDINARY_API_KEY, 
  api_secret: CLOUDINARY_API_SECRET,
  secure: true
});

export const get = async ({params}) => {
    const {slug} = params
    // const public_id = f.underscoreToSlash(slug)
    const src = f.bannerResizeW(500, f.underscoreToSlash(slug))
    console.log('slug images', {src})
    return {
        body: {
            src
        }
    }
}

export const del = async ({params}) => {
    const {slug} = params
    console.log('img slug DELETE', {slug})
    const res = await cloudinary.api.delete_resources([f.underscoreToSlash(slug)],
    function(error, result) {console.log('DELETE SLUG',result, error); 
    });

    return {
        body: {
            message: 'image détruite'
        }
    }
}
