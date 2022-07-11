import React from "react";
import Stats from "../../../components/stats";
import Subtitle from "../../../components/subtitle";

import * as S from "./styles";

const Cards: React.FC = () => {
  return (
    <S.Container>
      <Subtitle text="Pais" />
      <div className="card__indicators">
        <Stats indicator="0" label="Total de casos" />
        <Stats indicator="0" label="Mortes" />
        <Stats indicator="0" label="Fatalidade" />
      </div>
    </S.Container>
  );
};

export default Cards;
