// eslint-disable-next-line perfectionist/sort-imports
import { instance } from 'src/utils/api-instance';

const login = async ({ email, password }) => {
  try {
    const response = await instance.post('login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const AuthService = {
  login,
};

export default AuthService;
