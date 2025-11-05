import fs from 'fs'
import matter from 'gray-matter'
import moment from 'moment'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

import type { ArticleItem } from '../types'

const articlesDirectory = path.join(process.cwd(), 'articles')

const getSortedArticles = (): ArticleItem[] => {
    const fileNames = fs.readdirSync(articlesDirectory)

    const allArticlesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '')

        const fullPath = path.join(articlesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf-8')

        const matterResult = matter(fileContents)

        return {
            id, 
            title: matterResult.data.title,
            date: matterResult.data.date,
            category: matterResult.data.category,
        }
    })

    return allArticlesData.sort((a, b) => {
        const format = 'DD-MM-YYYY'
        const dateOne = moment(a.date, format)
        const dateTwo = moment(b.date, format)
        if (dateOne.isBefore(dateTwo)) {
            return -1
        } else if (dateTwo.isAfter(dateOne)) {
            return 1
        } else {
            return 0
        }
    })
}

export const getCategorisedArticles = (): Record<string, ArticleItem[]> => {
    const sortedArticles = getSortedArticles()
    const categorisedArticles: Record<string, ArticleItem[]> = {}

    sortedArticles.forEach((article) => {
        if (!categorisedArticles[article.category]) {
            categorisedArticles[article.category] = []
        }
        categorisedArticles[article.category].push(article)
    })

    return categorisedArticles
}

export const getArticlesData = async (id: string) => {
    const fullPath = path.join(articlesDirectory, `${id}.md`)
    
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    
    const matterResult = matter(fileContents)

    const processedContent = await remark().use(html).process(matterResult.content)
    
    const contentHtml = processedContent.toString()

    const h1Match = contentHtml.match(/<h1[^>]*>(.*?)<\/h1>/i)
    const h1Content = h1Match ? h1Match[1] : null
    const cleanedContent = h1Match ? contentHtml.replace(h1Match[0], '') : contentHtml

    return {
        id,
        contentHtml: cleanedContent.trim(),
        h1: h1Content,
        image: matterResult.data.image || null,
        title: matterResult.data.title,
        category: matterResult.data.category,
        date: moment(matterResult.data.date, 'DD-MM-YYYY').format('MMMM Do YYYY')
    }
}