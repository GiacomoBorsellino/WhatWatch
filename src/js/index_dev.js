/* IMPORT */
import '../style.css';
import '../images/h.png';
import '../images/logo.png';
import '../images/logotipo.png';
import '../images/menu.png';
import '../images/menuClose.png';
import '../images/next.png';
import '../images/pattern-color.png';
import '../images/poster-sample.png';
import '../images/square.png';
import '../images/squareBig.png';
import '../images/square-colored.png';
import '../images/w.png';

/* OPEN MENU */
// Open/Close Menu
let count = 0;
let btnMenu = document.body.getElementsByClassName("buttonMenu")[0];
    
btnMenu.onclick = function openMenu() {

    let opening = (++count) % (2);
    
    if (opening == 0) {
        document.body.getElementsByClassName("tabContainer")[0].style.display = "none";
        document.getElementById("buttonMenu").src = "./images/menu.png";
    } else if (opening == 1) {
        document.body.getElementsByClassName("tabContainer")[0].style.display = "block";
        document.getElementById("buttonMenu").src = "./images/menuClose.png";
    }
};

/* OPEN EXPLANATION */
// Remove Intro
let introContainer = document.body.getElementsByClassName("introContainer")[0];
let start = document.body.getElementsByClassName("start")[0];
let expSubContainer = document.body.getElementsByClassName("expSubContainer")[0];
let expContainer = document.body.getElementsByClassName("expContainer")[0];

start.onclick = function introFadeOut() {
    introContainer.style.display = "none";
    document.body.getElementsByClassName("expSubContainer")[0].classList.add("expAnimation1")

    // Move the explanations
    const exp1 = () => {
    document.body.getElementsByClassName("expSubContainer")[0].classList.add("expAnimation2")
    expSubContainer.innerHTML = `<img src="./images/logotipo.png" alt="logotipo"/>
                                <p>I am here for this! I am WhathWatch and I will help you!</p>
                                <img src="./images/square.png" alt="square"/>
                                <img src="./images/square-colored.png" alt="square"/>
                                <img src="./images/square.png" alt="square"/>
                                <img src="./images/square.png" alt="square"/>`       
    };
    setTimeout(exp1, 3000);

    const exp2 = () => {
    document.body.getElementsByClassName("expSubContainer")[0].classList.add("expAnimation3")
    expSubContainer.innerHTML = `<img src="./images/logotipo.png" alt="logotipo"/>
                                <p>Click on my button and i'll recommend to you a movie on a database of 600K&nbsp;</p>
                                <img src="./images/square.png" alt="square"/>
                                <img src="./images/square.png" alt="square"/>
                                <img src="./images/square-colored.png" alt="square"/>
                                <img src="./images/square.png" alt="square"/>`  
    };
    setTimeout(exp2, 6000);

    const exp3 = () => {
    document.body.getElementsByClassName("expSubContainer")[0].classList.add("expAnimation4")
    expSubContainer.innerHTML = `<img src="./images/logotipo.png" alt="logotipo"/>
                                <p>Do you want to save the movie? Go to the menu and click "Save movie". Enjoy!</p>
                                <img src="./images/square.png" alt="square"/>
                                <img src="./images/square.png" alt="square"/>
                                <img src="./images/square.png" alt="square"/>
                                <img src="./images/square-colored.png" alt="square"/>`
    };
    setTimeout(exp3, 9000);

    const exp4 = () => {
        expContainer.style.display = "none";
    }
    setTimeout(exp4, 12000);
};

/* FETCH CALL API */
// Button for Search
let buttSearch = document.body.getElementsByClassName("search")[0];
// API Key
const key = process.env.key;

// Call of a specific movie
buttSearch.onclick = async function randomSearch() {

    // Make visible the movie card
    document.body.getElementsByClassName("cardContainer")[0].style.display = "block";
    document.body.getElementsByClassName("footerSubContainer")[0].style.display = "none";

    // Alert Error 
    document.body.getElementsByClassName("alertContainer")[0].style.display = "none";

    // Available scrolling
    if (window.innerWidth < 1364) {
        document.body.style.overflowY = "scroll";
    } else {
        document.body.style.overflowY = "hidden";

    }
    if (window.innerWidth < 1364) {
    }

    let value = Math.floor(Math.random() * 664802);

    let posterUrl = `https://image.tmdb.org/t/p/original`;
    
    let url = `https://api.themoviedb.org/3/movie/${value}?api_key=${key}&language=en-US`;

    let titleCard = document.getElementById("title");
    let imgCard = document.getElementById("imgCard")
    let yearCard = document.getElementById("year");
    let genCard = document.getElementById("gen");
    let overviewCard = document.body.getElementsByClassName("overview")[0];


    try {
        const fet = await fetch(url);
            if (fet.ok) {
                const response = await fet.json();

                const title = await response.title;
                title ? titleCard.innerText = title : titleCard.innerText = "No title found";

                const poster = await response.poster_path;          
                poster ? imgCard.src = posterUrl+poster : imgCard.src = `./images/poster-sample.png`;
      
                const genres = await response.genres;
                if (genres.length !== 0) {
                    genCard.innerText = "";
                    genres.map(
                        gen => {
                            genCard.append(`${gen.name} `)
                        }
                    ) 

                } else {
                    genCard.innerText = "No genres found";
                }

                const release = await response.release_date;
                release ? yearCard.innerText = release.substring(0, 4) : yearCard.innerText ="No release date found";

                const overview = await response.overview;  
                if (overview.length !== 0) {
                    overviewCard.textContent = overview;

                } else if (overview.length == 0) {
                    overviewCard.textContent = "No overview found";              
                }  
                    
                // Adult filter
                const adult = response.adult;
                if (adult == true) {
                    imgCard.style.filter = "blur(7px)";
                    document.body.getElementsByClassName("alertAdult")[0].style.display = "block";
                } 
                
                if (adult == false) {
                    setTimeout(() => {
                        imgCard.style.filter = "blur(0px)";
                        document.body.getElementsByClassName("alertAdult")[0].style.display = "none";                           
                    }, 400)
                }

            } else if (!fet.ok){
                randomSearch();
                console.log("recall")
            }    
    } catch (error) {
        document.body.getElementsByClassName("alertContainer")[0].style.display = "block";
        console.log("errore")
    } 
};

/* REMOVE ADULT FILTER */
let butt = document.body.getElementsByClassName("alertAdult")[0];

butt.onclick = function removeAdultFilter() {
    document.body.getElementsByClassName("alertAdult")[0].style.display = "none";
    imgCard.style.filter = "blur(0px)";
};

/* LOCAL STORAGE */
let countMovie = 0;
let buttonStorage = document.body.getElementsByClassName("storage")[0];

buttonStorage.onclick = function storage() {

    // Up the count of Movie
    let countMovieUpped = (++countMovie);
    localStorage.setItem("countMovie", countMovieUpped);
    console.log(countMovieUpped)

  if (typeof(Storage) !== "undefined") {
 
    // Saved Movie 1
    if (countMovieUpped == 1) {
      // Store
      // Total Movie Card
      localStorage.setItem("movie1", cardContainer.outerHTML);
      // Info
      localStorage.setItem("infoPosterCard1", imgCard.src)
      localStorage.setItem("infoTitleCard1", title.innerText)

      // Inject values in savedCard
      document.getElementById("imgInfoCard1").src = localStorage.getItem("infoPosterCard1")

      if (localStorage.getItem("infoTitleCard1").length > 10) {
        document.getElementById("titleInfoCard1").innerText = `${localStorage.getItem("infoTitleCard1").substring(0,7)}...`
      } else if (localStorage.getItem("infoTitleCard1").length < 10) {
        document.getElementById("titleInfoCard1").innerText = localStorage.getItem("infoTitleCard1")
      }
    } else if (countMovieUpped == 2) {
      // Store
      // Total Movie Card
      localStorage.setItem("movie2", cardContainer.outerHTML);
      // Info
      localStorage.setItem("infoPosterCard2", imgCard.src)
      localStorage.setItem("infoTitleCard2", title.innerText)

      // Inject values in savedCard
      document.getElementById("imgInfoCard2").src = localStorage.getItem("infoPosterCard2")

      if (localStorage.getItem("infoTitleCard2").length > 10) {
        document.getElementById("titleInfoCard2").innerText = `${localStorage.getItem("infoTitleCard2").substring(0,7)}...`
      } else if (localStorage.getItem("infoTitleCard2").length < 10) {
        document.getElementById("titleInfoCard2").innerText = localStorage.getItem("infoTitleCard2")
      }
    } else if (countMovieUpped == 3) {
      // Store
      // Total Movie Card
      localStorage.setItem("movie3", cardContainer.outerHTML);
      // Info
      localStorage.setItem("infoPosterCard3", imgCard.src)
      localStorage.setItem("infoTitleCard3", title.innerText)

      // Inject values in savedCard
      document.getElementById("imgInfoCard3").src = localStorage.getItem("infoPosterCard3")

      if (localStorage.getItem("infoTitleCard3").length > 10) {
        document.getElementById("titleInfoCard3").innerText = `${localStorage.getItem("infoTitleCard3").substring(0,7)}...`
      } else if (localStorage.getItem("infoTitleCard3").length < 10) {
        document.getElementById("titleInfoCard3").innerText = localStorage.getItem("infoTitleCard3")
      }

      // Reset Count Movie
      countMovie = 0
      localStorage.setItem("countMovie", 1);
      
    } else {
      alert(localStorage.getItem("Sorry, your browser does not support Web Storage..."));
    }   

  }
}

// Click on Saved Movie
function clickSavedMovie1() {
  document.body.getElementsByClassName("cardContainer")[0].outerHTML = localStorage.getItem("movie1");
}

function clickSavedMovie2() {
  document.body.getElementsByClassName("cardContainer")[0].outerHTML = localStorage.getItem("movie2");
}

function clickSavedMovie3() {
  document.body.getElementsByClassName("cardContainer")[0].outerHTML = localStorage.getItem("movie3");
}


// Perpetuation Movie 1
if (localStorage.getItem("infoPosterCard1")) {
  document.getElementById("imgInfoCard1").src = localStorage.getItem("infoPosterCard1")
} else {
  document.getElementById("imgInfoCard1").src = "./images/poster-sample.png";
}

if (localStorage.getItem("infoTitleCard1").length > 10) {
  document.getElementById("titleInfoCard1").innerText = `${localStorage.getItem("infoTitleCard1").substring(0,7)}...`
} else if (localStorage.getItem("infoTitleCard1").length < 10) {
  document.getElementById("titleInfoCard1").innerText = localStorage.getItem("infoTitleCard1")
}

// Perpetuation Movie 2
if (localStorage.getItem("infoPosterCard2")) {
  document.getElementById("imgInfoCard2").src = localStorage.getItem("infoPosterCard2")
} else {
  document.getElementById("imgInfoCard2").src = "./images/poster-sample.png";
}

if (localStorage.getItem("infoTitleCard2").length > 10) {
  document.getElementById("titleInfoCard2").innerText = `${localStorage.getItem("infoTitleCard2").substring(0,7)}...`
} else if (localStorage.getItem("infoTitleCard2").length < 10) {
  document.getElementById("titleInfoCard2").innerText = localStorage.getItem("infoTitleCard2")
}

// Perpetuation Movie 3
if (localStorage.getItem("infoPosterCard3")) {
  document.getElementById("imgInfoCard3").src = localStorage.getItem("infoPosterCard3")
} else {
  document.getElementById("imgInfoCard3").src = "./images/poster-sample.png";
}

if (localStorage.getItem("infoTitleCard3").length > 10) {
  document.getElementById("titleInfoCard3").innerText = `${localStorage.getItem("infoTitleCard3").substring(0,7)}...`
} else if (localStorage.getItem("infoTitleCard3").length < 10) {
  document.getElementById("titleInfoCard3").innerText = localStorage.getItem("infoTitleCard3")
};