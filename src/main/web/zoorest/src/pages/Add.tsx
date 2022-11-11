import {Card} from "../components/Card";
import React from "react";

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
            <Card flex={columnFlex} rounded={"rounded-lg"} width={WIDTHS.def} height={HEIGHTS.def} color={"bg-rose-500"} shadow={"drop-shadow-shine"}>
                <h1>Name</h1>
                <h1>Sex</h1>
                <h1>Weight</h1>
                <h1>age</h1>
                <h1>length</h1>
                <h1>arrivalDate</h1>
                <h1>father</h1>
                <h1>mother</h1>
            </Card>
            <Card blur={"backdrop-filter-blur"} flex={columnFlex} rounded={"rounded-xl"} width={WIDTHS.lg} height={HEIGHTS.sm} color={"bg-rose-200/60"} shadow={"drop-shadow-blur"} >

            </Card>
        </div>
    );
}