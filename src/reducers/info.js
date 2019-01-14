import {combineReducers} from 'redux';
import * as types from '../actions/ActionTypes'

const info = {
    logged: false,
    joined: false
}

/**
 * Reducer 함수 정의
 * state가 undefined일 때(스토어가 생성될 때) state 기본 값을 info로 사용
 * state를 직접 수정하면 안되고,
 * 기존 상태 값에 원하는 객체를 덮어쓴 새로운 객체를 만들어서 반환해야 한다
 * @param {*} state 
 * @param {*} action 
 */
const infoFunc = (state = info, action) => {
    switch (action.type) {
        case types.ISAUTH:
            console.log("infoFunc logged == " + state.logged);
            return {...state, logged: !state.logged}
        case types.ISJOIN:
            console.log("infoFunc joined == " + state.joined);
            return {...state, joined: !state.joined}
        default:
            return state;
    }
}

// store에 연결(combine)
const reducers = combineReducers({
    infoFunc
});

export default reducers;