import React, { useState, useEffect } from "react";
import "./App.css";
import account_analytic from "./components/Accounts.json"

function App() {
    const [data, setData] = useState(account_analytic);

    console.log("data===", data)


    return ( <
            div className = "App" >

            {
                data !== null ? (


                    <
                    div className = "container" >
                    <
                    div className = "search" >
                    <
                    input type = "search"
                    id = "search"
                    placeholder = "search" / >
                    <
                    /div>

                    <
                    div className = "tab" >
                    <
                    table >
                    <
                    thead >
                    <
                    th > Accounts < /th> <
                    th > Properties < /th> <
                    th > Views < /th> <
                    /thead> <
                    tbody > {
                        data.items.map((item, index) => {
                            return ( <
                                tr > < td className = "tab1" > { item.id } < br > < /br> {item.name} </td >
                                <
                                td className = "tab2" > {
                                    item.webProperties.map((val, index) => {

                                        return ( <
                                            div >
                                            <
                                            p > { val.id } < /p> <
                                            p > { val.name } < /p> <
                                            /div>

                                        )

                                    })
                                } <
                                /td> <
                                td > Germany < /td> </tr >
                            )
                        })
                    }


                    <
                    /tbody> <
                    /table> <
                    /div> <
                    /div>



                ) : ( < div > loading...... < /div>)} <
                    /div>

                );
            }

            export default App;