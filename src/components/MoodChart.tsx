import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useAuth } from '../context/AuthContext';
import { firestore } from '../utils/firebase';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

type MoodDocs = {
    labels: Array<string>;
    datasets: [
        {
            label: string;
            data: Array<number>;
            fill: boolean;
            borderColor: string;
            backgroundColor: string;
            tension: number;
        },
    ];
};

const MoodChart = () => {
    const { user } = useAuth();
    const [moodData, setMoodData] = useState<MoodDocs | null>(null);
    const yAxesLabels = ['Horrible', 'Bad', 'Okay', 'Good', 'Amazing'];
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        color: 'white',
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Mood Chart',
                color: 'white',
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white',
                },
                grid: {
                    color: 'rgba(80,80,80, 0.5)',
                },
            },
            y: {
                ticks: {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    callback: (label) => yAxesLabels[label - 1],
                    color: 'white',
                },

                grid: {
                    color: 'rgba(80,80,80, 0.5)',
                },
            },
        },
    };

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
                    const moodDocs: Array<number> = [];
                    const chartDocs: Array<string> = [];
                    querySnapshot.forEach((docu) => {
                        moodDocs.push(docu.data().mood);
                        chartDocs.push(
                            docu.data().date.toDate().toLocaleDateString(),
                        );
                    });

                    setMoodData({
                        labels: [...chartDocs],
                        datasets: [
                            {
                                label: 'Mood',
                                data: [...moodDocs],
                                fill: false,
                                borderColor: 'rgb(50, 168, 82)',
                                backgroundColor: 'rgb(50, 168, 82)',
                                tension: 0,
                            },
                        ],
                    });
                });
            }
        }

        setUserData();
        return () => {
            setUserData();
        };
    }, []);

    return (
        <div className="m-2 h-96 rounded-md bg-gray-800 p-2">
            {moodData && <Line options={options} data={moodData} />}
        </div>
    );
};

export default MoodChart;
