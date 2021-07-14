


export const calculateAction = (value1: number, value2: number) => {

//alert();
    return async (dispatch: any, getState: any) =>{

        //uuid forlinkid

        console.log("bp_name");

      //alert();

          let calculatedSum = value1 + value2;

        dispatch({
        //return{
            type: "CALCULATE",
            //payload: {projectId: projectId, linkName: linkName, linkDescription: linkDescription, linkDomain: linkDomain, linkUrl: linkUrl, dateAdded: moment().format()}
            payload: {sum: calculatedSum}
        //}
        });
    }
            
   

}
