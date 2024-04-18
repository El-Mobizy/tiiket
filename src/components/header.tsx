import './header.css';
import { InputGroup } from './utils/input-group/input-group';
import { GoBell, GoQuestion, GoSun } from 'react-icons/go';
import { RxTextAlignLeft } from 'react-icons/rx';
import LogoPng0 from '../assets/images/logo.png';
import { HeaderDropdown } from './utils/header-dropdown/header-dropdown';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [shadowClass, setShadowClass] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setShadowClass('shadow-lg');
            } else {
                setShadowClass('');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`p-5 w-full flex justify-between items-center fixed z-40 top-0 bg-white ${shadowClass}`}>
            <button className='md:hidden text-3xl text-gray-400'><RxTextAlignLeft /></button>
            <img src={LogoPng0} alt='app-logo' height='' width='95' className='mr-4' />
            <InputGroup />
            <div className='hidden md:flex gap-3 text-2xl w-24 mx-4 text-gray-500'>
                <GoBell />
                <GoQuestion />
                <GoSun />
            </div>
            <HeaderDropdown />
        </nav>
    );
};
