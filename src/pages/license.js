import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const License = ({ data, location }) => {
	const { mdx } = data

	return (
		<Layout tableOfContents={mdx.tableOfContents} location={location}>
			<Heading>{mdx.frontmatter.title}</Heading>
			<MDXRenderer>{mdx.body}</MDXRenderer>
		</Layout>
	)
}

const Heading = styled.h1`
	padding-top: 0;
	margin-top: 0;
	&::before {
		display: none !important;
	}
`

export const query = graphql`
	query {
		mdx(fields: { title: { eq: "License" } }) {
			frontmatter {
				title
			}
			body
			tableOfContents
		}
	}
`

License.propTypes = {
	data: PropTypes.shape({
		mdx: PropTypes.object.isRequired,
	}).isRequired,
	location: PropTypes.object.isRequired,
}

export default License
