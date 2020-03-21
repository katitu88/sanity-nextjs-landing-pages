export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e75ce86d59d67b59f8d4bce',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nesns2t4',
                  apiId: '628c6035-d124-49a7-a4fa-f0ed851ba252'
                },
                {
                  buildHookId: '5e75ce86be1baf1a547b31d4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vce5dw1v',
                  apiId: '2c56896c-01d6-44d7-b123-397b25567568'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/katitu33/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vce5dw1v.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
