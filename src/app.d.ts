// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {}

declare namespace Api {

  interface ApiBook {
    data: Book[]
    meta: any
  }

  interface Book {
    id?: number
    attributes: {
      title: string
      yearPublished: number
      copiesTotal: number
      copiesAvailable: number
      description: string
      authors: {
        data: MyAuthor[]
      }
    }
  }

  interface Author {
    id: number
    attributes: {
      name: string
    }
  }
}
