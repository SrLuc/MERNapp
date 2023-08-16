import * as S from "../Styles/ComponentStyles";

interface IContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return <S.StyledContainer>{children}</S.StyledContainer>;
};

export default Container;
