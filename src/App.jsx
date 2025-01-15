import CardSection from "./components/cardSection";
import FinanceCard from "./components/financeCard";
import FirstTexts from "./components/firstTexts";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import QuestionsPartTwo from "./components/questionsPartTwo";
import Recommendation from "./components/recommendation";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardSection />
      <FirstTexts />
      <Recommendation />
      <QuestionsPartTwo />
      <FinanceCard />
    </>
  );
}

export default App;
