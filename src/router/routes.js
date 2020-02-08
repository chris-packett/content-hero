
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Dashboard.vue')
      },
      {
        path: '/templates',
        component: () => import('pages/TemplatesPage.vue')
      },
      {
        path: '/settings',
        component: () => import('pages/SettingsPage.vue')
      },
      {
        path: '/clients',
        component: () => import('pages/CustomersPage.vue')
      },
      {
        name: 'ProjectPage',
        path: '/projects/new',
        props: true,
        component: () => import('pages/ProjectPage.vue')
      },
      {
        path: '/projects/:projectId',
        component: () => import('pages/ProjectPage.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
