export const truncateText = (inputText: string, maxLength: number): string => {
    if (inputText.length <= maxLength) {
        return inputText;
    }
    return `${inputText.slice(0, maxLength)}...`;
};

export const getTruncatedAndFirstLetter = (text: string, maxLength: number): [string, string] => {
    const truncatedText = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    const firstLetter = text.charAt(0);
    return [truncatedText, firstLetter];
};