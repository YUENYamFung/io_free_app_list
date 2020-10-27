
import React, { lazy, Suspense, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import search from '../../utils/search.js';

const RecommandItem = ({ data }) => {
    let firstGenre = "";
    if (data.genres.length > 0) {
        firstGenre = data.genres[0].name;
    }
    const target = useSelector(state => state.search);
    console.log(target);
    let displayClass = '';
    if (search(data.searchString, target)) {
    } else {
        displayClass = 'hide'
    }

    return <div className={[`block`, `flex-col`, displayClass].join(' ')}>
        <div className={[]}>
            <img
                className={[`image`].join(' ')}
                src={data.artworkUrl100}
                alt={'ICON'}
            ></img>
            <div className={['app-name']}><div className={'text'}>{data.name}</div></div>
            <div className={['app-type']}>{firstGenre}</div>
        </div>
    </div>
}

export default RecommandItem;