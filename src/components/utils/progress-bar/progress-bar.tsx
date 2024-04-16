import './progress-bar.css';
import { useState, useEffect } from 'react';
import * as Progress from '@radix-ui/react-progress';

export interface ProgressBarProps {
    className?: string;
    children?: React.ReactNode;
    progressNum?: string;
    progressColor?: string;
}


export const ProgressBar = ({
                                progressColor = 'og_blue',
                                progressNum = '66',
                            }: ProgressBarProps) => {
    const [progress, setProgress] = useState(5);
    useEffect(() => {
        const timer = setTimeout(() => setProgress(parseInt(progressNum)), 500);
        return () => clearTimeout(timer);
    }, []);
    return (
        <Progress.Root className="relative overflow-hidden bg-og_blue_2 rounded-full h-6 transform mb-3 w-56" value={progress}>
            <Progress.Indicator
                className={`bg-${progressColor} h-full w-full transition-transform duration-500`}
                style={{ transform: `translateX(-${100 - progress}%)` }}
            />
            <div className={`absolute inset-y-0 right-0 flex items-center pr-2 text-sm text-gray-600`}>{progress}%</div>
        </Progress.Root>
    );
};
