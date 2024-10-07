import fs from 'fs';
import path from 'path';

// Define where your articles are located based on locale
const getArticlesDirectory = (locale: any) => {
    return path.join(process.cwd(), 'src', 'app', '[locale]', 'notes');
};

// Function to get all articles based on the locale
export const getAllArticles = (locale = 'en') => {
    const articlesDirectory = getArticlesDirectory(locale);
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA " + articlesDirectory)

    // Read the files in the articles folder for the given locale
    const fileNames = fs.readdirSync(articlesDirectory);

    // Map through all file names and extract the article data
    const articles = fileNames.map((fileName) => {
        // Get the file path
        const filePath = path.join(articlesDirectory, fileName);

        // Read the file content (assuming JSON format for this example)
        const fileContents = fs.readFileSync(filePath, 'utf-8');

        // Parse the JSON content (modify if you use Markdown or another format)
        const article = JSON.parse(fileContents);

        return {
            id: fileName.replace(/\.json$/, ''), // remove file extension
            ...article, // assuming article data includes title, content, etc.
        };
    });

    return articles;
};