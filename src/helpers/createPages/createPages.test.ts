import { createPages } from './createPages';

describe('createPages', () => {
    let arr: number[] = [];
    afterEach(() => [(arr = [])]);
    test('10 страниц', () => {
        createPages(arr, 10, 2);
        expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    test('9 страниц', () => {
        createPages(arr, 9, 1);
        expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test('0 страниц', () => {
        createPages(arr, 0, 0);
        expect(arr).toEqual([]);
    });
    test('11 страниц', () => {
        createPages(arr, 11, 2);
        expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    test('15 страниц и текущая 6 страница', () => {
        createPages(arr, 15, 6);
        expect(arr).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });
});
