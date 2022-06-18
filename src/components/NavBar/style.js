import styled from "@emotion/styled";

export const NavBarStyle = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 2em;

  & a {
    text-decoration: none;
  }

  & li {
    position: relative;
    display: block;
    text-transform: uppercase;
    padding: 1rem;
    color: #777;

    & ul {
      position: absolute;
      display: none;
      flex-direction: column;
      padding: 1px;
      left: 0;
      background: #777;

      & li {
        color: white;
        font-weight: normal;
      }
    }
  }

  & li:hover {
    font-weight: bold;
    background: #777;
    color: white;
  }

  & li:hover > ul {
    display: flex;
    z-index: 2;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MoblieNavBarStyle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    background-color: #1e1e23;
    height: 65px;

    & a {
      text-decoration: none;
    }

    & .moblieNavBarWrapper {
      display: none;
      z-index: 100;
      ${(props) =>
        props.isMoblieNavOpen &&
        `
          display: flex;
          position: absolute;
          width: 100vw;
          height: 100vh;
          background: #3f3f3f;
          margin: -1px;
        `}
      & li {
        position: relative;
        display: block;
        text-transform: uppercase;
        padding: 1rem;
        color: white;
        & ul {
          display: none;
          ${(props) =>
            props.isMoblieDropdown &&
            `
              display: flex;
              position: absolute;
              flex-direction: column;
              background: #5f5f5f;
              padding: 0;
              left: 0;
              z-index: 101;
            `}
        }
      }
    }

    & div {
      display: flex;
      flex-flow: column;
      justify-content: center;
      margin: 1rem;
      z-index: 101;
      & span {
        display: flex;
        width: 29px;
        height: 2px;
        margin-bottom: 5px;
        position: relative;
        background: #ffffff;
        border-radius: 3px;
      }
    }
  }
`;
