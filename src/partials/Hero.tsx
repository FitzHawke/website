import { GradientText } from '@/components/GradientText';
import { HeroAvatar } from '@/components/HeroAvatar';
import { HeroSocial } from '@/components/HeroSocial';
import { Section } from '@/components/Section';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hello there, I'm <GradientText>Will Featherston</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a <GradientText>Full-Stack Web Developer</GradientText> based in
          Canada, who is passionate about Web Development, Open-source, Web
          Accessiblity and Design. I enjoy contributing to open source projects
          and creating web applications that are responsive, powerful and
          accessible to all. I sometimes program under the pseudonym{' '}
          <GradientText>FitzHawke</GradientText>.
        </>
      }
      avatar={
        <img
          className="h-40 w-40 rounded-full border-8 border-slate-800 object-cover"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/icons8-github-64.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/icons8-twitter-64.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/icons8-linkedin-64.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/icons8-angellist-64.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
