document.addEventListener('DOMContentLoaded',function () {

    /* ROUTE 6 RETRIEVE USER PRODUCTS BASED ON PREFERENCE  */
    function route6(pref_rating,user_id) {
        var myHeaders = new Headers();
        myHeaders.append("api_key", 'tk_IpztBnJfRfUxbpZrzoJT');
      
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        console.log(user_id)
        console.log(pref_rating)
      
        fetch(`https://trofy.onrender.com/api/getUserPreference?user=${user_id}&pref_rating=${pref_rating}`, requestOptions)
          .then(response => response.json())
          .then(result => {/* console.log(result) */
                console.log(result)
                const suggestions = result["data"]
                console.log(suggestions)
               

                suggestions.forEach(food => {
                    var nameOfFood = food["Item_Name"]
                    var url = "/listing/" + food["id"]
                    const div = document.createElement('div')
                    div.innerHTML = `<h4 class="mx-1"><span><a href="${url}" id="productTitle" ">${nameOfFood}</a></span></h4> `
                    document.getElementById('oursuggestions').appendChild(div)

                    
                    
                });
                

            
            }
                
          )
          
          .catch(error => console.log('error', error)); 

        }


    document.getElementById('selectoption').style.display='block'
    document.getElementById('moodselect').style.display='none'
    document.getElementById('oursuggestions').style.display='none'
    document.getElementById('checkout').style.display='none'
    const user_id = (document.getElementById('user_id').innerHTML);


    

    const moodButton = document.getElementById('moodButton')
    const randomButton = document.getElementById('randomButton')
    
    moodButton.onclick = function() {
        /* MAKE THE TWO BUTTONS ABOVE DISSAPEAR AND LET FORM TO SELECT MOOD SHOW  */
        document.getElementById('selectoption').style.display='none'
        document.getElementById('moodselect').style.display='block'
    }

    /* MAKE FORM DISSAPEAR AND GET FOOD SUGGESTIONS  */
    document.getElementById('moodselectinput').onclick = function() {
        var mood = Number(document.getElementById('cars').value)
        console.log(user_id)
        route6(mood,user_id)
        
        document.getElementById('moodselect').style.display='none'
        document.getElementById('oursuggestions').style.display='block'

    }





})
