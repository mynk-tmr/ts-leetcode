//convert this problem to NGE by using time taken by each car for comparison
//a slower car (big time) will pop faster car
//cars(fleet) left in stack have No NGE 

function carFleet(target: number, position: number[], speed: number[]): number {
    const cars = [] as { pos: number, time: number }[]
    position.forEach((pos, i) => {
        let time = (target - pos) / speed[i];
        cars.push({ pos, time })
    })
    cars.sort((a, b) => a.pos - b.pos) //sort by start positon, now GO
    let stack = []
    for (let car of cars) {
        while (stack.length && stack.at(-1).time <= car.time)
            stack.pop()
        stack.push(car)
    }
    return stack.length;
};
