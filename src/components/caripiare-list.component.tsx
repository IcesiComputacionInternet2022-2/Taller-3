import { Component, ChangeEvent } from "react";
import CaripiareDataService from "../services/caripiare.service";
import { Link } from "react-router-dom";
import Caripiare from '../types/caripiare.type';

type Props = {};

type State = {
  caripiares: Array<Caripiare>,
  currentCaripiare: Caripiare | null,
  currentIndex: number,
  id: string
};

export default class CaripiareList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onChangeGetCaripiare = this.onChangeGetCaripiare.bind(this);
    this.getCaripiares = this.getCaripiares.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCaripiare = this.setActiveCaripiare.bind(this);
    this.getCaripiare = this.getCaripiare.bind(this);

    this.state = {
      caripiares: [],
      currentCaripiare: null,
      currentIndex: -1,
      id: ""
    };
  }

  componentDidMount() {
    this.getCaripiares();
  }

  onChangeGetCaripiare(e: ChangeEvent<HTMLInputElement>) {
    const id = e.target.value;
    this.setState({
      id: id
    });
  }

  getCaripiares() {
    CaripiareDataService.getCaripiares().then((response: any) => {
        this.setState({
          caripiares: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  refreshList() {
    this.getCaripiares();
    this.setState({
      currentCaripiare: null,
      currentIndex: -1
    });
  }

  setActiveCaripiare(caripiare: Caripiare, index: number) {
    this.setState({
      currentCaripiare: caripiare,
      currentIndex: index
    });
  }

  getCaripiare() {
    this.setState({
      currentCaripiare: null,
      currentIndex: -1
    });

    CaripiareDataService.getCaripiare(this.state.id)
      .then((response: any) => {
        this.setState({
          currentCaripiare: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { id, caripiares, currentCaripiare, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by id"
              value={id}
              onChange={this.onChangeGetCaripiare}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.getCaripiare}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Caripiare List</h4>

          <ul className="list-group">
            {caripiares &&
              caripiares.map((caripiare: Caripiare, index: number) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveCaripiare(caripiare, index)}
                  key={index}
                >
                  {caripiare.id}
                </li>
              ))}
          </ul>

        </div>
        <div className="col-md-6">
          {currentCaripiare ? (
            <div>
              <h4>Caripiare</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentCaripiare.name}
              </div>
              <div>
                <label>
                  <strong>Gender:</strong>
                </label>{" "}
                {currentCaripiare.gender}
              </div>
              <div>
                <label>
                  <strong>Weight:</strong>
                </label>{" "}
                {currentCaripiare.weight}
              </div>
              <div>
                <label>
                  <strong>Height:</strong>
                </label>{" "}
                {currentCaripiare.height}
              </div>
              <div>
                <label>
                  <strong>Age:</strong>
                </label>{" "}
                {currentCaripiare.age}
              </div>
              <div>
                <label>
                  <strong>Arrival date:</strong>
                </label>{" "}
                {currentCaripiare.arrivalDate}
              </div>
              <div>
                <label>
                  <strong>Father Id:</strong>
                </label>{" "}
                {currentCaripiare.fatherId}
              </div>
              <div>
                <label>
                  <strong>MotherId:</strong>
                </label>{" "}
                {currentCaripiare.motherId}
              </div>

              <Link
                to={"/caripiares/id/" + currentCaripiare.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Click on a caripiare id for more information...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
