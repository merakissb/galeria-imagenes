import './App.css';
import Header from './components/header';
import CardContainer from './components/card';
import CardData from './data/cardData';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      {CardData.map((card) => {
        return (
          <CardContainer
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.url}
          />
        );
      })
      }
      <Footer />
    </>
  );
}

export default App;
