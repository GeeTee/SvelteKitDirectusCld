import {CLOUDINARY_NAME} from '$lib/helpers/Env'

import {Cloudinary} from '@cloudinary/url-gen'

import {Resize} from "@cloudinary/url-gen/actions/resize"

const cldPath = 'Actibenne/banners/'
const sizes = [200, 400, 600, 800, 1000, 1200, 1400, 1600]
const l = sizes.length

export const get = async ({url}) => {
    const imgId = url.searchParams.get('img')
    const public_id = cldPath + imgId

    // console.log('slug.js ok')

    const cld = new Cloudinary({
        cloud: {
            cloudName: CLOUDINARY_NAME
        },
        url: {
            secure: true
        }
    })
    const img = cld.image(public_id)

    const srcJpg = []
    const srcWebP = []
    let srcJ = ''
    let srcW = ''

    for (let i = 0; i < l; i++) {
        img
            .format('jpg')
            .quality('auto')
            .resize(Resize.scale().width(sizes[i]))

        srcJ = img.toURL() 
        srcJpg.push(srcJ)
    }

    console.log({srcJpg})

    for (let i = 0; i < l; i++) {
        img
            .format('webp')
            .quality('auto')
            .resize(Resize.scale().width(sizes[i]))

        srcW = img.toURL() 
        srcWebP.push(srcW)
    }

    console.log({srcWebP})

        let srcTest = ''

        img
            .format('webp')
            .quality('auto')
            .resize(Resize.scale().width(1500))

        srcTest = img.toURL() 

    return {
        body: {
            srcJpg,
            srcWebP,
            srcTest
        }
    }
}