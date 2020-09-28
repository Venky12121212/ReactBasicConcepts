import React from "react"

class WishMessage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message: "Hello"
        }
    }
    updateMessage = (x) =>{
        this.setState({
            message: x
        })
    }
    render() {
        return(
            <div className="container mt-4">
                <pre>{JSON.stringify(this.state)}</pre>
                <h3>{this.state.message}</h3>
                <button className="btn btn-success" onClick={this.updateMessage.bind(this, "kfdajnsda djasbdkbd")}>Wish Me</button>
            </div>
        )
    }
}

export default WishMessage;