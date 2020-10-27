
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../redux/store';
import './search.css'
function Search(params) {

    // const [input, setInput] = useState('');
    const search = useSelector(state => state.search);
    const dispatch = useDispatch();
    const updateSearch = (e) => dispatch({ type: types.setSearch, data: e.target.value })
    return <div className={['top-layer', 'search'].join(' ')}>
        <input type={'text'} value={search} placeholder={"search"} onChange={updateSearch}></input>
        {/* <img src= */}
    </div>

}
export default Search;