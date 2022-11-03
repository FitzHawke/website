import { FooterCopyright } from '@/components/FooterCopyright';
import { Section } from '@/components/Section';
import { AppConfig } from '@/data/appConfig';

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.site_name} />
  </Section>
);

export { Footer };
