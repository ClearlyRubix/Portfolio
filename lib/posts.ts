import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "projects");

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(projectsDirectory); // [ 'pre-rendering.md', 'ssg-ssr.md' ]

    // Get the data from each file
    const allProjectsData = fileNames.map((filename) => {
    // Remove ".md" from file name to get id
        const id = filename.replace(/\.md$/, ""); // id = 'pre-rendering', 'ssg-ssr'

        // Read markdown file as string
        const fullPath = path.join(projectsDirectory, filename);
        // /Users/ef/Desktop/nextjs-blog/posts/pre-rendering.md
        const fileContents = fs.readFileSync(fullPath, "utf8"); // .md string content

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
        id,
        ...(matterResult.data as { date: string; title: string; short_description: string; thumbnail: string }),
        };
    });

    // Sort posts by date and return
    return allProjectsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getProjectById (id: string) {
    const fullPath = path.join(projectsDirectory, id+".md");
    // /Users/ef/Desktop/nextjs-blog/posts/pre-rendering.md
    const fileContents = fs.readFileSync(fullPath, "utf8"); // .md string content

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
    id,
    ...(matterResult.data as { date: string; title: string; short_description: string; thumbnail: string }),
    };
}
