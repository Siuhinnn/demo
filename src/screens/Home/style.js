import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  .btn {
    margin: 20px;
  }
  a {
    color: ${(props) => props.theme.palette.primary.contrastText};
  }
`;
