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
    




function moreInfo(id) { 
    
      debugger;

$.ajax({
type:'GET',
url:"https://api.coingecko.com/api/v3/coins",
        dataType: "json",
        success: function(data){
                 $.each(data,function(i,data){
//  $data.append('<li> name: '+id+'image is :'+Image.thumb+'</li>');

             })
            },
headers:{
"Authorization":"Bearer fngfmgngmfgn"
}


}).done(function(resp){


var resp_str=JSON.stringify(resp);
$('#myPopup').append(resp_str);
var meta_obj=resp.meta;

var data_obj=resp.data;
// var summary_obj=data_obj.summary;

// var templates_obj=data_obj.templates;
var formatted_html="Coin name "+data_obj.data-+"</br>";
$("#myPopup").append(formatted_html);
})

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
    var popup = document.getElementById("myPopup");
    
    popup.classList.toggle("show");

}

    function myFunction() {
 
        var btn = document.createElement("card-group");
        document.body.appendChild(btn);
      }
  