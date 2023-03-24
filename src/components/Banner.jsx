import React from "react";
import Scroll from "./Scroll";
import withTranslation from "../withTranslation";

const Banner = (props) => {

    return (
        <div
            className="w-full h-screen flex flex-col justify-between"
        >
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="pt-24">
                    <img className="w-full" src={props.img} alt="" />
                </div>
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <p className="text-2xl">{props.t(props.firstSentence)}</p>
                    
                    <h1 className="py-3 text-5xl md:text-7xl font-bold">
                        {props.t(props.title)}
                    </h1>
                    <p className="font-medium text-slate-600">{props.t(props.secondSentence)}</p>
                    <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
                </div>
            </div>
            <Scroll />
        </div>
    );
};

export default withTranslation(Banner);
