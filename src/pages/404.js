import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const NotFoundPage = () => {
	return (
		<Container>
			<Header>404: Not Found</Header>

			<StaticImage
				src='../images/error.png'
				alt='Centria banner'
				quality={95}
				formats={['AUTO', 'WEBP', 'AVIF']}
			/>
			<p>You just hit a route that doesn&#39;t exist...</p>
			<p>
				Back to the <Back to='/'>main page</Back>
			</p>
		</Container>
	)
}

const Container = styled.div`
	text-align: center;
`
const Back = styled(Link)`
	text-decoration: none;
	color: ${p => p.theme.colors.primary};
`

const Header = styled.div`
	font-size: 1.5rem;
	color: ${p => p.theme.colors.primary};
`

export default NotFoundPage
