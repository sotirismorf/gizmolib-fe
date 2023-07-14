import { env } from '$env/dynamic/private'

const fetchItems = async (body: Api.Book) => {
  const api_host = env.API_HOST ? env.API_HOST : 'localhost'
  const api_port = env.API_PORT ? env.API_PORT : '8080'

  const result = await fetch(`http://${api_host}:${api_port}/books`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  const data: Api.Book = await result.json();

  return data;
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    console.log(data.get('author'))

    const books = await fetchItems({
        title: data.get('title'),
        description: data.get('description'),
        authorId: parseInt(data.get('author')),
        yearPublished: parseInt(data.get('yearPublished')),
        copiesTotal: parseInt(data.get('copiesTotal')),
        copiesAvailable: parseInt(data.get('copiesTotal')),
      })

    console.log(books)

    return { success: true }
  }
};

export const load = async () => {

  const fetchItems = async () => {
    const api_host = env.API_HOST ? env.API_HOST : 'localhost'
    const api_port = env.API_PORT ? env.API_PORT : '8080'

    const result = await fetch(`http://${api_host}:${api_port}/authors`);
    const data: Api.Author[] = await result.json();
    return data;
  }

  return {
    authors: fetchItems()
  }
}
