import * as types from './ActionTypes'

/**
 * action 객체를 만드는 액션 함수 선언
 * type: action의 형태를 정의하는 것으로, 필수로 작성해야 함
 */
export const cc = () => ({
    type: types.ISAUTH
})

export const checkJoin = () => ({
    type: types.ISJOIN
})

export const checkValid = () => ({
    type: types.ISVALID
})