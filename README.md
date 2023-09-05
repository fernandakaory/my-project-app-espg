# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Iniciando a criação de ROTAS com react-router-dom.
## Instalando a dependência
- npm install react-router-dom;
## Criar a pasta routes
- Criar a pasta routes(na src)
## As rotas ou páginas
- Criando as rotas/páginas [Home, EditarProdutos, Produtos e Erro404].
## Importar os objetos das rotas no main.jsx.
- import{createBrowserRouter, RouterProvisor} from 'react-router-dom';
- import Home..., import Produtos...,import EditarProdutos...,import Erro404
## Criando o objeto de rotas com o createBrowserRouter
-  const router = createBrowserRouter([...]);
## Trocar o componente <App/> pelo componente <RouterProvider/> no ReactDom.render.
- ReactDom.render(
    <React.StrictMode>
        <RouterProvider/>
    </React.StrictMode>,
)
## Adicionando a props router ao componente RouterProvider
- ReactDom.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
## Vamos adicionar o componente Outlet em App