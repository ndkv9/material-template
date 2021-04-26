import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'

const DocsTemplate = ({ data }) => {
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

export const pageQuery = graphql`
	query($id: String!) {
		mdx(fields: { id: { eq: $id } }) {
			body
			frontmatter {
				title
			}
		}
	}
`
DocsTemplate.propTypes = {
	data: PropTypes.shape({
		mdx: PropTypes.object.isRequired,
	}).isRequired,
}

export default DocsTemplate
