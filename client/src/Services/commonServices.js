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
            if (tour?.is_popular == 1) {
                return {
                    id: tour?.id,
                    img: "/Assets/images/common/Hexagone_3.jpg",
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
        }).filter(tour => tour),
        tourPackage: res?.map(tour => {
            if (tour?.is_popular == 0) {
                return {
                    id: tour?.id,
                    img: "/Assets/images/common/Hexagone_1.jpg",
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