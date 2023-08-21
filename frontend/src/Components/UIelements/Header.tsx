import * as S from "../Styles/ComponentStyles";

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <S.StyledHeader>
      <h1>{title}</h1>
      {children}
    </S.StyledHeader>
  );
};

export default Header;
