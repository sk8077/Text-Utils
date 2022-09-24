import React from 'react'

function Alert(props){
    const capatilize=(word)=>{
        const lower =word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        //if props.alert evaluates as false then do nothong and props.alert evaluates true then evaluate code ahead of that   
        <div style={{height: "65px"}}>
        {props.alert && <div className={`alert alert-${props.alert.msg_type} alert-dismissible fade show`} role="alert">
            <strong>{capatilize(props.alert.msg_type)}</strong>: {props.alert.msg}
        </div>}
        </div>
    )
}
export default Alert