// // draw  in the app
const drawDataList = e => {
    let data = document.getElementById('data'),
     allData = ` 
         <a href="#">${e.name}</a>
         <h1>${e.price}</h1>
     `;
    console.log(e.scrapped);
    let scrapped = [e.scrapped],
        res = scrapped.map((e) => {console.log(e.name) })
    if(data){
        data.insertAdjacentHTML('beforeEnd', allData);
    } 
};
// init ajaxApi
const searchHotel = (inputCity,inputCheckin,inputCheckout,inputRooms,inputAdults,inputChildrens) =>{
    let api = new XMLHttpRequest();
api.open('POST','https://reserveahora.herokuapp.com/api/v1/scrap');
api.setRequestHeader('Content-Type','application/json');
api.onprogress = () =>{
    console.log('On load');
}
api.onload = () => {
    if (api.status === 200) {
        let response = JSON.parse(api.responseText);
        console.log(response);
        drawDataList(response);
    }
}
api.send(JSON.stringify({
    "destiny":{"idcity":"-592318","type":"city","city":inputCity},"checkin":inputCheckin,"checkout":inputCheckout,"room":{"id":1,"quantity":inputRooms},"adult":{"id":2,"quantity":inputAdults},"child":""
}))
}
// get data
const getDataList = () =>{
    let inputCity= document.getElementById('city-app').value,
    inputCheckin= document.getElementById('checkin-app').value,
    inputCheckout= document.getElementById('checkout-app').value,
    inputRooms= document.getElementById('rooms-app').value,
    inputAdults= document.getElementById('adults-app').value,
    inputChildrens= document.getElementById('childrens-app').value;
    return{inputCity,inputCheckin,inputCheckout,inputRooms,inputAdults,inputChildrens};
}
const getEventList = () =>{ 
    document.getElementById("sendData").addEventListener("click",() =>{
        console.log(getDataList());
        let objectList = getDataList();
        searchHotel(objectList.inputCity,objectList.inputCheckin,objectList.inputCheckout,objectList.inputRooms,objectList.inputAdults,objectList.inputChildrens)
    });
}
if(document.getElementById("sendData")){
    getEventList();
}
// searchHotel(); 

