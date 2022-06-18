import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

export const SummaryContainer = styled(withTheme("div"))`
  padding: 20px;
  border-radius: 12px;

  .listStyle {
    list-style: none;
    padding: 0;
    width: 100%;
    text-align: center;
  }

  .listItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: 12px;
    border: 1px solid #999;
    .description {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 0.5rem;
    }
    .price {
      font-weight: bold;
      border: 1px solid white;
      padding: 0.5rem;
      border-radius: 12px;
    }
    .date {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 5.5rem;
      height: 5.5rem;
      border: 1px solid #ececec;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: bold;
    }
    .day {
      font-size: 1.5rem;
    }
  }

  .filterStyle {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;

    label {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    select {
      font: inherit;
      padding: 0.5rem 3rem;
      font-weight: bold;
      border-radius: 6px;
    }
  }
`;
