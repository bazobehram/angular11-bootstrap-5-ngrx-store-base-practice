import { createAction } from '@ngrx/store';

export const countUp = createAction('[Counter Component] Increment');
export const countDown = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');