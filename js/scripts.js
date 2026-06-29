const botonesMeGusta = document.querySelectorAll(".me-gusta");
let likesLinn = 0;
let likesLina = 0;
let likesMateo = 0;

botonesMeGusta.forEach(function (boton) {
  boton.addEventListener("click", function () {
    let like;

    if (boton.id === "btnLinn") {
      likesLinn++;
      like = document.getElementById("likes-linn");
      like.textContent = likesLinn + " like(s)";
    } else if (boton.id === "btnLina") {
      likesLina++;
      like = document.getElementById("likes-lina");
      like.textContent = likesLina + " like(s)";
    } else if (boton.id === "btnMateo") {
      likesMateo++;
      like = document.getElementById("likes-mateo");
      like.textContent = likesMateo + " like(s)";
    }
  });
});
