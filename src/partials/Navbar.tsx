import { Logo } from "@components/react/Logo";
import { NavbarTwoColumns } from "@components/react/NavbarTwoColumns";
import { NavMenu } from "@components/react/NavMenu";
import { NavMenuItem } from "@components/react/NavMenuItem";
import { Section } from "@components/react/Section";

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="mr-1 h-10 w-10 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <rect x="3" y="12" width="6" height="8" rx="1" />
              <rect x="9" y="8" width="6" height="12" rx="1" />
              <rect x="15" y="4" width="6" height="16" rx="1" />
              <path d="M4 20h14" />
            </svg>
          }
          name="FitzHawke's Portfolio"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="https://github.com/FitzHawke">GitHub</NavMenuItem>
        <NavMenuItem href="https://www.linkedin.com/in/will-featherston/">
          LinkedIn
        </NavMenuItem>
        <NavMenuItem href="https://twitter.com/FitzHawke">Twitter</NavMenuItem>
        <NavMenuItem href="https://wellfound.com/u/will-featherston">
          Wellfound
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
