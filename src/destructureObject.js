(() => {
    const student1 = {
        name: 'Dhinesh',
        marks: {
            Tamil: 10,
            English: 10
        }
    }
    let {name, marks} = student1;
    console.log(name, marks.Tamil, marks.English);
}) ();



const student2 = {
    name: 'Jayasudha',
    marks: {
        Tamil: 100,
        English: 100
    }
}

let name, marks;
    ({name, marks}= student2);

console.log(marks.Tamil);
