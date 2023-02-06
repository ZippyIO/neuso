import { useLocation, Navigate } from 'react-router-dom';
import EntryForm from '../../components/EntryForm';
import MoodChart from '../../components/MoodChart';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
    const location = useLocation();
    const { loaded } = useAuth();

    if (!loaded) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return (
        <div className="flex flex-col">
            <Navbar />
            <MoodChart />
            <EntryForm />
        </div>
    );
};
export default Dashboard;
