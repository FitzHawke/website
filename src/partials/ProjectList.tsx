import type { FC, ReactNode } from 'react';

import { GradientText } from '@/components/GradientText';
import { Section } from '@/components/Section';

const ProjectList: FC<{ children?: ReactNode }> = ({ children }) => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    {children}
  </Section>
);

export { ProjectList };
