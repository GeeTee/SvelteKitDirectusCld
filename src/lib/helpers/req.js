import {DIRECTUS_URL, PROJECT_TITLE} from './Env'
const url = DIRECTUS_URL

const getAllArticles = async () => {
    const res = await fetch(`${url}/graphql`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
                query ($title: String) {
                    advanced_articles (filter: {project: {project_title: {_eq: $title}}}) {
                        status
                        id
                        title
                        slug 
                        cld_public_id
                        blocks
                        gallery_photos
                        gallery_videos
                        main_text
                    }
                }
            `,
            variables: {
                title: PROJECT_TITLE
            }
        })
    })

    const {data: {advanced_articles}} = await res.json()
    const items = advanced_articles
    console.log('req getAllArticles', {items})
    return items
}

const getArticleBySlug = async (slug) => {
    if (typeof slug !== 'string') return
    const res = await fetch(`${url}/graphql`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
                query ($slug: String, $title: String) {
                    advanced_articles (filter: {_and: [
                        {slug: {_eq: $slug}},
                        {project: {project_title: {_eq: $title}}}
                    ]}) {
                        status
                        id
                        title
                        slug 
                        cld_public_id
                        blocks
                        gallery_photos
                        gallery_videos
                        main_text
                    }
                }
            `,
            variables : {
                slug,
                title: PROJECT_TITLE
            }
        })
    })

    const {data: {advanced_articles}} = await res.json()
    const item = advanced_articles[0]
    console.log('req getArticleBySlug', {item})
    return item
}

const getAllArticlesLinks = async () => {
    const res = await fetch(`${url}/graphql`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
                query ($title: String) {
                    advanced_articles (filter: {project: {project_title: {_eq: $title}}}) {
                        id
                        title
                        slug 
                    }
                }
            `,
            variables: {
                title: PROJECT_TITLE
            }
        })
    })

    const {data: {advanced_articles}} = await res.json()
    const items = advanced_articles
    // console.log('req getAllArticlesLinks', {items})
    return items
}

const getAllTest = async () => {
    const res = await fetch(`${url}/graphql`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
                query {
                    test {
                        id
                        title
                        slug
                        redaction
                        cld_public_id
                        gallery_photos
                    }
                }
            `
        })
    })

    const {data: {test}} = await res.json()
    // console.log('req getAllTest', {test})
    return test
}

const getTestSlug = async (slug) => {
    if (typeof slug !== 'string') return
    // console.log('req getTestSlug', {slug})
    const res = await fetch(`${url}/graphql`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
                query ($slug: String) {
                    test (filter: {slug: {_eq: $slug}}) {
                        title
                        redaction
                        cld_public_id
                    }
                }
            `,
            variables: {
                slug
            }
        })
    })

    const {data: {test}} = await res.json()
    const item = test[0]
    // console.log('req getTestSlug', {item})
    return item    
}

// USERS 
const getCurrentUser = async () => {
    // console.log('getCurrentUser')
    const res = await fetch(`${url}/graphql/system`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
                query {
                    users_me {
                        email
                    }
                }
            `
        })
    })

    const {data: {users_me}} = await res.json()
    console.log('getCurrentUser', {users_me})
}

// WEBSITE SETTINGS
const getSettings = async () => {
    const res = await fetch(`${url}/graphql`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
            query ($title: String) {
                website_settings (filter: {project: {project_title: {_eq: $title}}}) {
                main_color_1
                main_color_2 
                main_color_3
                bg_banner
                bg_color  
                hove_link_color 
                hover_bg_link_color
                site_name
                domain_name
                logo
                full_name
                job
                avatar
                speech_about
                company_name
                commercial_name
                address_1 
                address_2 
                code_postal 
                town 
                country 
                tel_fixe
                tel_fax
                tel_mobile 
                email
                speech_company
                map_company
                zoom_global
                zoom_zoom
                centrage_largeur_articles
                nombre_resume_article_par_niveau
                footer_pleine_largeur
                meta_description
                mots_cles
                }
            }
            `,
            variables: {
                title: PROJECT_TITLE
            }
        })
    })

    const {data: {website_settings}} = await res.json()

    console.log('getSettings', {website_settings})

    return website_settings[0]
}

const reqServices = {
    getArticleBySlug,
    getAllArticlesLinks,
    getAllArticles,
    getAllTest,
    getTestSlug,
    getCurrentUser,
    getSettings
}

export default reqServices