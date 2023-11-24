import AuthForm from '../../components/AuthForm/AuthForm';
import { Container } from '../../ui';
import BackgroundWrapper from '../../ui/BackgroundWrapper/BackgroundWrapper';

const RegiserPage = () => {
  return (
    <BackgroundWrapper padding="pt-10 md:pt-20">
      <Container>
        <div className="flex justify-center">
          <AuthForm />
        </div>
      </Container>
    </BackgroundWrapper>
  );
};

export default RegiserPage;
