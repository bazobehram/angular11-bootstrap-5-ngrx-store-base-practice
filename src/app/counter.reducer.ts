import { createReducer, on } from '@ngrx/store';
import { countUp, countDown, reset } from './counter.actions';
 
export const initialState = 0;
 
const _counterReducer = createReducer(initialState,
  on(countUp, state => state + 1),
  on(countDown, state => state - 1),
  on(reset, state => 0),
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}