import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./pages/AdminLayout";
import AdminAnnouncements from "./pages/AdminAnnouncements";
import AdminLectures from "./pages/AdminLectures";
import AdminHomeworks from "./pages/AdminHomeworks";
import AdminMentorGroups from "./pages/AdminMentorGroups";
import AdminHome from "./pages/AdminHome";

export default function RoutePaths() {
  return (
    <BrowserRouter basename="/bootcamp-site">
      <Routes>
        <Route path="/bootcamp-site/" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="AdminAnnouncements" element={<AdminAnnouncements />} />
          <Route path="AdminLectures" element={<AdminLectures />} />
          <Route path="AdminHomeworks" element={<AdminHomeworks />} />
          <Route path="AdminMentorGroups" element={<AdminMentorGroups />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

