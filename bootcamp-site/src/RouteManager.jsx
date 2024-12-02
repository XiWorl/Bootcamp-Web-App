import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

{/* Imports the Admin Pages */}
import AdminLayout from "./AdminLayout";
import AdminAnnouncements from "./AdminAnnouncements";
import AdminLectures from "./AdminLectures";
import AdminHomeworks from "./AdminHomeworks";
import AdminMentorGroups from "./AdminMentorGroups";
import AdminHome from "./AdminHome";

{/* Imports the Student Pages */}
import StudentLayout from "./StudentLayout";
import StudentAnnouncements from "./StudentAnnouncements";
import StudentLectures from "./StudentLectures";
import StudentHomeworks from "./StudentHomeworks";
import StudentMentorGroups from "./StudentMentorGroups";
import StudentHome from "./StudentHome";
import LoginSignUp from "./Login";

export default function RoutePaths() {
  return (
    <Router >
      <Routes>
        <Route path= "/" element ={<LoginSignUp/>}>
        </Route>

        {/* Routes students to the Student Home */}
        <Route path= "/student/*" element ={<StudentLayout/>}>
          <Route index element={<StudentHome />} />
          <Route path="announcements" element={<StudentAnnouncements />} />
          <Route path="lectures" element={<StudentLectures />} />
          <Route path="homeworks" element={<StudentHomeworks />} />
          <Route path="mentorgroups" element={<StudentMentorGroups />} />
        </Route>

        {/* Routes authenticated Admin to the Admin Home page*/}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="announcements" element={<AdminAnnouncements />} />
          <Route path="lectures" element={<AdminLectures />} />
          <Route path="homeworks" element={<AdminHomeworks />} />
          <Route path="mentorgroups" element={<AdminMentorGroups />} />
        </Route>
      </Routes>
    </Router>
  );
}


