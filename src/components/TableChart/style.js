import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

export const ChartStyle = styled(withTheme("div"))`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  border-radius: 12px;
  height: 10rem;
`;

export const Bar = styled.div`
  height: 100%;
  width: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .inner {
    display: flex;
    flex-flow: column;
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
  }

  label {
    font-weight: bold;
    font-size: 12px;
    text-align: center;
  }
`;
