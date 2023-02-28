import { getGifs } from "../../src/helpers/getGifs"

describe('Test in getGift helper', () => {
    test('should return gift array', async () => {
        const gifs = await getGifs('Dragon ball');
        //console.warn(gifs);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})