import * as React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Data } from '../../interfaces';
import { menus } from './menu';

interface HeaderProps {
    data?: Data;
}

export const Header = ({ data }: HeaderProps) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        const id = event.currentTarget.hash;

        const el = document.querySelector(id);

        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }

        const menuEl = document.querySelector('.modile-menu');
        if (menuEl) {
            // menuEl.classList.toggle('hidden');
            setOpen((_) => false);
        }
    };

    const handleClickMenu = () => {
        const el = document.querySelector('.modile-menu');
        if (el) {
            // el.classList.toggle('hidden');
            setOpen((prevState) => !prevState);
        }
    };

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
        event.persist();
        event.stopPropagation();

        const el = document.querySelector('.modile-menu');
        if (el) {
            // el.classList.add('hidden');
            setOpen((_) => false);
        }
    };

    const handleClickBackground = () => {
        setOpen((_) => false);
    };

    React.useEffect(() => {
        const el = document.querySelector('.modile-menu');
        if (el) {
            if (open) {
                el.classList.remove('hidden');
                document.body.classList.add('overflow-y-hidden');
            } else {
                el.classList.add('hidden');
                document.body.classList.remove('overflow-y-hidden');
            }
        }
    }, [open]);

    React.useEffect(() => {
        const handleChangeMedia = (event: MediaQueryListEvent) => {
            if (event.matches) {
                setOpen((_) => false);
            }
        };
        window.matchMedia('(min-width: 768px)').addEventListener('change', handleChangeMedia);

        return () => {
            window
                .matchMedia('(min-width: 768px)')
                .removeEventListener('change', handleChangeMedia);
        };
    }, []);

    return (
        <React.Fragment>
            {open && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-20"
                    onClick={handleClickBackground}
                ></div>
            )}
            <header className="fixed print:static bg-slate-50 dark:bg-slate-900 print:bg-white w-full md:shadow-lg z-20">
                <nav className="p-6">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex justify-between">
                            <div className="flex space-x-7 flex-1 justify-center">
                                <div>
                                    <h1>{data?.site?.title}</h1>
                                </div>

                                <div className="hidden md:flex items-center space-x-1 print:hidden">
                                    {/* Primary navbar items */}
                                    <ul className="flex md:flex-row sm:flex-col gap-3">
                                        {Object.values(menus)
                                            .filter((menu) => !menu.isHidden)
                                            .map((menu) => (
                                                <li key={menu.id}>
                                                    <a href={`#${menu.id}`} onClick={handleClick}>
                                                        {menu.title}
                                                    </a>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>

                            {/* mobile */}
                            <div className="md:hidden flex items-center print:hidden">
                                <button className="" onClick={handleClickMenu} title="toggle menu">
                                    {open ? <FaWindowClose /> : <GiHamburgerMenu />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* mobile menu items */}
                    <div className="hidden modile-menu print:hidden" onBlur={handleBlur}>
                        <ul className="flex flex-col gap-3 justify-center items-end px-6 mt-6">
                            {Object.values(menus)
                                .filter((menu) => !menu.isHidden)
                                .map((menu) => (
                                    <li key={menu.id} className="p-1">
                                        <a href={`#${menu.id}`} onClick={handleClick}>
                                            {menu.title}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    );
};
