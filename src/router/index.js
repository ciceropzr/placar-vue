import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Placar from '@/components/Placar'
import Casar from '@/components/Casar'
import Calc from '@/components/Calc'
import Perfil from '@/components/Perfil'
import CrachaG from '@/components/CrachaG'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Placar',
      name: 'Placar',
      component: Placar
    },
    {
      path: '/Casar',
      nome: 'Casar',
      component: Casar
    },
    {
      path: '/Calc',
      nome: 'Calc',
      component: Calc
    },
    {
      path: '/Perfil',
      nome: 'Perfil',
      component: Perfil
    },
    {
      path: '/CrachaG',
      nome: 'CrachaG',
      component: CrachaG
    }
  ]
})
