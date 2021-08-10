export const Create = (container1: JQuery,container2: JQuery): void=>{

    //Verify if kendogrid is available
    container1.kendoGrid();

    //Verify if auctocomplete is available
    container2.kendoAutoComplete();

    //Use Jquery
    container2.css('display', 'block')

   
}