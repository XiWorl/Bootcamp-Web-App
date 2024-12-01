import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import AdminAnnouncements from "./AdminAnnouncements";
import AdminLectures from "./AdminLectures";
import AdminHomeworks from "./AdminHomeworks";
import AdminMentorGroups from "./AdminMentorGroups";
import AdminHome from "./AdminHome";

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

