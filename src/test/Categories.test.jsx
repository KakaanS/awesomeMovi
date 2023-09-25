import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import Categories from "../App"

test("should display 'Categories'", () => {
   render(<Categories />)
   expect(screen.getByText('Categories')).toBeInTheDocument()
})