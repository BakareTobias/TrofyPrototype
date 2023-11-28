document.addEventListener('DOMContentLoaded',function () {
  const api_key = "tk_vjeQgvtHiRqChNeFbnvK"

  

/* ROUTE 1 FETCH API KEY */
/* console.log(2)
   var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");




  var raw = JSON.stringify({
    "db_string": "postgres://trofy_database_user:Ora1vP2VKiHmnVEYxWn7Nk3LrJVOPqdk@dpg-clfjf16r45ec738b7d2g-a.oregon-postgres.render.com/trofy_database",
    "db_type": "sql",
    "nameOfDb": "postgresql",
    "groupTable": "auctions_category",
    "itemTable": "auctions_listing",
    "dbName": "TrofyDB",
    "foreignKey": "Category_id",
    "primaryKey": "id"
  });


   var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://trofy.onrender.com/api/getAPIKey", requestOptions)
    .then(response => response.json())
    .then(result => {
      const api_key =Object.values(result);
      console.log(api_key)

     
    .catch(error => console.log('error', error));
    }) */  
 

    
   /*ROUTE 2 GET DATABASE DETAILS */
    /* var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
    'api_key':api_key
    }

  };
  
  fetch(`https://trofy.onrender.com/api/connectionData?api_key={{api_key}}`, requestOptions)
    .then(response => response.json())
    .then(result => {          
      console.log(result)                   
    })
    .catch(error => console.log('error', error)); 

 */
  /* ROUTE 3 UPDATE DB DETAILS */
  /* var myHeaders = new Headers();
    myHeaders.append("api_key", api_key);
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "db_string": "mongodb+srv://wurafadaka:2KnhrZmyt77LWfHP@wurafadaka.9vc2yie.mongodb.net/?retryWrites=true&w=majority",
      "db_type": "nosql",
      "nameOfDb": "Mongodb",
      "col_table_name": "products",
      "dbName": "FADAKA"          }); 
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch("https://trofy.onrender.com/api/connectionData", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
      })
      .catch(error => console.log('error', error)); 
  
   */
    /* ROUTE 4 VIEW GROUP DATA  */
    /*  var myHeaders = new Headers();
    myHeaders.append("api_key", api_key);
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    fetch("https://trofy.onrender.com/api/fetchGroups", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error)); */
  
  
    /* ROUTE 5 UPLOAD USER PREFERENCE */
  /* var myHeaders = new Headers();
    myHeaders.append("api_key", api_key);
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "user_id": "1",
      "preference_list": [
        {
          "pref_rating": 5,
          "item_pref_list": [
            1
          ]
        },
        {
          "pref_rating": 4,
          "item_pref_list": [
            3
          ]
        }
      ]
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch("https://trofy.onrender.com/api/getUserPreference", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error)); */
   
  
    /* ROUTE 6 RETRIEVE USER PRODUCTS BASED ON PREFERENCE  */
    /* function route6() {
    var myHeaders = new Headers();
    myHeaders.append("api_key", api_key);
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    fetch("https://trofy.onrender.com/api/getUserPreference?user=1&pref_rating=4", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error)); 
        
    } */

  

  
  
  }) 




