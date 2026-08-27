export default function Btn({
  children,
  isLoading = false,
  type = 'button',
  BtnName,
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      {...props}
      disabled={isLoading || props.disabled}
      className={`${className} disabled:cursor-not-allowed disabled:opacity-70`}
    >
      {isLoading ? `${BtnName}ing` : BtnName}
      {children}
    </button>
  );
}
