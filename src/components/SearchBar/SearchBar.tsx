import { memo, ChangeEvent, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './../../hooks/redux';
import { usersActions } from '../../store/reducers/usersSlice';
import { useDebounce } from './../../hooks/useDebounce';
import cls from './SearchBar.module.css';

export const SearchBar = memo(() => {
    const q = useAppSelector((state) => state.users.q);
    const [value, setValue] = useState<string>(q);
    const debouncedValue = useDebounce<string>(value, 750);
    const dispatch = useAppDispatch();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        dispatch(usersActions.setPage(1));
    };

    useEffect(() => {
        if (debouncedValue) {
            dispatch(usersActions.setQuery(debouncedValue));
        }
    }, [debouncedValue, dispatch]);

    return (
        <div>
            <input 
                data-testid='search-bar'
                className={cls.searchBar}
                placeholder='Введите логин'
                onChange={onChange}
                value={value}
            />
        </div>
    );
});
