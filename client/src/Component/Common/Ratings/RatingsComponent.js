import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function RatingsComponent({ ratings }) {
    const [stars, setStars] = useState(0);
    const [remainingRatings, setRemainingRatings] = useState(0);

    const separateDecimal = (number) => {
        var beforeDecimal = Math.floor(number);
        var afterDecimal = number - beforeDecimal;

        return {
            beforeDecimal: beforeDecimal,
            afterDecimal: afterDecimal
        };
    }

    useEffect(() => {
        if (ratings > 5) {
            setStars({
                beforeDecimal: 5,
                afterDecimal: 0
            });
            setRemainingRatings(0);
        } else {
            setStars(separateDecimal(ratings));
            setRemainingRatings(5 - ratings);
        }
    }, [ratings]);

    return (
        <div>
            <div className="flex justify-start">
                {Array?.from({ length: stars?.beforeDecimal }, (item) => <FaStar color="#eca740" size={20} />)}
                {stars?.afterDecimal == 0.5 ? <FaStarHalfAlt color="#eca740" size={20} /> : null}
                {Array?.from({ length: remainingRatings }, (item) => <FaRegStar color="#eca740" size={20} />)}
            </div>
        </div>
    )
}