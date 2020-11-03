import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store, { types } from './redux/store.js';
import api from './utils/api.js';

import Search from './page/Search/Search.js';
import Loading from './page/Loading';
import { debounce } from 'lodash';
const FreeListLazy = lazy(() => import('./page/FreeList/FreeList.js'));
const RecommandListLazy = lazy(() => import('./page/RecommandList/RecommandList.js'));

const isComingEnd = () => {
  var maxHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  var OnePageLeft = maxHeight - 3 * window.innerHeight;
  return OnePageLeft < window.scrollY
}

function App() {
  const maxCount = 100;
  const dispatch = store.dispatch;
  const fetcFreeAppData = (count) => {
    // API
    api.getAppList(count).then(({ data }) => {
      dispatch({
        type: types.updateAppList,
        data
      });
    })
  };

  const fetchMoreFreeAppData = debounce(fetcFreeAppData, 500, { leading: true });

  useEffect(() => {
    fetcFreeAppData(10)
    // API
    api.getAppRecommendation().then(({ data }) => {
      dispatch({
        type: types.updateAppRecommend,
        data
      });
    })
  })


  useEffect(() => {
    window.onscroll = debounce(() => {
      const isFetching = store.getState().isFetchAppFree;
      const nElement = store.getState().AppFreeList.length;
      if (isFetching) {
        return
      };
      let comingEnd = isComingEnd()
      if (comingEnd) {
        dispatch({ type: types.setIsFetchAppFree, data: true });
        fetchMoreFreeAppData(Math.min(maxCount, nElement + 10))
      }
    }, 10)
  })

  return (
    <div className="App">
      <header className="App-header">

        <Provider store={store}>
          <Search />
          <Suspense fallback={<Loading></Loading>}>
            <RecommandListLazy />
          </Suspense>
          <Suspense fallback={<Loading></Loading>}>
            <FreeListLazy />
          </Suspense>
        </Provider>

      </header>
    </div>
  );
}

export default App;

