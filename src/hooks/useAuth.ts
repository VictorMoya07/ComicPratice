import { useContext } from 'react';

import { AuthContext, IAuthContext } from '../context/authContext';

const useAuth = (): IAuthContext | null => {
  return useContext(AuthContext);
};

export default useAuth;