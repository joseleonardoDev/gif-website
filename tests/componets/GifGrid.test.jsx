import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Test in <GifGrid/> component', () => {

    const category = 'Dragon ball'

    test('Must show the initial loading', () => {

        //Arrange
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category} />);

        //Act
        const loadingText = screen.getByText('Loading...');

        //Assert
        expect(loadingText)
    })

    test('Should show items when image are loaded', () => {
        //Arrange
        const giftsImageList = [
            {
                id: '123',
                title: 'Dragon ball',
                url: 'https://www.google.com'
            },
            {
                id: '12345',
                title: 'Valorant',
                url: 'https://chat.openai.com/chat'
            },
            {
                id: '54321',
                title: 'Saitama',
                url: 'https://www.youtube.com'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: giftsImageList,
            isLoading: false
        });
        render(<GifGrid category={category} />)

        //Act
        const tagImage = screen.getAllByRole('img').length;
        // screen.debug();

        //Assert
        expect(tagImage).toBe(3);
    })
})
