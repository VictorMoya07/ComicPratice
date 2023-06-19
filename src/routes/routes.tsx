import { Route, Routes } from "react-router-dom"
import AuthLayout from "../layouts/AuthLayout";
import AuthPage from "../pages/AuthPage";

const RouterComponent = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};

export default RouterComponent;
