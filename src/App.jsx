import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";
import UserPicker from "./Component/Users/UserPicker.jsx";
import BookingsPage from "./Component/Bookings/BookingsPage.jsx";
import UsersPage from "./Component/Users/UsersPage.jsx";

function BookablesPage() {
  return null;
}

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/bookings" className="btn btn-header">
                    <FaCalendarAlt/>
                    <span>예약하기</span>
                  </Link>
                </li>
                <li>
                  <Link to="/bookables" className="btn btn-header">
                    <FaDoorOpen/>
                    <span>예약자원</span>
                  </Link>
                </li>
                <li>
                  <Link to="/users" className="btn btn-header">
                    <FaUsers/>
                    <span>사용자</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <UserPicker/>
          </header>
          <Routes>
            <Route path="/bookings" element={<BookingsPage/>}/>
            <Route path="/bookables" element={<BookablesPage/>}/>
            <Route path="/users" element={<UsersPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      /* 사용자 선택한 메뉴 항목에 따라 화면에 보이는 UI 를 결정한다. */
  );
}

export default App;
