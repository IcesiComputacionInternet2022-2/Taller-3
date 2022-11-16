import {Card} from "../components/Card";
import React from "react";
import {Input} from "../components/Input";

export const Add = (
    props : {

    }
) => {

    const HEIGHTS = {
        "def": "h-[38rem]",
        "sm" : "h-[20rem]"
    };
    const WIDTHS = {
        "def": "w-[22rem]",
        "lg" : "w-[32rem]"
    };
    const columnFlex : string = "flex flex-col items-center justify-around";

    return (
        <div className={"flex justify-center items-center space-x-4"}>
            <Card flex={columnFlex} rounded={"rounded-lg"} width={WIDTHS.def} height={HEIGHTS.def} color={"bg-orange-400"} shadow={"drop-shadow-shine"}>
                <Input placeHolder={"Name"} rounded={"rounded-[0.315rem]"} height={"h-[2rem]"} width={"w-[16rem]"} fontSize={"text-[1rem]"} align={"text-center"} margin={"mb-[0.25rem]"}/>
                <div className={"flex justify-center items-center flex-col"}>
                    <h1>Sex</h1>
                    <div className={"flex justify-center items-center"}>
                        <button className={"c-button"}>E</button>
                        <button className={"c-button"}>A</button>
                    </div>
                </div>
                <Input placeHolder={"Weight"} rounded={"rounded-[0.315rem]"} height={"h-[2rem]"} width={"w-[16rem]"} fontSize={"text-[1rem]"} align={"text-center"} margin={"mb-[0.25rem]"}/>
                <Input placeHolder={"Age"} rounded={"rounded-[0.315rem]"} height={"h-[2rem]"} width={"w-[16rem]"} fontSize={"text-[1rem]"} align={"text-center"} margin={"mb-[0.25rem]"}/>
                <Input placeHolder={"Length"} rounded={"rounded-[0.315rem]"} height={"h-[2rem]"} width={"w-[16rem]"} fontSize={"text-[1rem]"} align={"text-center"} margin={"mb-[0.25rem]"}/>
                <h1>arrivalDate</h1>
                <h1>father</h1>
                <h1>mother</h1>
            </Card>
            <Card blur={"backdrop-filter-blur"} flex={columnFlex} rounded={"rounded-xl"} width={WIDTHS.lg} height={HEIGHTS.sm} color={"bg-orange-200/60"} shadow={"drop-shadow-blur"} >

            </Card>
        </div>
    );
}