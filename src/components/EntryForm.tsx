import dayjs from 'dayjs';
import { addDoc, collection, doc, Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';
import { useAuth } from '../context/AuthContext';
import { firestore } from '../utils/firebase';
import {
    MoodRadioBad,
    MoodRadioExcellent,
    MoodRadioGood,
    MoodRadioHorrible,
    MoodRadioOkay,
} from './MoodRadios';
import Select from './Select';

const EntryForm = () => {
    const { user } = useAuth();
    const [tags, setTags] = useState([
        'home',
        'work',
        'busy',
        'sick',
        'exercise',
    ]);
    const [selectedTags, setSelectedTags] = useState<Array<string>>([]);
    const [date, setDate] = useState<Date>(new Date());
    const [datePicker, setDatePicker] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date(),
    });
    const [mood, setMood] = useState<number>();

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { entrytitle, entrydescription } = e.target as HTMLFormElement;
        const userDoc = doc(firestore, 'users', user?.uid as string);
        await addDoc(collection(userDoc, 'mood'), {
            date: Timestamp.fromDate(date),
            tags: selectedTags,
            mood,
            title: entrytitle.value,
            description: entrydescription.value,
        });
    };

    const handleMoodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMood(Number(e.target.value));
    };

    const handleDateChange = (newDate: DateValueType) => {
        setDatePicker(newDate);
        setDate(dayjs(newDate?.startDate).toDate());
    };

    const handleSelectTag = (value: string) => {
        setSelectedTags((prevState) => [...prevState, value]);
    };

    return (
        <form
            action=""
            onSubmit={handleFormSubmit}
            className="m-4 flex  justify-center"
        >
            <div className="flex flex-col gap-2 rounded-lg bg-zinc-800 p-4 text-center">
                <Datepicker
                    inputClassName="dark:bg-zinc-900/40"
                    toggleClassName="dark:bg-emerald-600 rounded-md"
                    primaryColor="emerald"
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
                    className="grid grid-cols-5 justify-center gap-2 rounded-xl bg-zinc-800 p-2 text-center"
                    onChange={handleMoodChange}
                >
                    <MoodRadioHorrible />
                    <MoodRadioBad />
                    <MoodRadioOkay />
                    <MoodRadioGood />
                    <MoodRadioExcellent />
                </div>
                <label htmlFor="entrytitle" className="flex flex-col">
                    <span className=" font-semibold text-zinc-200">Title</span>
                    <input
                        type="text"
                        name="entrytitle"
                        id="entrytitle"
                        className="rounded-md bg-zinc-900/40 p-1.5"
                    />
                </label>
                <label htmlFor="entrydescription" className="flex flex-col">
                    <span className="font-semibold text-zinc-200">
                        Description
                    </span>
                    <textarea
                        name="entrydescription"
                        id="entrydescription"
                        className="rounded-md bg-zinc-900/40 p-1"
                    />
                </label>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-center gap-2">
                        {selectedTags.map((tag) => (
                            <div
                                key={tag}
                                className="w-fit rounded-md bg-blue-500 px-1.5 py-0 text-sm font-medium text-zinc-100"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div>
                        <Select
                            values={tags}
                            selectedValues={selectedTags}
                            handleValueChange={handleSelectTag}
                        />
                    </div>
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
