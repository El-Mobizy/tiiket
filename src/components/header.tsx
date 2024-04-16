import './header.css';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { InputGroup } from './utils/input-group/input-group';
import { GoQuestion, GoBell, GoSun } from 'react-icons/go';
import { RxTextAlignLeft } from 'react-icons/rx';
import LogoPng0 from '../assets/images/logo.png';
import { HeaderDropdown } from './utils/header-dropdown/header-dropdown';

export const Header = () => {
    return (
        <nav className='p-5 w-100 flex justify-between items-center'>
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
