import {
  USERS_LOADING,
  SET_USERS,
  USERS_REJECTED,
  USERS_NEXT_LOADING,
  SET_USER_INFO,
  UPDATE_USER_INFO,
} from "./users-actions";

const initialState = {
  users: [],
  userDetails: null,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    }

    case USERS_REJECTED: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }

    case USERS_NEXT_LOADING: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }

    case SET_USER_INFO: {
      return {
        ...state,
        userDetails: action.user,
        loading: false,
      };
    }

    case UPDATE_USER_INFO: {
      return {
        ...state,
        userDetails: { ...state.userDetails, ...action.user },
      };
    }

    default: {
      return state;
    }
  }
};
