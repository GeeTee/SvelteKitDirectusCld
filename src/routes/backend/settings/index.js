import r from '$lib/helpers/req'

export const get = async () => {
    const settings = await r.getSettings()
    console.log('settings index.js', {settings})
    // console.log('settings index.js', {metas})
    return {
        body: {
            settings
        }
    }
}