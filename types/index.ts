export type ArticleItem = {
    id: string,
    title: string,
    date: string,
    category: string
}

export type ArticleData = {
    id: string,
    contentHtml: string,
    h1: string | null,
    image: string | null,
    title: string,
    category: string,
    date: string
}