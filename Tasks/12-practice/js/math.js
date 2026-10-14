export function multiplyAll(...numbers) {
    if (numbers.length === 0) return 1;
    return numbers.reduce((acc, curr) => acc * curr, 1);
}

