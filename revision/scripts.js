window.onload = function() {
    fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(json => this.viewData(json.data));

}

function viewData(data) {
    var mydata = document.getElementById('myData');
    for (let datum of data) {
        // for (let i=0; i<data.lenght; i++)
        mydata.innerHTML += `
        <div class="card m-1" id= "crad-${datum.id}" onclick="viewMore(${datum.id})">
            <h6>User ID: ${datum.id}</h6>
            <div class="card-body">
                ${datum.first_name} ${datum.last_name}
            </div>
        </div>
        `;
    }
}

function viewMore(id) {
    let data = fetch(`https://reqres.in/api/users/${id}`).then(res => res.json()).then(json => console.log(json));
}