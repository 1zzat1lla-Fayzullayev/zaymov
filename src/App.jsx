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
import { useEffect } from "react";
import Aos from "aos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />

        <Route
          path="/more-cards"
          element={
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
          }
        />

        <Route
          path="/other-mfo"
          element={
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
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
