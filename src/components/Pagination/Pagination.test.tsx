import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Pagination } from './Pagination';
import { setupStore } from './../../store/store';

const store = setupStore({users: {page: 1, total_count: 300}});

describe('Pagination', () => {
    test('render', () => {
        render(
            <Provider store={store}>
                <Pagination />
            </Provider>
        );
        expect(screen.getByTestId('pagination')).toBeInTheDocument();
        expect(screen.getByTestId('next-btn')).toBeInTheDocument();
        expect(screen.getByTestId('previous-btn')).toBeInTheDocument();
        expect(screen.getByTestId('current-page')).toBeInTheDocument();
    });

    test('not render btns and pagination', () => {
        render(
            <Provider store={setupStore({users: {page: 0, total_count: 0}})}>
                <Pagination />
            </Provider>
        );
        expect(screen.getByTestId('pagination')).toBeInTheDocument();
        expect(screen.queryByTestId('next-btn')).not.toBeInTheDocument();
        expect(screen.queryByTestId('previous-btn')).not.toBeInTheDocument();
        expect(screen.queryByTestId('current-page')).not.toBeInTheDocument();
    });
});
