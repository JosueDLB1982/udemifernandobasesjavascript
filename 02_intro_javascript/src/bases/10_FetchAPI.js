console.log('Fetch API');
console.log();

const apiKey = 'NiOIlCw045eGPLw0db03rX3nBhsTaL5L';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpCall
    .then( resp => resp.json())
    .then(({data}) => { // desestructuro data de la respuesta
        const {url} = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    })
    .catch(console.warn)
