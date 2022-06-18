import styled from "@emotion/styled";

export const ExpensesContainer = styled.div`
  margin: ${(props) => props.margin};
  .addExpensesCard {
    padding: 30px;
    justify-content: center;
  }
  .formGrid {
    justify-content: space-around;
    .MuiGrid-root{
      text-align: center;
      align-self: center;
    }
  }
  .expensesTable {
    width: 100%;
    text-align: center;
    th {
      cursor: pointer;
    }
    .dateCard {
      padding: 0 20px;
      display: inline-block;
    }
  }
`;
