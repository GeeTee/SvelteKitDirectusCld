import f from '$lib/helpers/scripts'


const sizes = [200, 400, 600, 800, 1000, 1200, 1400, 1600]
const l = sizes.length

export const get = async ({url}) => {
    const imgSlug = url.searchParams.get('img')
    const public_id = f.underscoreToSlash(imgSlug)


    const srcJpg = []
    const srcWebP = []
    let srcJ = ''
    let srcW = ''

    for (let i = 0; i < l; i++) {
        srcJ = `https://res.cloudinary.com/geeteeimages/image/upload/c_scale,w_${sizes[i]},q_auto,f_jpg/${public_id}`
        srcJpg.push(srcJ)
    }

    console.log({srcJpg})

    for (let i = 0; i < l; i++) {
        srcW = `https://res.cloudinary.com/geeteeimages/image/upload/c_scale,w_${sizes[i]},q_auto,f_webp/${public_id}`
        srcWebP.push(srcW)
    }

    console.log({srcWebP})

    return {
        body: {
            srcJpg,
            srcWebP,
        }
    }
}