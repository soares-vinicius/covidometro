import React from "react";

import * as S from "./styles";
import * as I from "./interfaces";

export default function Subtitle({ text }: I.Subtitle) {
  return <S.H2>{text}</S.H2>;
}
