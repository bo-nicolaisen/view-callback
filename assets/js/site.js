/* 

let myItem = 'ib'


switch (myItem) {

    case 'bob':
        console.log('wee from switch');

        break;

    case 'keld':
        console.log('wee 2 from switch');

        break;

    case 'ib':
        console.log('wee 3 from switch');

        break;

    default:
        console.log('no known name');
        break;

} */













const myData = ['bob', 'ib', 'keld', 'søren']

buildView(myData)



function buildView(myData) {
    if (Array.isArray(myData)) {

        let myListelement = document.getElementById('catList')

        let myHTML = ''

        myData.forEach((name, index) => {
            myHTML += `<button onclick="callback(${index})">${name}</button>`
        });
        myListelement.innerHTML = myHTML

    } else {
        console.log('do funky error stuff');

    }
}



function callback(myIdentifyer) {

    //console.log(myData[myIdentifyer]);

    switch (myData[myIdentifyer]) {
        case 'bob':
            console.log('hej bob');

            break;

        case 'søren':
            console.log('gå væk');
            break;

        default:
            console.log('hej');

            break;
    }

}