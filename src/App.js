import { Header } from "./components/header";
import { MainPage } from "./components/main";
import { Footer } from "./components/footer";
import { About } from "./components/about";
import { Service } from "./components/service";
import { Projects } from "./components/projects";
import { Partners } from "./components/partners";

import './index.css'

const App = () => {
  return (
    <div>
      <Header />
      <MainPage />
      <About />
      <Service />
      <Projects />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
