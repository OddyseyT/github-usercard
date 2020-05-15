/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>*/

const sample = {login: "OddyseyT", name:"Theresa", avatar_url: "https://avatars3.githubusercontent.com/u/59707867?v=4", followers: 1, following: 0, location: "Chippewa Falls", html_url: "https://github.com/OddyseyT", bio: "confused"}



/*axios.get("https://api.github.com/users/OddyseyT")

.then(response => {console.log('response', response.data)
/*response.data.forEach((i) => {
  const user = cardMaker(response.data) 
  cards.appendChild(user)
//})*/

/*.catch(err => {console.log("something went wrong")})

.then(() => {console.log("success")})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const cards = document.querySelector('.cards') 


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const cardMaker = (gitUser) => {
  const card = document.createElement('div')
  const userImg =
  document.createElement('img')
  const cardInfo =
  document.createElement('div')
  const realName =
  document.createElement('h3')
  const userName = document.createElement('p')
  const userLocation = document.createElement('p')
  const profile = document.createElement('p')
  const profileLink = document.createElement('a')
  const followerNo = document.createElement('p')
  const followingNo = document.createElement('p')
  const userBio = document.createElement('p')
  /*const link= document.createTextNode(`${gitUser.html_url}`)*/

  card.appendChild(userImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(realName)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(profileLink)
  
  cardInfo.appendChild(followerNo)
  cardInfo.appendChild(followingNo)
  cardInfo.appendChild(userBio)
 
  /*profileLink.appendChild(link)

  profileLink.title = `${gitUser.html_url}`
  profileLink.href = gitUser.html_url
  document.body.appendChild(profileLink)*/

  userImg.src = gitUser.avatar_url
  realName.textContent = gitUser.name
  userName.textContent = gitUser.login
  userLocation.textContent = `Location: ${gitUser.location}` 
  profile.textContent = "Profile:" 
  followerNo.textContent = `Followers: ${gitUser.followers}`
  followingNo.textContent = `Following: ${gitUser.following}`
  userBio.textContent = `Bio: ${gitUser.bio}`
  
profileLink.setAttribute('href', gitUser.html_url)
profileLink.innerHTML = `${gitUser.html_url}`
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  realName.classList.add('name')
  userName.classList.add('username')
  
  return card;
}

const testRun = cardMaker(sample);
cards.appendChild(testRun)
 /* {
  const newUser = cardMaker(item)
cards.appendChild(newUser)}
  );

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
