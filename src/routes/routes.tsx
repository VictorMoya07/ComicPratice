import { Navigate, Route, Routes } from "react-router-dom"
import AuthLayout from "../layouts/AuthLayout";
import AuthPage from "../pages/AuthPage";
import { PrivateRoutes } from "./privateRoutes";
import useAuth from "../hooks/useAuth"

const RouterComponent = () => {

  const {user} = useAuth()
  return (
    <Routes>
       {user.success ? (
        <Route path="/*" element={<PrivateRoutes />} />
      ) : (
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<AuthPage />} />
        </Route>
      )}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RouterComponent;
