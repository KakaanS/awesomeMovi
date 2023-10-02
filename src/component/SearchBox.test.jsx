import { test, expect } from "vitest";
import { render } from '@testing-library/react';
import userEvent  from "@testing-library/user-event";
import SearchBox from './SearchBox'; 

// test to see if input field renders

test('there is a input', () => {
  const { getByPlaceholderText } = render(<SearchBox />);
  const inputElement = getByPlaceholderText('Sök efter en filmtitel...');
  expect(inputElement).toBeInTheDocument();
});

// test to see if it is possible to search for the movie "The Godfather"

test('search for a movietitle', async () => {
  const { getByPlaceholderText, getByAltText } = render(<SearchBox />)
  const inputElement = getByPlaceholderText('Sök efter en filmtitel...')

  userEvent.type(inputElement, 'The Godfather')

  await new Promise(resolve => setTimeout(resolve, 1000)) 

    const godfatherImage = getByAltText('The Godfather')
    expect(godfatherImage).toBeInTheDocument()
  
})

// test to see if it is possible to search for all movies starting with "t"

test('searching for all movies that starts whit the letter "t"', async () => {
  const {getByPlaceholderText, getAllByText } = render(<SearchBox />)
  const inputElement = getByPlaceholderText('Sök efter en filmtitel...')

  userEvent.type(inputElement, 't')

  await new Promise(resolve => setTimeout(resolve, 1000))

    const movieTitles = getAllByText(/t.*/i)

    movieTitles.forEach(titleElement => {
      expect(titleElement.textContent.toLowerCase()).toMatch(/^t.*/)
    })
})