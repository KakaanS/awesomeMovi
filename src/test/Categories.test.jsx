import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import Categories from "../App"

test.skip("should display 'Categories'", () => {
   render(<Categories />)
   expect(screen.getByText('Categories')).toBeInTheDocument();
})
test("should display 'Action', 'Drama', and 'Thriller'", () => {
   render(<Categories />)
   expect(screen.getByText("Action")).toBeInTheDocument();
   expect(screen.getByText("Drama")).toBeInTheDocument();
   expect(screen.getByText("Thriller")).toBeInTheDocument();

})
test("should display all 15 category titles", () => {
   render(<Categories />)
   const headings = screen.getAllByRole('heading', { level: 3 })
   expect(headings.length).toBe(15)
})