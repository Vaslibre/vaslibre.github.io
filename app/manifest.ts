import type { MetadataRoute } from 'next'

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'VaSLibre',
		short_name: 'VaSLibre',
		description: 'VaSLibre - Comunidad de Usuarios Linux',
		start_url: '/',
		display: 'standalone',
		background_color: '#000',
		theme_color: '#000',
		icons: [
			{
				src: '/images/logovaslibre.svg',
				sizes: 'any',
				type: 'image/svg+xml',
			},
		],
	}
}