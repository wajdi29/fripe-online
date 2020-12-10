import { takeEvery } from 'redux-saga/effects'

import shopActionTypes from './shop.types'

export function* fetchCollectionAsync() {
    yield console.log('Im fired')
}

export function* fetchCollectionStart() {
    yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionAsync)
}