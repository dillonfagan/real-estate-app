interface PluralizeOptions {
  word: string;
  plural?: string;
  count: number;
}

export function pluralize({ word, plural, count }: PluralizeOptions): string {
  if (count === 1) {
    return `${count} ${word}`;
  } else {
    return !!plural ? `${count} ${plural}` : `${count} ${word}s`;
  }
}
