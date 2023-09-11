import * as S from "../Styles/ComponentStyles";

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <S.StyledHeader>
      <h4>Name</h4>
      <h4>Strang</h4>
      <h4>Action</h4>
      {children}
    </S.StyledHeader>
  );
};

export default Header;
