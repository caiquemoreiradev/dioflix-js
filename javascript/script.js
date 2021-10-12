document.querySelector('li.music__item').addEventListener('click', () => {
    console.log('Clicou')
})

musics.map((item, index) => {

    //Clonando o modelo
    let music__item = document.querySelector('.models .music__item').cloneNode(true);

    //Setando id
    music__item.setAttribute('data-key', index);

    //Adicionando imagem
    music__item.querySelector('#cover').src = item.cover;

    //Adicionando nome
    music__item.querySelector('#music__name').innerHTML = `${item.music} - ${item.artist}`;

    if (item.playlist == 'trap') {
        document.querySelector('.trap .musics__row .musics__list').append(music__item);
    }

    if(item.playlist == 'recommended') {
        document.querySelector('.recommended .musics__row .musics__list').append(music__item);
    }

    if(item.playlist == 'recently') {
        document.querySelector('.recently__add .musics__row .musics__list').append(music__item);
    }

    if(item.playlist == 'rock') {
        document.querySelector('.rock .musics__row .musics__list').append(music__item);
    }
});