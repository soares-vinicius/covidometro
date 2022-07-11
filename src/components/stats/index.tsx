import React from "react";

import * as S from "./styles";
import * as I from "./interfaces";

export default function Stats({ label, indicator }: I.Stats) {
  return (
    <S.Container>
      <S.H3>{label}</S.H3>
      <S.H4>{indicator}</S.H4>
    </S.Container>
  );
}
