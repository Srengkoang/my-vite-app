// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Landing Pages
import LandingHeader from "./components/Header.jsx";
import LandingFooter from "./components/Footer.jsx";
import LayeredImages from "./components/Landpage webpage/LayeredImages.jsx";
import Trending from "./components/Landpage webpage/Trending.jsx";
import BrowsingTags from "./components/Landpage webpage/BrowsingTags.jsx";
import ReadianInformation from "./components/Landpage webpage/ReadianInformation.jsx";
import SignIn from "./components/Landpage webpage/SignIn.jsx";
import Guide from "./components/Landpage webpage/Guide.jsx";

// Logged-in Pages
import LoggedinHeader from "./Loggedin/Header.jsx";
import LoggedinFooter from "./Loggedin/Footer.jsx";
import LoggedinLayeredImages from "./Loggedin/Landpage webpage/LayeredImages.jsx";
import LoggedinTrending from "./Loggedin/Landpage webpage/Trending.jsx";
import LoggedinBrowsingTags from "./Loggedin/Landpage webpage/BrowsingTags.jsx";
import LoggedinReadianInformation from "./Loggedin/Landpage webpage/ReadianInformation.jsx";
import LoggedinSubscriptionPlans from "./Loggedin/Landpage webpage/SubscriptionPlans.jsx";
import LoggedinGuide from "./Loggedin/Landpage webpage/Guide.jsx";

// Profile Pages
import SignUpPage from "./Profile-Page/Sign-Up/SignUpPage.jsx";
import SignInPage from "./Profile-Page Sign-In/Sign-In/SignInPage.jsx";
import InstructionsPage from "./Instruction/Instruction-Page/Instruction-Page.jsx";
import MyAccount from "./Settings/My-Account.jsx";

// Browsing & Book Detail
import BrowseStories from "./Browsing & Detailing/Browse.jsx";
import BookDetail from "./Book-Detail/BookDetail.jsx";
import BookReading from "./Book-Reading/BookReading.jsx";
import BookReading2 from "./Book-Reading/BookReading2.jsx";
import BookReading3 from "./Book-Reading/BookReading3.jsx";
import BookReading4 from "./Book-Reading/BookReading4.jsx"

// Subscriptions
import SubscriptionPlans from "./Subscription/SubscriptionPlans.jsx";
import PaymentConfirmation from "./Subscription/PaymentConfirmation.jsx";
import PaymentComplete from "./Subscription/PaymentComplete.jsx";

// Admin Dashboard
import Sidebar from "./AdminDashboard/All works/Sidebar.jsx";
import AllWorksContent from "./AdminDashboard/All works/AllWorksContent.jsx";
import OverviewContent from "./AdminDashboard/Overviews/OverviewContent.jsx";
import AllUsersContent from "./AdminDashboard/All Users/AllUsersContent.jsx";
import TotalUserList from "./AdminDashboard/All Users/TotalUserList.jsx";
import TotalViews from "./AdminDashboard/All works/TotalViews.jsx";
import TotalBooks from "./AdminDashboard/All works/TotalBooks.jsx";
import PremiumBooks from "./AdminDashboard/All works/PremiumBooks.jsx";
import TopBooks from "./AdminDashboard/All works/TopBooks.jsx";

// -------------------
// Sample Data
// -------------------
const initialStories = [
  { title: "The Inventor's Paradox", author: "Book Author", date: "1/1/2025", status: "Ongoing", chapters: 1, views: 1, description: "A thrilling introductory chapter has been posted. Read now and embark on an adventure!" },
  { title: "Jane's Last Stand", author: "Jane Doe", date: "3/15/2024", status: "Completed", chapters: 12, views: 5021, description: "A mystery set in the deep woods where shadows hide secrets." },
  { title: "The Martian Colony", author: "Fictional Writer", date: "7/22/2025", status: "Ongoing", chapters: 3, views: 45, description: "An epic sci-fi journey across distant galaxies." },
  { title: "The Cosmic Drift", author: "Zoe Chen", date: "9/10/2024", status: "Ongoing", chapters: 8, views: 320, description: "A lone pilot discovers a mysterious signal leading to a forgotten sector of space." },
];


// Layouts
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
      <LoggedinHeader />
      <main className="flex-grow min-h-screen">{children}</main>
      <LoggedinFooter />
    </>
  );
}

// Admin Layout
function AdminLayout() {
  const [view, setView] = useState("overview");

  const adminWorks = [
    { id: 1, title: "Quantum Quests", author: "A. Lee", status: "Published", chapters: 10, views: 1200, date: "2025-10-30", description: "A thrilling adventure..." },
    { id: 2, title: "Mystery Manor", author: "B. Kim", status: "Draft", chapters: 5, views: 300, date: "2025-10-29", description: "A mysterious journey..." },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar currentView={view} setView={setView} adminName="Alex" />
      <div className="flex-1 p-6 bg-gray-50">
        {view === "Overview" && <OverviewContent data={{ totalWorks: 50, totalUsers: 200 }} 
         onClickTotalUsers={() => setView("Total Users")} 
         onClickTotalWorks={() => setView("All Works")} />}
        {view === "All Works" && <AllWorksContent initialWorks={adminWorks} onNavigate={(newView) => setView(newView)} />}
        {view === "All Users" && <AllUsersContent />}
        {view === "Total Users" && <TotalUserList />}
        {view === "Total Views" && <TotalViews />}
        {view === "Total Books" && <TotalBooks />}
        {view === "Premium Books" && <PremiumBooks />}
        {view === "Top Books" && <TopBooks />}
      </div>
    </div>
  );
}


// APP
function App() {
  const [stories, setStories] = useState(initialStories);

  const addStory = (newStory) => {
    setStories([...stories, newStory]);
  };

  return (
    <Router>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={
          <MainLayout>
            <LayeredImages />
            <Trending />
            <BrowsingTags />
            <ReadianInformation />
            <SignIn />
            <Guide />
          </MainLayout>
        } />

        {/* Logged-in Home */}
        <Route path="/home" element={
          <LoggedInLayout>
            <LoggedinLayeredImages />
            <LoggedinTrending />
            <LoggedinBrowsingTags />
            <LoggedinReadianInformation />
            <LoggedinSubscriptionPlans />
            <LoggedinGuide />
          </LoggedInLayout>
        } />
        
        <Route path="/book/:title" element={<MainLayout><BookDetail /></MainLayout>} />

        {/* Profile */}
        <Route path="/signup" element={<MainLayout><SignUpPage /></MainLayout>} />
        <Route path="/signin" element={<MainLayout><SignInPage /></MainLayout>} />
        <Route path="/settings" element={<LoggedInLayout><MyAccount /></LoggedInLayout>} />
        <Route path="/instruction" element={<MainLayout><InstructionsPage /></MainLayout>} />

        {/* Browsing / Details */}
        <Route path="/browse" element={<MainLayout><BrowseStories stories={stories} /></MainLayout>} />
        <Route path="/Book-Detail" element={<MainLayout><BookDetail /></MainLayout>} />
        <Route path="/Book-Reading" element={<MainLayout><BookReading /></MainLayout>} />
        <Route path="/Book-Reading2" element={<MainLayout><BookReading2 /></MainLayout>} />
        <Route path="/Book-Reading3" element={<MainLayout><BookReading3 /></MainLayout>} />
        <Route path="/Book-Reading4" element={<MainLayout><BookReading4 /></MainLayout>} />


        {/* Admin */}
        <Route path="/admin" element={<LoggedInLayout><AdminLayout /></LoggedInLayout>} />

        {/* Subscription */}
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
