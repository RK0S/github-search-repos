import { memo } from 'react';
import { useAppSelector } from '../../hooks/redux';
import cls from './Pagination.module.css';
import { useAppDispatch } from './../../hooks/redux';
import { usersActions } from '../../store/reducers/usersSlice';
import { useTotalPages } from './../../hooks/useTotalPages';
import { createPages } from '../../helpers/createPages/createPages';

export const Pagination = memo(() => {
    const dispatch = useAppDispatch();
    const total = useAppSelector((state) => state.users.total_count);
    const page = useAppSelector((state) => state.users.page);
    const pages: number[] = [];
    const totalPages = useTotalPages(total);
    createPages(pages, totalPages, page);

    const onNextPage = () => {
        if (totalPages !== page) {
            dispatch(usersActions.setPage(page + 1));
        }
    };

    const onPreviousPage = () => {
        if (page > 1) {
            dispatch(usersActions.setPage(page - 1));
        }
    };

    const onChangePage = (page: number) => {
        dispatch(usersActions.setPage(page));
    };

    return (
        <div data-testid='pagination' className={cls.pagination}>
            {!!totalPages && (
                <>
                    <button data-testid='previous-btn' className={cls.btn} onClick={onPreviousPage}>
                        Назад
                    </button>
                    {pages.map((p) => (
                        <div
                            data-testid={p === page ? 'current-page' : null}
                            onClick={() => onChangePage(p)}
                            className={[cls.page, p === page ? cls.page__current : ''].join(' ')}
                            key={p}
                        >
                            {p}
                        </div>
                    ))}
                    <button data-testid='next-btn' className={cls.btn} onClick={onNextPage}>
                        Вперед
                    </button>
                </>
            )}
        </div>
    );
});
