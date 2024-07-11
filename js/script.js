let list = document.getElementById('list');
let dogimage = document.getElementById('dogImg');
const getList = () => {

    fetch('https://dog.ceo/api/breeds/list/all').then(res => {
        return res.json();
    }).then( data => {
            // console.log("data", data.message);

            const breedList = data.message;

            console.log("breedList", breedList);

            for(let breed in breedList){

                if(breedList[breed].length == 0){
                    // console.log(breed);
                    list.innerHTML += `<li onclick="return listImage('${breed}')" style="cursor:pointer">${breed}</li>`
                }else{
                    dogsub = "<ol>";
                    for(let subBreed in breedList[breed]){
                        dogsub += `<li class="text-white" onclick="return listImage('${breed}')">${breedList[breed][subBreed]}</li>`
                    }
                    dogsub += "</ol>";

                    list.innerHTML += `<li>${breed} ${dogsub}</li>`

                }

        }
    }
    ).catch(err => {
        console.log(err);
    });

}

getList();

const listImage = (breed) => {

    fetch(`https://dog.ceo/api/breed/${breed}/images`).then(res => {

        return res.json();

    }).then( data => {

        console.log(data.message);

        let images = data.message;

        dogimage.innerHTML = "";

        images.forEach((img) => {

            dogimage.innerHTML +=`
            <div class="col-3">
                    <div class="" style="background-color: burlywood; width: 380px; height: 400px">
                        <img src="${img}" alt="" style="width: 380px; height: 400px;object-fit: cover;">
                    </div>
            </div>`
            
        });

        

    }).catch(err => {

        console.log(err);
    });
}

listImage();