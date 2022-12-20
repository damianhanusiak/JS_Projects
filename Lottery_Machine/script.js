const lotteryImg = document.querySelector(".lottery");
const playBtn = document.querySelector(".play");
const mainP = document.querySelector("main p");
const winAlert = document.querySelector(".win-alert");
const code = document.querySelector(".code");

const awardTexts = [
	"DARMOWA DOSTAWA POWYŻEJ 69.99 ZŁ (W DNIACH 25.11 I 28.11) Z KODEM: <span>DOSTAWA</span>",
	"BRAWO! TWOJA NAGRODA TO 20% RABATU NA <span>PUDER</span>",
	"BRAWO! TWOJA NAGRODA TO 30% RABATU NA <span>SZCZOTKĘ</span>",
	"BRAWO! TWOJA NAGRODA TO 40% RABATU NA <span>SZMINKĘ</span>",
	"BRAWO! TWOJA NAGRODA TO 50% RABATU NA <span>TUSZ</span>",
];

const awards = [
	"KOD<span>DOSTAWA</span>",
	"<img src='img/puder.webp' alt='puder' class='puder'>",
	"<img src='img/szczotka.webp' alt='szczotka' class='szczotka'>",
	"<img src='img/szminka.webp' alt='szminka' class='szminka'>",
	"<img src='img/tusz.webp' alt='tusz' class='tusz'>",
];

let i = 0;

const drawAward = () => {
	mainP.style.display = "none";
	winAlert.style.display = "none";
	code.style.display = "none";

	const it = setInterval(() => {
		lotteryImg.setAttribute("src", `img/b${i}.webp`);
		i++;
		if (i === 60) {
			clearInterval(it);
			mainP.style.display = "block";
			mainP.innerHTML = awards[Math.floor(Math.random() * awards.length)];
			winAlert.style.display = "block";
			code.style.display = "block";
			const pImg = document.querySelector("main p img");

			if (mainP.textContent.includes("DOSTAWA")) {
				winAlert.innerHTML = awardTexts[0];
			} else if (pImg.classList.contains("puder")) {
				winAlert.innerHTML = awardTexts[1];
			} else if (pImg.classList.contains("szczotka")) {
				winAlert.innerHTML = awardTexts[2];
			} else if (pImg.classList.contains("szminka")) {
				winAlert.innerHTML = awardTexts[3];
			} else if (pImg.classList.contains("tusz")) {
				winAlert.innerHTML = awardTexts[4];
			}
		}
	}, 50);
	i = 0;
};

playBtn.addEventListener("click", drawAward);
