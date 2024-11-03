// app/sitemap.ts
import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

const SITE_CONFIG = {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    paths: [
        { path: '/', priority: 1.0, changeFrequency: 'daily' },
        { path: '/air-freight-forms', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/auth', priority: 0.5, changeFrequency: 'monthly' },
        { path: '/container', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/container-services-forms', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/freight', priority: 0.7, changeFrequency: 'weekly' },
        { path: '/inland-services-forms', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/international-trading-forms', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/learn-more/air-freight', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/learn-more/container', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/learn-more/inland-freight', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/learn-more/ocean-freight', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/learn-more/other', priority: 0.5, changeFrequency: 'monthly' },
        { path: '/learn-more/ship-agency', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/notes', priority: 0.6, changeFrequency: 'monthly' },
        { path: '/ocean-freight-forms', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/other', priority: 0.5, changeFrequency: 'monthly' },
        { path: '/protected', priority: 0.5, changeFrequency: 'monthly' },
        { path: '/ship-agency', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/ship-agency-forms', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/ship-maintenance-forms', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/ship-management-forms', priority: 0.8, changeFrequency: 'weekly' }
    ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const headersList = headers()
    const host = headersList.get('host') || 'localhost'
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'

    // Generate URLs for all locales
    const urls = SITE_CONFIG.locales.flatMap(locale =>
        SITE_CONFIG.paths.map(page => {
            const path = locale === SITE_CONFIG.defaultLocale ? page.path : `/${locale}${page.path}`
            return {
                url: `${protocol}://${host}${path}`,
                lastModified: new Date(),
                changeFrequency: page.changeFrequency as MetadataRoute.Sitemap[number]['changeFrequency'],
                priority: page.priority
            }
        })
    )

    return urls
}