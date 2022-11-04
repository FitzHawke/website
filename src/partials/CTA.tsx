import { GradientText } from '@/components/react/GradientText';
import { Link } from '@/components/react/Link';
import { Links } from '@/components/react/Links';
import { Section } from '@/components/react/Section';

const CTA = () => (
  <Section>
    <Links
      title={
        <>
          <GradientText>Connect</GradientText> with me!
        </>
      }
      description="I am currently looking for full-time remote or hybrid roles. If the right opportunity presents itself, I am willing to relocate. If you would like to work with me or have any feedback on my projects I'd love to hear from you!"
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
