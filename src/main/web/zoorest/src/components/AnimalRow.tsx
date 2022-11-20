import {Animal} from "../model/Animal";

export const AnimalRow = (
    props : {
        animal : Animal
    }
) => {
    return (
        <div>
            <div key={props.animal.id}>
                {props.animal.name}
            </div>
        </div>
    );
}