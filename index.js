/*Dog API - Quiero un perrito, pero no se qué raza escoger, ¿me ayudas?
1.- Declara una funcion getAllBreeds que devuelva todas las razas de perro.
*/
const getAllBreeds = () => {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((result) => {
      let allBreeds = [];
      for (let breed in result['message']) {
        allBreeds.push(breed);
      }
      return allBreeds;
    })
    .catch(error => console.log(error))
};

/* 2.- Declara una función getRandomDog que obtenga una imagen random de una raza. */
const getRandomDog = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=>res.json())
    .then((result) => result.message)
    .catch(error => console.log(error))
}

/*  3.- Declara una función getAllImagesByBreed que obtenga todas las imágenes de una raza. */
const getAllImagesByBreed = () => {
  return fetch(`https://dog.ceo/api/breed/komondor/images`)
    .then((res) => res.json())
    .then((result) => {
      let images = [];
      for (let img of result['message']) {
        images.push(img);
      }
      return images.join('');
    })
    .catch(error => console.log(error))
}

/* 4.- Declara una funcion getAllImagesByBreed2(breed) que devuelva las imágenes de la raza pasada por el argumento */
const getAllImagesByBreed2 = (breed) => {
  return fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((res) => res.json())
    .then((result) => {
      let images = [];
      for (let img of result['message']) {
        images.push(img);
      }
      return images.join('');
    })
    .catch(error => console.log(error))
}

/*  5.- Declarara una función getGitHubUserProfile(username) que obtenga el perfil de usuario de github a partir de su nombre de usuario. (https://api.github.com/users/{username}).*/
const getGitHubUserProfile = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(result => result)
    .catch(err=> console.log('error'))   
}

/*  6.- Declara una función printGithubUserProfile(username) que reciba como argumento el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM. */
const printGithubUserProfile = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(result => {
        let {avatar_url:img, name} = result;
        const main = document.querySelector('main');

        let card = document.createElement('article');
        let image = document.createElement('img');
        image.setAttribute('src', img);
        let title = document.createElement('h2');
        title.innerHTML = `${name}`

        card.appendChild(image);
        card.appendChild(title);
        main.appendChild(card);
        return {img, name}
      })
      .catch(error => console.log(error))
}

/* 7. Crea una función getAndPrintGitHubUserProfile(username) que contenga una petición a la API para obtener información de ese usuario y devuelva un string que represente una tarjeta HTML como en el ejemplo, la estructura debe ser exactamente la misma:*/
const getAndPrintGitHubUserProfile = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((result) => {
      let {avatar_url:img, name, public_repos: repos} = result;
      let card = 
      `<section>
        <img src="${img}" alt="imagen de usuario">
        <h1>${name}</h1>
        <p>Public repos: ${repos}</p>
      </section>`

      document.querySelector('main').innerHTML += card
      return card
    })
    .catch(error => console.log(error))
}

