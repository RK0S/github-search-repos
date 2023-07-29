import { Pagination } from '../../components/Pagination/Pagination';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SortFilter } from '../../components/SortFilter/SortFilter';
import { UsersList } from '../../components/UsersList/UsersList';
import '../../styles/index.css';

export const MainPage = () => {
    return (
        <div className='page'>
            <SearchBar />
            <SortFilter />
            <UsersList />
            <Pagination />
        </div>
    );
};
