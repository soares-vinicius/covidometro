import React from "react";
import logoUrl from "../../assets/logo/logo.png";

import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.Nav>
        <img src={logoUrl} alt="Logo" />
      </S.Nav>
    </S.Header>
  );
};

export default Header;
