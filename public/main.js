const open = document.getElementById("openInvitation");
const hero = document.getElementById("contentHero");
const audio = document.getElementById("audio");
const stop = document.getElementById("stop");
let kirim = document.getElementById("kirim");

function BukuTamu() {
	let name = document.getElementById("nama").value;
	let hp = document.getElementById("hp").value;
	let alamat = document.getElementById("alamat").value;
	let ucapan = document.getElementById("ucapan").value;
	let tbody = document.getElementById("tbody");
	let no = tbody.childElementCount;

	tbody.innerHTML += `
	                    <tr>
	                        <td>${no + 1}</td>
	                        <td>${name}</td>
	                        <td>${hp}</td>
	                        <td>${alamat}</td>
	                        <td>${ucapan}</td>
	                    </tr>
	`;
}

open.addEventListener("click", function () {
	hero.style.filter = "none";
	open.style.display = "none";
	audio.play();
	audio.loop = true;
	stop.style.visibility = "visible";
	document.body.style.overflow = "scroll";
	stop.addEventListener("click", function () {
		if (audio.paused) {
			audio.play();
			stop.innerText = "Stop";
		} else {
			audio.pause();
			stop.innerText = "Play";
		}
	});
});
