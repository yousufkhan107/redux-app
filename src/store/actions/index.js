const addcounteraction = ()=>{
    return(dispatch)=>{
        dispatch({
            type: "add"
        })
    }
}

const minuscounteraction = ()=>{
    return(dispatch)=>{
        dispatch({
            type: "sub"
        })
    }
}

export {addcounteraction,minuscounteraction}