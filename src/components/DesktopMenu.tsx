interface MenuItem {
    href?: string;
    text: string;
}

interface DesktopMenuProps {
    items: MenuItem[];
}

export default function DesktopMenu({ items }: DesktopMenuProps) {
    return (
        <ul className="hidden md:flex gap-6">
            {items.map((item) => (
                <li
                    key={item.text}
                >
                    <a
                        href={item.href}
                        className="text-[#64638f] hover:text-[#9795cf] text-base md:text-lg"
                    >
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    );
}
