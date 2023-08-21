import * as S from "../Styles/ComponentStyles";

interface ItemListProps {
  children: React.ReactNode;
}

const ItemList = ({ children }: ItemListProps) => {
  return <S.StyledLi>{children}</S.StyledLi>;
};

export default ItemList;
