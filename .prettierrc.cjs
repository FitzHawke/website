module.exports = {
	useTabs: true,
	semi: true,
	printWidth: 80,
	singleQuote: false,
	bracketSpacing: true,
	tabWidth: 2,
	plugins: [require.resolve("prettier-plugin-astro")],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
