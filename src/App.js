import './App.css';
import Header from './components/header/Header';
import Card from './components/card/Card';
import CardData from './data/cardData';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      {CardData.map((card) => {
        return (
          <Card
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
