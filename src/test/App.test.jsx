import { expect, test } from "vitest"
import { render } from "@testing-library/react"
import App from "../App"

test("should always pass", () => {
   render(<App />)
   expect(true).toBe(true)
})