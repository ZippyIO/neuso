import EntryForm from '../../components/EntryForm';
import MoodChart from '../../components/MoodChart';
import Navbar from '../../components/Navbar';

const Dashboard = () => (
    <div className="flex flex-col">
        <Navbar />
        <MoodChart />
        <EntryForm />
    </div>
);

export default Dashboard;
