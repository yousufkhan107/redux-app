
const intialstate ={
    globalcounter :0
};






const addcounterreducer = (state = intialstate , action)=>{
    switch(action.type){
        case "add":
        return {
            globalcounter : ++state.globalcounter
        }

        case "sub":
        return {
            globalcounter : --state.globalcounter
        }
        default :
        return{
            ...state
        }
    }
}

export default addcounterreducer;