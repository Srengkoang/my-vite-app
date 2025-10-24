import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingHeader from "./components/Header.jsx";
import LandingFooter from "./components/Footer.jsx";
import LayeredImages from "./components/Landpage webpage/LayeredImages.jsx";
import Trending from "./components/Landpage webpage/Trending.jsx";
import BrowsingTags from "./components/Landpage webpage/BrowsingTags.jsx";
import ReadianInformation from "./components/Landpage webpage/ReadianInformation.jsx";
import SignIn from "./components/Landpage webpage/SignIn.jsx";
import Guide from "./components/Landpage webpage/Guide.jsx";

import LoggedinHeader from "./Loggedin/Header.jsx";
import LoggedinFooter from "./Loggedin/Footer.jsx";
import LoggedinLayeredImages from "./Loggedin/Landpage webpage/LayeredImages.jsx";
import LoggedinTrending from "./Loggedin/Landpage webpage/Trending.jsx";
import LoggedinBrowsingTags from "./Loggedin/Landpage webpage/BrowsingTags.jsx";
import LoggedinReadianInformation from "./Loggedin/Landpage webpage/ReadianInformation.jsx";
import LoggedinSubscriptionPlans from "./Loggedin/Landpage webpage/SubscriptionPlans.jsx";
import LoggedinGuide from "./Loggedin/Landpage webpage/Guide.jsx";

import SignUpPage from "./Profile-Page/Sign-Up/SignUpPage.jsx";
import SignInPage from "./Profile-Page Sign-In/Sign-In/SignInPage.jsx";
import InstructionsPage from "./Instruction/Instruction-Page/Instruction-Page.jsx";
import MyAccount from "./Settings/My-Account.jsx";

import BrowseStories from "./Browsing & Detailing/Browse.jsx";

import SubscriptionPlans from "./Subscription/SubscriptionPlans.jsx";
import PaymentConfirmation from "./Subscription/PaymentConfirmation.jsx";
import PaymentComplete from "./Subscription/PaymentComplete.jsx"

function MainLayout({ children }) {
  return (
    <>
      <LandingHeader />
      <main className="flex-grow min-h-screen">{children}</main>
      <LandingFooter />
    </>
  );
}

function LoggedInLayout({ children }) {
  return (
    <>
      <LoggedinHeader /> {/* Logged-in header */}
      <main className="flex-grow min-h-screen">{children}</main>
      <LoggedinFooter /> {/* Logged-in footer */}
    </>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <MainLayout>
              <LayeredImages />
              <Trending />
              <BrowsingTags />
              <ReadianInformation />
              <SignIn />
              <Guide />
            </MainLayout>
          }
        />
        
        <Route
          path="/home"
          element={
            <LoggedInLayout>
              <LoggedinLayeredImages />
              <LoggedinTrending />
              <LoggedinBrowsingTags />
              <LoggedinReadianInformation />
              <LoggedinSubscriptionPlans />
              <LoggedinGuide />
            </LoggedInLayout>
          }
        />

        {/* Profile & Account Routes */}
        <Route path="/signup" element={<MainLayout><SignUpPage /></MainLayout>} />
        <Route path="/signin" element={<MainLayout><SignInPage /></MainLayout>} />
        <Route path="/settings" element={<MainLayout><MyAccount /></MainLayout>} />
        <Route path="/Instruction" element={<MainLayout><InstructionsPage /></MainLayout>} />
        <Route path="/Browse" element={<MainLayout><BrowseStories /></MainLayout>} />

        {/* Subscription Routes */}
        <Route path="/subscription" element={<MainLayout><SubscriptionPlans /></MainLayout>} />
        <Route path="/payment-confirmation" element={<MainLayout><PaymentConfirmation /></MainLayout>} />
        <Route path="/payment-complete" element={<MainLayout><PaymentComplete /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
