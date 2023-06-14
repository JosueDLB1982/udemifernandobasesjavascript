export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=HhSlL52FcLULYVLKDKWK0BBYWE6LyfkP&q=${category}&limit=10`
    const resp = await fetch(url)
    
    const {data} = await resp.json()
   
    /* const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    })) */

    const gifs = data.map(({id, title, images}) => ({ // desestructurando
        id,
        title,
        url: images.downsized_medium.url
    }))

    console.log(gifs)
    return gifs
}