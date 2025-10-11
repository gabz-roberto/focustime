import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import MainForm from "../../components/MainForm";
import { Menu } from "../../components/Menu";
import "../../styles/global.css";
import "../../styles/theme.css";

type MainTemplateProps = {
  children: React.ReactNode;
};

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>{children}</Container>
      <Container>
        <MainForm />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export { MainTemplate };
