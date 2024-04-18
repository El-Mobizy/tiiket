export const truncateText = (inputText: string, maxLength: number): string => {
    if (inputText.length <= maxLength) {
        return inputText;
    }
    return `${inputText.slice(0, maxLength)}...`;
};