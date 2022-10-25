import { GradientText } from '@/components/GradientText';
import { Link } from '@/components/Link';
import { Links } from '@/components/Links';
import { Section } from '@/components/Section';

const CTA = () => (
  <Section>
    <Links
      title={
        <>
          <GradientText>Connect</GradientText> with me!
        </>
      }
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum nam vitae ad voluptates, ducimus aliquid in maxime sunt molestias tempore assumenda incidunt modi eius distinctio ab, voluptate omnis reprehenderit."
      links={
        <>
          <Link
            src="/assets/images/icons8-github-64.png"
            alt="GitHub icon"
            text="GitHub"
            linkTo="https://github.com/FitzHawke"
          />

          <Link
            src="/assets/images/icons8-twitter-64.png"
            alt="Twitter icon"
            text="Twitter"
            linkTo="https://twitter.com/FitzHawke"
          />

          <Link
            src="/assets/images/icons8-linkedin-64.png"
            alt="Linkedin icon"
            text="LinkedIn"
            linkTo="https://www.linkedin.com/in/will-featherston/"
          />

          <Link
            src="/assets/images/icons8-angellist-64.png"
            alt="AngelList icon"
            text="AngelList"
            linkTo="https://angel.co/u/will-featherston"
          />

          <Link
            src="/assets/images/icons8-mail-64.png"
            alt="Email icon"
            text="Email"
            linkTo="mailto:will.featherston@gmail.com"
          />
        </>
      }
    />
  </Section>
);

export { CTA };
