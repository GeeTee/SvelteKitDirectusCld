import r from '$lib/helpers/req'
export const get = async ({params}) => {
    const {slug} = params
    const item = await r.getTestSlug(slug)
    console.log('shadow endpoint slug essais', slug) 

    return {
        body: {
            item
        }
    }
}