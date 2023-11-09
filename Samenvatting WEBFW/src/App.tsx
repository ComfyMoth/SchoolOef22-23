import styles from "./App.module.css";
import { NavLink, Outlet, RouterProvider, createBrowserRouter, useParams } from "react-router-dom"
import { SnippetApp, SnippetCreateCommand, SnippetRouterCommand, SnippetsList } from "./snippets/Snippets";
import { GuidesList } from "./guides/Guides";

const Root = () =>{

  return(
      <div className={styles.container}>
          <br />
          <div className={styles.nav}>
              <NavLink 
              className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
              to="/"
              >
                Home
              </NavLink>
              <NavLink 
              className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
              to="/guides"
              >
                Guides
              </NavLink>

              <NavLink 
              className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
              to="/snippets"
              >
                Code Snippets
              </NavLink>

          </div>
          <div className={styles.outlet}>
              <Outlet/>
          </div>
          <div className={styles.footer}>
              
          </div>
      </div>
  )
}

const Home = ()=> {
  return(
      <>
          <h1>Home</h1>
          <div>
            <h2>Toegelaten Bronnen</h2>
            <ul>
              <li><a href="https://similonap.github.io/webframeworks-cursus/" target="_blank">Cursus</a></li>
              <li><a href="https://developer.mozilla.org/en-US/" target="_blank">Mozilla Developer Documentation</a></li>
              <li><a href="https://react.dev/" target="_blank">React Documentation</a></li>
            </ul>
            <SnippetCreateCommand/>
            <SnippetRouterCommand/>
          </div>
      </>
  )
}
const Guides = () =>{
  return(
    <>
    <h1>Guides</h1>
    <GuidesList/>
    </>
  )
}
const Snippets = ()=> {
  return(
      <>
        <h1>Snippets</h1>
        <SnippetsList/>
      </>
  )
}


const PageNotFound = () =>{
  return(
      <>
          <h1>Error 404: Page not found</h1>
      </>
  )
}

const App = () =>{
  const router = createBrowserRouter([
      
      {
          path: "/",
          element: <Root/>,
          children:[
              {
                  path:"",
                  element: <Home/>
              },
              {
                path:"/snippets",
                element: <Snippets/>
              },
              {
                path:"/guides",
                element: <Guides/>
              },
              {
                  path: "*",
                  element: <PageNotFound/>
              }
          ]
      }
  ])

return(
  <>
      <RouterProvider router={router}/>
  </>
)
}

export default App;