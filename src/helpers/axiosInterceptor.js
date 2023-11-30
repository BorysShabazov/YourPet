import { setToken } from '../Redux/operations/handleToken';
import { instance } from '../Redux/auth/auth-operations';
import { authSlice } from '../Redux/auth/auth-slice';

const isLoginOrRegisterRequest = (config) => {
  const { url, method } = config;
  return (
    (url.includes('/auth/users/login') ||
      url.includes('/auth/users/register')) &&
    method.toLowerCase() === 'post'
  );
};

const setUpInterceptor = (dispatch) => {
  const handleError = async (error) => {
    if (
      error.response.status === 401 &&
      !isLoginOrRegisterRequest(error.config)
    ) {
      try {
        const refresh = localStorage.getItem('refresh');

        const { data } = await instance.post('api/users/refresh', {
          refreshToken: refresh,
        });

        const { data: dataResponse } = data;

        error.config.headers.Authorization = `Bearer ${dataResponse.accessToken}`;
        dispatch(authSlice.actions.refreshToken(dataResponse.accessToken));

        setToken(dataResponse.accessToken);

        localStorage.setItem('refresh', dataResponse.refreshToken);

        return instance(error.config);
      } catch (error) {
        const { refreshToken } = JSON.parse(error.response.config.data);
        if (error.response.data.code === 403 && refreshToken) {
          dispatch(authSlice.actions.refreshToken(null));
          return;
        }
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  };

  instance.interceptors.request.use(async (config) => {
    return config;
  });

  instance.interceptors.response.use((response) => response, handleError);
};

export default setUpInterceptor;
