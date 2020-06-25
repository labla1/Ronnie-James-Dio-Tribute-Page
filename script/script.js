const welcome = () => {
  console.log("Hello!");
}
welcome  ();

let changeColor = document.querySelector(".changeColor");
let container = document.querySelector(".js-container");

container.classList.remove("js-container");

changeColor.addEventListener("click", () => {
    if (changeColor.innerText === "Switch to Grey Theme") {
        changeColor.innerText = "Switch to Crimson Theme";
    } else {
        changeColor.innerText = "Switch to Grey Theme";
    } 
    container.classList.toggle("container")
});

let changePicture = document.querySelector(".changePicture");
let firstPicture = document.querySelector(".image1");
let secondPicture = document.querySelector(".newClass");
let img1 = "https://goingapp.pl/storage/app/uploads/public/5a6/f6c/5b7/thumb_173841_600x350_0_0_crop.jpg";
let img2 = "https://digitalage.com.tr/wp-content/uploads/2017/07/Ronnie-James-Dio-hologramla-sahnelere-geri-donuyor.jpg"

changePicture.addEventListener("click", () => {
    if (firstPicture.src === img1) {
        firstPicture.src = img2 ;
        changePicture.innerText = "Load Previous Picture";
    } else {
        firstPicture.src = img1;
        changePicture.innerText = "Load Another Picture";
    }
    firstPicture.classList.toggle("newClass");
})


console.log(changePicture);

let button = document.querySelector(".button2");
let random = document.querySelector(".generatedTitle");
let span = document.querySelector(".spanDisplay");

button.addEventListener("click", () => {
  
  let input = prompt("Enter the number between 1 and 10");
  span.classList.remove("spanDisplay");
  
  switch (input) {
    default:
      prompt("Enter valid number '(1-10)'");
      break;
    case "1":
      random.innerText = "♪ Don't Talk to Strangers ♪";
      break;
    case "2":
      random.innerText = "♪ Straight Through the Heart ♪";
      break;
    case "3":
      random.innerText = "♪ Dream On ♪";
      break;
    case "4":
      random.innerText = "♪ Rock 'n' Roll Children ♪";
      break;
    case "5":
      random.innerText = "♪ The Last in Line ♪";
      break;
    case "6":
      random.innerText = "♪ We Rock ♪";
      break;
    case "7":
      random.innerText = "♪ All the Fools Sailed Away ♪";
      break;
    case "8":
      random.innerText = "♪ Hungry for Heaven ♪";
      break;
    case "9":
      random.innerText = "♪ Stand Up and Shout ♪";
      break;
    case "10":
      random.innerText = "♪ Sacred Heart ♪";
      break;
  } 
});

