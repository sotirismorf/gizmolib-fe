import { env } from '$env/dynamic/private'

export const load = async () => {

  const fetchItems = async () => {
    const api_host = env.API_HOST ? env.API_HOST : 'localhost'
    const api_port = env.API_PORT ? env.API_PORT : '1337'

    const result = await fetch(`http://127.0.0.1:1337/api/books?populate[0]=authors`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer your-token'
        },
      }
    );
    const data: Api.ApiBook = await result.json();
    console.log(data.data)
    return data;
  }

  return {
    items: fetchItems()
  }
}
