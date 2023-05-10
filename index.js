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