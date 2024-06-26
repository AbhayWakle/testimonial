import React, { useState } from 'react'
import Card from './Card'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftClickHandler() {
        if ((index - 1) < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightClickHandler() {
        if ((index + 1) >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center 
        items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">

            <Card reviews={reviews[index]}> </Card >

            <div className="flex justify-center text-3xl mt-5 gap-3 font-bold text-violet-400" >

                <button className="cursor-pionter hover:text-violet-500 "
                    onClick={leftClickHandler} >
                    <FaChevronLeft />
                </button>

                <button className="cursor-pionter hover:text-violet-500 "
                    onClick={rightClickHandler}>
                    <FaChevronRight />
                </button>

            </div>

            <div className="flex justify-center mt-5">

                <button className=" bg-violet-400 hover:bg-violet-500 transition-all duration-200
                cursor-pointer px-10 py-2 rounded-md font-bold text-lg text-white"
                    onClick={surpriseHandler}>
                    Surprise me
                </button>

            </div>

        </div>
    )
}

export default Testimonials
