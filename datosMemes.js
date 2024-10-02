
const obtenerMemes = async ()=>{

    const memeContainer= document.getElementById('list-memes')
    const memeTemplate= document.getElementById('meme')
    const request= await fetch("https://api.imgflip.com/get_memes")
    const respuesta= await request.json()


    respuesta.data.memes.slice(0, 10).forEach(meme => {
        //muestra los 10 primeros memes
        const newCard = memeTemplate.cloneNode(true)
        const img = newCard.querySelector('img')
        img.src = meme.url
        memeContainer.appendChild(newCard)
    });
    memeTemplate.remove()
}

obtenerMemes()