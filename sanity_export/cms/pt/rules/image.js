/**
What We want to return
{
  _type: image
  _sanityAsset: image@https://www.joinproviders.com/uploads/blog-tax-safe-graphic.jpg
}
 */

module.exports = {
  deserialize(el, next, block) {
    if(typeof el.tagName == "undefined") {
      return undefined
    }

    if (el.tagName.toLowerCase() != 'img') {
      return undefined
    }
    const src = el.getAttribute("src")
    let public
    let caption = ''
    if(src.includes('http') ){
      public = src
    } else {
      public = `https://www.cocina214.com${src}`
    }
    if(el.getAttribute("data-caption")) {
      caption = el.getAttribute("data-caption")
    }
    return block({
      _type: "image",
      _sanityAsset: `image@${public}`,
      caption,
    })
  },
}