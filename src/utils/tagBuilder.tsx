import type { ReactNode } from 'react';

import { ColorTags, Tags } from '@/components/Tags';
import { tagColour } from '@/data/tagColours';

export default function buildTags(tag: string): ReactNode {
  if (tagColour[tag as keyof object] !== undefined) {
    const colourSet: string = tagColour[tag as keyof object]!.toUpperCase();
    return <Tags color={ColorTags[colourSet as keyof object]}>{tag}</Tags>;
  }
  return <Tags color={ColorTags.NEUTRAL}>{tag}</Tags>;
}
