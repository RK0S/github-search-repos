import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { UserItem } from '../UserItem/UserItem';
import { useAppDispatch } from './../../hooks/redux';
import { fetchUsers } from '../../api/fetchUsers/fetchUsers';
import cls from './UsersList.module.css';

export const UsersList = () => {
    const dispatch = useAppDispatch();
    const { isLoading, order, page, q, users, error } = useAppSelector((state) => state.users);

    useEffect(() => {
        if (q.length) {
            dispatch(fetchUsers({ order, page, q }));
        }
    }, [dispatch, order, page, q]);

    if (isLoading) {
        return (
            <div className={cls.wrapper}>
                <h1>Загрузка...</h1>
            </div>
        );
    } else if (error) {
        return (
            <div className={cls.wrapper}>
                <h1>Произошла ошибка при загрузке пользователей</h1>
            </div>
        );
    } else if (!q) {
        return (
            <div className={cls.wrapper}>
                <h2>Введите логин в строку поиска</h2>
            </div>
        );
    } else if (!users.length) {
        return (
            <div className={cls.wrapper}>
                <h2>Пользователи не найдены</h2>
            </div>
        );
    }

    return (
        <div className={cls.usersList}>
            {users.map((user) => (
                <UserItem
                    key={user.id}
                    avatar_url={user.avatar_url}
                    html_url={user.html_url}
                    login={user.login}
                />
            ))}
        </div>
    );
};
