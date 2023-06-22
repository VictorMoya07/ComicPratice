import { createContext, useState, ReactNode } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import useAlert from "../hooks/useAlert";


interface IAuthContext {
  login: (data: IDataLogin) => Promise<boolean>;
  logout: () => void
  user: object;
  register: (data: IDataRegister) => Promise<boolean>;
}

interface IAuthProvider {
  children: ReactNode;
}

interface IDataRegister {
  email: string;
  password: string;
  confirmPassword?: string;
  name?: string;
}

interface IDataLogin {
  email: string;
  password: string;
}
interface IloginResult {
  login:boolean;
  nameUser:string;
}
const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  const { showAlert } = useAlert();
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
    let loginRes:IloginResult ={login:true, nameUser:''}
    const userLogin = await getUser();
    if (userLogin) {
      if (
        userLogin.email.toLocaleLowerCase() ===
          data.email.toLocaleLowerCase() && bcrypt.compareSync(data.password, userLogin.password)
      ) {
        return loginRes={login:true, nameUser:userLogin.name}
      }else{
        loginRes={login:false, nameUser:''}
      }
    }
    return loginRes;
  };

  const login = async(data: IDataLogin) => {
    const loginUser:IloginResult = await isLogged(data);
    if (loginUser.login) {
      setUser({success:loginUser.login, name: loginUser.nameUser});
      navigate('/home')
      return true
    }else{
     return false
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  const register = async (data: IDataRegister) => {
    const { confirmPassword, ...registerData } = data;
    if (await isRegisteded(registerData)) {
      showAlert("Ya existe un usuario creado con este con este correo", "error");
      return false
    }
    const hash = bcrypt.hashSync(data.password, 10);
    data.password = hash;
    localStorage.setItem("token", JSON.stringify(data));
    setUser(data);
    return true
  };
  const value:IAuthContext ={
    user,
    login,
    logout,
    register,
  }
  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
export type { IAuthContext };
