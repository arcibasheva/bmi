import React, {Component} from 'react'
import Slider from "./Slider"

class BMI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weight: 75,
            height: 175,
            bmi: 0
        }
    }

    componentDidMount() {
        this.calcBMI()
    }

    handleHeightChange = (event) => {
        this.setState({height: event.target.value})
        this.calcBMI()
    }

    handleWeightChange = (event) => {
        this.setState({weight: event.target.value})
        this.calcBMI()
    }

    calcBMI = () => {
        let bmi = this.state.weight / (this.state.height / 100) ** 2
        this.setState({
            bmi: bmi.toFixed(1)
        })
    }

    render() {
        let category = "";
        switch (true) {
            case this.state.bmi < 18.5:
                category = "Underweight"
                break
            case this.state.bmi >= 18.5 && this.state.bmi <= 24.9:
                category = "Normal weight"
                break
            case this.state.bmi >= 25 && this.state.bmi <= 29.9:
                category = "Overweight"
                break
            case this.state.bmi >= 30:
                category = "Obesity"
                break
        }
        return <div>
            <Slider label="Height" min="90" max="245" step="1" measure="cm" value={this.state.height}
                    handleChange={this.handleHeightChange}/>
            <Slider label="Weight" min="35" max="200" step="1" measure="kg" value={this.state.weight}
                    handleChange={this.handleWeightChange}/>
            <p>BMI: <b>{this.state.bmi} {category}</b></p>
        </div>
    }

}

export default BMI;
