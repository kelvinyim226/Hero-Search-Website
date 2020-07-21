import md5 from 'js-md5';
var API_KEY = "f93df547041c96b346049ddfa01436b1";
var PRIV_KEY = "b18b492113b0cd06b75e3f82c1521b37ab9f5b13";

function fetchData(data) {
    let url = `http://gateway.marvel.com/v1/public/characters?name=${data}&apikey=${API_KEY}`;
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + PRIV_KEY + API_KEY);

    url += `&ts=${ts}&hash=${hash}`;
    console.log('url',url);

  return window
    .fetch(url, {
      // learn more about this API here: https://graphql-pokemon.now.sh/
      method: 'GET',
    })
    .then(response => response.json())
    .then(async response => {
        console.log('Success:', response);
        if(response.data.results[0]){
        return response.data.results[0]
        }else{
            return false
        }
      })
    .catch((error) => {
    console.error('Error:', error);
    });
}


export default fetchData
