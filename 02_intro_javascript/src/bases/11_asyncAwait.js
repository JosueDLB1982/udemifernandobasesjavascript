console.log('Async Await');
console.log();



const getImagePromise = async() => {
    try {
        const apiKey = 'NiOIlCw045eGPLw0db03rX3nBhsTaL5L';
        const httpCall = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
        const {data} = await httpCall.json();
        const {url} = data.images.original;
        console.log(url)
    
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img)
        
    } catch (error) {
        // Manejo del erro
    }
}
getImagePromise();


