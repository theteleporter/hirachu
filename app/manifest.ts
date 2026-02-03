import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hirachu - Handcrafted Collectible Dolls',
    short_name: 'Hirachu',
    description: 'Handcrafted collectible dolls where kawaii meets couture',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAFA',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  }
}
