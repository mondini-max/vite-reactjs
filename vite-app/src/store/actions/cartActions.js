import { REMOVE } from '../types/cartTypes.js';

export const removeItemAction = (id) => {
  return {
    type: REMOVE,
    payload: {
      id,
    },
  };
};
