import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue"
import User from "../views/User/User"
import Detail from "../views/User/Detail"
import LayoutUser from '../views/User/LayoutUser'
import LayoutSchedule from '../views/Schedule/LayoutSchedule'
import Schedule from '../views/Schedule/Schedule'
import DetailSchedule from '../views/Schedule/DetailSchedule'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component:Login
  },
  {
    path: "/Login",
    name: "Login",
    component:Login
  },
  {
    path:"/Home",
    name:"Home",
    component:Home,
    children:[
      {
        path:"/LayoutUser",
        component:LayoutUser,
        name:"LayoutUser",
        children:[
          {
            path:"/",
            component:User,
            name:"User"
          },
          {
            path:"/Detail/:id",
            component:Detail,
            meta: { requiresAuth: true }
          }
        ]
      },
      {
        path:"/LayoutSchedule",
        component:LayoutSchedule,
        name:"LayoutSchedule",
        children:[
          {
          path:"/",
          component:Schedule,
          name:'Schedule'
        },
        {
          path:"/Schedule",
          component:Schedule,
          name:'Schedule'
        },
        {
          path:"/DetailSchedule/:id",
          component:DetailSchedule,
          meta: { requiresAuth: true }
        }
        
        ]

      }
    
    ]
  }
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
