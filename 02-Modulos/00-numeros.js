function uniqueValidNumbers(N, inputArray) {
    //Insert your code here 
    console.log("CL:", N, inputArray);
    if (N != inputArray.length) {
        return 0
    } else {

        let noRepet = inputArray.filter((item, index) => {
            return inputArray.indexOf(item) === index;
        })

        console.log(noRepet)

        let objDuplicados = {};

        for (let index = 0; index < array.noRepet; index++) {
            objDuplicados[`${i}`]

        }

        const tempArray = [...inputArray].sort();

        console.log(tempArray);


        for (let i = 0; i < tempArray.length; i++) {

            for (let j = 0; j < tempArray.length; j++) {
                if (tempArray[i + 1] === tempArray[j]) {
                    objDuplicados[`${j}`] = [j]
                }

            }


        }


    }
}

uniqueValidNumbers(5, [1, 2, 1, 2, 2])