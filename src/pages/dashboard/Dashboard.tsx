import EntryCards from '../../components/EntryCards';
import EntryForm from '../../components/EntryForm';
import MoodChart from '../../components/MoodChart';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => (
    <div className="grid h-screen grid-cols-[1fr,50vw,2fr] grid-rows-[48px,1fr]">
        <div className="col-span-3">
            <Navbar />
        </div>
        <div className="bg-dark-800 row-start-2">
            <Sidebar />
        </div>
        <div className="col-start-2 row-start-2">
            <MoodChart />

            <EntryCards />
        </div>
        <div className="bg-dark-800 col-start-3 row-start-2">
            <EntryForm />
        </div>
    </div>
);

export default Dashboard;
