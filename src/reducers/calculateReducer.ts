interface IState {
    sum?: number;
}


const initialState = {sum: 0};


const linksReducer = (state: IState = initialState, action: any) => {
    //alert("1");

    var temp_state: any;
    var index = 0;

    switch(action.type){
        case "CALCULATE":
        	
            return {sum: action.payload.sum};
        

        default:
            return state
    }
}
export default linksReducer;