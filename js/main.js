const leftBtn = document.querySelector(".caruosele__btn-left");
const rightBtn = document.querySelector(".caruosele__btn-right");
// карточки
const firstCard = document.querySelector(".peru");
const secondCard = document.querySelector(".swiz");
const thirdCard = document.querySelector(".usa");
// Текст карточек
const firstCardText = document.querySelector(".text_peru");
const secondCardText = document.querySelector(".text_swiz");
const thirdCardText = document.querySelector(".text_usa");
// Поле для фонового изображения
const changeBg = document.querySelector(".heroSection");
// Текст местоположения
const changeText = document.querySelector("h1");
// Цифры сбоку
const firstNum = document.querySelector(".first");
const secondNum = document.querySelector(".second");
const thirdNum = document.querySelector(".third");






function updateCardVisibility() {
    const isMobile = window.innerWidth < 768; // Определяем устройство
    if(isMobile){
        thirdCard.classList.add("hidden");
        thirdCard.classList.remove("inactive");
        leftBtn.onclick = () => {
            if (firstCard.classList.contains("hidden")&&thirdCard.classList.contains("inactive")) {
                thirdCard.classList.add("hidden");
                secondCard.classList.add("inactive");
                firstCard.classList.remove("hidden");
                firstCard.classList.remove("inactive");
                leftBtn.classList.add("inactiveBtn");
                rightBtn.classList.remove("inactiveBtn");
                secondCardText.classList.add("inactive");
                firstCardText.classList.remove("inactive");
                changeBg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../public/Peru.jpg')";
                changeText.innerHTML = "Machu <br> Picchu";
                firstNum.style.color = "var(--color-brand-orange)";
                secondNum.style.color = "white";
                thirdNum.style.color = "white";
            }else if(secondCard.classList.contains("inactive")){
                thirdCard.classList.add("inactive");
                secondCard.classList.remove("inactive");
                rightBtn.classList.remove("inactiveBtn");
                thirdCardText.classList.add("inactive");
                secondCardText.classList.remove("inactive");
                changeBg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../public/Switzerland.jpg')";
                changeText.innerHTML = "Berom <br> ünster";
                firstNum.style.color = "white";
                secondNum.style.color = "var(--color-brand-orange)";
                thirdNum.style.color = "white";
            }else{
                leftBtn.classList.add('shake');
                leftBtn.addEventListener('animationend', () => {
                    leftBtn.classList.remove('shake');
                  });
            }
        };
        rightBtn.onclick = () =>{
            if (firstCard.classList.contains("hidden")) {
                secondCard.classList.add("inactive");
                thirdCard.classList.remove("inactive");
                firstCard.classList.add("inactive");
                thirdCardText.classList.remove("inactive");
                secondCardText.classList.add("inactive");
                setTimeout(() => {
                    rightBtn.classList.add("inactiveBtn");
                }, 1);
                changeBg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../public/USA.jpg')";
                changeText.innerHTML = "New <br> york, <br> DC";
                firstNum.style.color = "white";
                secondNum.style.color = "white";
                thirdNum.style.color = "var(--color-brand-orange)";
            }
            else{
                firstCard.classList.add("hidden");
                secondCard.classList.remove("inactive");
                thirdCard.classList.remove("hidden");
                thirdCard.classList.add("inactive");
                leftBtn.classList.remove("inactiveBtn");
                firstCardText.classList.add("inactive");
                secondCardText.classList.remove("inactive");
                changeBg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../public/Switzerland.jpg')";
                changeText.innerHTML = "Berom <br> ünster";
                firstNum.style.color = "white";
                secondNum.style.color = "var(--color-brand-orange)";
                thirdNum.style.color = "white";
            }
            if(rightBtn.classList.contains("inactiveBtn")){
                rightBtn.classList.add('shake');
                rightBtn.addEventListener('animationend', () => {
                    rightBtn.classList.remove('shake');
                  });
            }
        }
    }
    else{
        thirdCard.classList.remove("hidden");
        thirdCard.classList.add("inactive");
        // horizontal devie
        leftBtn.onclick = () =>{
            if(secondCard.classList.contains("inactive")&&thirdCard.classList.contains("inactive")){
                leftBtn.classList.add('shake');
                leftBtn.addEventListener('animationend', () => {
                    leftBtn.classList.remove('shake');
                  });
            } else if(firstCard.classList.contains("inactive")&&thirdCard.classList.contains("inactive")){
                firstCard.classList.remove("inactive");
                secondCard.classList.add("inactive");
                leftBtn.classList.add("inactiveBtn");
                secondCardText.classList.add("inactive");
                firstCardText.classList.remove("inactive");
                changeBg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../public/Peru.jpg')";
                changeText.innerHTML = "Machupicchu";
                firstNum.style.color = "var(--color-brand-orange)";
                secondNum.style.color = "white";
                thirdNum.style.color = "white";
            } else if(firstCard.classList.contains("inactive")&&secondCard.classList.contains("inactive")){
                thirdCard.classList.add("inactive");
                secondCard.classList.remove("inactive");
                rightBtn.classList.remove("inactiveBtn");
                changeBg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../public/Switzerland.jpg')";
                changeText.innerHTML = "Beromünster";
                firstNum.style.color = "white";
                secondNum.style.color = "var(--color-brand-orange)";
                thirdNum.style.color = "white";
                firstCardText.classList.add("inactive");
                secondCardText.classList.remove("inactive");
                thirdCardText.classList.add("inactive");
            }
        }
        rightBtn.onclick = () =>{
            if(secondCard.classList.contains("inactive")&&thirdCard.classList.contains("inactive")){
                firstCard.classList.add("inactive");
                secondCard.classList.remove("inactive");
                leftBtn.classList.remove("inactiveBtn");
                firstCardText.classList.add("inactive");
                secondCardText.classList.remove("inactive");
                changeBg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../public/Switzerland.jpg')";
                changeText.innerHTML = "Beromünster";
                firstNum.style.color = "white";
                secondNum.style.color = "var(--color-brand-orange)";
                thirdNum.style.color = "white";

            }
            else if(firstCard.classList.contains("inactive")&&thirdCard.classList.contains("inactive")){
                secondCard.classList.add("inactive");
                thirdCard.classList.remove("inactive");
                rightBtn.classList.add("inactiveBtn");
                changeBg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../public/USA.jpg')";
                changeText.innerHTML = "NewYork, DC";
                firstNum.style.color = "white";
                secondNum.style.color = "white";
                thirdNum.style.color = "var(--color-brand-orange)";
                thirdCardText.classList.remove("inactive");
                secondCardText.classList.add("inactive");
            }
            else if(firstCard.classList.contains("inactive")&&secondCard.classList.contains("inactive")){
                rightBtn.classList.add('shake');
                rightBtn.addEventListener('animationend', () => {
                    rightBtn.classList.remove('shake');
                  });
            }
        }
    }
  }
  window.addEventListener('load', updateCardVisibility);
