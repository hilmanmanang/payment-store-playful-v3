import { createReducer, on } from '@ngrx/store';
import { cartIncrement } from './cart.actions';

export const initialState = JSON.parse(localStorage.getItem('payment_store_playful_v3') || '[]')?.length

export const counterReducer = createReducer(
  initialState,
  on(cartIncrement, (state) => state + 1),
)