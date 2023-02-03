import EntryForm from '../../components/EntryForm';
import MoodChart from '../../components/MoodChart';

const Dashboard = () => (
    <div className="flex flex-col">
        <MoodChart />
        <EntryForm />
    </div>
);

export default Dashboard;
