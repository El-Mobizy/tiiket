import { useCallback, useEffect, useMemo, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export interface StandardSelectProps {
    className?: string;
    placeHolder?: string;
    optionList?: Array<{ text: string; value: string }>;
    children?: React.ReactNode;
    onSelectOption?: (value: string) => void;
}

export const StandardSelect = ({
                                   children = 'StandardSelect',
                                   placeHolder = 'Select an item',
                                   optionList = [],
                                   onSelectOption,
                               }: StandardSelectProps) => {
    const [openSelect, setOpenSelect] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [language, setLanguage] = useState(placeHolder);

    const toggle = useCallback(() => setOpenSelect(prev => !prev), []);

    const setOption = useCallback((value: string) => {
        setSelectedOption(value);
        setLanguage(`Filter by ${value.toLowerCase()} tickets`);
        setOpenSelect(false);
        if (onSelectOption) {
            onSelectOption(value);
        }
    }, [onSelectOption]);

    const memoizedOptionList = useMemo(() => optionList, [optionList]);

    useEffect(() => {
        return () => {
            setOpenSelect(false);
            setLanguage(placeHolder);
        };
    }, [placeHolder]);

    return (
        <div className='relative w-full lg:min-w-48 lg:max-w-56 my-4 lg:my-0' onClick={() => setOpenSelect(false)}>
            <button onClick={(e) => { e.stopPropagation(); toggle(); }} className={`flex w-full items-center justify-between rounded bg-white p-2 ring-1 ring-gray-300 ${openSelect && 'ring-blue-600'}`}>
                <span>{language}</span>
                <FiChevronDown />
            </button>

            {openSelect && (
                <ul className='z-2 absolute mt-1 w-full rounded bg-gray-50 ring-1 ring-gray-300'>
                    {memoizedOptionList.map((option, index) => (
                        <li key={index} className='cursor-pointer select-none p-2 hover:bg-gray-200' onClick={() => setOption(option.value)}>
                            {option.text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default StandardSelect;