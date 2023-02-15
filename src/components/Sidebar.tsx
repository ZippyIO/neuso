const Sidebar = () => (
    <div className="bg-dark-800 p-2">
        <h2 className="font-montserrat text-3xl font-bold">Sidebar</h2>
        <p className="text-2xl font-semibold ">Pages</p>
        <ul>
            <li>Dashboard</li>
            <li>Tracker</li>
            <li>Todo</li>
        </ul>
        <div className="rounded-md bg-green-600 p-2">
            <h3 className="font-montserrat text-xl font-semibold">Todos</h3>
        </div>
    </div>
);

export default Sidebar;
