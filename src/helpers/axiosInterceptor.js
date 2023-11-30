import { setToken } from '../Redux/operations/handleToken';
import { instance } from '../Redux/auth/auth-operations';

const setUpInterceptor = (dispatch, logout) => {
  const handleError = async (error) => {
    if (error.response.status === 401) {
      try {
        const refresh = localStorage.getItem('refresh');

        if (!refresh) return;

        const { data } = await instance.post('api/users/refresh', {
          refreshToken: refresh,
        });
        const { data: dataResponse } = data;

        error.config.headers.Authorization = `Bearer ${dataResponse.accessToken}`;
        setToken(dataResponse.accessToken);

        localStorage.setItem('refresh', dataResponse.refreshToken);

        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    if (error.response.status === 403) {
      console.log(error.response);
      try {
        dispatch(logout());
        console.log('403');
      } catch (error) {
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
