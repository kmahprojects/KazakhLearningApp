function addName(user, array) {
    if (user !== undefined) {
        for (let i = 0; i < array.length; i++){
            if (array[i].phrase === "My name is ..."){
                array[i].phrase = "My name is " + user.name;
                array[i].latinphrase = "Meniñ atym " + user.name;
                array[i].kzphrase = "Менің атым " + user.name;
            }
            if (array[i].phrase === "I am from..." && user.country !="Other"){
                array[i].phrase = "I am from " + user.country;
                array[i].latinphrase = "Men " + user.latinCountry + "danmın";
                array[i].kzphrase = "Мен " + user.kzCountry + "данмын";
            }
        }
    }
    return array;
}

export default addName;