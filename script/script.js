{
  const welcome = () => {
    console.log("Hello!");
  }
  welcome();

  // Change Background Theme on Button Click Function
  const changeColor = document.querySelector(".changeColor");
  const container = document.querySelector(".container");

  const onChangeBackgroundClick = () => {
    if (changeColor.innerText === "Switch to Grey Theme") {
      changeColor.innerText = "Switch to Crimson Theme";
    } else {
      changeColor.innerText = "Switch to Grey Theme";
    }
    container.classList.toggle("container");
  }
  changeColor.addEventListener("click", onChangeBackgroundClick);

  //Change Image on Button Click Function
  const changePicture = document.querySelector(".changePicture");

  const onChangeImageClick = () => {
    const firstPicture = document.querySelector(".image1");
    const img1 = "https://goingapp.pl/storage/app/uploads/public/5a6/f6c/5b7/thumb_173841_600x350_0_0_crop.jpg";
    const img2 = "https://digitalage.com.tr/wp-content/uploads/2017/07/Ronnie-James-Dio-hologramla-sahnelere-geri-donuyor.jpg";

    if (firstPicture.src === img1) {
      firstPicture.src = img2;
      changePicture.innerText = "Load Previous Picture";
    } else {
      firstPicture.src = img1;
      changePicture.innerText = "Load Another Picture";
    }
    firstPicture.classList.toggle("newClass");
  }
  changePicture.addEventListener("click", onChangeImageClick);

  // Generate Random Song on Click Function
  
  const button = document.querySelector(".button2");

  const generateRandomSongOnClick = () => {
    const span = document.querySelector(".spanDisplay");
    const random = document.querySelector(".generatedTitle");
    
    const input = prompt("Enter the number between 1 and 10");
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
  }

  button.addEventListener("click", generateRandomSongOnClick);


}