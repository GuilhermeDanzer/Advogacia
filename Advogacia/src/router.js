import App from './App'


export const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    navbarName: 'Home',
    icon: '',
  },  
   {
    path: '/sobre',
    sidebarName: 'Sobre',
    navbarName: 'Sobre',
    icon: '',
   },
   {
     path:'/sites',
     sidebarName: 'Sites úteis',
     navbarName: 'Sites úteis',
     icon: '',
   },
   {
     path:'/equipe',
     sidebarName:'Equipe',
     navbarName:'Equipe',
     icon:''
  },

   {
    path: '/areas-de-atuacao',
    sidebarName: 'Áreas de atuação',
    navbarName: 'Áreas de atuação',
    icon: '',
   },
   {
    path: '/artigos',
    sidebarName: 'Artigos',
    navbarName: 'Artigos',
    icon: '',
   }
   ,
     {
    path: '/contato',
    sidebarName: 'Contato',
    navbarName: 'Contato',
    icon: '',
   },

]
export const RoutesAdmin = [
  /*{
    path: '/admin',
    sidebarName: 'Home',
    navbarName: 'Home',
    icon: Home,
    component: AdminScreen
  },*/

  {
    path:'/admin/equipe',
    sidebarName:'Equipe',
    navbarName:'Equipe'
  },
  {
    path:'/admin/artigo',
    sidebarName:'Artigo',
    navbarName:'Artigo'
  },
  {
    path:'/',
    sidebarName:'Sair',
    navbarName:'Sair'
  },
];

