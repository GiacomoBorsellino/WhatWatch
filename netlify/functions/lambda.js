const fetch = require("node-fetch");

exports.handler = async (event) => {

  const key =  process.env.key;

  const fet = await fetch(`https://api.themoviedb.org/3/movie/${event.queryStringParameters.value}?api_key=${key}&language=en-US`)
  const response = await fet.json() 

  const pass = (response) => {
    if (fet.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }      
    } else {
        return {
          statusCode: 404,
          body: JSON.stringify(response)
        }        
    }
  }

  return pass(response)
}