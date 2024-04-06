import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import More from "./Components/More";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollButton from "./Components/Scroll";
import Team from "./Components/Team";
import Navbar from "./Components/Navbar";
import SubscribeCard from "./Components/Form";

function App() {
  const location = useLocation(); // Get the current location
  // Check if the current location matches any of the specified paths
  const isTeamRoute = location.pathname === "/team";
  const isAboutRoute = location.pathname === "/about";
  const isWorkRoute = location.pathname === "/work";
  const isSubscribeCard = location.pathname === "/form";

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/team" element={<Team />,<Footer />} /> */}
        <Route path="/team" element={
          <>
            <Team />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <About />
            <Footer />
          </>
        } />
        <Route path="/work" element={
          <>
            <Work />
            <Footer />
          </>
        } />
        <Route path="/more" element={
          <>
            <More />
            <Footer />
          </>
        } />
        <Route path="/form" element={
          <>
            <SubscribeCard />
            <Footer />
          </>
        } />


        {/* <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/more" element={<More />} />
        <Route path="/form" element={<SubscribeCard />} /> */}

      </Routes>
      {/* Conditionally render components based on the route */}
      {!isTeamRoute && !isAboutRoute && !isWorkRoute && !isSubscribeCard && (
        <>
          <Home />
          <About />
          <Work />
          <More />
          <Team />
          <Contact />
          {/* <SubscribeCard /> */}
          <Footer />
          <ScrollButton />
        </>
      )}
    </div>
  );
}

export default App;
