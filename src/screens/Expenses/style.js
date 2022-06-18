import styled from "@emotion/styled";

export const ExpensesContainer = styled.div`
  margin: ${(props) => props.margin};
  .addExpensesCard {
    padding: 30px;
    justify-content: center;
  }
  .addExpensesForm {
    display: flex;
    justify-content: space-around;
  }
  .expensesTable {
    width: 100%;
    text-align: center;
    th {
      cursor: pointer;
    }
    .dateCard {
      width: 30%;
      display: inline-block;
    }
  }
`;
