import { createAction, NavigationActions } from '../Utils'

export default {
    namespace: 'app',
    state: {
        num: 0,
        mineType: '红',
    },
    reducers: {
        updateState(state, { payload }) {
            return { ...state, ...payload }
        },
    },
    effects: {
        *add({ payload }, { call, put }) {
            yield put(createAction('updateState')({ num:payload ,mineType:'红'}))
        },
        *sub({ payload }, { call, put }) {
            yield put(createAction('updateState')({ num:payload ,mineType:'蓝' }))
        }
    },
    subscriptions: {

    },
}
