import { expect, test, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";


describe("ToDo App",  () => {
    it("renders the correct heading", () => {
        render(<App />);
        expect(screen.getByText("Todo App", {exact: false})).toBeVisible();
        
    });

    it("renders the correct alt texts for vite & react logos", () => {
        render(<App />);
        const logos = screen.queryAllByAltText("logo", {exact: false})
        expect(logos).toHaveLength(2);

        //react logo
        const reactLogo = screen.queryAllByAltText("react logo", {exact: false})
        expect(reactLogo).toBeVisible;

        //vite logo
        const viteLogo = screen.queryAllByAltText("vite logo", {exact: false})
        expect(viteLogo).toBeVisible;
    });

    it("renders the correct todos", () => {
        render(<App />);
        ["create todo", "complete todo", "test app"].forEach(todo => {
            expect(screen.getByText(todo, {exact: false})).toBeVisible();
        })
    });
});