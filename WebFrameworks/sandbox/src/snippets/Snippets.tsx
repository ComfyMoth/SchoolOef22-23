import styles from "../App.module.css";

export const SnippetsList = () =>{
    return(
        <>
            <h2 className={styles.headerChapter}>Basics</h2>
            <SnippetApp/>
            <SnippetComponent/>
            <SnippetSimplifiedIfStatement/>
            <SnippetAnoniemePropsComponent/>
            <SnippetPropsComponent/>
            <SnippetStyling/>
            <SnippetCheckBox/>
            <SnippetSelect/>
            <SnippetComparer/>
            <SnippetArrayMapping/>
            <SnippetArrayFiltering/>
            <SnippetRandom/>
            <h2 className={styles.headerChapter}>UseState</h2>
            <SnippetUseState/>
            <SnippetUseStateCallback/>
            <SnippetStateArray/>
            <SnippetStateAddArray/>
            <SnippetStateRemoveArray/>
            <SnippetStateChangeArray/>
            <SnippetStateChangeObject/>
            <h2 className={styles.headerChapter}>UseEffect</h2>
            <SnippetUseEffect/>
            <SnippetUseEffectDependencyUpdate/>
            <SnippeUseEffectTimer/>
            <SnippetUseEffectApi/>
            <SnippetUseEffectApiArray/>
            <SnippetUseEffectLocalStorage/>
            <h2 className={styles.headerChapter}>Context</h2>
            <SnippetContextCreate/>
            <SnippetCallContext/>
            <SnippetContextProvider/>
            <SnippetContextFunction/>
            <SnippetContextData/>
            <h2 className={styles.headerChapter}>Router</h2>
            <SnippetRouterRoot/>
            <SnippetRouterPage/>
            <SnippetRouterMain/>
            <SnippetRouterParameter/>
        </>
    )
}
const Snippet = () =>{
    const text = (
        ``
)

    return(
        <>
        <h3 className={styles.title}>XXX</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
//* TERMINAL COMMANDS
export const SnippetCreateCommand = () =>{
    const text = (
        `npm create vite@latest`
)

    return(
        <>
        <h3 className={styles.title}>Create React Application</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
export const SnippetRouterCommand = () =>{
    const text = (
        `npm  install --save react-router-dom@6`
)

    return(
        <>
        <h3 className={styles.title}>Create React Router</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}

//* TERMINAL COMMANDS
//Basics
const SnippetApp = () =>{
    const text = (
        `const App = () =>{

        return(
            <>
            
            </>
        )
    }
        
export default App;`
)

    return(
        <>
        <h3 className={styles.title}>App</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetComponent = () => {
    const text = (
        `const Component = () => {

            return (
              <>
        
              </>
            );
          }`
)

    return(
        <>
        <h3 className={styles.title}>Component</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetSimplifiedIfStatement = () =>{
    const text = (
        `{ condition ? exprIfTrue : exprIfFalse }`
)

    return(
        <>
        <h3 className={styles.title}>Simplified If Statement</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetAnoniemePropsComponent = () =>{
    const text = (
        `const Component = () => {
            return <div style={
                {
                    width: 100, 
                    height: 100, 
                    backgroundColor: 'red'
                }
            }/>
        }
        
        const App = () => {
            return <Component/>
        }`
)

    return(
        <>
        <h3 className={styles.title}>Anonieme Props</h3>
        <pre className={styles.codeBlock}>
          <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetPropsComponent = () =>{
    const text = (
        `interface ComponentProps {
            color: string
        }

        const Component = (props: ComponentProps) => {
            return <div 
                    style={{width: 100, height: 100, backgroundColor: props.color}}
                />
        }
        
        const App = () => {
            return (
                <>
                    <Component color="blue"/>
                    <Component color="red"/>
                </>
            );
        }`
)

    return(
        <>
        <h3 className={styles.title}>Props</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetStyling = () =>{
    const text = (
        `import styles from './App.module.css';

        const App = () => {
          return (
            <div className={styles.App}>
                <h1>Hello component</h1>
            </div>
          );
        }
        
        export default App;`
)

    return(
        <>
        <h3 className={styles.title}>Styling</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetCheckBox = () =>{
    const text = (
        `const App = () => {
            return (
              <>
                <label>
                <input
                  type="checkbox"
                  onChange={(event) => console.log(event.target.checked)}
                />
                Toggle
              </label>
              </>
            )
        }
        
        export default App;`
)

    return(
        <>
        <h3 className={styles.title}>CheckBox</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetSelect = () =>{
    const text = (
        `const App = () => {
            return (
              <>
                <label htmlFor="">Choose a option:</label>
                <select id="options" name="options" onChange={(event) => console.log(event.target.value)}>
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                  <option value="option3">option3</option>
                  <option value="option4">option4</option>
                </select>
              </>
            )
        }
        
        export default App;`
)

    return(
        <>
        <h3 className={styles.title}>Select</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetComparer = () =>{
    const text = (
        `
    {
    ARRAY.every(e => e === ARRAY[0])? <p>Array is gelijk</p> : <p>Array is niet gelijk</p>
    }
        `
)

    return(
        <>
        <h3 className={styles.title}>Array Comparer ( .every() )</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetArrayMapping = () =>{
    const text = (
        `
        {
            ARRAY.map((e) =>
              <>
                <p>{e.value}</p>
              </>
            )
        }`

)

    return(
        <>
        <h3 className={styles.title}>Array Mapping ( .map() )</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetArrayFiltering = () =>{
    const text = (
        `
        {
            ARRAY.filter((e) => 
            e.value >= valueToCompare)
            .map((e) =>
              <>
                <p>{e.value}</p>
              </>
            )
        }`
)

    return(
        <>
        <h3 className={styles.title}>Array Filter & Mapping ( .filter().map() )</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetRandom = () =>{
    const text = (
        `    
        let randomGetal =  Math.floor(Math.random()*(max - min + 1)) + min
        `
)

    return(
        <>
        <h3 className={styles.title}>Random Number Between 2 Numbers</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
//UseState
const SnippetUseState = () =>{
    const text = (
        `const [value, setValue] = useState<TYPE>(baseValue);`
)

    return(
        <>
        <h3 className={styles.title}>UseState()</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetUseStateCallback = () =>{
    const text = (
        `setValue(prevValue => prevValue + 1);`
)

    return(
        <>
        <h3 className={styles.title}>SetState met Callback</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetStateArray = () =>{
    const text = (
        `const [array, setArray] = useState([...existingArray])`
)

    return(
        <>
        <h3 className={styles.title}>Array State</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetStateAddArray = () =>{
    const text = (
        `const addClicked : React.MouseEventHandler<HTMLButtonElement> = () => {
            setNumbers([...numbers, number]);
          }`
)

    return(
        <>
        <h3 className={styles.title}>State Add To Array</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetStateRemoveArray = () =>{
    const text = (
        `const removeNumber = (i : number) => {
            let numbersCpy = numbers.filter((number, index) => index !== i);
            setNumbers(numbersCpy);
          }`
)

    return(
        <>
        <h3 className={styles.title}>State Remove From Array</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetStateChangeArray = () =>{
    const text = (
        `  const modifyNumber = (i : number) => {
            let promptResult = prompt("Enter new number");
            if (promptResult) {
                let newNumber = parseInt(promptResult);
                let numbersCpy = numbers.map((oldNumber, index) => (index === i) ? newNumber : oldNumber);
                setNumbers(numbersCpy);
            }
          }
        `
)

    return(
        <>
        <h3 className={styles.title}>State Array Modify</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetStateChangeObject = () =>{
    const text = (
        `const [person, setPerson] = useState<Person>({name: "John", age: 42});

        const changeName = () => {
      
          setPerson({...person, name: "Jane"});
        }`
)

    return(
        <>
        <h3 className={styles.title}>State Change Object</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
//UseEffect()
const SnippetUseEffect = () =>{
    const text = (
        `useEffect(() => {
            // Side-effect...
            return () => {
              // Side-effect cleanup...
            };
          }, []);
        `
)

    return(
        <>
        <h3 className={styles.title}>UseEffect()</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetUseEffectDependencyUpdate = () =>{
    const text = (
        `const App = ({}) => {
            const [count, setCount] = useState(0);
          
            useEffect(() => {
              console.log("useEffect called when count changes");
            },[count]);
          
            return (
              <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
              </div>
            );
          }`
)

    return(
        <>
        <h3 className={styles.title}>UseEffect() Array Dependency Update</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippeUseEffectTimer = () =>{
    const text = (
        `  useEffect(()=>{
            const interval = setInterval(()=>{
                //Code that runs after every interval
            },1000);
            return () => clearInterval(interval);
          },[]);
        `
)

    return(
        <>
        <h3 className={styles.title}>UseEffect() InterVal Timer</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetUseEffectApi = () =>{
    const text = (
        `   useEffect(() =>{
            const loadData = async() => {
                let apiUrl = 'PlaceHolderUrl.com'
                let response = await fetch(apiUrl);
                let data  = await response.json();
                setData(data)
            }
            loadData();
              },
          []);
    `
)

    return(
        <>
        <h3 className={styles.title}>UseEffect() API Call</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetUseEffectApiArray = () =>{
    const text = (
        `   useEffect(() =>{
            fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(respone => respone.json())
            .then(json => SetPokemonList(() => json.results.map((pm:Pokemon) => pm.name)))
          },
          [buttonStatus]);
    `
)

    return(
        <>
        <h3 className={styles.title}>UseEffect() Array API Call</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetUseEffectLocalStorage = () =>{
    const text = (
        `
        const SavedLocalStorage = () => {
            const [name, setName] = useState<string>(localStorage.getItem("name") ?? "");
          
            useEffect(() => {
              localStorage.setItem("name", name);
            },[name]);
          
            return (
              <>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              </>
            )
          }
        `
)

    return(
        <>
        <h3 className={styles.title}>UseEffect() LocalStorage</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
//TODO Communication between props



//Context
const SnippetContextCreate = () =>{
    const text = (
        `interface IObjectContext{
            value:type
          }

          export const ObjectContext = React.createContext<IObjectContext>({value:defaultValue});

          const getValue = (value:type)=>{
            return value;
          }
          `
)

    return(
        <>
        <h3 className={styles.title}>Context Setup</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetCallContext = () =>{
    const text = (
        `const ChildComponents = () =>{ 
            const {value} = useContext(ObjectContext);
            return(  
            <>
              <p>{getValue(value)}</p>
            </>
            )
          }
          `
)

    return(
        <>
        <h3 className={styles.title}>Context Call</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetContextProvider = () =>{
    const text = (
        `   
        <ObjectContext.Provider value={{value:type}}>
            <ParentComponent/>
        </ObjectContext.Provider>
        `
)

    return(
        <>
        <h3 className={styles.title}>Context Provider</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetContextFunction = () =>{
    const text = (
        `
        interface IThemeContext {
            theme: string,
            setTheme: (theme: string) => void
        }
        
        export const ThemeContext = React.createContext<IThemeContext>({theme: "light", setTheme: (theme: string) => {}});
        
        const ComponentD = () => {
            const {theme,setTheme} = useContext(ThemeContext);
            return <button onClick={() => 
                { setTheme(theme === "dark" ? "light" : "dark")}} style={{backgroundColor: theme === "dark" ? 
                "black" : "white", color: theme === "dark" ? "white" : "black"}}
                >
                {theme}
                </button>;
          };        
        `
)

    return(
        <>
        <h3 className={styles.title}>Context Function</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetContextData = () =>{
    const text = (
        `import React, { useState, useContext, useEffect } from "react";

        export interface DataContext {
          posts: Post[];
          loading: boolean;
          loadData: () => void;
        }
        
        export const DataContext = React.createContext<DataContext>({posts: [], loading: false, loadData: () => {}});
        
        export const DataProvider = ({children}: {children: React.ReactNode}) => {
          const [posts, setPosts] = useState<Post[]>([]);
          const [loading, setLoading] = useState<boolean>(false);
        
          const loadData = async () => {
              setLoading(true);
              const response = await fetch("https://jsonplaceholder.typicode.com/posts");
              const json = await response.json();
              setPosts(json);
              setLoading(false);
          }
        
          useEffect(() => {
              loadData();
          }, []);
        
          return (
              <DataContext.Provider value={{posts: posts, loadData: loadData, loading: loading}}>
                  {children}
              </DataContext.Provider>
          )
        }
        
        `
)

    return(
        <>
        <h3 className={styles.title}>Context Data</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}

//ReactRouter
const SnippetRouterRoot = () =>{
    const text = (
        `const Root = () =>{

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
                        to="/page1"
                        >
                          Page1
                        </NavLink>
          
                        <NavLink 
                        className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
                        to="/page2"
                        >
                          Page2
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
          `
)

    return(
        <>
        <h3 className={styles.title}>Router Route</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetRouterPage = () =>{
    const text = (
        `const Page1 = ()=> {
            return(
                <>
                    <h1>Page Name</h1>
                    <div>

                    </div>
                </>
            )
          }`
)

    return(
        <>
        <h3 className={styles.title}>Router Page</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetRouterMain = () =>{
    const text = (
        `const App = () =>{
            const router = createBrowserRouter([
                
                {
                    path: "/",
                    element: <Root/>,
                    children:[
                        {
                            path:"",
                            element: <HomePage/>
                        },
                        {
                          path:"/page1",
                          element: <Page1/>
                        },
                        {
                          path:"/page2",
                          element: <Page2/>
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
          `
)

    return(
        <>
        <h3 className={styles.title}>Router Application</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
const SnippetRouterParameter = () =>{
    const text = (
        `const Detail = () => {
            let { id } = useParams();
        
            return (
                <Page id={id} />
            );
        }
        
        
        const App = () => {
            const router = createBrowserRouter([
                {
                    path: "/",
                    element: <Root/>,
                    children: [
                        {
                            path: "",
                            element: <Home/>
                        },
                        {
                            path: "detail/:id",
                            element: <Detail/>
                        }
                    ]
                }
            ]);
        
            return (
                <div>
                    <RouterProvider router={router} />
                </div>
            )
        }`
)

    return(
        <>
        <h3 className={styles.title}>Router Parameters</h3>
        <pre className={styles.codeBlock}>
        <code className={styles.code}>
            {
                text
            }
          </code>
              <button 
              className={styles.copyButton}
              onClick={() => {navigator.clipboard.writeText(text)}}
              >Copy</button>          
        </pre>
        </>
    )
}
