import { useEffect, useState } from 'react';
import {
    MoodRadioBad,
    MoodRadioExcellent,
    MoodRadioGood,
    MoodRadioHorrible,
    MoodRadioOkay,
} from './MoodRadios';

const EntryForm = () => {
    const [date, setDate] = useState('');
    const [mood, setMood] = useState('');

    useEffect(() => {
        const d = new Date();
        setDate(d.toLocaleDateString());
    }, []);

    const handleFormSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        console.log(mood);
    };

    const changeMood = (e) => {
        setMood(e.target.value);
    };

    return (
        <form
            action=""
            onSubmit={handleFormSubmit}
            className="flex justify-center  m-4"
        >
            <div className="flex flex-col text-center gap-2 p-4 rounded-lg bg-zinc-800">
                <p className="text-3xl font-extrabold text-blue-500">{date}</p>
                <h3 className="text-2xl font-semibold text-zinc-200">
                    How was your day today?
                </h3>
                <div
                    className="grid grid-cols-5 gap-2 justify-center rounded-xl bg-zinc-800 p-2"
                    onChange={changeMood}
                >
                    <MoodRadioHorrible />
                    <MoodRadioBad />
                    <MoodRadioOkay />
                    <MoodRadioGood />
                    <MoodRadioExcellent />
                </div>
                <button
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 py-2 px-8 rounded-md"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default EntryForm;
