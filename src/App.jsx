import { Routes, Route } from 'react-router';
import { Container, PublicLayout, ProtectedLayout } from './components/ComponentExports.js';
import { Register, Login, Home, Deshboard, Profile } from './pages/PageExports.js';
import ChangePassword from './pages/ChangePassword.jsx';

function App() {
  return (
    <Container>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        {/*private routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/deshboard" element={<Deshboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
