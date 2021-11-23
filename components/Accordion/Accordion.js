import React, {useState} from 'react'

export default function Accordion({title, content, children}){
    
    const [isShowing, setIsShowing] = useState(false)

    const toggle = () =>{
        setIsShowing(!isShowing)
    }
return(
    <div>
        <div
        style = {{ 
            width: "100%",
            marginBottom: "15px",
            lineHeight: "15px",
            border: "1px solid rgba(209, 213, 219, 0.5)"
         }}
        >
        <button
        className = "btn"
        style = {{ 
            width: "100%",
            position: "relative",
            textAlign: "center",
            cursor: "pointer",
            fontSize:"1.5em"
         }}
         onClick = { ()=>{toggle()}}
         type = "button">
         {title ? title.toUpperCase() : ""}
        </button>
        <div
        style = {{ display: isShowing ? "block" : "none",
                         padding: "5px" }} 
        >
        { content ? <iframe className = "accordion-body" src={content} scrolling="no" frameborder="0" allowfullscreen="true" width="100%" height="400" ></iframe>:<></>}
        {children ? children : <div></div>}
        </div>
        </div>
    </div>
)
}/*dangerouslySetInnerHTML = {{ 
            __html: content
         }}    */