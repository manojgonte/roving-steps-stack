import { STATUS, STATUS_CODE } from "src/utils/constants";

export const errorValidation = (data, expectedValue) => {
    if (data.statusCode === STATUS && data.status === STATUS_CODE) return data?.data;
    else return expectedValue;
}

export const getTourData = async () => {
    const data = await fetch('http://localhost:5000/tour');
    const result = await data.json();
    let fetchedData = errorValidation(result, []);
    return fetchedData;
}

export const addTour = async (tour) => {

    console.log(tour)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify(tour);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: tour,
        redirect: 'follow'
    };

    const data = await fetch("http://localhost:5000/tour/create", requestOptions)
    console.log(data);
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));

}
