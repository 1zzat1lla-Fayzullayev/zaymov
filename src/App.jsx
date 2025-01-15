import { Toaster } from "react-hot-toast";
import CardSection from "./components/cardSection";
import FinanceCard from "./components/financeCard";
import FirstTexts from "./components/firstTexts";
import Form from "./components/form";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import QuestionsPartTwo from "./components/questionsPartTwo";
import Recommendation from "./components/recommendation";
import Footer from "./components/footer";

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
      <Form />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
