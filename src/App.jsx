import './App.css';
import { HashRouter, NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  return <p>這是首頁</p>;
}

const Logout = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate('/login', { 
      state: {
        message: '登出成功'
      },
      replace: true
  });
  };

  return (
    <button type="button" onClick={logout}>
      登出
    </button>
  );
};

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout />
    </>
  );
};
const Login = () => {
  const message = useLocation().state?.message;
  console.log(message);
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="*" element={
            <main>
              <p>404 找不到頁面！</p>
            </main>
          }></Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
