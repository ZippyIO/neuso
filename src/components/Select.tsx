import {
    CheckCircledIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    PlusCircledIcon,
} from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';
import { clsx } from 'clsx';

type SelectProps = {
    values: Array<string>;
    selectedValues: Array<string>;
    handleValueChange: (val: string) => void;
};

const Select = ({ values, selectedValues, handleValueChange }: SelectProps) => (
    <SelectPrimitive.Root onValueChange={handleValueChange}>
        <SelectPrimitive.Trigger asChild aria-label="Tags">
            <button
                type="button"
                className={clsx(
                    'inline-flex select-none items-center rounded-md px-4 py-2 text-sm font-medium',
                    'dark:bg-dark-900/60 dark:hover:bg-dark-900 bg-white  hover:bg-gray-50',
                    'hover:bg-gray-50',
                    'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
                    // Register all radix states
                    'group',
                    'radix-state-open:bg-gray-50 dark:radix-state-open:bg-dark-900',
                    'radix-state-on:bg-gray-50 dark:radix-state-on:bg-zinc-900',
                    'radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50',
                )}
            >
                <SelectPrimitive.Value asChild>
                    <span className="font-semibold text-zinc-400">
                        Select Tags
                    </span>
                </SelectPrimitive.Value>
                <SelectPrimitive.Icon>
                    <ChevronDownIcon color="#a1a1aa" />
                </SelectPrimitive.Icon>
            </button>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Content position="popper">
            <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
                <ChevronUpIcon />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="dark:bg-dark-400 border-dark-600 rounded-lg border-4 bg-white p-2 shadow-lg shadow-black/20">
                <SelectPrimitive.Group>
                    {values.map((tag) => {
                        if (
                            tag ===
                                selectedValues.find(
                                    (element) => element === tag,
                                ) ||
                            tag === 'Select Tags'
                        )
                            return (
                                <SelectPrimitive.Item
                                    disabled
                                    key={tag}
                                    value={tag.toLowerCase()}
                                    className={clsx(
                                        'relative flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium text-gray-400',
                                        'radix-disabled:text-blue-700',
                                        'select-none focus:outline-none',
                                    )}
                                >
                                    <CheckCircledIcon color="rgb(22, 163, 74)" />
                                    <SelectPrimitive.ItemText asChild>
                                        <span className="text-green-600">
                                            {tag}
                                        </span>
                                    </SelectPrimitive.ItemText>
                                </SelectPrimitive.Item>
                            );
                        return (
                            <SelectPrimitive.Item
                                key={tag}
                                value={tag.toLowerCase()}
                                className={clsx(
                                    'dark:focus:bg-dark-600 relative flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium focus:bg-gray-100',
                                    'radix-disabled:opacity-50',
                                    'select-none focus:outline-none',
                                )}
                            >
                                <PlusCircledIcon color="rgb(209, 213, 219)" />
                                <SelectPrimitive.ItemText asChild>
                                    <span className="text-gray-300">{tag}</span>
                                </SelectPrimitive.ItemText>
                            </SelectPrimitive.Item>
                        );
                    })}
                </SelectPrimitive.Group>
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
                <ChevronDownIcon />
            </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
    </SelectPrimitive.Root>
);

export default Select;
