import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Test in <GifItem/>', () => {

    const title = 'Dragon ball';
    const url = 'https://www.google.com/';
    test('Should be match with the snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    })
    test('Should show the image with url and ALT', () => {
        render(<GifItem title={title} url={url} />)
        //screen.debug();
        //expect(screen.getByRole('img').src).toBe(url);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('should show the title', () => {
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy();
    })
});
