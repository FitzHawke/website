import type { ReactNode } from 'react';

import { ColorTags, Tags } from '@/components/Tags';

import { tagColour } from './tagColours';

export default function buildTags(tag: string): ReactNode {
  if (tagColour[tag as keyof object] !== undefined) {
    const colourSet: string = tagColour[tag as keyof object]!.toUpperCase();
    return <Tags color={ColorTags[colourSet as keyof object]}>{tag}</Tags>;
  }
  return <Tags color={ColorTags.NEUTRAL}>{tag}</Tags>;
}

// export const tagColour = {
//   JavaScript: 'fuchsia',
//   MongoDB: 'emerald',
//   Express: 'stone',
//   'React.js': 'cyan',
//   'Node.js': 'green',
//   Redux: 'indigo',
//   'Passport.js': 'yellow',
//   EJS: 'rose',
//   CSS: 'red',
//   TypeScript: 'blue',
//   'Astro.js': 'orange',
//   'Tailwind.css': 'teal',
//   SCSS: 'slate',
//   HTML: 'sky',
// };
