const vaxTrail = (groups) => {
    const lineA = groups.filter(group => (group.age >= 20 && group.age <= 30 && group.temperature < 100));
    const A = sortedObject(lineA);

    const lineB = groups.filter(group => (group.age >= 31 && group.age <= 40 && group.temperature < 100));
    const B = sortedObject(lineB);

    const lineC = groups.filter(group => (group.age >= 41 && group.age <= 50 && group.temperature < 100));
    const C = sortedObject(lineC);
    console.log(C)

    const lineD = groups.filter(group => group.temperature > 100);
    const D = sortedObject(lineD);



    function sortedObject(peoples) {
        const age = peoples.map(people => people.age)
        console.log(age);
        const sortedAges = sorted(age);
        const sortedLine = sortedAges.map(sortedAge => peoples.find(person => person.age === sortedAge));

        // function for sort age
        function sorted(array) {
            for (let i = 0; i < array.length; i++) {
                let min = i;
                for (let j = i; j < array.length; j++) {
                    if (array[j] < array[min]) {
                        min = j
                    }
                }
                [array[i], array[min]] = [array[min], array[i]];
            }
            return array;
        }
        return sortedLine;
    }

    return {
        A,
        B,
        C,
        D
    }
}

const vacineClaimed = [
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'Kabir', age: 36, temperature: 99 },
    { name: 'Rahul', age: 37, temperature: 99 },
    { name: 'Paul', age: 42, temperature: 98 },
    { name: 'Kat', age: 41, temperature: 98 },
    { name: 'Nayem', age: 50, temperature: 100 },
    { name: 'Sabnaj', age: 51, temperature: 101 }
]

const vacinated = vaxTrail(vacineClaimed);
console.log(vacinated);


