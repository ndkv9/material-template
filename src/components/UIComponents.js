import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

export const Exercise = ({ children, title }) => {
	return (
		<ExerciseContainer>
			<ExerciseTitle>{title}</ExerciseTitle>
			{children}
		</ExerciseContainer>
	)
}

export const Note = ({ children }) => {
	return (
		<NoteContainer>
			<NoteTitle>Note!</NoteTitle>
			{children}
		</NoteContainer>
	)
}

Exercise.propTypes = {
	children: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

Exercise.propTypes = {
	children: PropTypes.string.isRequired,
}

const ExerciseContainer = styled.div`
	box-sizing: border-box;
    margin-top: 2rem;
    min-width: 0;
    padding: 16px;
    padding-left: 12px;
    border-left-width: 4px;
    border-left-style: solid;
    border-left-color: ${p => p.theme.colors.exercise};
    border-radius: 4px;
    background-color: ${p => p.theme.colors.highlight};
}
`

const ExerciseTitle = styled.div`
	font-size: 1.5rem;
	color: ${p => p.theme.colors.exercise};
	margin-bottom: 1rem;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: ${p => p.theme.colors.borderColor};
`

const NoteContainer = styled.div`
	box-sizing: border-box;
    margin-top: 2rem;
    min-width: 0;
    padding: 16px;
    padding-left: 12px;
    border-left-width: 4px;
    border-left-style: solid;
    border-left-color: ${p => p.theme.colors.primary};
    border-radius: 4px;
    background-color: ${p => p.theme.colors.highlight};
}
`

const NoteTitle = styled.div`
	font-size: 1.2rem;
	color: ${p => p.theme.colors.primary};
	margin-bottom: 1rem;
`
