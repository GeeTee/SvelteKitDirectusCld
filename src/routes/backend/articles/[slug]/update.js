import r from '$lib/helpers/req'

export const get = async ({params}) => {
    const {slug} = params 
    const item = await r.getArticleBySlug(slug)
    const gVBup = item.gallery_videos
    console.log('update.js', {slug}, {item})
    return {
        body: {
            item,
            gVBup
        }
    }
}