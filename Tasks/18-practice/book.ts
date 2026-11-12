
interface Book {
    title: string;
    pages: number;
    note?: string;
}

const sea: Book = {
    title: "The Sea",
    pages: 210
};

const road: Book = {
    title: "The Road",
    pages: 180,
    note: "used"
};

const shelf: Book[] = [sea, road];

function readingMinutes(pages: number): number {
    return pages;
}

const minutes = readingMinutes(210);
