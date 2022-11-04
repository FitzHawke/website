import { GradientText } from '@/components/react/GradientText';
import { HeroAvatar } from '@/components/react/HeroAvatar';
import { HeroSocial } from '@/components/react/HeroSocial';
import { Section } from '@/components/react/Section';

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
          className="h-60 w-60 rounded-full border-8 border-slate-800 object-cover"
          src="/assets/images/Photo.png"
          alt="Photo"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/FitzHawke">
            <HeroSocial
              src="/assets/images/icons8-github-64.png"
              alt="GitHub icon"
            />
          </a>
          <a href="https://twitter.com/FitzHawke">
            <HeroSocial
              src="/assets/images/icons8-twitter-64.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/will-featherston/">
            <HeroSocial
              src="/assets/images/icons8-linkedin-64.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://angel.co/u/will-featherston">
            <HeroSocial
              src="/assets/images/icons8-angellist-64.png"
              alt="AngelList icon"
            />
          </a>
          <a href="mailto:will.featherston@gmail.com">
            <HeroSocial
              src="/assets/images/icons8-mail-64.png"
              alt="Email icon"
            />
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <HeroSocial
              src="/assets/images/icons8-john-wick-64.png"
              alt="John Wick icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
