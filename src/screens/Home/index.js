import { Button, Typography } from "@mui/material";

import { HomeContainer } from "./style";

export default function Home() {
  return (
    <HomeContainer>
      <Typography variant="h1">Hi! I am Anson Chan</Typography>
      <Typography variant="body">
        Welcom to my website. This is about to demonstrate my skill in React and
        my coding.
        <br />
        This website is a expense tracker for track down the expenses. The
        expenses can be reviewed by chart and location.
        <br />
        It is built with different libraries, like Material-UI, Redux Toolkit,
        React Hook Form and React Leaflet.
        <br />
      </Typography>
      <Button variant="contained" className="btn">
        <a href="https://github.com/Siuhinnn/demo.git">GitHub link is here</a>
      </Button>
    </HomeContainer>
  );
}
