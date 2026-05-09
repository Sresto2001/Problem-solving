function reverseString(text: string): string {
    let reversed = '';

    for (let i = text.length - 1; i >= 0; i--) {
        reversed= reversed + text[i];
    }

    return reversed;
}

reverseString("typescript");