import type { ReactNode } from 'react';

type ILinksProps = {
  title: ReactNode;
  description: ReactNode;
  links: ReactNode;
};

const Links = (props: ILinksProps) => (
  <div className="flex flex-col items-center justify-around gap-6 sm:flex-row">
    <div className="sm:w-7/12">
      <div className="text-3xl font-bold">{props.title}</div>

      <p className="mt-3 text-xl text-gray-300">{props.description}</p>
    </div>

    <div className="w-full sm:w-1/4">
      <div className="mt-3 flex flex-col gap-2">{props.links}</div>
    </div>
  </div>
);

export { Links };
