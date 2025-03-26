import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./UserList.module.css";
import { FixedSizeList } from "react-window";
import {
  usersLoading,
  setUsers,
  usersRejected,
  usersNextLoading,
} from "../../store/users/users-actions";
import { selectUsers, selectLoading } from "../../store/users/users-selectors";
import { useDispatch, useSelector } from "react-redux";

const USER_SHOW = 100;

export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(usersLoading());
      try {
        const response = await fetch("/mock/users.json");
        const data = await response.json();
        dispatch(setUsers(data.slice(0, USER_SHOW)));
      } catch (error) {
        dispatch(usersRejected(error));
      }
    };

    fetchData();
  }, [dispatch]);

  const handleAddNewUsers = async () => {
    try {
      const response = await fetch("/mock/users.json");
      const data = await response.json();
      dispatch(
        usersNextLoading(data.slice(users.length, users.length + USER_SHOW))
      );
    } catch (error) {
      console.error("Ошибка загрузки:", error);
    }
  };

  return (
    <div>
      <h2 className={Styles["user_title"]}>Список пользователей</h2>
      <div className={Styles["user_items"]}>
        <FixedSizeList
          height={500}
          itemCount={users.length}
          itemSize={25}
          width={300}
        >
          {({ index, style }) => (
            <NavLink
              to={`/users/${users[index]?.name}`}
              style={style}
              className={Styles["user_link"]}
            >
              {users[index]?.name}
            </NavLink>
          )}
        </FixedSizeList>
        <button
          onClick={handleAddNewUsers}
          disabled={loading}
          className={Styles["user_btn_load"]}
        >
          {loading ? "Загрузка..." : "Загрузить ещё"}
        </button>{" "}
      </div>
    </div>
  );
};
