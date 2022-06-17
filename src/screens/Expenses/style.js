import styled from "@emotion/styled";

export const ExpensesContainer = styled.div``;

export const TableStyle = styled.table`
  width: 100%;
  text-align: center;
  & div {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  & h3 {
    margin: 0;
  }
  & th {
    cursor: pointer;
  }
`;
