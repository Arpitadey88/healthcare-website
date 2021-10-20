import { useParams } from 'react-router';
import data from './services.json';

const Details = () => {

    const { serviceId } = useParams();
    const detailsInfo = data.filter(dt => dt.id === serviceId);
    console.log(detailsInfo);

    return (
        <div className="border">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={detailsInfo[0].image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h2 style={{ color: 'brown' }} className="card-title">{detailsInfo[0].title}</h2>
                            <h4 style={{ color: 'chocolate' }} className="card-text">{detailsInfo[0].description}</h4>
                            <h5 style={{ color: 'brown' }} className="card-text"><small className="text-muted">{detailsInfo[0].detail}</small></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Details;