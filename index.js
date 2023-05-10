/*Dog API - Quiero un perrito, pero no se qué raza escoger, ¿me ayudas?
1.- Declara una funcion getAllBreeds que devuelva todas las razas de perro.
*/
const getAllBreeds = () => {
  let arr = fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((result) => {
      let allBreeds = [];
      for (let breed in result['message']) {
        allBreeds.push(breed);
      }
      return allBreeds;
    });
  return arr;
};

/* 2.- Declara una función getRandomDog que obtenga una imagen random de una raza. */
const getRandomDog = () => {
  let str = fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=>res.json())
    .then((result) => result.message)
    return str;
}

/*  3.- Declara una función getAllImagesByBreed que obtenga todas las imágenes de una raza. */
const getAllImagesByBreed = () => {
  let arrImage = fetch(`https://dog.ceo/api/breed/komondor/images`)
    .then((res) => res.json())
    .then((result) => {
      let images = [];
      for (let img of result['message']) {
        images.push(img);
      }
      return images.join('');
    });
  return arrImage;
}

/* 4.- Declara una funcion getAllImagesByBreed2(breed) que devuelva las imágenes de la raza pasada por el argumento */
const getAllImagesByBreed2 = (breed) => {
  let arrImage = fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((res) => res.json())
    .then((result) => {
      let images = [];
      for (let img of result['message']) {
        images.push(img);
      }
      return images.join('');
    });
  return arrImage;
}

/*  5.- Declarara una función getGitHubUserProfile(username) que obtenga el perfil de usuario de github a partir de su nombre de usuario. (https://api.github.com/users/{username}).*/
const getGitHubUserProfile = (username) => {
  let profile = fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((result) => result);
  return profile;
}

/*  6.- Declara una función printGithubUserProfile(username) que reciba como argumento el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM. */
const printGithubUserProfile = (username) => {
  let profileCard = fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((result) => {
        let {avatar_url:img, name} = result;
        const main = document.createElement('main');
        document.querySelector('body').appendChild(main);

        let card = document.createElement('article');
        let image = document.createElement('img');
        image.setAttribute('src', img);
        let title = document.createElement('h2');
        title.innerHTML = `${name}`
        card.appendChild(image);
        card.appendChild(title);
        
        main.appendChild(card);
      });
  return profileCard;
}