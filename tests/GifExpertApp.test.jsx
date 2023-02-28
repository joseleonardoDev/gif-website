import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GitExpertApp";

describe('Test in <GifExpertApp/>', () => {

    test('should ', () => {

        //Arrage
        render(<GifExpertApp />);
        // screen.debug();

        //Act
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: '' } });
        fireEvent.submit(form);

        //Assert
        expect(input.value).toBe('');

    })
});