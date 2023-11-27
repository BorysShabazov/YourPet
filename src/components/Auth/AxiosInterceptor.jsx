import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getRefreshToken } from '../../Redux/auth/auth-selectors';
import { authSlice } from '../../Redux/auth/auth-slice';
import { setToken } from '../../Redux/operations/handleToken';

const AxiosInterceptor = ({ children }) => {
  const dispatch = useDispatch();
  const refresh = useSelector(getRefreshToken);

  useEffect(() => {
    const response = (response) => {
      return response;
    };

    const error = async (error) => {
      if (error.response.status === 401) {
        try {
          const { data } = await axios.post('/api/users/refresh', {
            refreshToken: refresh,
          });

          const {
            data: { accessToken, refreshToken },
          } = data;

          setToken(accessToken);

          // set error config header
          error.config.headers['Authorization'] = `Bearer ${accessToken}`;

          dispatch(authSlice.actions.setAccessToken(accessToken));
          dispatch(authSlice.actions.setRefreshToken(refreshToken));

          return axios(error.config);
        } catch (error) {
          return Promise.reject(error);
        }
      }

      return Promise.reject(error);
    };

    axios.interceptors.response.use(response, error);
  }, [refresh, dispatch]);

  return children;
};

export default AxiosInterceptor;
