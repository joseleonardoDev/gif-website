import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Test in useFetchGifs hook', () => {

    test('Should be return initial state', () => {
        //Arrange
        const { result } = renderHook(() => useFetchGifs('dragon ball'));
        const { images, isLoading } = result.current;


        //Assert
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return array images and isLoading in false', async () => {

        //Arrange
        const { result } = renderHook(() => useFetchGifs('dragon ball'));

        //Act 
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        //Assert
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })

})