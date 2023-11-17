import styled from '@emotion/styled';

export const RegisterFormWrapper = styled.form`
  max-width: 280px;
  padding: 40px 20px;
  border-radius: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

export const RegisterHeader = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

export const RegisterLabel = styled.label``;

export const RegisterInput = styled.input`
  width: 100%;
  padding: 12px 0 12px 16px;

  border-radius: 40px;
  border: 1px solid #54adff;

  font-size: 16px;
  color: #888888;
  line-height: 150%; /* 24px */
  letter-spacing: 0.64px;
  outline: none;
`;

export const RegisterDivWrapper = styled.div`
  margin-bottom: 14px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const RegisterEye = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 12px;

  cursor: pointer;
`;
