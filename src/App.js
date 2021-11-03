import CardSection from "./Components/CardSection";
import Header from "./Components/Header";
import {OuterLayout} from './styles/Layouts';
import styled from 'styled-components';
import ChartSection from "./Components/ChartSection";
import Footer from "./Components/Footer";
import { Fade } from "react-reveal";


function App() {
  return (
    <div className="App">
        <Header />
        <OuterLayout>
          <MainStyled>
            <Fade left>
              <CardSection />
            </Fade>
            <Fade right>
              <ChartSection />
            </Fade>
          </MainStyled>
        </OuterLayout>
        <Fade bottom>
          <Footer />
        </Fade>
    </div>
  );
}

const MainStyled = styled.main`


`;

export default App;
