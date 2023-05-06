import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFirstPage, setSearchQuery } from 'store/requestReducer/requestSlice';
import icon from '../../images/icon-spread.svg';
import { SearchForm, SearchIcon, SearchInput, SearchWrapper } from './Search.styled';

const Search = ({ type }) => {
    const dispatch = useDispatch()
    const query = useRef(null)

    const handleSearchGameByQuery = () => {
        dispatch(setFirstPage())
        dispatch(setSearchQuery(query.current.value))
        query.current.value = '';
    }

    return (
        <SearchForm className={type ? 'mobile-search' : false}>
            <SearchWrapper>
                <SearchInput type="text" ref={query} placeholder="Search..." />
                <Link to={`/search`}>
                    <button onClick={handleSearchGameByQuery}>
                        <SearchIcon>
                            <use href={`${icon}#icon-search`}></use>
                        </SearchIcon>
                    </button>
                </Link>
            </SearchWrapper>
        </SearchForm>
    )
}

export default Search