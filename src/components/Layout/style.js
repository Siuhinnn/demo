import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
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
