import { BASE_URL } from "../../config"

export const getDestinationList = async () => {
    const data = await fetch(BASE_URL + '/destinationList/get');
    const result = await data.json();
    const res = result?.data;
    return {
        domestic: res?.domestic?.map(dest => { return dest?.name }),
        international: res?.international?.map(dest => { return dest?.name })
    }
}

export const getTourList = async () => {
    const data = await fetch(BASE_URL + '/tour');
    const result = await data.json();
    const res = result?.data;

    return {
        popDest: res?.map(tour => {
            return {
                id: tour?.id,
                img: tour?.image,
                name: tour?.name,
                stars: 4,
                facility: "",
                cost: tour?.adult_price,
                note: tour?.note,
                seeMore: true,
                button: {
                    text: "Book Now",
                    enable: false
                }
            }
        }).filter(tour => tour),
        tourPackage: res?.map(tour => {
            if (tour?.is_popular == 0) {
                return {
                    id: tour?.id,
                    img: tour?.image,
                    name: tour?.name,
                    days: tour?.days,
                    nights: tour?.nights,
                    stars: 4,
                    facility: "",
                    cost: tour?.adult_price,
                    note: tour?.note,
                    seeMore: false,
                    button: {
                        text: "Book Now",
                        enable: true
                    }
                }
            }
        }).filter(tour => tour)
    }
}

export const getFilterTourList = async (filterList) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(filterList),
        redirect: 'follow'
    };

    const data = await fetch(BASE_URL + '/tour/filter', requestOptions);
    const result = await data.json();
    const res = result?.data;

    return {
        popDest: res?.map(tour => {
            return {
                id: tour?.id,
                img: tour?.image,
                name: tour?.name,
                stars: 4,
                facility: "",
                cost: tour?.adult_price,
                note: tour?.note,
                seeMore: true,
                button: {
                    text: "Book Now",
                    enable: false
                }
            }
        }).filter(tour => tour),
        tourPackage: res?.map(tour => {
            if (tour?.is_popular == 1) {
                return {
                    id: tour?.id,
                    img: tour?.image,
                    name: tour?.name,
                    stars: 4,
                    facility: "",
                    cost: tour?.adult_price,
                    note: tour?.note,
                    seeMore: true,
                    button: {
                        text: "Book Now",
                        enable: false
                    }
                }
            }
        }).filter(tour => tour)
    }
}

export const getTourDetails = async (id) => {
    const res = await fetch(BASE_URL + "/tour/get/id/" + id);
    const result = await res.json();
    const data = result?.data

    try {
        if (result?.statusCode === 200 && result?.status === "success") {
            if (data[0]?.id) {
                const resposne = await fetch(BASE_URL + "/tour-itinerary/get/id/" + data[0]?.id);
                const result = await resposne.json();                
                if (result?.status === "success" && result?.statusCode === 200) {
                    return {
                        basicTour: data[0],
                        itinerary: result?.data
                    }
                } else {
                    console.log("No itineries found for the ID: ", data[0]?.id);
                    return {
                        basicTour: data[0],
                        itinerary: [],
                    }
                }
            } else {
                console.log("No tour found with requested ID");
                return {
                    basicTour: data[0],
                    itinerary: [],
                }
            }
        } else {
            return {
                basicTour: '',
                itinerary: [],
            };
        }
    } catch (error) {
        return {
            basicTour: '',
            itinerary: []
        }
    }
}