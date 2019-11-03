//--------------------в браузере работает через вэб пак нет

const getRecource = async(url)=>{
    const res = await fetch(url);
    const body = await res.json();
    return body;
};

getRecource('https://swapi.co/api/people/1/')
    .then((body)=>{
        console.log(body);
    });
//--------------------второй вариант

fetch('https://swapi.co/api/people/1/')
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                console.log(data);
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
//-------------------до полученного объекта можно добраться так через деструктуризайию
getRecource('https://swapi.co/api/people/1/')
    .then((body)=>{
        const {name}=body;
        console.log(name);
    });
//----------------а можно так
getRecource('https://swapi.co/api/people/1/')
    .then((body)=>{

        console.log(body.name);
    });