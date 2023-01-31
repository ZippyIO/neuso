import { signOut } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import EntryForm from './components/EntryForm';
import { AuthContext } from './context/AuthContext';
import Login from './pages/login/Login';
import { auth } from './utils/firebase';

const App = () => {
    const userAuth = useContext(AuthContext);
    const [user, setUser] = useState<true | false>(false);

    useEffect(() => {
        setUser(!!userAuth);
    }, [userAuth]);

    return (
        <div className="App">
            {!user && <Login />}
            {user && (
                <div>
                    <EntryForm />
                    <button
                        onClick={() => signOut(auth)}
                        className="p-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-md"
                        type="button"
                    >
                        Sign out
                    </button>
                </div>
            )}
        </div>
    );
};

export default App;
