import { BASE_URL } from "src/config";
import { STATUS, STATUS_CODE } from "src/utils/constants";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

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

export const deleteExistingItineries = async (activities) => {
    const activityIds = activities?.map(item => item?.id);
    if (activityIds) {
        const apiPromises = activityIds.map(async id => {
            try {
                const response = await fetch(BASE_URL + '/itinerary/delete/id/' + id, {
                    method: "DELETE",
                    headers: { 'Content-Type': 'application/json' }
                });
                return await response.json();
            } catch (error) {
                return ({ error: true, message: error.message });
            }
        });

        const deletedItineraries = Promise.all(apiPromises);
        try {
            const result = await deletedItineraries;
            return {
                message: "All itineraries deleted successfully",
                status: true,
                result
            }
        } catch (error) {
            return {
                error: error,
                status: false
            }
        }
    }
}

export const updateItineraries = async (dayList = []) => {
    const daysActivity = getActivityOut(dayList);
    if (daysActivity && daysActivity?.length > 0) {
        const apiPromises = daysActivity.map(async data => {
            try {
                const response = await fetch(BASE_URL + '/itinerary/update/id/', {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                return await response.json();
            } catch (error) {
                return ({ error: true, message: error.message });
            }
        });

        const promiseResults = Promise.all(apiPromises);
        try {
            const results = await promiseResults;
            console.log('Response:', results);
            return {
                message: "All itineraries updated successfully",
                status: true,
                data: results
            }
        } catch (error) {
            return {
                error: error,
                message: message,
                status: false
            }
        }
    }
}

export const getActivityOut = (data) => {
    let newArray = [];
    let dayIndex = 0;
    data?.map(day => {
        day?.activities?.map(activity => {
            newArray.push(
                {
                    activityIndex: dayIndex,
                    tour_id: day?.tourId,
                    title: activity?.place,
                    day: Number(day?.day),
                    description: activity?.description,
                    myActivity: activity?.activity,
                    stay: activity?.stay,
                    food: activity?.food,
                    status: "",
                    places_to_visit: activity?.place,
                    travel: activity?.travelOption,
                    image: activity?.image,
                    overview: activity?.description,
                    travel_options: activity?.travelOption
                }
            );
            dayIndex += 1;
        });
    });

    return newArray;
}