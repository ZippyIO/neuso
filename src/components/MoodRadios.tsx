import {
    RiEmotionSadFill,
    RiEmotionUnhappyFill,
    RiEmotionNormalFill,
    RiEmotionHappyFill,
    RiEmotionLaughFill,
} from 'react-icons/ri';

const MoodRadioHorrible = () => (
    <div className="flex justify-center">
        <input
            type="radio"
            name="overall-day"
            id="overall-1"
            className="peer hidden"
            value="1"
        />
        <label
            htmlFor="overall-1"
            className="bg-dark-200 hover:bg-dark-400 active:bg-dark-400 peer-checked:bg-dark-400 block cursor-pointer select-none rounded-xl border-4 border-transparent p-2 text-center font-semibold peer-checked:border-red-500"
        >
            <RiEmotionSadFill size="50px" fill="#ef4444" />
        </label>
    </div>
);

const MoodRadioBad = () => (
    <div className="flex items-center justify-center">
        <input
            type="radio"
            name="overall-day"
            id="overall-2"
            className="peer hidden"
            value="2"
        />
        <label
            htmlFor="overall-2"
            className="bg-dark-200 hover:bg-dark-400 active:bg-dark-400 peer-checked:bg-dark-400 block cursor-pointer select-none rounded-xl border-4 border-transparent p-2 text-center font-semibold peer-checked:border-orange-500"
        >
            <RiEmotionUnhappyFill size="50px" fill="#f97316" />
        </label>
    </div>
);

const MoodRadioOkay = () => (
    <div className="flex items-center justify-center">
        <input
            type="radio"
            name="overall-day"
            id="overall-3"
            className="peer hidden"
            value="3"
        />
        <label
            htmlFor="overall-3"
            className="bg-dark-200 hover:bg-dark-400 active:bg-dark-400 peer-checked:bg-dark-400 block cursor-pointer select-none rounded-xl border-4 border-transparent p-2 text-center font-semibold peer-checked:border-yellow-500"
        >
            <RiEmotionNormalFill size="50px" fill="#eab308" />
        </label>
    </div>
);

const MoodRadioGood = () => (
    <div className="flex justify-center">
        <input
            type="radio"
            name="overall-day"
            id="overall-4"
            className="peer hidden"
            value="4"
        />
        <label
            htmlFor="overall-4"
            className="bg-dark-200 hover:bg-dark-400 active:bg-dark-400 peer-checked:bg-dark-400 block cursor-pointer select-none rounded-xl border-4 border-transparent p-2 text-center font-semibold peer-checked:border-lime-500"
        >
            <RiEmotionHappyFill size="50px" fill="#84cc16" />
        </label>
    </div>
);

const MoodRadioExcellent = () => (
    <div className="flex justify-center">
        <input
            type="radio"
            name="overall-day"
            id="overall-5"
            className="peer hidden"
            value="5"
        />
        <label
            htmlFor="overall-5"
            className="bg-dark-200 hover:bg-dark-400 active:bg-dark-400 peer-checked:bg-dark-400 block cursor-pointer select-none rounded-xl border-4 border-transparent p-2 text-center font-semibold peer-checked:border-green-500"
        >
            <RiEmotionLaughFill size="50px" fill="#22c55e" />
        </label>
    </div>
);

export {
    MoodRadioHorrible,
    MoodRadioBad,
    MoodRadioOkay,
    MoodRadioGood,
    MoodRadioExcellent,
};
