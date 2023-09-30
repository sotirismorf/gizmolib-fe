// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {}

declare namespace Api {

  interface ApiBook {
    data: Book[]
    meta: any
  }

  interface Book {
    id: number
    attributes: {
      title: string
      description: string,
      yearPublished: number
      authors: {
        data: Author[]
      }
      quantities: {
        data: Quantity[]
      }
    }
  }

  interface Author {
    id: number
    attributes: {
      name: string
    }
  }

  interface Quantity {
    id: number
    attributes: {
      copies_total: number
      copies_available: number
      library: {
        data: Library
      }
    }
  }

  interface Library {
    id: number
    attributes: {
      name: string
    }
  }
}
