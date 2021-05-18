import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const License = ({ data }) => {
	const { mdx } = data

	return (
		<Layout>
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
		}
	}
`

License.propTypes = {
	data: PropTypes.shape({
		mdx: PropTypes.object.isRequired,
	}).isRequired,
}

export default License
