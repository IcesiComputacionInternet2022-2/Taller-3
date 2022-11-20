import '../css/LionCard.css';

function LionCard(props) {

    const lion = props.lion;

    return (
        <div className="LionCard">
            <div className='col-md-4'>
                <div className="card border-0">
                    <div className="card-body p-4">
                        <div className="d-flex text-black">
                            <div className="flex-shrink-0">
                                <img src="https://tulsazoo.org/wp-content/uploads/2015/08/African-Lion-Thumbnail.png"
                                    alt='Lion basic'
                                    className="img-fluid" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <div className='LionName'>
                                    <h5 className="mb-1"><i></i>{lion.name}</h5>
                                </div>
                                <p className="LionCardUUID mb-2 pb-1">{lion.id}</p>
                                <div className="LionCardData d-flex justify-content-start rounded-3 p-2">
                                    <div>
                                        <p className="small text-muted mb-1">Age</p>
                                        <p className="mb-0">{lion.age}</p>
                                    </div>
                                    <div className="px-3">
                                        <p className="small text-muted mb-1">Weight</p>
                                        <p className="mb-0">{lion.weight} Kg</p>
                                    </div>
                                    <div>
                                        <p className="small text-muted mb-1">Height</p>
                                        <p className="mb-0">{lion.height} cm</p>
                                    </div>
                                </div>
                                <div className="d-flex pt-1">
                                    <div className='LionGenderDate'>
                                        <label>{lion.sex}</label>
                                        <label>{lion.arrivedZooDate}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LionCard;

