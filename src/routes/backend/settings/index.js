import r from '$lib/helpers/req'

export const get = async () => {
    const settings = await r.getSettings()
    // console.log('settings index.js', {settings})
    const projectSettings = {
        siteName: settings.site_name,
        domain: settings.domain_name,
        logoId: settings.logo
    }
    const manager = {
        fullName: settings.full_name,
        avatar: settings.avatar,
        job: settings.job,
        speech: settings.speech_about
    }
    const legal = {
        companyName: settings.company_name,
        commercialName: settings.commercial_name,
        telMobile: settings.tel_mobile,
        email: settings.email,
        telFixe: settings.tel_fixe,
        telFax: settings.tel_fax,
        address1: settings.address_1,
        address2: settings.address_2,
        town: settings.town,
        codePostal: settings.code_postal,
        country: settings.country,
        speechCompany: settings.speech_company,
        coordinates: settings.map_company.coordinates,
        zoomGlobal: settings.zoom_global,
        zoomZoom: settings.zoom_zoom
    }
    const colors = {
        mainColor1: settings.main_color_1,
        mainColor2: settings.main_color_2,
        mainColor3: settings.main_color_3,
        hoveLinkColor: settings.hove_link_color,
        hoverBgLinkcolor: settings.hover_bg_link_color,
        bgColor: settings.bg_color,
        bgBanner: settings.bg_banner
    }
    const metas = {
        metaDescription: settings.meta_description,
        keyWords: settings.mots_cles
    }
    // console.log('settings index.js', {metas})
    return {
        body: {
            projectSettings,
            manager,
            legal,
            colors,
            metas
        }
    }
}