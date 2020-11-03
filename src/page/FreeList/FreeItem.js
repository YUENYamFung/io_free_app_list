
import React, { lazy, Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import search from '../../utils/search.js';


const RatingLazy = lazy(() => import('./Rating.js'))
const FreeItem = ({ data, index }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    let idx = index + 1; //[1..n]
    let altClass = (idx % 2 === 1) ? 'odd' : 'even';
    let firstGenre = "";
    if (data.genres.length > 0) {
        firstGenre = data.genres[0].name;
    }
    const target = useSelector(state => state.search);
    let displayClass = '';
    if (search(data.searchString, target)) {
    } else {
        displayClass = 'hide'
    }

    return <div className={['block', 'free-list-item', displayClass].join(' ')}>
        <div className={[`row bottom-line`, ].join(' ')} key={index}>
            <div className={[`flex-row`, isLoaded ? "anima" : ""].join(' ')}>
                <div className={['flex-col']}><div className={['index']}>{idx}</div></div>
                <div><img
                    onLoad={() => {
                        setTimeout(() => setIsLoaded(true), 10)
                    }}
                    className={[`image`, altClass].join(' ')}
                    src={data.artworkUrl100} alt={'ICON'}
                ></img></div>
                <div className={['right'].join(' ')}>
                    <div className={['app-name']}>{data.name}</div>
                    <div className={['app-type']}>{firstGenre}</div>
                    <div className={['app-star']}>
                        <Suspense fallback={<div>...</div>}>
                            <RatingLazy itemId={data.id} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default FreeItem;