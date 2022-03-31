const students = [
    {
        id: 1,
        name: "Rahul",
        course: "FSD"
    },
    {
        id: 2,
        name: "Rohit",
        course: 'FSD'
    },
    {
        id: 3,
        name: "Virat",
        course: 'FSD'
    }

];

function createItem(item, getItem) {
    console.log("createItem");
    return new Promise(
        (resolve, reject) => {

            setTimeout(() => {
                students.push(item);
                let flag = true;
                if (flag) {
                    resolve();
                }
                else {
                    reject("There is a problem");
                }
            }, 5000)

        }
    )
    getItem();
}

function getItem() {
    console.log("getItem");
    setTimeout(() => {
        students.forEach((st) => console.log(st.name));
    }, 1000);

}

createItem({ id: 4, name: 'yogesh' }, getItem);
