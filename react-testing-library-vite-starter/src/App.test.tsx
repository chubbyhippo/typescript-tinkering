import App from "./App";
import {render, screen} from "@testing-library/react";

test("should contains correct heading", () => {
    render(<App/>);
    const headingElement = screen.getByText(/react/i);
    expect(headingElement).toBeInTheDocument();

});