import dayjs from 'dayjs';
import { addDoc, collection, doc, Timestamp } from 'firebase/firestore';
import { useContext, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';
import { AuthContext } from '../context/AuthContext';
import { firestore } from '../utils/firebase';
import {
    MoodRadioBad,
    MoodRadioExcellent,
    MoodRadioGood,
    MoodRadioHorrible,
    MoodRadioOkay,
} from './MoodRadios';

const EntryForm = () => {
    const userAuth = useContext(AuthContext);
    const [mood, setMood] = useState<number>();
    const [date, setDate] = useState<Date>(new Date());
    const [datePicker, setDatePicker] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date(),
    });

    const handleFormSubmit = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        const userDoc = doc(firestore, 'users', userAuth?.uid as string);
        await addDoc(collection(userDoc, 'mood'), {
            date: Timestamp.fromDate(date),
            mood,
        });
    };

    const handleMoodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMood(Number(e.target.value));
    };

    const handleDateChange = (newDate: DateValueType) => {
        setDatePicker(newDate);
        setDate(dayjs(newDate?.startDate).toDate());
    };

    return (
        <form
            action=""
            onSubmit={handleFormSubmit}
            className="m-4 flex  justify-center"
        >
            <div className="flex flex-col gap-2 rounded-lg bg-zinc-800 p-4 text-center">
                <Datepicker
                    value={datePicker}
                    useRange={false}
                    asSingle
                    onChange={handleDateChange}
                />
                <p className="text-3xl font-extrabold text-blue-500">
                    {date.toLocaleDateString()}
                </p>
                <h3 className="text-2xl font-semibold text-zinc-200">
                    How was your day today?
                </h3>
                <div
                    className="grid grid-cols-5 justify-center gap-2 rounded-xl bg-zinc-800 p-2"
                    onChange={handleMoodChange}
                >
                    <MoodRadioHorrible />
                    <MoodRadioBad />
                    <MoodRadioOkay />
                    <MoodRadioGood />
                    <MoodRadioExcellent />
                </div>
                <button
                    type="submit"
                    className="rounded-md bg-emerald-500 py-2 px-8 hover:bg-emerald-600 active:bg-emerald-700"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default EntryForm;
