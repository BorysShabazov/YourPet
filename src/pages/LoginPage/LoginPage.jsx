import LoginForm from '../../components/LoginForm/LoginForm';
import { Container } from '../../ui';
import BackgroundWrapper from '../../ui/BackgroundWrapper/BackgroundWrapper';

const LoginPage = () => {
  return (
    <BackgroundWrapper padding="pt-10 md:pt-20">
      <Container>
        <div className="flex justify-center">
          <LoginForm />
        </div>
      </Container>
    </BackgroundWrapper>
  );
};
export default LoginPage;
