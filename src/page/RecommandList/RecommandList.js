/* eslint-disable react/react-in-jsx-scope */

import React, { lazy, Suspense, useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch, useStore } from 'react-redux'
import './recommand-list.css';
import Loading from '../Loading.js';
// import RecommandItem from './RecommandItem.js';
const RecommandItem = lazy(() => import('./RecommandItem.js'));

function RecommandList(params) {
    // appListStore.dispatch({
    //   type: types.push,
    //   data: api.getAppList()
    // })
    const list = useSelector((state) => state.AppRecommendList)
    console.log(list);
    return (<div className={['recommand-list bottom-line']}>
        <div className={['headline']}>Recommand</div>
        <div className={['recommand-full-list']}>
            {list.map((e, i) => <Suspense key={i} fallback={Loading}>
                <RecommandItem key={i} data={e} />
            </Suspense>)}
            {/* <FlatList
            list={list}
            renderItem={RecommandItem}
        /> */}
        </div>
    </div>)
}
export default RecommandList;