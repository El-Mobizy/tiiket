import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import './scorllarea-test.css';

export interface ScorllareaTestProps {
    className?: string;
    children?: React.ReactNode;
}

export const ScrollareaTest = ({
                                   children = 'ScorllareaTest',
                               }: ScorllareaTestProps) => {
    const TAGS = Array.from({ length: 50 }).map(
        (_, i, a) => `v1.2.0-beta.${a.length - i}`,
    );
    return (
        <ScrollAreaPrimitive.Root className='styled-scroll-area'>
            <ScrollAreaPrimitive.Viewport className='styled-viewport'>
                <div style={{ padding: '15px 20px' }}>
                    <div className=''>Tags</div>
                        {TAGS.map((tag) => (
                            <div className='Tag' key={tag}>
                                {tag}
                            </div>
                        ))}
                </div>
            </ScrollAreaPrimitive.Viewport>
            <ScrollAreaPrimitive.Scrollbar className='styled-scrollbar' orientation='vertical'>
                <ScrollAreaPrimitive.Thumb className='styled-thumb' />
            </ScrollAreaPrimitive.Scrollbar>
            <ScrollAreaPrimitive.Scrollbar className='styled-scrollbar' orientation='horizontal'>
                <ScrollAreaPrimitive.Thumb className='styled-thumb' />
            </ScrollAreaPrimitive.Scrollbar>
            <ScrollAreaPrimitive.Corner className='styled-corner' />
        </ScrollAreaPrimitive.Root>
    );
};
export default ScrollareaTest;