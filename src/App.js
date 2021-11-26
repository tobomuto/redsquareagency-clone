import './App.scss';

import Header from './components/Header';
import Intro from './components/Intro';
import Preview from './components/Preview';
import IdeaSection from './components/IdeaSection';
import ClientsSection from './components/ClientsSection';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Preview />
      <IdeaSection />
      <ClientsSection />
      <Footer />
    </div>
  );
}

export default App;