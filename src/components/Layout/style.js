import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  & .PageContainer {
    height: calc(100% - 64px);
    width: calc(100% - 200px);
    position: relative;
    top: 64px;
    padding: 30px;
    overflow: auto;
    background-color: #F9F7F7;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
