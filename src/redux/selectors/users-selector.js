import { createSelector } from 'reselect';

export const getUsers = createSelector(state => {
  state.user.users.filter(u => true);
})