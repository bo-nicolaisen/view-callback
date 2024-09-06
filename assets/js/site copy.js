// write cool JS hwere!!


getData('https://dummyjson.com/products/categories')

function getData(myUrl) {


    fetch(myUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Ok is not OK");

            }
            return response.json()
        }
        )
        .then((data) => {

            showCategories(data)
        })
        .catch((error) => {
            console.log(error);
        })
}



function showCategories(myData) {
    console.log(myData);
    let myCatElement = document.getElementById('catList')


}