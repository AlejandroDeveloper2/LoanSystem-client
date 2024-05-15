import { Home, Questions, Services, Contact } from "@modules/landing/sections";

const LandingPage = (): JSX.Element => {
  return (
    <>
      <Home />
      <Services />
      <Questions />
      <Contact />
    </>
  );
};

export default LandingPage;
