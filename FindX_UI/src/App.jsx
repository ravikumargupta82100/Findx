import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";

import MainLayout from "./components/MainLayout";

import Home from "./pages/Home";
import ReportLost from "./pages/ReportLost";
import ReportFound from "./pages/ReportFound";
import Explore from "./pages/Explore";
import ItemDetails from "./pages/ItemDetails";
import MatchDetails from "./pages/MatchDetails";
import Chat from "./pages/Chat";
import MyReports from "./pages/MyReports";
import AIAssistant from "./pages/AIAssistant";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";
import EditReport from "./pages/EditReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes/>}>

   

        {/* Public Pages */}
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

     </Route>
        {/* Main Application */}
        <Route element={<ProtectedRoutes/>}>
        <Route element={<MainLayout />}>

          <Route path="/home" element={<Home />} />

          <Route path="/explore" element={<Explore />} />

          <Route path="/report-lost" element={<ReportLost />} />

          <Route path="/report-found" element={<ReportFound />} />
          <Route path="/edit-report/:id"  element={<EditReport />}/>

          <Route path="/item-details/:id" element={<ItemDetails />} />

          <Route path="/match-details" element={<MatchDetails />} />

          <Route path="/chat" element={<Chat />} />

          <Route path="/my-reports" element={<MyReports />} />

          <Route path="/ai-assistant" element={<AIAssistant />} />
</Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;