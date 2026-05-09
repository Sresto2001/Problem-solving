function reverse(text: string): string {
    let reverse1 = '';

    for (let i = text.length - 1; i >= 0; i--) {
        reverse1= reverse1 + text[i];
    }

    return reverse1;
}

reverse("typescript");