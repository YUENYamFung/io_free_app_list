
import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';

import api from '../../utils/api';
function Rating(props) {
    let itemId = props.itemId;
    const [avgRating, setRating] = useState('...');
    useEffect(() => {
        api.getAppInfo(itemId).then(result => {
            let value = result.averageUserRatingForCurrentVersion;
            value = Math.round(value * 10) / 10;
            setRating(value);
        })
    });
    return <div>
        <StarRatings
            starRatedColor="orange"
            rating={isNaN(avgRating) ? 0 : avgRating}
            numberOfStars={5}
            starDimension="10px"
            starSpacing="0px"
            name='rating'
        />({avgRating.toString()})</div>
}
export default Rating;