<template>
  <div class="quem-somos">
    <h2>Quem Somos</h2>
    <h3>
      Os empreendedores do Conexão Sustentável possuem grande experiência no
      segmento de energia, acumulada ao longo de anos de experiência ocupando
      posições no grupo Eletrobras
    </h3>
    <div class="people">
      <div>
        <img src="@/assets/ALEXANDRE-PELINSON.png" alt="ALEXANDRE PELINSON" />
        <p>ALEXANDRE PELINSON</p>
        <span>Furnas / Tech</span>
        <small
          >Analista de Sistemas de Automação. Formado em Ciências da Computação
          pela Universidade Federal de Juiz de Fora, atualmente trabalha em
          projetos, instalação e comissionamento das Redes de Proteção e
          Controle das Subestações e Usinas de Furnas. Foi treinado pela Cisco
          Academy para atuar na área de Redes e treinado pela Oracle Academy
          para atuar como DBA. Está em Furnas desde 2011, sendo admitido por
          concurso público.
        </small>
        <a
          href="https://www.linkedin.com/in/alexandre-pelinson-332b317a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon large color="blue darken-4"> mdi-linkedin </v-icon></a
        >
      </div>
      <div>
        <img src="@/assets/CHRISTIANE-NOGUEIRA.png" alt="CHRISTIANE NOGUEIRA" />
        <p>CHRISTIANE NOGUEIRA</p>
        <span>Eletronorte / Finanças</span>
        <small
          >Analista Econômico-Financeiro. Formada em Ciências Econômicas pela
          Universidade Federal de Uberlândia, MBA em Finanças e Planejamento
          Empresarial, LLM em Direito da Energia e Negócios no Setor Elétrico.
          Atuei na área financeira da Eletronorte por mais de 10 anos, assumindo
          a Gerência de Contas a Pagar, de Tesouraria e Superintendência de
          Finanças. Atualmente estou inserida no processo de gestão de
          participações da Eletrobras, na área de Estratégia e Desenvolvimento
          de Negócios.
        </small>
        <a
          href="https://www.linkedin.com/in/christiane-mundim-nogueira-8b826822/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon large color="blue darken-4"> mdi-linkedin </v-icon></a
        >
      </div>
      <div>
        <img src="@/assets/ERIKA-LAUN.png" alt="ERIKA LAUN" />
        <p>ERIKA LAUN</p>
        <span>Furnas / Comunicação</span>
        <small
          >Especialista em ESG, Diversidade e Inclusão (D&I), Agenda 2030,
          Gestão Socioambiental, Planejamento Estratégico e Indicadores de
          Sustentabilidade Empresarial. 20 anos de experiência Profissional, dos
          quais 13 anos como funcionária concursada de Furnas, liderando
          projetos ESG. Formada em Comunicação Social pela PUC-Rio, com
          Pós-Graduação em Administração de Marketing pela FGV, além de Curso de
          Extensão de Sustentabilidade pela Cambridge School.</small
        >
        <a
          href="https://www.linkedin.com/in/erikalaun/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon large color="blue darken-4"> mdi-linkedin </v-icon></a
        >
      </div>
      <div>
        <img src="@/assets/FABRINI-GALO.png" alt="FABRINI GALO" />
        <p>FABRINI GALO</p>
        <span>Furnas / Governança </span>
        <small
          >Especialista em Governança Corporativa e Sustentabilidade.
          Conselheiro Consultivo de Startups, mentor de CEO de empresas e
          Professor de Educação Executiva para Conselheiros e Lideranças. Mais
          de 20 anos de experiência Profissional, dos quais 07 anos como
          Superintendente Jurídico da Empresa de Pesquisa Energética - EPE.
          Advogado de formação, com Pós-graduado em Direito Administrativo.
          Pós-graduado em Direito Tributário. MBA em Finanças Corporativas e MBA
          em Empreendedorismo e Inovação. Embaixador do Capitalismo Consciente
          no Brasil e Líder da Realidade Climática pelo The Climate Reality
          Leadership Corps.
        </small>
        <a
          href="https://www.linkedin.com/in/fabrini-galo-d10m09a77/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon large color="blue darken-4"> mdi-linkedin </v-icon></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuemSomosHome",
};
</script>

<style lang="scss" scoped>
.quem-somos {
  max-width: 1312px;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }
  h2 {
    color: #262827;
    font-size: 64px;
    font-weight: 300;
    line-height: 1.1;
    margin-bottom: 16px;
    @media screen and (max-width: 768px) {
      font-size: 32px;
    }
  }
  h3 {
    color: #262827;
    font-size: 24px;
    font-weight: 500;
    line-height: normal;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  .people {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    margin-top: 32px;
    text-align: center;
    @media screen and (max-width: 998px) {
      grid-template-columns: 1fr;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 8px;
      img {
        max-width: 100%;
      }
      p {
        color: #262827;
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 8px;
        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
      }
      span {
        color: #262827;
        display: block;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
