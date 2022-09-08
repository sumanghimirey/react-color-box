
import { useState } from "react"
import Content from "./Content"
import ColorInput from "./ColorInput"

import './App.css'

const App = () => {
    const [styleName, setStyle] = useState('white')

const handleOnchnage = (e) => {
    const style = e.target.value;
    setStyle(style)

}

return (

    <div className="App">
        <Content styleName={styleName}/>
        <ColorInput handleOnchnage={handleOnchnage}/>
    </div>
)
}   

export default App