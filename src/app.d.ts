// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {}

declare namespace Api {
  interface Book {
    id?: number
    authorId: number
    title: string
    authorName?: string
    description: string
    yearPublished: number
    copiesAvailable: number
    copiesTotal: number
  }

  interface Author {
    id: number
    name: string
    bio: string
  }
}
