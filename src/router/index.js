// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ "@/views/Login.vue"),
  },
  {
    path: "/cadastrar",
    name: "CadastrarUsuario",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/CadastrarUsuario.vue"),
  },
  {
    path: "",
    component: () => import("@/views/Home.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/login");
      }
    },
    children: [
      {
        path: "/clientes",
        name: "Clientes",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Clientes.vue"),
      },
      {
        path: "/clientes/cadastrar",
        name: "CadastrarCliente",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/CadastrarCliente.vue"),
      },
    {
      path: "/clientes/:id",
      name: "EditarCliente",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/views/EditarCliente.vue"),
    }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

//ESTOQUE = CODIGO, DESCRICAO, BARRAS, QTD
//product = id, name, barcode, quantity
//converter ESTOQUE para product
function estoqueToProduct(estoque){
  return {
    id: estoque.CODIGO,
    name: estoque.DESCRICAO,
    barcode: estoque.BARRAS,
    quantity: estoque.QTD
    
  }
}