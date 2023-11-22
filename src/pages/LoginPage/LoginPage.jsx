import LoginForm from '../../components/LoginForm/LoginForm';
import { Container } from '../../ui';

const LoginPage = () => {
  return (
    <Container>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </Container>
  );
};
export default LoginPage;
