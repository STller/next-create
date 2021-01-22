import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getStoredPostsData() {
  // get file names under posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName: any): any => {
    // remove .md from filename to get id
    const id = fileName.replace(/\.md$/, '')

    // red markdonw file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })

  // sort posts by date
  return allPostsData.sort((a: any, b: any) => {
    return a.date - b.date
  })
}