import { setToken } from '../Redux/operations/handleToken';
import { instance, logout } from '../Redux/auth/auth-operations';
import { authSlice } from '../Redux/auth/auth-slice';

const setUpInterceptor = (dispatch) => {
  const handleError = async (error) => {
    if (error.response.status === 401) {
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
        return Promise.reject(error);
      }
    }

    if (error.response.status === 403) {
      return dispatch(logout())
        .catch((logoutError) => {
          return Promise.reject(logoutError);
        })
        .finally(() => {
          return Promise.reject(error);
        });
    }

    return Promise.reject(error);
  };

  instance.interceptors.request.use(async (config) => {
    return config;
  });

  instance.interceptors.response.use((response) => response, handleError);
};

export default setUpInterceptor;
