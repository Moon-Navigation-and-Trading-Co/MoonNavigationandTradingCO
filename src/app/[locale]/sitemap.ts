import { MetadataRoute } from "next";
import { getAllArticles } from "@/utils/actions/getAllArticles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // const baseUrl = 'https://form-base.com'

    // const response = await getAllArticles('en');
    // console.log("giiii" + response)

    // const notesPosts = response?.map((post: any) => {
    //     return {
    //         url: `${baseUrl}/notes/${post.slug}`,
    //         lastModified: post.updatedAt,
    //     }
    // })

    return [{
        url: 'https://form-base.com',
        lastModified: new Date(),
    },
        // ...notesPosts
    ]
}