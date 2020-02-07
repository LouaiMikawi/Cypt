//This is the function to call the data from the API server
function callCoins() {    
    $.ajax({
        type:'GET',
        url: "https://api.coingecko.com/api/v3/coins/list",
        dataType: "json",
        success: function(data){
            console.log('success' , data);
            // for(let i=0;i<100;i++){
            //     $(".coins").append(`
            //         <div class="coin">
            //             <span>
            //                 <p id="coin-sym">${data[i].symbol}</p>
            //                 <p>${data[i].name}</p>
            //                 <button class="btn btn-primary" data-toggle="collapse" data-target="#a${data[i].id}">More Info</button>
            //                 <div class="collapse" id="a${data[i].id}">example</div>
            //             </span>
            //             <div class="custom-control custom-switch">
            //              <input type="checkbox" class="custom-control-input" id="b${data[i].id}">
            //              <label class="custom-control-label" for="#b${data[i].id}"></label>
            //             </div>
            //         </div>
            //         </br>
            //     `)
    
//            }
        }
    })
    }
    




function moreInfo(id) {  /* change 1 - added id parameter*/
        //alert(id);
    $.ajax({
        type: 'GET',
        url: "https://api.coingecko.com/api/v3/coins/"+id, /* change 2 - added the id parameter to the api call */
        dataType: "json",
        success: function(data){
          console.log(data);
            // $(".collapse").append(`
            //     <div class="moreInfo">
            //         <span>
            //             <p>${data.image.thumb}</p>
            //         </span>
            //     </div>
            // `)
        }
    })
}

    function myFunction() {
        debugger;
        var btn = document.createElement("card-group");
        document.body.appendChild(btn);
      }
  