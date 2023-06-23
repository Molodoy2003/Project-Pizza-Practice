//1 требуется создать функцию которая получает этот массив в качестве аргумента и по результатам выполнения возвращает массив объектов где ключом является название корабля, а сам объект содержит поля
// - model
// - crew
// - passengers
// - cost

function ShipsDescription(arr) {
	const ships = []
	arr.forEach(item => {
		const name = item.name
		ships[name] = {
			model: item.model,
			crew: item.crew,
			passengers: item.passengers,
			cost_in_credits: item.cost_in_credits,
		}
	})
	return ships
}
console.log(ShipsDescription(array))

//2 вывести массив с названиями кораблей где “crew” ≤ 10
//  массив отсортировать по возрастанию ( на первом месте в массиве корабль с наименьшим кол-вом людей в команде )

const ShipsNames = array.filter(item => item.crew <= 10)
ShipsNames.sort((a, b) => a.crew - b.crew)

const res = []
ShipsNames.forEach(item => {
	res.push(item.name)
})
console.log(res)
