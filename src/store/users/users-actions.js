export const USERS_LOADING = "USERS_LOADING";
export const SET_USERS = "SET_USERS";
export const USERS_REJECTED = "USERS_REJECTED";
export const USERS_NEXT_LOADING = "USERS_NEXT_LOADING";
export const SET_USER_INFO = "SET_USER_INFO";

export const UPDATE_USER_INFO = "UPDATE_USER_INFO";

export const usersLoading = () => ({
  type: USERS_LOADING,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const usersRejected = (error) => ({
  type: USERS_REJECTED,
  error,
});

export const usersNextLoading = (users) => ({
  type: USERS_NEXT_LOADING,
  users,
});

export const setUserInfo = (user) => ({
  type: SET_USER_INFO,
  user,
});

export const updateUserInfo = (user) => ({
  type: UPDATE_USER_INFO,
  user,
});
