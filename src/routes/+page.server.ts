import { env } from '$env/dynamic/private'

export const load = async () => {

  const fetchItems = async () => {
    const api_host = env.API_HOST ? env.API_HOST : 'localhost'
    const api_port = env.API_PORT ? env.API_PORT : '8080'

    const result = await fetch(`http://${api_host}:${api_port}/books`);
    const data: Api.Book[] = await result.json();
    return data;
  }

  return {
    items: fetchItems()
  }
}
