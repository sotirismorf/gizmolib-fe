import { GL_API_TOKEN, GL_API_HOST, GL_API_PORT } from '$env/static/private'

export const load = async () => {

  const fetchItems = async () => {
    const result = await fetch(`http://${GL_API_HOST}:${GL_API_PORT}/api/books?populate[0]=authors`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GL_API_TOKEN}`
        },
      }
    );
    const data: Api.ApiBook = await result.json();
    return data;
  }

  return {
    items: fetchItems()
  }
}
