import React from "react";

import * as S from "./styles";
import * as I from "./interfaces";

export default function Title({ text }: I.Title) {
  return <S.H1>{text}</S.H1>;
}
