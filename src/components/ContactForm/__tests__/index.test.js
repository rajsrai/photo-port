import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup)

describe('Contact form component', () => {
    it('renders', () => {
        render(
        <ContactForm />
        )
    })
})

it('matches snapshot', () => {
    const { asFragment } =
   render(
    <ContactForm />
   )
   expect(asFragment()).toMatchSnapshot();
})

describe('title is visible', () => {
    it('inserts text into the h1 tag', () => {
    const { getByTestId } = 
    render(
       <ContactForm /> 
    )
    expect(getByTestId('contact-form')).toHaveTextContent('Contact Me')
    })
})
