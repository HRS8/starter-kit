import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className="min-h-screen px-5 py-5  bg-[#fcf9f6] dark:bg-neutral-950">
				<div className='px-3 border rounded-md border-slate-800'>
					<main>{children}</main>
				</div>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
