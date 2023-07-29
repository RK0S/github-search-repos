import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SearchBar } from './SearchBar';
import { setupStore } from '../../store/store';

const store = setupStore({users: {q: ''}});

describe('Pagination', () => {
    test('render', () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        );
        expect(screen.getByTestId('search-bar')).toBeInTheDocument();
    });
    test('type', () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        );
        const bar = screen.getByTestId('search-bar');
        //@ts-ignore
        expect(bar.value).toBe('');
        fireEvent.input(bar, {
            target: {value: 'gg'}
        });
        //@ts-ignore
        expect(bar.value).toBe('gg');
    });
});