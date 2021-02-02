const yearEl = document.getElementById("year");
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const milisecEl = document.getElementById("miliseconds");

// var b = prompt("Enter your Dob Format - DD/MM/YY (11 May 2001)");

function send() {
	var input = document.getElementById("data-to").value;
	const DOB = new Date(input);
	console.log(DOB);

	countDown(DOB);

	setInterval(countDown, 1000, DOB);

	console.log("ran");
}

// const DOB = new Date(input);

// countDown();

// setInterval(countDown, 1000);

// month / day / year;

function countDown(DOB) {
	const currentDate = new Date();

	var cyear = currentDate.getFullYear();
	var cmonth = currentDate.getMonth();
	var cdays = currentDate.getDate();
	var chours = currentDate.getHours();
	var cmins = currentDate.getMinutes();
	var cseconds = currentDate.getMinutes();

	var byear = DOB.getFullYear();
	var bmonth = DOB.getMonth();
	var bday = DOB.getDate();

	var finalDay = new Date(byear + 72, bmonth + 7, bday);

	let diff = finalDay - currentDate;
	// console.log(diff)

	var fyear = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
	var fmonth = Math.floor((diff / (1000 * 60 * 60 * 24 * 365)) * 12) % 12;
	var fdays =
		Math.floor((((diff / (1000 * 60 * 60 * 24 * 365)) * 12) % 12) * 30) %
		30;
	var fhours =
		Math.floor(
			(((((diff / (1000 * 60 * 60 * 24 * 365)) * 12) % 12) * 30) % 30) *
				24
		) % 24;
	var fmins =
		Math.floor(
			(((((((diff / (1000 * 60 * 60 * 24 * 365)) * 12) % 12) * 30) % 30) *
				24) %
				24) *
				60
		) % 60;
	var fseconds =
		Math.floor(
			(((((((((diff / (1000 * 60 * 60 * 24 * 365)) * 12) % 12) * 30) %
				30) *
				24) %
				24) *
				60) %
				60) *
				60
		) % 60;
	var fmilisecond =
		Math.floor(
			(((((((((((diff / (1000 * 60 * 60 * 24 * 365)) * 12) % 12) * 30) %
				30) *
				24) %
				24) *
				60) %
				60) *
				60) %
				60) *
				1000
		) % 1000;
	//   console.log(`minutes left ${fmins}`)
	// console.log(`Hours left : ${fhours}`)
	//   console.log(`Month left : ${fmonth}`)
	//   console.log(`Days left : ${fdays}`)
	//   console.log(`Year left ${fyear}`)
	//   console.log(`Seconds left ${fseconds}`)

	yearEl.innerHTML = fyear;
	monthsEl.innerHTML = fmonth;
	daysEl.innerHTML = fdays;
	hoursEl.innerHTML = fhours;
	minsEl.innerHTML = fmins;
	secondsEl.innerHTML = fseconds;
	// milisecEl.innerHTML = fmilisecond;
}

// function saveValue() {
// 	username = document.getElementById("userInput").value;
// 	console.log(username);
// }

// console.log(username);
