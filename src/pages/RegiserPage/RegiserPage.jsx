import { Container } from '../../ui';

import AuthForm from '../../components/AuthForm/AuthForm';

const RegiserPage = () => {
  return (
    <Container>
      <div className="flex justify-center">
        <AuthForm />
      </div>
    </Container>
  );
};

export default RegiserPage;
