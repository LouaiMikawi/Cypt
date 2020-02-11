//This is the function to call the data from the API server
// function callCoins() {    
// var $data=$('#data');
//     $.ajax({
//         type:'GET',
//         url: "https://api.coingecko.com/api/v3/coins/list",
//         dataType: "json",
//         success: function(data){
//             $.each(data,function(i,data){
// $data.append('<li> name: '+id+'image is :'+Image.thumb+'</li>');

//             })
//             console.log('success' , data);
//             // for(let i=0;i<100;i++){
//             //     $(".coins").append(`
//             //         <div class="coin">
//             //             <span>
//             //                 <p id="coin-sym">${data[i].symbol}</p>
//             //                 <p>${data[i].name}</p>
//             //                 <button class="btn btn-primary" data-toggle="collapse" data-target="#a${data[i].id}">More Info</button>
//             //                 <div class="collapse" id="a${data[i].id}">example</div>
//             //             </span>
//             //             <div class="custom-control custom-switch">
//             //              <input type="checkbox" class="custom-control-input" id="b${data[i].id}">
//             //              <label class="custom-control-label" for="#b${data[i].id}"></label>
//             //             </div>
//             //         </div>
//             //         </br>
//             //     `)
    
// //            }
//         }
//     })
//     }
    
$(document).ready(function() {
    var e = $('.card-group');
    for (var i = 0; i < 5; i++) {
      e.clone().insertAfter(e);
    }
});



function moreInfo(id){  
    
    //   debugger;



// $.ajax({
// type:'GET',
// url:"https://api.coingecko.com/api/v3/coins",
//         dataType: "json",
//         success: function(data){
//                  $.each(data,function(i,data){
//  $data.append('<li> name: '+id+'image is :'+Image.thumb+'</li>');

//              })
//             },
// // headers:{
// "Authorization":"Bearer fngfmgngmfgn"
// }


// }).
// done(function(resp){

// // var summary_obj=data_obj.summary;

// // var templates_obj=data_obj.templates;
// var formatted_html="Coin name "+data_obj+"</br>";
// $("#myPopup").append(formatted_html);
// })

// }

// })

    /* change 1 - added id parameter*/
        //alert(id);
    // $.ajax({
        
    //     type: 'GET',
    //     url: "https://api.coingecko.com/api/v3/coins/"+id, /* change 2 - added the id parameter to the api call */
    //     dataType: "json",
    //     success: function(data){
    //         // var $data=$('#data');
    //         // $.each(data,function(i,items){
    //         //     $data.append('<li> name: '+id+'image is :'+Image.thumb+'</li>');
    //       console.log(data);
          
    //         //  $(".collapse").append(`
    //         //      <div class="moreInfo">
    //         //          <span>
    //         //              <p>${data.image.thumb}</p>
    //         //          </span>
    //         //      </div>
    //         //  `)
    //         // });  
    //     }
    // }) 
        //   debugger;

    var myInit={method:'GET',
                headers:{
                    'Content-Type':'https://api.coingecko.com/api/v3/coins'
                },
                mode:'cors',
                cache:'default'};



    // };
let myRequest =new Request ("https://api.coingecko.com/api/v3/coins",myInit);
fetch(myRequest)
.then(function(resp){

    return resp.json();
})

.then(function(data){
    debugger;
    for(let i=0;i<100;i++){
    console.log(data[i].name);

    var formatted_html=`<div id=Coin_name>"Coin name "${data[0].name}"</br>"</div>
    
    <span class="popuptext" id="myPopup">${data[0].name[0]}</span> 

    `; 

      
     var popup = document.getElementById("myPopup");
     popup.classList.toggle("show");
    
    
    $("#Coin_name").append(formatted_html);
  } 

});


    function myFunction() {
 
        var btn = document.createElement("card-group");
        document.body.appendChild(btn);
      }
    }