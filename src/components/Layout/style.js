import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

export const LayoutContainer = styled(withTheme("div"))`
  display: flex;
  flex-direction: column;
  height: 100vh;
  & .PageContainer {
    height: 100%;
    position: relative;
    margin: 0 30px;
    overflow: auto;
  }
`;
