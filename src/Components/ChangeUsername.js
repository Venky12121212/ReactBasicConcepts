import React from "react"

class ChangeuserName extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            username : "",
            password: ""
        }

    }
    changeInputValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <h3>{JSON.stringify(this.state)}</h3>
                    <input className="userName" type="text"
                           name="username"
                           value={this.state.username}
                            onChange={this.changeInputValue}/>
                    <input className="userName" type="password"
                           name="password"
                           value={this.state.password}
                           onChange={this.changeInputValue}/>

                    <h1>{this.state.username}</h1>
                </form>
            </div>
        );
    }
}

export default ChangeuserName;