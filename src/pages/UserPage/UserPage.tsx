import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserByLogin } from '../../api/fetchUsersByLogin/fetchUserByLogin';
import '../../styles/index.css';
import { useAppSelector } from '../../hooks/redux';
import { useAppDispatch } from './../../hooks/redux';
import cls from './UserPage.module.css';

export const UserPage = () => {
    const dispatch = useAppDispatch();
    const { login } = useParams();
    const { error, data, isLoading } = useAppSelector((state) => state.user);

    useEffect(() => {
        if (login) {
            dispatch(fetchUserByLogin(login));
        }
    }, [login, dispatch]);

    if (isLoading) {
        return <div className='page'>Загрузка...</div>;
    }

    if (error) {
        return <div className='page'>Произошла ошибка при загрузке пользователя</div>;
    }

    return (
        <div className='page'>
            <img className={cls.avatar} src={data?.avatar_url} alt='avatar' />
            <h2>{data?.login}</h2>
            <h3 className={cls.information}>Информация</h3>
            <div className={cls.list}>
                <div>URL: {data?.html_url}</div>
                <div>Кол-во подписчиков: {data?.followers}</div>
                <div>Кол-во подписок: {data?.following}</div>
                <div>Кол-во открытых репозиториев: {data?.public_repos}</div>
                <div>Кол-во открытых гистов: {data?.public_gists}</div>
            </div>
        </div>
    );
};
