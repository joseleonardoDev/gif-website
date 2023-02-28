import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Test in add category', () => {
    const inputValue = 'Goku';
    const onNewValue = jest.fn();

    test('Must change the value input text', () => {
        //Arrange
        render(<AddCategory onNewValue={() => { }} />)
        //Act
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: inputValue } });

        // screen.debug();

        //Assert
        expect(input.value).toBe(inputValue);

    });

    test('Must call onNewValue if the input has value', () => {

        //Arrange
        render(<AddCategory onNewValue={onNewValue} />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //Act
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        //Assert
        expect(input.value).toBe('');
        expect(onNewValue).toHaveBeenCalled();
        expect(onNewValue).toHaveBeenCalledTimes(1);
        expect(onNewValue).toHaveBeenCalledWith(inputValue);
    })

    test('Must not to call the onNewValue function if the input is empty', () => {

        //Arrange
        const onNewValue = jest.fn();
        render(<AddCategory onNewValue={onNewValue} />)

        //Act
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        //Asssert
        expect(onNewValue).toHaveBeenCalledTimes(0);
        expect(onNewValue).not.toHaveBeenCalled();
    })
});