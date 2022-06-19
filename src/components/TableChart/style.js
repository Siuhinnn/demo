import styled from "@emotion/styled";

export const ChartStyle = styled.div`
  display: flex;
  justify-content: space-around;
  height: 10rem;
  @media (max-width: 426px) {
    flex-direction: column;
    height: 20rem;
  }
`;

export const Bar = styled.div`
  height: 100%;
  width: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 426px) {
    flex-direction: row-reverse;
    height: 5%;
    width: 100%;
  }

  .inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    border: 1px solid #313131;
    border-radius: 12px;
    background-color: ${(props) => props.theme.palette.primary.light};
    overflow: hidden;
  }

  .fill {
    background-color: ${(props) => props.theme.palette.primary.dark};
    height: ${(props) => props.fillheight};
    width: 100%;
    transition: all 0.3s ease-out;
    border-radius: 12px;
    @media (max-width: 426px) {
      height: 100%;
      width: ${(props) => props.fillheight};
    }
  }

  label {
    font-weight: bold;
    font-size: 12px;
    width: 30px;
    text-align: center;
  }
`;
