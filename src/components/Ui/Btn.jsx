import { Container } from '../ComponentExports';

export default function Btn({ children, type = 'button', BtnName, className = '', ...props }) {
  return (
    <Container>
      <button type={type} {...props} className={`${className}`}>
        {BtnName}
        {children}
      </button>
    </Container>
  );
}
