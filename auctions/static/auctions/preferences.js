document.addEventListener('DOMContentLoaded',function () {
    
 function checkBoxes(pref_rating) {
  var checkedValues = [];
  var checkboxes = (document.getElementsByClassName("btn-check"));

    for (var i = 0; i < checkboxes.length; i++) {
      // If the current checkbox is checked
      if (checkboxes[i].checked) {
        // Push its value to the checkedValues array
        checkedValues.push(Number(checkboxes[i].id));
      }
    }
    console.log(checkedValues)
    preference_list.push({
      "pref_rating": pref_rating,
      "item_pref_list": checkedValues
    },)

    //wipe boxes clean
    // Select all the checkbox elements
    var checkboxes = document.querySelectorAll("input[type=checkbox]");

    // Loop through the checkboxes array
    for (var i = 0; i < checkboxes.length; i++) {
      // Set the checked property to false
      checkboxes[i].checked = false;
    }
  }

/* ROUTE 5 UPLOAD USER PREFERENCE */
  function uploadPref(user_id,pref_list) {
    const api_key = "tk_qFFiCjeOGfpPaiEfVLky"
    var myHeaders = new Headers();
    myHeaders.append("api_key", api_key);
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "user_id": user_id,
      "preference_list": pref_list
    });
    console.log(user_id)
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    console.log(pref_list)
    fetch("https://trofy.onrender.com/api/getUserPreference", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      
  }


    const user_id = Number(document.getElementById('user_id').innerHTML);
    console.log(user_id)
    var preference_list = []
    moods = ["Very Sad","Sad","Content","Happy","Very Happy"]


      document.getElementById('mood').innerHTML= moods[0]
      document.getElementById('nextButton').onclick = function(){
        checkBoxes(1)

        
        document.getElementById('mood').innerHTML= moods[1]
        document.getElementById('nextButton').onclick = function(){
          checkBoxes(2)

          document.getElementById('mood').innerHTML= moods[2]
          document.getElementById('nextButton').onclick = function(){
            checkBoxes(3)

            document.getElementById('mood').innerHTML= moods[3]
            document.getElementById('nextButton').onclick = function(){
              checkBoxes(4)

              //CHANGE NEXT BUTTON TO SUBMIT 
              document.getElementById('nextButton').type = 'submit'
              document.getElementById('nextButton').value = 'Submit'


              document.getElementById('mood').innerHTML= moods[4]
              document.getElementById('nextButton').onclick = function(){
                checkBoxes(5)
                uploadPref(user_id,preference_list)




                  /* console.log(preference_list) */
                }}}}}
 
                var myHeaders = new Headers();
      })