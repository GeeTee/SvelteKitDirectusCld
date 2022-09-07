const condensifyPhone = (phone) => {
    if (typeof phone === 'string') {
        return phone.trim().replace(/ /g, '')
    }
    // console.log('condensifyPhone', {phone}, typeof phone)
}

const checkAuthentif = (beA, isA, href) => {
    // beA = beAutheticated
    // isA = isAuthenticated
    // console.log('checkAuthentif', {beA}, {isA})
    if (typeof beA !== 'boolean' || (isA && typeof isA !== 'boolean') || (href && typeof href !== 'string')) return 
    if (beA === true && isA === true) {
        return false
    }
    if (beA === true && isA === false) {
        return true
    }
    if (beA === false && isA === true && href === '/login') {
        return true
    }
    return false
}

const slashToUnderscore = (str) => {
  return str.replace(/\//g, "_");
}

const underscoreToSlash = (str) => {
  return str.replace(/\_/g, '/');
}

const deleteOneEltFromArray = (arr, value) => { 
    const newArr = arr.filter(function(ele){ 
            return ele != value; 
        })
    console.log('deleteOneEltFromArray', {newArr})
    return newArr
}

const definitiveDeletingBanner = (bupSlugId, cldSlugId, arr) => {
  // Il y a une banner donc itemToEdit exist
  // bupSlugId = itembupSlugId , cldSlugId = cld_public_id, arr = imgsKept
  if (bupSlugId === cldSlugId) { // banner en place et enregistrée et hébergée
    console.log('on détruit un article ayant une banner')
    deleteOneImg(bupSlugId)    
  }
  if (bupSlugId !== cldSlugId) { // on a une new banner qui n'est pas enregistrée en bdd mais est forcément sur cld
    if (arr.includes(cldSlugId)) {
      arr = deleteOneEltFromArray(arr, cldSlugId)
    }
    deleteOneImg(cldSlugId) // delete banner non enregistrée mais délà sur cld
    deleteOneImg(bupSlugId) // delete l'imag de itemToEdit et enrgistrée et sur cld
  }
}
    
// cloudinary
const imgSquareW = (w, public_id) => {
    return `https://res.cloudinary.com/geeteeimages/image/upload/ar_1,c_thumb,q_auto,w_${w},h_${w}/${public_id}`
}

const bannerResizeW = (w, public_id) => {
    return `https://res.cloudinary.com/geeteeimages/image/upload/c_scale,dpr_1.0,q_auto,w_${w}/${public_id}`
}

const imgNoDim = (public_id) => {
    return `https://res.cloudinary.com/geeteeimages/image/upload/dpr_1.0,q_auto/${public_id}`
}

const bannerResizeWH = (w, h, public_id) => {
    return `https://res.cloudinary.com/geeteeimages/image/upload/c_crop,dpr_1.0,q_auto,g_faces,w_${w},h_${h}/${public_id}`
}

const thumbImg = (public_id) => {
  return `https://res.cloudinary.com/geeteeimages/image/upload/c_limit,h_100,w_150/${public_id}`
}

const deleteOneImg = async (slug) => { 
  console.log('deleteOneImg', {slug})
  const response = await fetch(`/images/${slug}`, {
    method: "DELETE"
  });
  if(response.ok) {
    console.log('détruit!')
  }
}

const deleteAllImgsFromArray = async (array) => {
  array.forEach(slug => {
    deleteOneImg(slug)
  });
}

const scriptsServices = {
    condensifyPhone,
    checkAuthentif,
    definitiveDeletingBanner,
    imgNoDim,
    imgSquareW,
    bannerResizeWH,
    bannerResizeW,
    thumbImg,
    deleteOneImg,
    deleteAllImgsFromArray,
    slashToUnderscore,
    underscoreToSlash,
    deleteOneEltFromArray
}
export default scriptsServices