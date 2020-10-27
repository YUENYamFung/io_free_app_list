/* eslint-disable react/react-in-jsx-scope */

import React, { useState, useEffect, Suspense } from 'react';
import FlatList from 'flatlist-react';
import { shallowEqual, useSelector, useDispatch, useStore } from 'react-redux'
import FreeItem from './FreeItem.js';
import chunk from '../../utils/chuck.js'
import './free-list.css'
import api from '../../utils/api.js';
import { types } from '../../redux/store.js';
import Loading from '../Loading.js';

// import api from '../utils/api.js'
// const api = React.lazy(() => import('../utils/api.js'));

function FreeList(params) {

  const list = useSelector((state) => state.AppFreeList)

  return (<div className={'list free-list'}>
    {list.map((e, i) => (<Suspense key={i} fallback={Loading}>
      <FreeItem key={i} index={i} data={e} />
    </Suspense>))}
  </div>)
}
export default FreeList;