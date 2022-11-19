import { Component, ChangeEvent } from "react";
import CaripiareDataService from "../services/caripiare.service";
import Caripiare from '../types/caripiare.type';

type Props = {};

type State = Caripiare & {
  submitted: boolean
};

export default class CreateCaripiare extends Component<Props, State> {
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
    this.saveCaripiare = this.saveCaripiare.bind(this);
    this.newCaripiare = this.newCaripiare.bind(this);

    this.state = {
      id: "",
      name: "",
      gender: "",
      weight: 0,
      height: 0,
      age: 0,
      arrivalDate: new Date(),
      fatherId: "",
      motherId: "",
      submitted: false
    };
  }

  onChangeName(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeGender(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      gender: e.target.value
    });
  }

  onChangeWeight(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      weight: e.target.valueAsNumber
    });
  }

  onChangeHeight(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      height: e.target.valueAsNumber
    });
  }

  onChangeAge(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      age: e.target.valueAsNumber
    });
  }

  onChangeArrivalDate(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      arrivalDate: e.target.valueAsDate!
    });
  }

  onChangeFatherId(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      fatherId: e.target.value
    });
  }

  onChangeMotherId(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      motherId: e.target.value
    });
  }

  saveCaripiare() {
    const caripiareDTO: Caripiare = {
      name: this.state.name,
      gender: this.state.gender,
      id: this.state.id,
      weight: this.state.weight,
      height: this.state.height,
      age: this.state.age,
      arrivalDate: this.state.arrivalDate,
      fatherId: this.state.fatherId,
      motherId: this.state.motherId
    };

    CaripiareDataService.createCaripiare(caripiareDTO)
      .then((response: any) => {
        this.setState({
          name: this.state.name,
          gender: this.state.gender,
          id: this.state.id,
          weight: this.state.weight,
          height: this.state.height,
          age: this.state.age,
          arrivalDate: this.state.arrivalDate,
          fatherId: this.state.fatherId,
          motherId: this.state.motherId,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
        alert(e.message)
      });
  }

  newCaripiare() {
    this.setState({
      id: "",
      name: "",
      gender: "",
      weight: 0,
      height: 0,
      age: 0,
      arrivalDate: new Date(),
      fatherId: "",
      motherId: "",
      submitted: false
    });
  }

  render() {
    const { submitted, name, gender, weight, height, age, arrivalDate, fatherId, motherId } = this.state;

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newCaripiare}>
              Create new
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name (only letters and spaces)</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

             <div className="form-group">
              <label htmlFor="gender">Gender (M, m, F, F)</label>
              <input
                type="text"
                className="form-control"
                id="gender"
                required
                value={gender}
                onChange={this.onChangeGender}
                name="gender"
              />
            </div>

                   <div className="form-group">
              <label htmlFor="weight">Weight (1.0 - 5.0 kilograms)</label>
              <input
                type="number"
                className="form-control"
                id="weight"
                required
                value={weight}
                onChange={this.onChangeWeight}
                name="weight"
              />
            </div>

             <div className="form-group">
              <label htmlFor="height">Height (0.1 - 0.2 meters)</label>
              <input
                type="number"
                className="form-control"
                id="height"
                required
                value={height}
                onChange={this.onChangeHeight}
                name="height"
              />
            </div>

             <div className="form-group">
              <label htmlFor="age">Age (0 - 20 years)</label>
              <input
                type="number"
                className="form-control"
                id="age"
                required
                value={age}
                onChange={this.onChangeAge}
                name="age"
              />
            </div>

            <div className="form-group">
              <label htmlFor="arrivalDate">Arrival date (may not come after current date)</label>
              <input
                type="Date"
                className="form-control"
                id="arrivalDate"
                required
                value={arrivalDate.toISOString().split('T')[0]}
                onChange={this.onChangeArrivalDate} 
                name="arrivalDate"
              />
            </div>

            <div className="form-group">
              <label htmlFor="fatherId">Father Id (UUID format)</label>
              <input
                type="string"
                className="form-control"
                id="fatherId"
                value={fatherId}
                onChange={this.onChangeFatherId}
                name="fatherId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="motherId">Mother Id (UUID format)</label>
              <input
                type="string"
                className="form-control"
                id="motherId"
                value={motherId}
                onChange={this.onChangeMotherId}
                name="motherId"
              />
            </div>

            <button onClick={this.saveCaripiare} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
