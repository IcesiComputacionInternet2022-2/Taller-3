import { Component, ChangeEvent } from "react";
import { RouteComponentProps } from 'react-router-dom';

import CaripiareDataService from "../services/caripiare.service";
import Caripiare from "../types/caripiare.type";

interface RouterProps { // type for `match.params`
  id: string; // must be type `string` since value comes from the URL
}

type Props = RouteComponentProps<RouterProps>;

type State = {
  currentCaripiare: Caripiare;
  message: string;
}

export default class CaripiareComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeArrivalDate = this.onChangeArrivalDate.bind(this);
    this.onChangeFatherId = this.onChangeFatherId.bind(this);
    this.onChangeMotherId = this.onChangeMotherId.bind(this);
    this.getCaripiare = this.getCaripiare.bind(this);
    this.updateCaripiare = this.updateCaripiare.bind(this);

    this.state = {
      currentCaripiare: {
          id: "",
          name: "",
          gender: "",
          weight: 0,
          height: 0,
          age: 0,
          arrivalDate: new Date(),
          fatherId: "",
          motherId: "",
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getCaripiare(this.props.match.params.id);
  }

  onChangeName(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;
    this.setState(function (prevState) {
      return {
        currentCaripiare: {
          ...prevState.currentCaripiare,
          name: name,
        },
      };
    });
  }

  onChangeGender(e: ChangeEvent<HTMLInputElement>) {
    const gender = e.target.value;
    this.setState((prevState) => ({
      currentCaripiare: {
        ...prevState.currentCaripiare,
        gender: gender,
      },
    }));
  }

  onChangeWeight(e: ChangeEvent<HTMLInputElement>) {
    const weight = e.target.valueAsNumber;
    this.setState((prevState) => ({
      currentCaripiare: {
        ...prevState.currentCaripiare,
        weight: weight,
      },
    }));
  }

  onChangeHeight(e: ChangeEvent<HTMLInputElement>) {
    const height = e.target.valueAsNumber;
    this.setState((prevState) => ({
      currentCaripiare: {
        ...prevState.currentCaripiare,
        height: height,
      },
    }));
  }

  onChangeAge(e: ChangeEvent<HTMLInputElement>) {
    const age = e.target.valueAsNumber;
    this.setState((prevState) => ({
      currentCaripiare: {
        ...prevState.currentCaripiare,
        age: age,
      },
    }));
  }

  onChangeArrivalDate(e: ChangeEvent<HTMLInputElement>) {
    const arrivalDate = e.target.valueAsDate;
    this.setState((prevState) => ({
      currentCaripiare: {
        ...prevState.currentCaripiare,
        arrivalDate: arrivalDate!,
      },
    }));
  }

  onChangeFatherId(e: ChangeEvent<HTMLInputElement>) {
    const fatherId = e.target.value;
    this.setState((prevState) => ({
      currentCaripiare: {
        ...prevState.currentCaripiare,
        fatherId: fatherId,
      },
    }));
  }

  onChangeMotherId(e: ChangeEvent<HTMLInputElement>) {
    const motherId = e.target.value;
    this.setState((prevState) => ({
      currentCaripiare: {
        ...prevState.currentCaripiare,
        motherId: motherId,
      },
    }));
  }

  getCaripiare(id: string) {
    CaripiareDataService.getCaripiare(id)
      .then((response: any) => {
        this.setState({
          currentCaripiare: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  updateCaripiare() {
    CaripiareDataService.updateCaripiare(
      this.state.currentCaripiare,
      this.state.currentCaripiare.id
    )
      .then((response: any) => {
        console.log(response.data);
        this.setState({
          message: "Caripiare was updated successfully!",
        });
      })
      .catch((e: Error) => {
        console.log(e);
        alert(e.message)
      });
  }

  render() {
    const { currentCaripiare } = this.state;

    return (
      <div>
        {currentCaripiare ? (
          <div className="edit-form">
            <h4>Caripiare</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name (only letters and spaces)</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentCaripiare.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender (M, m, F, F)</label>
                <input
                  type="text"
                  className="form-control"
                  id="gender"
                  value={currentCaripiare.gender}
                  onChange={this.onChangeGender}
                />
              </div>
              <div className="form-group">
                <label htmlFor="weight">Weight (1.0 - 5.0 kilograms)</label>
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  value={currentCaripiare.weight}
                  onChange={this.onChangeWeight}
                />
              </div>
              <div className="form-group">
                <label htmlFor="height">Height (0.1 - 0.2 meters)</label>
                <input
                  type="number"
                  className="form-control"
                  id="height"
                  value={currentCaripiare.height}
                  onChange={this.onChangeHeight}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age (0 - 20 years)</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  value={currentCaripiare.age}
                  onChange={this.onChangeAge}
                />
              </div>
              <div className="form-group">
                <label htmlFor="arrivalDate">Arrival date (may not come after current date)</label>
                <input
                  type="Date"
                  className="form-control"
                  id="arrivalDate"
                  value={new Date(currentCaripiare.arrivalDate.toString()).toISOString().split('T')[0]}
                  onChange={this.onChangeArrivalDate}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fatherId">Father Id (UUID format)</label>
                <input
                  type="text"
                  className="form-control"
                  id="fatherId"
                  value={currentCaripiare.fatherId}
                  onChange={this.onChangeFatherId}
                />
              </div>
              <div className="form-group">
                <label htmlFor="motherId">Mother Id (UUID format)</label>
                <input
                  type="text"
                  className="form-control"
                  id="motherId"
                  value={currentCaripiare.motherId}
                  onChange={this.onChangeMotherId}
                />
              </div>
            </form>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateCaripiare}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Click on a caripiare for more information...</p>
          </div>
        )}
      </div>
    );
  }
}
