// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'FRB',
    description: 'The best tool to create complex financial reports.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'axentorllc',
      github: 'https://github.com/Axentorllc/financial_report_builder.git',
    },
    // github: {
    //   dir: '.starters/default/content',
    //   branch: 'main',
    //   repo: 'docus',
    //   owner: 'nuxt-themes',
    //   edit: true
    // },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
	footer: {
		credits: {
		  icon: 'material-symbols:electric-bolt',
		  text: 'Powered by Axentor',
		  href: 'https://axentor.co/',
		},
	}
  }
})
