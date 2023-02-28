var form = document.querySelector('form')

form.addEventListener('submit', function (e) {

    //bloqueia o refresh automático do submit
    e.preventDefault()

    let pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/'

    let form = document.querySelector('.form-input')

    pokemonSearch = pokemonAPI + this.submitPokemon.value
    pokemonSearch = pokemonSearch.toLocaleLowerCase()

    let pokemonImage = document.querySelector('.pokemon-image')
    let pokeName = document.querySelector('.poke-name')
    let pokeId = document.querySelector('.poke-id')

    let pokemonType = document.querySelector('.pokemon-type')
    let pokemonAbilities = document.querySelector('.pokemon-abilities')

    fetch(pokemonSearch)
        .then(response => response.json())
        .then(function (data) {

            console.log(data)

            nameUpperCase = (data.name).toUpperCase()
            pokeName.innerHTML = nameUpperCase
            
            pokeId.innerHTML = `#${data.id}`
            
            pokemonSprite = data.sprites.front_default
          
            pokemonImage.src= pokemonSprite

            // tipo do pokemon
            pokemonFirstType = data.types[0].type.name

            // checar se o pokemon tem mais de 1 tipo, se tiver, puxa o tipo
            if (data.types.length > 1) {
                pokemonSecondType = data.types[1].type.name
                pokemonType.innerHTML = `${pokemonFirstType} / ${pokemonSecondType}`
            } else {
                pokemonType.innerHTML = `${pokemonFirstType}`
            }

            console.log(pokemonFirstType)


            // habilidade do Pokemon

            pokemonFirstAbilitie = data.abilities[0].ability.name

            // checar se o pokemon tem mais de 1 habilidade, se tiver, puxa a habilidade
            if (data.abilities.length > 1) {
                pokemonSecondAbilitie = data.abilities[1].ability.name
                pokemonAbilities.innerHTML = `${pokemonFirstAbilitie} / ${pokemonSecondAbilitie}`
            } else {
                pokemonAbilities.innerHTML = `${pokemonFirstAbilitie}`
            }

            console.log(pokemonFirstAbilitie)


            form.value = ''
        })
        .catch((error) => {
            form.value = ''
            form.placeholder = 'Nome ou Número inválido!'
        })

})
