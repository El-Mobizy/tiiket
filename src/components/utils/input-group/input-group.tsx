import './input-group.css';
import { BiSearch } from 'react-icons/bi';
export interface InputGroupProps {
    className?: string;
    children?: React.ReactNode;
}

export const InputGroup = ({ children = 'InputGroup' }: InputGroupProps) => {
    return (
        <div className="hidden md:flex bg-gray-200 p-2 items-center gap-3 rounded-full w-100 flex-grow mx-8">
            <BiSearch className="text-gray-400" size="23" />
            <input
                className="bg-transparent focus:outline-none px-2 flex-1"
                autoFocus={false}
                type="search"
                placeholder="Search..."
            />
        </div>
    );
};
