//Variable para almacenar puntos
let points: number = 100;

function spin(): void {
    const symbols: string[] = ["🍒", "🍋", "🍇", "🍉", "🔔", "💰"];
    const result: HTMLElement | null = document.getElementById("result");
    const reels: NodeListOf<Element> = document.querySelectorAll(".reel");

    if (points < 10) {

        try {
            if (result) {
                result.innerText = "No tienes mas puntos para seguir jugando";
            } else {
                throw new Error("El ID no se encontro");
            }
        } catch (error) {
            console.error(error);
        }
        return;
    }

    //Resta 10 puntos por juegada
    points -= 10

    updatePoints()

    let spinsLeft = 5

    let spinsInterval = setInterval(() => {
        spinsLeft--

        reels.forEach((reel) => {
            let randomIndex = Math.floor(Math.random() * symbols.length)
            reel.textContent = symbols[randomIndex]
        })

        if (spinsLeft === 0) {
            clearInterval(spinsInterval)
            try {
                if (reels[0].textContent === reels[1].textContent && reels[1].textContent === reels[2].textContent) {
                    points += 50
                    if (result) {
                        result.innerText = "Felicidades ganaste 50 puntos";
                    } else {
                        console.error("El ID no encontrado forzo un Error");
                    }
                }
            } catch (error) {
                console.error(error);
            }

            updatePoints();



        }


    },200)



}

export default spin;


//Actualizacion del valor de puntos
function updatePoints() {
    let pointsActualy: HTMLElement | null = document.getElementById('points')

    try {
        if (pointsActualy) {

            pointsActualy.innerText = "Points: " + points;

        } else {
            throw new Error("Element with ID 'points' not found.");
        }
    } catch (error) {
        console.error(error);
    }
    return;
}


