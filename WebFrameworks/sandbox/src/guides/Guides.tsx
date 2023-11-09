import styles from "../App.module.css";

export const GuidesList = () =>{


    return(
        <>
            <GuideState/>
            <GuideEffect/>
            <GuidePropCommunication/>
            <GuideContext/>
            <GuideRouter/>
        </>
    )
}
const Guide = () =>{

    return(
        <>
        <h2 className={styles.title}>XXX</h2>
        <pre className={styles.codeBlock}>
            <code className={styles.code}>
                <h3></h3>     
            </code>
        </pre>
        </>
    )
}
const GuideState = () =>{

    return(
        <>
        <h2 className={styles.title}>Guide to implementing State</h2>
        <pre className={styles.codeBlock}>
            <code className={styles.code}>
                <h3>1. Maak de gevraagde HTML-Code</h3>
                <h3>2. Maak de nodige useState's</h3>
                <h3>3. Implementeer de useState Values in de HTML-Code met "Dummy Values"</h3>
                <h3>4. Implementeer Event Handling in uw HTML-Code zodat useState's geupdate kunnen worden</h3>     
            </code>
        </pre>
        </>
    )
}
const GuideEffect = () =>{

    return(
        <>
        <h2 className={styles.title}>Guide to implementing Effect</h2>
        <pre className={styles.codeBlock}>
            <code className={styles.code}>
                <h3>1. Implement UseEffect in component</h3> 
                <p>
                    {
                        `
                        const MyComponent = () => {
                            useEffect(() => {
                              // Code to run after component renders
                              // This can include data fetching, subscriptions, or other side effects
                            }, []); // Empty dependency array means it runs once after the initial render
                          }                          
                        `
                    }
                </p>    
                <h3>2. Implement in the dependency array what component is the update value</h3>
            </code>
        </pre>
        </>
    )
}
const GuidePropCommunication = () =>{

    return(
        <>
        <h2 className={styles.title}>Guide to communication between components</h2>
        <pre className={styles.codeBlock}>
            <code className={styles.code}>
                <h3>1. Parent Setup</h3>  
                <ul>
                    <li>Contains all UseState's</li>
                    <li>Contains the function that activates with Child interaction</li>
                    <li>Gives the function and useState as props to the child</li>
                </ul>
                <p>
                    {
                        `
                        export const Parent = () =>{
                            const colors:string[]=["red","blue","green","yellow","black","white"];
                            let randomNumber = Math.floor(Math.random()*colors.length);
                            const [divColor,setDivColor] = useState<string>(colors[randomNumber]);
                            const [isClicked, setIsClicked] = useState<boolean>(true);
                            const [childText, setChildText] = useState<string>("");
                        
                            const clickChild = () =>{
                                setIsClicked(!isClicked);
                                randomNumber =  Math.floor(Math.random()*colors.length);
                                setDivColor(colors[randomNumber]);
                                console.log("child was clicked");
                            }
                        
                        
                            return(
                                <>
                                    <div 
                                    style={{backgroundColor:"orange", width:"fit-content", padding:50,borderRadius:25, border:"solid black"}}
                                    > 
                                        <h2>Parent</h2>
                                        <div
                                        style={{display:"flex"}}
                                        >
                                            <Child
                                                clickChild={clickChild}
                                                childText={childText}
                                            />
                                            <ChildTwo
                                                divColor={divColor}
                                                childText={childText}
                                                setChildText={setChildText}
                                            />
                                        </div>
                                    </div>
                                </>
                            )
                        }                        `
                    }
                </p>   
                <h3>2. Child 1 Setup</h3>  
                <ul>
                    <li>Uses the given props as values</li>
                </ul>
                <p>
                    {
                        `
                        export const Child = (props) =>{

                            return(
                                <>
                                    <div 
                                    style={{backgroundColor:"yellow", minWidth:150, padding:50, borderRadius:25, border:"solid black", margin:5}}
                                    >
                                        <h3>ChildOne</h3>
                                        <button
                                            onClick={props.clickChild}
                                        >Change ChildTwo</button>
                                        <p>Value from ChildTwo:</p>
                                        <p style={{color:"red"}}>{props.childText}</p>
                                    </div>
                                </>
                            )
                        }
                                                `
                    }
                </p> 
                <h3>3. Child 2 Setup</h3>  
                <ul>
                    <li>Contains function that changes value in parent</li>
                    <li>UseEffect runs when the value is changed and proceeds to change this in Parent</li>
                    <li>Parent gives the changed value to Child 1</li>
                </ul>
                <p>
                    {
                        `
                        import { useEffect, useState } from "react"

                        export const ChildTwo = (props) =>{
                            const childChangeText = ()=>{
                                console.log(props.childText);
                            }
                            useEffect(()=>{
                                childChangeText();
                        
                            },[props.setChildText])
                            return(
                                <>
                                    <div 
                                    style={{backgroundColor:"green", minWidth:150, padding:50, borderRadius:25, border:"solid black", margin:5}}
                                    >
                                        <h3>ChildTwo</h3>
                                        <div  style={{width:150,height:150,backgroundColor:props.divColor, borderRadius:10}}>
                                        </div>
                                        <br />
                                        <label>ChildOne Data</label>
                                        <br />
                                        <input type="text" 
                                            placeholder="please input text here"
                                            value={props.childText}
                                            onChange={(e)=>props.setChildText(e.target.value)}
                                        />
                                    </div>
                                </>
                            )
                        }                        `
                    }
                </p>     
            </code>
        </pre>
        </>
    )
}
const GuideContext = () =>{

    return(
        <>
        <h2 className={styles.title}>Guide to implementing Context</h2>
        <pre className={styles.codeBlock}>
            <code className={styles.code}>
                <h3>1. Maak Interface</h3>
                    <p>
                        {
                            `
                            interface IObjectContext{
                                value:type
                              }                    
                            `
                        }
                    </p>
                <h3>2. Maak createContext function van Interface</h3>
                    <p>
                        {
                            `
                            export const ObjectContext = React.createContext<IObjectContext>({value:defaultValue});
                            `
                        }
                    </p>
                <h3>3. Maak getter function</h3>
                    <p>
                        {
                            `
                            const getValue = (value:type)=>{
                                return value;
                              }
                            `
                        }
                    </p>
                <h3>4. {'Refactor code so that code is inside <ObjectContext.Provider value={{value:type}}>'}</h3>
                    <p>
                        {
                            `
                            const ChildComponents = () =>{ 
                                const {value} = useContext(ObjectContext);
                                return(  
                                <>
                                  <p>{getValue(value)}</p>
                                </>
                                )
                              }
                            `
                        }
                    </p>
            </code>
        </pre>
        </>
    )
}
const GuideRouter = () =>{

    return(
        <>
        <h2 className={styles.title}>Guide to making a Router</h2>
        <pre className={styles.codeBlock}>
            <code className={styles.code}>
                <h3>1. Make the Root</h3>
                <p>
                    {
                        `
                        const Root = () => {
                            return (
                                <div className={styles.container}>
                                    <div className={styles.head}>Header</div>
                                    <div className={styles.nav}>
                                        <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/" >Home</NavLink>
                                        <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="page1">Page 1</NavLink>
                                        <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="page2">Page 2</NavLink>
                        
                                    </div>
                                    <div className={styles.content}>
                                        <Outlet/>
                                    </div>
                                    <div className={styles.footer}>
                                        Footer
                                    </div>
                                </div>
                            );
                        }                        `
                    }
                </p>
                <h3>2. Make Page Components</h3>    
                <p>
                    {
                        `
                        const Home = () => {
                            return (
                                <div>This is the home page!</div>
                            );
                        }
                        
                        const Page1 = () => {
                            return (
                                <div>Page 1</div>
                            );
                        }
                        
                        const Page2 = () => {
                            return (
                                <div>Page 2</div>
                            );
                        }                        `
                    }
                </p>
                <h3>3. Make App()</h3>     
                <p>
                    {
                        `
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
                                            path: "page1",
                                            element: <Page1/>
                                        },
                                        {
                                            path: "page2",
                                            element: <Page2/>
                                        }
                                    ]
                                }
                            ]);
                        
                            return (
                                <div>
                                    <RouterProvider router={router} />
                                </div>
                            )
                        }
                        
                        export default App;                        `
                    }
                </p>
            </code>
        </pre>
        <pre className={styles.codeBlock}>
            <code className={styles.code}>
                <p>
                <b>path</b>: de URL waarop de route moet reageren
                </p>
                <p>
                <b>element</b>: het element dat moet worden gerenderd wanneer de route wordt geactiveerd
                </p>
                <p>
                <b>children</b>: een array van RouteObject die de subroutes van de huidige route bevat            
                </p>
                <p>
                    <b>Basic Link for page Navigation</b>
                {
                    `

                    <Link to="/page1">Page 1</Link>
                    `
                }

                </p>
                <p>
                    <b>Advanced Link for page Navigation (contains isActive function)</b>
                {
                    `
                    
                    <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/">Home</NavLink>


                    `
                }

                </p>
                <p>
                    <b>Wildcard (error page)</b>
                    {
                        `
                        {
                            path: "*",
                            element: <PageNotFound/>
                        }
                        `
                    }
                </p>

            </code>
        </pre>

        </>
    )
}
