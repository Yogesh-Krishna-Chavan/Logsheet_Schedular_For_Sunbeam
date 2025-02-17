import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UploadCurriculum from './pages/UploadCurriculum';
import UploadSchedule from './pages/UploadSchedule';
import LogsheetEntry from './pages/LogsheetEntry';
import Reports from './pages/Reports';
import { AuthProvider } from './context/AuthContext';
export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/upload-curriculum" element={<UploadCurriculum />} />
                    <Route path="/upload-schedule" element={<UploadSchedule />} />
                    <Route path="/logsheet-entry" element={<LogsheetEntry />} />
                    <Route path="/reports" element={<Reports />} />
                </Routes>
                <Footer />
            </Router>
        </AuthProvider>
    );
}