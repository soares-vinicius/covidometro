import React from "react";
import Stats from "../../../components/stats";
import Subtitle from "../../../components/subtitle";

import * as S from "./styles";
import * as I from "./interfaces";

export default function Cards({
  TotalConfirmed,
  TotalDeaths,
  Country,
}: I.Cards) {
  const fatality = ((TotalDeaths / TotalConfirmed) * 100).toFixed(2);
  return (
    <S.Container>
      <Subtitle text={Country} />
      <div className="card__indicators">
        <Stats indicator={TotalConfirmed} label="Total de casos" />
        <Stats indicator={TotalDeaths} label="Mortes" />
        <Stats indicator={`${fatality}%`} label="Fatalidade" />
      </div>
    </S.Container>
  );
}
