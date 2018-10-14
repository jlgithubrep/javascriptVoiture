$(document).ready(function () {

    var voiture = document.getElementById("voiture");


    var tabPositionVoiture = [];
    tabPositionVoiture[0] = voiture.getBoundingClientRect().x;
    tabPositionVoiture[1] = voiture.getBoundingClientRect().y;
    tabPositionVoiture[2] = voiture.getBoundingClientRect().width;
    tabPositionVoiture[3] = voiture.getBoundingClientRect().height;


    var voiture2 = document.getElementById("voiture2");
    var tabPositionVoiture2 = [];
    tabPositionVoiture2[0] = voiture2.getBoundingClientRect().x;
    tabPositionVoiture2[1] = voiture2.getBoundingClientRect().y;
    tabPositionVoiture2[2] = voiture2.getBoundingClientRect().width;
    tabPositionVoiture2[3] = voiture2.getBoundingClientRect().height;



    console.log("voiture offsetLeft: " + voiture.offsetLeft);
    console.log("voiture offsetTop: " + voiture.offsetTop);

    var circuit = document.getElementById("circuit");
    // console.log("offsetTop circuit: " + circuit.offsetTop);
    // console.log("offsetLeft circuit: " + circuit.offsetLeft);


    //delimitation circuit
    function delimitationCircuit() {
        var xCircuit = circuit.getBoundingClientRect().x;
        var yCircuit = circuit.getBoundingClientRect().y;
        var widthCircuit = circuit.getBoundingClientRect().width;
        var heightCircuit = circuit.getBoundingClientRect().height;

        return [xCircuit, yCircuit, widthCircuit, heightCircuit];
    }


    //ex valeur de getBoundingClientRect() pour 1er carré
    // bottom:302.0625
    // height:226.546875
    // left:162.484375
    // right:482.46875
    // top:75.515625
    // width:319.984375
    // x:162.484375
    // y:75.515625


    //console.log("position circuit: " + circuit.getBoundingClientRect());




    var rect = document.getElementsByClassName("paysage");
    function delimitationPaysage(rect) {

        var tabPaysages = [];

        for (var i = 0; i < rect.length; i++) {

            tabPaysages.push(rect[i].getBoundingClientRect().x);
            tabPaysages.push(rect[i].getBoundingClientRect().y);
            tabPaysages.push(rect[i].getBoundingClientRect().width);
            tabPaysages.push(rect[i].getBoundingClientRect().height);
        }

        return tabPaysages;
    }


    var tabPositionCircuit = delimitationCircuit();

    var tabPaysages = delimitationPaysage(rect);//tableau de position des paysages par paquet de 4: x, y, w, h

    // for(t of tabPaysages){
    //     console.log(t);
    // }

    var pas = 20;

    function collisionCircuit(voiture, event, tabPositionCircuit, tabPositionVoiture) {
        if (event.key == "ArrowUp") {
            if (voiture.offsetTop - pas >= tabPositionCircuit[1]) {//si la voiture dépasse pas vers le haut
                voiture.style.top = (voiture.offsetTop - pas) + "px";
            }

        } else if (event.key == "ArrowDown") {
            if (voiture.offsetTop + pas < (tabPositionCircuit[1] + tabPositionCircuit[3]) - pas) {
                voiture.style.top = (voiture.offsetTop + pas) + "px";
                //voiture.setAttribute("class", "rotation");
            }

        } else if (event.key == "ArrowLeft") {
            if (voiture.offsetLeft - pas >= tabPositionCircuit[0]) {
                voiture.style.left = (voiture.offsetLeft - pas) + "px";
            }

        } else if (event.key == "ArrowRight") {
            if (voiture.offsetLeft + pas < tabPositionCircuit[0] + tabPositionCircuit[2] - pas) {
                voiture.style.left = (voiture.offsetLeft + pas) + "px";
            }

        }


        tabPositionVoiture[0] = voiture.getBoundingClientRect().x;
        tabPositionVoiture[1] = voiture.getBoundingClientRect().y;
        tabPositionVoiture[2] = voiture.getBoundingClientRect().width;
        tabPositionVoiture[3] = voiture.getBoundingClientRect().height;


    }

    function collisionPaysage(voiture, event, tabPaysages, rect, tabPositionVoiture) {

        accident = false;
        for (var i = 0; i < tabPaysages.length; i += 4) {

            // if (event.key == "ArrowUp") {

            //     if ((tabPositionVoiture[1] - pas > tabPaysages[i + 1]) && (tabPositionVoiture[1] - pas < (tabPaysages[i + 1] + tabPaysages[i + 3])) && (tabPositionVoiture[0] > tabPaysages[i + 0]) && (tabPositionVoiture[0] < (tabPaysages[i + 0] + tabPaysages[i + 2]))) {
            //         accident = true;
            //     }
            // } else if (event.key == "ArrowDown") {
            //     if ((tabPositionVoiture[1] + tabPositionVoiture[3] + pas > tabPaysages[i + 1]) && (tabPositionVoiture[1] + tabPositionVoiture[3] + pas < (tabPaysages[i + 1] + tabPaysages[i + 3])) && (tabPositionVoiture[0] > tabPaysages[i + 0]) && (tabPositionVoiture[0] < (tabPaysages[i + 0] + tabPaysages[i + 2]))) {
            //         accident = true;
            //     }
            // } else if (event.key == "ArrowLeft") {
            //     if ((tabPositionVoiture[1] > tabPaysages[i + 1]) && (tabPositionVoiture[1] < (tabPaysages[i + 1] + tabPaysages[i + 3])) && (tabPositionVoiture[0] + pas > tabPaysages[i + 0]) && (tabPositionVoiture[0] + pas < (tabPaysages[i + 0] + tabPaysages[i + 2]))) {
            //         accident = true;
            //     }
            // } else if (event.key == "ArrowRight") {
            //     if ((tabPositionVoiture[1] > tabPaysages[i + 1]) && (tabPositionVoiture[1] < (tabPaysages[i + 1] + tabPaysages[i + 3])) && (tabPositionVoiture[0] + tabPositionVoiture[2] - pas > tabPaysages[i + 0]) && (tabPositionVoiture[0] + tabPositionVoiture[2] - pas < (tabPaysages[i + 0] + tabPaysages[i + 2]))) {
            //         accident = true;
            //     }
            // }


            if (event.key == "ArrowUp") {//y reduit

                if ((tabPositionVoiture[1] + tabPositionVoiture[3] - (pas * 3) > tabPaysages[i + 1]) && (tabPositionVoiture[1] + tabPositionVoiture[3] - (pas * 3) < (tabPaysages[i + 1] + tabPaysages[i + 3])) && (tabPositionVoiture[0] + tabPositionVoiture[2] > tabPaysages[i + 0]) && (tabPositionVoiture[0] + tabPositionVoiture[2] < (tabPaysages[i + 0] + tabPaysages[i + 2]))) {
                    accident = true;
                }
            } else if (event.key == "ArrowDown") {//y grandit
                if ((tabPositionVoiture[1] + tabPositionVoiture[3] + (pas * 0) > tabPaysages[i + 1]) && (tabPositionVoiture[1] + tabPositionVoiture[3] + (pas * 0) < (tabPaysages[i + 1] + tabPaysages[i + 3])) && (tabPositionVoiture[0] + tabPositionVoiture[2] > tabPaysages[i + 0]) && (tabPositionVoiture[0] + tabPositionVoiture[2] < (tabPaysages[i + 0] + tabPaysages[i + 2]))) {
                    accident = true;
                }
            } else if (event.key == "ArrowLeft") {//x reduit, y change pas
                if ((tabPositionVoiture[1] + tabPositionVoiture[3] > tabPaysages[i + 1]) && (tabPositionVoiture[1] + tabPositionVoiture[3] < (tabPaysages[i + 1] + tabPaysages[i + 3])) && (tabPositionVoiture[0] + tabPositionVoiture[2] - (pas * 3) > tabPaysages[i + 0]) && (tabPositionVoiture[0] + tabPositionVoiture[2] - (pas * 3) < (tabPaysages[i + 0] + tabPaysages[i + 2]))) {
                    accident = true;
                }
            } else if (event.key == "ArrowRight") {//x grandit, y change pas
                if ((tabPositionVoiture[1] + tabPositionVoiture[3] > tabPaysages[i + 1]) && (tabPositionVoiture[1] + tabPositionVoiture[3] < (tabPaysages[i + 1] + tabPaysages[i + 3])) && (tabPositionVoiture[0] + tabPositionVoiture[2] + (pas * 0) > tabPaysages[i + 0]) && (tabPositionVoiture[0] + tabPositionVoiture[2] + (pas * 0) < (tabPaysages[i + 0] + tabPaysages[i + 2]))) {
                    accident = true;
                }
            }


        }

        console.log("x voiture: " + tabPositionVoiture[0]);
        console.log("y voiture: " + tabPositionVoiture[1]);
        console.log("w voiture: " + tabPositionVoiture[2]);
        console.log("h voiture: " + tabPositionVoiture[3]);

        console.log("x carré1: : " + tabPaysages[0]);
        console.log("y carré1: : " + tabPaysages[1]);
        console.log("w carré1: : " + tabPaysages[2]);
        console.log("h carré1: : " + tabPaysages[3]);


        return accident;

    }

    function collisionEntreVoiture(tabPositionV1, tabPositionV2) {

        x1 = tabPositionV1[0];
        y1 = tabPositionV1[1];
        w1 = tabPositionV1[2];
        h1 = tabPositionV1[3];

        x2 = tabPositionV2[0];
        y2 = tabPositionV2[1];
        w2 = tabPositionV2[2];
        h2 = tabPositionV2[3];

        if ((x1 + pas >= x2 && x1 + pas <= x2 + w2 && y1 + pas >= y2 && y1 <= y2 + h2 && y1 + pas >= y2 && y1 + pas <= y2 + h2 && x1 >= x2 + pas && x2 + pas <= x2 + w2)) {
            return true;
        }



        return false;
    }


    function collision(voiture, event, tabPositionCircuit, tabPaysages, rect, tabPositionVoiture) {

        var accident = collisionPaysage(voiture, event, tabPaysages, rect, tabPositionVoiture)

        var accidentVoiture = collisionEntreVoiture(tabPositionVoiture, tabPositionVoiture2);

        if (accident || accidentVoiture) {
            // if (confirm("accident, OK pour recommencer")) {
            //     window.location.reload();
            // }

            voiture.className = "explosion";


        } else {
            voiture.className = "";
            collisionCircuit(voiture, event, tabPositionCircuit, tabPositionVoiture);
        }


        console.log("valeur accident " + accident);
        return accident;

    }


    document.addEventListener("keydown", function (event) {
        console.log(event.key);


        collision(voiture, event, tabPositionCircuit, tabPaysages, rect, tabPositionVoiture);




        console.log("voiture offsetLeft: " + voiture.offsetLeft);
        console.log("voiture offsetTop: " + voiture.offsetTop);


    });

    ///autonome

    function getRandom(min, max) { //max non compris
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function conduiteRandom(voiture, tabPositionVoiture) {


        var accidentGameOver;
        var event = { key: "ArrowRight" };


        setInterval(function () {




            var direction = getRandom(1, 5);

            if (direction == 1) {
                event.key = "ArrowUp";
            } else if (direction == 2) {
                event.key = "ArrowDown";
            } else if (direction == 3) {
                event.key = "ArrowLeft";
            } else if (direction == 4) {
                event.key = "ArrowRight";
            }



            accidentGameOver = collision(voiture, event, tabPositionCircuit, tabPaysages, rect, tabPositionVoiture);

            console.log("aze " + accidentGameOver);
            if (accidentGameOver) {
                return null;
            }
        }, 100);


    }

    conduiteRandom(voiture, tabPositionVoiture);
    conduiteRandom(voiture2, tabPositionVoiture2);


});