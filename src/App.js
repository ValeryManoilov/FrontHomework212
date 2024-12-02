import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react";
import LoadingPage from "./pages/LoadingPage";
import NotFound from "./pages/NotFound";

const HomePage = lazy(() => import("./pages/HomePage")) 
const AboutUsPage = lazy(() => import("./pages/AboutUsPage")) 
const ContactsPage = lazy(() => import("./pages/ContactsPage")) 
const SettingsPage = lazy(() => import("./pages/SettingsPage"))
const AuthPage = lazy(() => import("./pages/AuthPage"))
const Header = lazy(() => import("./components/Header")) 
const PersonalAccountPage = lazy(() => import("./pages/PersonalAccountPage"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage/>}>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/user/:name/:email" element={<PersonalAccountPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App
