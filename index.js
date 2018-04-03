$(document).ready(()=>{

//functions to toggle collapsable items
$("#acc1").click(() => {

                $("#one1").slideToggle();
                $("#two2").slideUp();
                $("#three3").slideUp();

    }) ;
$("#acc2").click(() => {

                $("#two2").slideToggle();
                $("#one1").slideUp();
                $("#three3").slideUp();

    }) ;
$("#acc3").click(() => {

                $("#three3").slideToggle();
                $("#one1").slideUp();
                $("#two2").slideUp();
    }) 

})
