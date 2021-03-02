let mover = {
    /**
     * Проверяет возможность пользователя перейти на точку.
     * @param {{x: int, y: int}} nextPoint Точка, которую проверяем.
     * @returns {boolean} true если пользователь может перейти в направлении, false если нет.
     */
    canPlayerMakeStep(nextPoint) {
        return nextPoint.x >= 0 &&
               nextPoint.x < config.colsCount &&
               nextPoint.y >= 0 &&
               nextPoint.y < config.colsCount;
    },

    /**
     * Получает и отдаёе направление от пользователя.
     * @returns {int} возвращаем направление, введеное пользователем.
     */
    getDirection() {
        const availableDirection = [2, 4, 6, 8, 1, 3, 7, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8 или 9), куда вы хотите переместиться, "Отмена" для выхода'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirection.includes(direction)) {
                alert(' Для перемещения необходимо ввести одно из чисел 2, 4, 6 или 8.');
                continue;
            }
            return direction;
        }
    },
    /**
     * Отдаёт следующую точку, в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @return {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;    
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;    
        }
        return nextPosition;
    }
};