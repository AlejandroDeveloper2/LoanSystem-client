import { Home, Questions, Services } from "@modules/landing/sections";

const LandingPage = (): JSX.Element => {
  return (
    <>
      <Home />
      <Services />
      <Questions />
    </>
  );
};

export default LandingPage;
