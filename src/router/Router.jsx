import { Routes, Route } from "react-router-dom";
import { UserProfile } from "../components/UserProfile/UserProfile";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/users/:userName" element={<UserProfile />} />
      </Routes>
    </>
  );
};
