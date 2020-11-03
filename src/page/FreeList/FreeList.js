/* eslint-disable react/react-in-jsx-scope */

import React, { Suspense } from 'react';
import { useSelector } from 'react-redux'
import FreeItem from './FreeItem.js';
import './free-list.css'
import Loading from '../Loading.js';

function FreeList(params) {

  const list = useSelector((state) => state.AppFreeList)

  return (<div className={'list free-list'}>
    {list.map((e, i) => (<Suspense key={i} fallback={Loading}>
      <FreeItem key={i} index={i} data={e} />
    </Suspense>))}
  </div>)
}
export default FreeList;