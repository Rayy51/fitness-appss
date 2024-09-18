import { BrowserRouter, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage"
import Goals from "./pages/Goals";
import WarmUp from "./pages/WarmUp";
import Dashboard from "./pages/Dashboard";
import { AuthContext } from "./AuthContext"
import RequireAuth from "./components/RequireAuth";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { TodoContext } from "./contexts/TodoContext";
import AddTodo from "./pages/AddTodo";
import { useContext } from 'react';
import EditTodo from "./pages/EditTodo";
import './App.css';


function Layout() {
    const navigate = useNavigate()
    const { setToken } = useContext(AuthContext)

    const handleLogout = () => {
        setToken(null);
        navigate("/login")
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Workout Plans</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/add">Add Your Workout</Nav.Link>
                        <Nav.Link href="/warmup">Warm Up Exercise </Nav.Link>
                        <Nav.Link href="/goals">Set Goals</Nav.Link>
                    </Nav>
                    <div className="ml- auto">
                        <Button variant="danger" onClick={handleLogout} >
                            Logout
                        </Button>
                    </div>
                </Container>
            </Navbar>
            <Outlet />

        </>
    )
}


export default function App() {
    const [token, setToken] = useLocalStorage("token", null);
    const [todos, setTodos] = useLocalStorage("todos", []);
    return (
        <AuthContext.Provider value={{ token, setToken }}>
            <TodoContext.Provider value={{ todos, setTodos }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<RequireAuth><Home /></RequireAuth>} />
                            <Route path="/add" element={<RequireAuth><AddTodo /></RequireAuth>} />
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<ErrorPage />} />
                            <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
                            <Route path="/goals" element={<RequireAuth><Goals /></RequireAuth>} />
                            <Route path="/warmup" element={<RequireAuth><WarmUp /></RequireAuth>} />
                            <Route path="todo/:id" element={<EditTodo />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </TodoContext.Provider>
        </AuthContext.Provider>
    )
}

