// // draw  in the app
const drawDataList = e => {
    let container = document.querySelector('.content'),
        allData = '',
        hotels = e.scrapped;
    
    for(let hotel of hotels){
       allData = ` 
           <a href="#">${hotel.name}</a>
           <h1>$${hotel.price}</h1>
       `;
      container.insertAdjacentHTML('beforeEnd', allData);
     }
     idLogin = e.scrapped;
     for(let idLog of idLogin){
         console.log(idLogin[0].id);
     }
  };
  // init ajaxApi
  const searchHotel = (inputCity,inputCheckin,inputCheckout,inputRooms,inputAdults,inputChildrens,res) =>{
      let api = new XMLHttpRequest();
  api.open('POST','https://reserveahora.herokuapp.com/api/v1/scrap');
  api.setRequestHeader('Content-Type','application/json');
  api.onprogress = () =>{
      console.log('On load');
  }
  api.onload = () => {
      if (api.status === 200) {
          let response = JSON.parse(api.responseText);
          drawDataList(response);
          let res = idLogin[0].id;
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
  
  