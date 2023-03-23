import React, { useRef } from 'react'
import { SearchForm, SearchIcon, SearchInput, SearchWrapper } from './Search.styled'
import icon from '../../images/icon-spread.svg'

const Search = () => {
    const query = useRef(null)

    return (
        <SearchForm>
            <SearchWrapper>
                <SearchInput type="text" ref={query} placeholder="Search..." />
                <button>
                    <SearchIcon>
                        <use href={`${icon}#icon-search`}></use>
                    </SearchIcon>
                </button>
            </SearchWrapper>
        </SearchForm>
    )
}

export default Search