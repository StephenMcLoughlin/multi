import { createAction, handleActions } from 'redux-actions'

export const testAction = createAction('test')

const INITIAL_STATE = {
  test: null,
}

export const testReducer = handleActions(
  {
    [testAction]: state => ({
      ...state,
    }),
  },
  INITIAL_STATE,
)
