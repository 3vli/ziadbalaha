import { surahs } from "../auth/constants";

const surahList = document.getElementById("surah-list");

surahs.forEach((surah) => {
	const card = document.createElement("div");
	card.className = "card";
	card.onclick = () => {
		showSurahSection(surah.number);
	};

	const cardNumber = document.createElement("div");
	cardNumber.className = "card-number";
	cardNumber.textContent = String(surah.number);

	const cardContent = document.createElement("div");
	cardContent.className = "card-content";

	const surahName = document.createElement("span");
	surahName.textContent = surah.name;

	const surahDetails = document.createElement("p");
	surahDetails.innerHTML = `
		<span><i class="fa-solid fa-location-crosshairs"></i> ${surah.type}</span>
		<i class="fa-solid fa-minus"></i>
		<span>${surah.ayat} Ayat</span>`;

	cardContent.appendChild(surahName);
	cardContent.appendChild(surahDetails);

	card.appendChild(cardNumber);
	card.appendChild(cardContent);

	surahList?.appendChild(card);
});

function showSurahSection(surahNumber: number) {
	const surah = surahs[surahNumber - 1];
	window.location.href = `/surah?surahNumber=${surah.number}&juzNumber=${surah.juz[0]}`;
}
