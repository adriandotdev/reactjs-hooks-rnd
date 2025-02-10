import Link from "next/link";

export default function Home() {
	const hooks = [
		{
			id: 1,
			name: "useState",
			description:
				"useState is a Hook that lets you add React state to functional components.",
			href: "/useState",
		},

		{
			id: 2,
			name: "useEffect",
			description:
				"useEffect is a Hook that lets you perform side effects in functional components.",
			href: "/useEffect",
		},
	];
	return (
		<main className="p-10 flex flex-col gap-5">
			<h1 className="text-2xl font-bold">ReactJS Hooks RND</h1>

			<div id="hooks-list-container">
				{hooks.map((hook) => (
					<Link href={hook.href} className="hook" key={hook.id}>
						<h2 className="hook-title">{hook.name}</h2>
						<p className="hook-description">{hook.description}</p>
					</Link>
				))}
			</div>
		</main>
	);
}
