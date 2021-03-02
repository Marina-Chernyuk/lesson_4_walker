/**
 * Мутод run запускает игру
 * Метод init выполняется при открытии страницы
 */

let game = {
    run() {
        while (true) {
            //Получаем направление от игрока.
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("Игра окончена");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
                   
        }
    },

    //Этот метод выполняется при открытии страницы.
    init() {
        console.log("Ваше положение на поле в виде О");
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();