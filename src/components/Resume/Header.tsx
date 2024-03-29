import * as React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { menus } from './menu';
import { useDataContext } from '../DataContextProvider';

const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY;

export const Header = () => {
    const [open, setOpen] = React.useState(false);
    const data = useDataContext();

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        const id = event.currentTarget.hash;

        const el = document.querySelector(id);

        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });

            if (clarityProjectId && typeof clarityProjectId === 'string') {
                import('clarity-js')
                    .then((m) => m.clarity.event('click_menu', id))
                    .catch((err) => {
                        console.warn('Could not send data to clarity', err);
                    });
            }
        }

        const menuEl = document.querySelector('.modile-menu');
        if (menuEl) {
            setOpen((_) => false);
        }
    };

    const handleClickMenu = () => {
        const el = document.querySelector('.modile-menu');
        if (el) {
            setOpen((prevState) => !prevState);
        }
    };

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
        event.persist();
        event.stopPropagation();

        const el = document.querySelector('.modile-menu');
        if (el) {
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

    if (!data) {
        return (
            <div key="header-title-skelecton" className="w-32 border-1 rounded-md">
                <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
                    <div className="flex-1 flex flex-col space-y-3">
                        <div className="w-full bg-gray-300 h-6 rounded-md "></div>
                    </div>
                </div>
            </div>
        );
    }

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
                                <div className="relative px-4">
                                    <a href={`#${menus.home.id}`} onClick={handleClick}>
                                        <h1>{data?.site?.title}</h1>
                                    </a>
                                    <span
                                        className={`${
                                            data.origin === 'online' ? 'bg-green-400' : 'bg-red-400'
                                        } top-0 right-0 absolute w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full`}
                                        title={`data came from ${data.origin}`}
                                    ></span>
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
