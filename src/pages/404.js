import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const NotFoundPage = () => (
	<Layout>
		<h1>404: Not Found</h1>

		<StaticImage
			src='../images/error.png'
			alt='Centria banner'
			quality={95}
			formats={['AUTO', 'WEBP', 'AVIF']}
		/>
		<p>You just hit a route that doesn&#39;t exist...</p>
	</Layout>
)

export default NotFoundPage
