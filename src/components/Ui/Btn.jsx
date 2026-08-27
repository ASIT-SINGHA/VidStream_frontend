import { Container } from '../ComponentExports';

export default function Btn({ children,isLoading=false, type = 'button', BtnName, className = '', ...props }) {
  return (
    <Container>
      <button type={type} {...props} className={`${className} disabled={isLoading}`}>
        { isLoading ? `${BtnName}ing` : BtnName}
        {children}
      </button>
    </Container>
  );
}
