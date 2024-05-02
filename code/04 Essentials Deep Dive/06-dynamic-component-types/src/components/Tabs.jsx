export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
    {/* Instead of: <menu>{buttons}</menu> */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
