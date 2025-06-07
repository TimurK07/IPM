export const routes = [
  {
    path: '/',
    name: 'Home',
    element: 'Home',
  },
  {
    path: '/tasks',
    name: 'Tasks',
    element: 'Tasks',
  },
  {
    path: '/daily',
    name: 'Daily',
    element: 'Daily',
  },
  {
    path: '/mailing',
    name: 'Mailing',
    element: 'Mailing',
  },
  {
    path: '/group-chat',
    name: 'GroupChat',
    element: 'GroupChat',
  },
  {
    path: '/users',
    name: 'Users',
    element: 'Users',
  },
  {
    path: '/database',
    name: 'KnowledgeBase',
    element: 'KnowledgeBase',
  },
  {
    path: '/link',
    name: 'Link',
    element: 'Link',
  },
  {
    path: '/document',
    name: 'Document',
    element: 'Document',
  },
  {
    path: '/settings',
    name: 'Settings',
    element: 'Settings',
  },
  {
    path: '/settings/sprint-duration',
    name: 'SprintDuration',
    element: 'SprintDuration',
  },
  // {
  //   path: '/settings',
  //   name: 'Settings',
  //   element: 'Settings',
  // },
]


export const getAllRoutes = () => routes

