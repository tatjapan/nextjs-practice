// components/Header.tsx
'use client';

import Link from 'next/link';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'プロフィール', href: '/profile' },
    { name: '作品', href: '/works' },
    { name: 'お問い合わせ', href: '/contact' },
];

export default function Header() {
    return (
        <Disclosure as="nav" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center space-x-4">
                                <Link href="/" className="text-xl font-bold">
                                    あいがけ
                                </Link>
                            </div>

                            {/* Desktop menu */}
                            <div className="hidden sm:flex space-x-4 items-center">
                                {navLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-700 hover:text-blue-600 transition"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile button */}
                            <div className="sm:hidden flex items-center">
                                <DisclosureButton className="text-gray-700 hover:text-blue-600 focus:outline-none">
                                    {open ? (
                                        <XMarkIcon className="h-6 w-6" />
                                    ) : (
                                        <Bars3Icon className="h-6 w-6" />
                                    )}
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <DisclosurePanel className="sm:hidden px-4 pt-2 pb-4 space-y-1">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-gray-700 hover:text-blue-600"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
