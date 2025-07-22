// app/robots.ts
import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default async function robots(): Promise<MetadataRoute.Robots> {
    const locales = ['en', 'ar']
    const headersList = await headers()
    const host = headersList.get('host') || 'localhost'
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
    const baseUrl = `${protocol}://${host}`

    // Define rules based on environment
    const rules = process.env.NODE_ENV === 'production'
        ? {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/api/',
                '/admin/',
                '/private/',
                '*/password',
                '/login',
                '/signup',
                '/checkout',
                '*/preview',
                '*/draft',
            ],
        }
        : {
            userAgent: '*',
            disallow: '/', // Block all in non-production environments
        }

    // Generate sitemap URLs
    const sitemaps = [
        // Main sitemap
        `${baseUrl}/sitemap.xml`,
        // Locale-specific sitemaps
        ...locales.map((locale: any) => `${baseUrl}/${locale}/sitemap.xml`),
    ]

    return {
        rules: rules,
        sitemap: sitemaps,
        host: baseUrl,
    }
}