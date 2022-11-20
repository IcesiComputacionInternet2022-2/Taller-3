import LionCard from './LionCard';

function LionsList(props){

    const lions = props.lions

    return(
        <div className="LionsList">
            {lions.map( (lion) => (
                <LionCard lion={lion}/>
            ))}
        </div>
    );
}

export default LionsList;