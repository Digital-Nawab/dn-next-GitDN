// lib/getPageMeta.js
export async function getPageMeta(currentUrl) {
  try {
    const res = await fetch('https://dashboard.digitalnawab.com/api/gettag', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }, // cache result for 60s
    })

    if (!res.ok) throw new Error('Failed to fetch metadata')
    const json = await res.json()

    // find the matching page by URL
    const meta = json.data.find((item) => item.page_url === currentUrl)

    if (!meta) {
      return {
        title: 'Digital Nawab',
        description: 'Default description for Digital Nawab.',
        alternates: { canonical: 'https://www.digitalnawab.com' },
        openGraph: {
          title: 'Digital Nawab',
          description: 'Default description for Digital Nawab.',
          url: 'https://www.digitalnawab.com',
          images: ['https://www.digitalnawab.com/default-og.png'],
        },
      }
    }

    return {
      title: meta.title,
      description: meta.description,
      keywords: meta.keyword ? meta.keyword.split(',') : [],
      alternates: { canonical: meta.page_url },
      openGraph: {
        title: meta.title,
        description: meta.description,
        url: meta.page_url,
        images: [
          `https://www.digitalnawab.com/${meta.image}`,
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.description,
        images: [
          `https://www.digitalnawab.com/${meta.image}`,
        ],
      },
    }
  } catch (err) {
    console.error('Error loading metadata:', err)
    return {
      title: 'Digital Nawab',
      description: 'Default description for Digital Nawab.',
    }
  }
}
