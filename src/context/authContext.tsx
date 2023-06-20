import { createContext, useState, ReactNode } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

interface IAuthContext {
  login: (data: IDataLogin) => void;
  logout: () => void;
  user: object;
  register: (data: IDataRegister) => void;
}

interface IAuthProvider {
  children: ReactNode;
}

interface IDataRegister {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

interface IDataLogin {
  email: string;
  password: string;
}
const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<object>({});
  const navigate = useNavigate();
  

  const getUser = () => {
    const item = localStorage.getItem("token");
    return item ? JSON.parse(item) : null;
  };
  const isRegisteded = async (data: IDataRegister) => {
    const userRegistered = await getUser();
    if (userRegistered) {
      if (
        userRegistered.email.toLocaleLowerCase() === data.email.toLocaleLowerCase()
      ) {
        return true;
      }
    }
  };

  const isLogged = async (data: IDataLogin) => {
    const userLogin = await getUser();
    if (userLogin) {
      if (
        userLogin.email.toLocaleLowerCase() ===
          data.email.toLocaleLowerCase() && bcrypt.compareSync(data.password, userLogin.password)
      ) {
        return {login:true, nameUser:userLogin.name}
      }
    }
  };

  const login = async(data: IDataLogin) => {
    const loginUser = await isLogged(data);
    if (loginUser) {
      alert("usuario logueado");
      setUser({success:true, name: loginUser.nameUser});
      navigate('/home')
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  const register = async (data: IDataRegister) => {
    if (data.password !== data.confirmPassword) {
      alert("password and confirm password must be same");
      return false;
    }
    if (await isRegisteded(data)) {
      alert("user already exist");
      return false
    }
    const hash = bcrypt.hashSync(data.password, 10);
    data.password = hash;
    localStorage.setItem("token", JSON.stringify(data));
    setUser(data);
    return true
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, user, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
export type { IAuthContext };
