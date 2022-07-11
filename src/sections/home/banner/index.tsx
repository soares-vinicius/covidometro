import React from "react";
import Title from "../../../components/title";
import { ReactComponent as Doctors } from "../../../assets/imgs/doctors.svg";

import * as S from "./styles";

const Banner: React.FC = () => {
  return (
    <S.Container>
      <div>
        <Title text="Conheça o Covidômetro" />
        <p>
          Fique atualizado com velocidade e transparência. O Covidômetro é uma
          ferramenta que mostra para você em tempo real o número de casos e
          óbitos relacionados a pandemia da COVID-19 ao redor do mundo.
        </p>
      </div>
      <div>
        <Doctors />
      </div>
    </S.Container>
  );
};

export default Banner;
