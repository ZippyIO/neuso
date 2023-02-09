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
                    'bg-white text-gray-700 hover:bg-gray-50 dark:bg-zinc-900/40  dark:hover:bg-zinc-900/70', // dark:text-gray-100
                    'hover:bg-gray-50',
                    'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
                    // Register all radix states
                    'group',
                    'radix-state-open:bg-gray-50 dark:radix-state-open:bg-zinc-900',
                    'radix-state-on:bg-gray-50 dark:radix-state-on:bg-zinc-900',
                    'radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50',
                )}
            >
                <SelectPrimitive.Value>Select Tags</SelectPrimitive.Value>
                <SelectPrimitive.Icon>
                    <ChevronDownIcon />
                </SelectPrimitive.Icon>
            </button>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Content position="popper">
            <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
                <ChevronUpIcon />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="rounded-lg border-4 border-zinc-600/80 bg-white p-2 shadow-lg shadow-black/20 dark:bg-zinc-700">
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
                                        'relative flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium',
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
                                    'relative flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium text-gray-700 focus:bg-gray-100 dark:text-gray-300 dark:focus:bg-gray-900/30',
                                    'radix-disabled:opacity-50',
                                    'select-none focus:outline-none',
                                )}
                            >
                                <PlusCircledIcon />
                                <SelectPrimitive.ItemText>
                                    {tag}
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
