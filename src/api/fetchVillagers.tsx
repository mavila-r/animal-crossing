//https://unpkg.com/pokemons@1.1.0/pokemons.json //Tiene a todos los pkms


export async function fetchVillagers() {
    const apiKey = '98d6307f-9c88-41e0-9bad-2fd7a78c62fb';
    const url = 'https://api.nookipedia.com/villagers';
  
    try {
      const response = await fetch(url, {
        headers: {
          'X-API-KEY': apiKey,
          'Accept-Version': '1.0.0',
        },
      });
  console.log("VILLAGERSSS " + response)
      if (!response.ok) {
        throw new Error('Error al obtener datos de la API');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Hubo un error:', error);
      // Manejar el error adecuadamente en tu aplicación
      return null;
    }
  }
  
  // Llamar a la función para obtener los aldeanos
  fetchVillagers()
    .then((villagers) => {
      console.log('Aldeanos:', villagers);
      // Haz algo con los datos de los aldeanos
    })
    .catch((error) => {
      console.error('Error al obtener aldeanos:', error);
    });
  