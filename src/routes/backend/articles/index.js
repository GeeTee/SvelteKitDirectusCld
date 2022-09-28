import r from '$lib/helpers/req'

export const get = async () => {
    const articlesLinks = await r.getAllArticlesLinks()
    // console.log('articles index.js', {articlesLinks})
    return {
        body: {
            articlesLinks
        }
    }
}