 const getUsersButton = document.querySelector(".button");
 const cardsContainer = document.querySelector(".card_container");
 const userList = document.getElementById("users");
 const singleUser = async (event) => {
   const user = event.target.value;
   console.log(user);
   const response = await fetch(
     `https://jsonplaceholder.typicode.com/users?name=${user}`
   );
   const [data] = await response.json();
   console.log(data);
   console.log(data.name);
   const userCard = `
     
   <article class="user_card">
     <div class="user"> 
       <h3 class="user_name">${data.name}</h3>
       <div class="user_information">
       <p class="user_username">username: ${data.username}</p>
       <p class="user_address">city: ${data.address.city}</p>
       <p class="user_email">email: ${data.email}</p>
       <p class="country_phone">phone: ${data.phone}</p>
       </div>
     </div>
   </article>
   `;
   cardsContainer.insertAdjacentHTML("beforeend", userCard);
 };
 
 userList.addEventListener("change", singleUser);

