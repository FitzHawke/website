import { FooterCopyright } from '@/components/react/FooterCopyright';
import { Section } from '@/components/react/Section';
import { AppConfig } from '@/data/appConfig';

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.site_name} />
  </Section>
);

export { Footer };
