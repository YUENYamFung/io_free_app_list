import { createStore } from 'redux'
// import chunk from '../utils/chuck.js'
// import lodash from 'lodash'

export const types = {
    updateAppList: 'AppListDataUpdate',
    addAppList: 'AppListDataAdd',
    updateAppRecommend: 'AppRecommendDataUpdate',
    setIsFetchAppFree: 'setIsFetchAppFree',
    setSearch: 'setSearch',
    // viewMaxIdx: '',
}

function reducer(state = {}, action) {
    switch (action.type) {
        case types.setSearch:
            state.search = action.data;
            return state;
        case types.setIsFetchAppFree:
            state.isFetchAppFree = true;
            return state;
        case types.updateAppList:
            state.isFetchAppFree = false;
            return {
                ...state,
                AppFreeList: [...action.data],
            };
        case types.addAppList:
            state.isFetchAppFree = false;
            state.AppFreeList = [...state.AppFreeList, ...action.data];
            return state;
        case types.updateAppRecommend:
            return {
                ...state,
                AppRecommendList: [...action.data],
            };
        default:
            return state
    }
}
export const defaultState = {
    AppFreeList: [],
    AppRecommendList: [],
    search: "",
    isFetchAppFree: true,
}
const store = createStore(reducer, defaultState);
console.log(store);
store.subscribe((state) => {
    window.store = store.getState()
    console.log(window.store, state);
});

export default store;
