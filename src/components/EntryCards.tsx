import {
    collection,
    onSnapshot,
    orderBy,
    query,
    Timestamp,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { firestore } from '../utils/firebase';

type EntryDocs = {
    date: Timestamp;
    tags: Array<string>;
    mood: number;
    title: string;
    description: string;
};

const EntryCards = () => {
    const { user } = useAuth();
    const [entryData, setEntryData] = useState<Array<EntryDocs> | null>(null);

    useEffect(() => {
        function setUserData() {
            if (user) {
                const userCollectionRef = collection(
                    firestore,
                    'users',
                    user?.uid as string,
                    'mood',
                );
                const q = query(userCollectionRef, orderBy('date', 'asc'));
                onSnapshot(q, (querySnapshot) => {
                    const entryDocs: Array<EntryDocs> = [];
                    querySnapshot.forEach((doc) => {
                        entryDocs.push(doc.data() as EntryDocs);
                    });

                    setEntryData(entryDocs);
                });
            }
        }

        setUserData();
        return () => {
            setUserData();
        };
    }, []);

    if (entryData !== null) {
        return (
            <div className="flex flex-col items-center gap-4">
                {entryData.map((entry) => (
                    <div
                        key={entry.date.toDate().toLocaleDateString()}
                        className="bg-dark-800 grid w-1/2 grid-cols-[fit,fit] grid-rows-[fit,1fr,1fr] items-start gap-x-10 gap-y-1 rounded-md p-4 shadow-sm"
                    >
                        <h3 className="font-montserrat col-start-1 text-2xl font-extrabold text-zinc-100">
                            {entry.title}
                        </h3>
                        <p className="col-span-1 col-start-1 row-span-2 row-start-2 text-zinc-200">
                            {entry.description}
                        </p>
                        <p className="col-start-2 justify-self-end text-xl font-extrabold text-zinc-200 opacity-80">
                            {entry.date.toDate().toLocaleDateString()}
                        </p>
                        <div className="col-start-2 row-span-1 row-start-2 flex flex-col items-end gap-1.5 justify-self-end text-right">
                            <p className="font-montserrat text-sm font-semibold text-zinc-300">
                                Mood: {entry.mood}/5
                            </p>
                            {entry.tags.map((tag) => (
                                <div
                                    key={`${entry.date
                                        .toDate()
                                        .toLocaleDateString()}-${tag}`}
                                    className="font-montserrat rounded-md bg-indigo-500 px-1.5 py-0 text-center text-xs font-medium text-zinc-200 opacity-90"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return <p>Loading...</p>;
};
export default EntryCards;
