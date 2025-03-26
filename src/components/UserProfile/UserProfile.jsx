import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./UserProfile.module.css";
import { setUserInfo, updateUserInfo } from "../../store/users/users-actions";
import { selectUserDetails } from "../../store/users/users-selectors";

export const UserProfile = () => {
  const dispatch = useDispatch();
  const { userName } = useParams();
  const user = useSelector(selectUserDetails);

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    company: "",
    jobTitle: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/mock/users.json");
        const data = await response.json();
        const userDetails = data.find((user) => user.name === userName);
        if (userDetails) {
          dispatch(setUserInfo(userDetails));
          setFormData(userDetails);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch, userName]);

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(updateUserInfo(formData));
    alert("Данные сохранены");
  };

  if (!user) {
    return <>Загрузка...</>;
  }

  return (
    <div className={Styles["user_profile_info"]}>
      <h2 className={Styles["user_title"]}>Информация о пользователе</h2>
      {user ? (
        <div className={Styles["user_info"]}>
          <input
            className={Styles["profile_name_input"]}
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
          />
          <div className={Styles["user_fillInfo"]}>
            <div className={Styles["input_group"]}>
              <label htmlFor="department">Должность:</label>
              <input
                type="text"
                name="department"
                value={formData.department || ""}
                onChange={handleChange}
              />
            </div>

            <div className={Styles["input_group"]}>
              <label htmlFor="company">Компания:</label>
              <input
                type="text"
                name="company"
                value={formData.company || ""}
                onChange={handleChange}
              />
            </div>

            <div className={Styles["input_group"]}>
              <label htmlFor="jobTitle">Отдел:</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <button onClick={handleSave} className={Styles["user_btn_save"]}>
            Сохранить
          </button>
        </div>
      ) : (
        <p>Выберите пользователя</p>
      )}
    </div>
  );
};
