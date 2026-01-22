import { useState } from 'react';

interface MenuItem {
    href?: string;
    text: string;
}

interface MobileMenuProps {
    items: MenuItem[];
}

export default function MobileMenu({ items }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#64638f] p-2 border-2 border-[#64638f] rounded-lg transition-colors duration-300 hover:bg-[#64638f]/5 cursor-pointer"
                aria-label="Menú"
            >
                <div className="relative w-8 h-8">
                    <span className={`absolute left-1/2 top-[30%] -translate-x-1/2 block w-6 h-0.5 bg-current transform transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[0.33rem]' : ''}`}></span>
                    <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`}></span>
                    <span className={`absolute left-1/2 bottom-[30%] -translate-x-1/2 block w-6 h-0.5 bg-current transform transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[0.33rem]' : ''}`}></span>
                </div>
            </button>

            <div className={`fixed inset-x-0 top-[calc(100%+2px)] bg-white border-t-4 border-[#64638f] shadow-lg transform transition-all duration-300 z-50 ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                <ul className="space-y-4 text-center py-4">
                    {items.map((item, index) => (
                        <li
                            key={item.text}
                            className={`transform transition-all duration-300 delay-[${index * 100}ms] ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                        >
                            <a
                                href={item.href}
                                className="inline-block text-[#64638f] hover:text-[#9795cf] py-2 transition-colors duration-300 cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
