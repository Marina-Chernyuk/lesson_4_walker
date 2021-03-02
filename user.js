/**
 *Объект игрока, где будут находиться все методы и свойства связанные с ним
 * @property {int} x Позиция по Х-координате
 * @property {int} y Позиция по Y-координате
 */
const player =  {
    x: 0,
    y: 0,

    /**
     * Передвигает игрока по переданному направлению.
     * @param {{x: int, e: int}} nextPoint следующая точка пользователяю
     */

    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },
};