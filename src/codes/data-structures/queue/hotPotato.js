import Queue from './queue';

function hotPotato(elementsList, num) {
  const queue = new Queue();
  const eliminatedList = [];

  for (let i = 0; i < elementsList.length; i += 1) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i += 1) {
      queue.enqueue(queue.dequeue());
    }

    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}


const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const turns = 7;
const result = hotPotato(names, turns);
result.eliminated.forEach(name => {
  console.log(`${name} was eliminated`);
});
console.log(`The winner is: ${result.winner}`);
