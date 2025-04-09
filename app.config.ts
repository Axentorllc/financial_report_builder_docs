// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'Financial Report Builder',
    description: 'The Best Tool to Create Complex Financial Reports.',
    image: 'https://drive.google.com/file/d/18hfnB9HA2ALww_Ug4_GxfqzvLhYqLs99/view',
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
