import { signOut } from 'firebase/auth';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import { RiSettings5Line, RiLogoutCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../utils/firebase';
import { useAuth } from '../context/AuthContext';

const Dropdown = () => {
    const { user } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <DropdownMenuPrimitive.Root open={dropdownOpen}>
                <DropdownMenuPrimitive.Trigger asChild>
                    <button
                        onClick={() => setDropdownOpen(true)}
                        type="button"
                        className={clsx(
                            'inline-flex select-none items-center justify-center rounded-md p-2 text-sm font-medium',
                            'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900',
                            'hover:bg-gray-50',
                            'focus:outline-none',
                            'group',
                            'radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900',
                            'radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900',
                            'radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50',
                        )}
                    >
                        <RiSettings5Line />
                    </button>
                </DropdownMenuPrimitive.Trigger>
                <DropdownMenuPrimitive.Portal>
                    <DropdownMenuPrimitive.Content
                        onPointerDownOutside={() => setDropdownOpen(false)}
                        onEscapeKeyDown={() => setDropdownOpen(false)}
                        align="end"
                        sideOffset={5}
                        className={clsx(
                            'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
                            'w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56',
                            'bg-white dark:bg-gray-800',
                        )}
                    >
                        <DropdownMenuPrimitive.Item
                            className={clsx(
                                'flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none',
                                'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900',
                            )}
                            disabled
                        >
                            <span className="font-montserrat flex-grow text-sm font-semibold text-gray-200">
                                {user?.displayName}
                            </span>
                        </DropdownMenuPrimitive.Item>
                        <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
                        <DropdownMenuPrimitive.Group
                            onClick={() => setDropdownOpen(false)}
                        >
                            <DropdownMenuPrimitive.Item
                                className={clsx(
                                    'flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none',
                                    'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900',
                                )}
                            >
                                <Link
                                    to="/dashboard"
                                    className="font-montserrat flex-grow text-xs font-medium text-gray-200"
                                >
                                    Dashboard
                                </Link>
                            </DropdownMenuPrimitive.Item>
                            <DropdownMenuPrimitive.Item
                                className={clsx(
                                    'flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none',
                                    'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900',
                                )}
                            >
                                <Link
                                    to="/settings"
                                    className="font-montserrat flex-grow text-xs font-medium text-gray-200"
                                >
                                    Settings
                                </Link>
                            </DropdownMenuPrimitive.Item>
                            <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
                            <DropdownMenuPrimitive.Item
                                className={clsx(
                                    'flex cursor-default select-none items-center rounded-md text-xs outline-none',
                                    'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900',
                                )}
                            >
                                <button
                                    onClick={() => signOut(auth)}
                                    className="flex-grow p-2"
                                    type="button"
                                >
                                    <div className="flex items-center text-inherit">
                                        <span className="mr-2">
                                            <RiLogoutCircleLine />
                                        </span>

                                        <span className="font-montserrat text-xs font-medium text-gray-200">
                                            Sign out
                                        </span>
                                    </div>
                                </button>
                            </DropdownMenuPrimitive.Item>
                        </DropdownMenuPrimitive.Group>
                    </DropdownMenuPrimitive.Content>
                </DropdownMenuPrimitive.Portal>
            </DropdownMenuPrimitive.Root>
        </div>
    );
};
export default Dropdown;
