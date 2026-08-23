import { Routes, Route } from 'react-router';
import { Container, PublicLayout, ProtectedLayout } from './components/index.js';
import { Register, Login, Home } from './pages/PageExports.js';

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
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
