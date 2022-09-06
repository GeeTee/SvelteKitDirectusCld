import r from '$lib/helpers/req'
export const get = async () => {
    const items = await r.getAllTest()
    console.log('essais shadow enpoint')
    return {
        body: {
            items
        }
    }
}