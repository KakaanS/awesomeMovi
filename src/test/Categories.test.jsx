import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import Categories from "../App"

test.skip("should display 'Categories'", () => {
   render(<Categories />)
   expect(screen.getByText('Categories')).toBeInTheDocument();
})
test("should display genres", () => {
   render(<Categories />)
   expect(screen.getByText("Action")).toBeInTheDocument();
   expect(screen.getByText("Drama")).toBeInTheDocument();
})