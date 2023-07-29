import { User } from '../../types/user';
import { memo } from 'react';
import cls from './UserItem.module.css';
import { Link } from 'react-router-dom';

export const UserItem = memo((props: Omit<User, 'id'>) => {
    const { login, avatar_url, html_url } = props;
    return (
        <Link to={`/${login}`} className={cls.userItem}>
            <div>
                <img className={cls.img} src={avatar_url} alt='avatar' />
                <div>{login}</div>
            </div>
            <div>{html_url}</div>
        </Link>
    );
});
