import { GL_API_TOKEN, GL_API_HOST, GL_API_PORT } from '$env/static/private'

export const load = async ({ url }) => {
  const page = Number(url.searchParams.get('page')) || 1
  const pageSize = Number(url.searchParams.get('pageSize')) || 5

  const fetchItems = async () => {

    /* qs query:
    {
      populate: {
        authors: {
          fields: ['name']
        },
        quantities: {
          fields: ['copies_total', 'copies_available'],
          populate: {
            library: {
              fields: ['name']
            },
          },
        }
      },
      fields: ['title', 'description', 'yearPublished'],
    }
    */

    const query = `pagination[page]=${page}&pagination[pageSize]=${pageSize}` + '&populate[authors][fields][0]=name&populate[quantities][fields][0]=copies_total&populate[quantities][fields][1]=copies_available&populate[quantities][populate][library][fields][0]=name&fields[0]=title&fields[1]=description&fields[2]=yearPublished'

    const result = await fetch(`${GL_API_HOST}/api/books?${query}`,
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

  return fetchItems()
}
