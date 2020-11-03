/* eslint-disable react/react-in-jsx-scope */

import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux'
import './recommand-list.css';
import Loading from '../Loading.js';
const RecommandItem = lazy(() => import('./RecommandItem.js'));

function RecommandList(params) {
    const list = useSelector((state) => state.AppRecommendList)
    console.log(list);
    return (<div className={['recommand-list bottom-line']}>
        <div className={['headline']}>Recommand</div>
        <div className={['recommand-full-list']}>
            {list.map((e, i) => <Suspense key={i} fallback={Loading}>
                <RecommandItem key={i} data={e} />
            </Suspense>)}
        </div>
    </div>)
}
export default RecommandList;