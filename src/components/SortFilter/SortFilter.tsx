import { ChangeEvent, memo } from 'react';
import { usersActions } from '../../store/reducers/usersSlice';
import { useAppDispatch, useAppSelector } from './../../hooks/redux';
import cls from './SortFilter.module.css';

export const SortFilter = memo(() => {
    const dispatch = useAppDispatch();
    const value = useAppSelector((state) => state.users.order);

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === 'asc' || e.target.value === 'desc') {
            dispatch(usersActions.setOrder(e.target.value));
        }
    };

    return (
        <div>
            <select data-testid='select' className={cls['custom-select']} onChange={onChange} value={value}>
                <option data-testid='desc' value='desc'>По возрастанию</option>
                <option data-testid='asc' value='asc'>По убыванию</option>
            </select>
        </div>
    );
});
