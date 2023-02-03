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
            className="block cursor-pointer select-none rounded-xl border-4 border-transparent bg-zinc-700/70 p-2 text-center font-semibold hover:bg-zinc-700/40 active:bg-zinc-700/20 peer-checked:border-red-500 peer-checked:bg-zinc-700/70"
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
            className="block cursor-pointer select-none rounded-xl border-4 border-transparent bg-zinc-700/70 p-2 text-center font-semibold hover:bg-zinc-700/40 active:bg-zinc-700/20 peer-checked:border-orange-500 peer-checked:bg-zinc-700/70"
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
            className="block cursor-pointer select-none rounded-xl border-4 border-transparent bg-zinc-700/70 p-2 text-center font-semibold hover:bg-zinc-700/40 active:bg-zinc-700/20 peer-checked:border-yellow-500 peer-checked:bg-zinc-700/70"
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
            className="block cursor-pointer select-none rounded-xl border-4 border-transparent bg-zinc-700/70 p-2 text-center font-semibold hover:bg-zinc-700/40 active:bg-zinc-700/20 peer-checked:border-lime-500 peer-checked:bg-zinc-700/70"
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
            className="block cursor-pointer select-none rounded-xl border-4 border-transparent bg-zinc-700/70 p-2 text-center font-semibold hover:bg-zinc-700/40 active:bg-zinc-700/20 peer-checked:border-green-500 peer-checked:bg-zinc-700/70"
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
