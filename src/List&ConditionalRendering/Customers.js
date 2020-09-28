import React from "react"

class Customers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            customers: [
                {
                    id: 1,
                    Name: "x",
                    Age: 12,
                    Location:"bza"
                },
                {
                    id: 2,
                    Name: "y",
                    Age: 13,
                    Location:"bza"
                },
                {
                    id: 3,
                    Name: "z",
                    Age:  13,
                    Location:"bza"
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <h2>Customers</h2>
                {
                    this.state.customers.map((customers) =>{
                        return(
                        <ul>
                            <li>ID: {customers.id}</li>
                            <li>Name: {customers.Name}</li>
                            <li>Age: {customers.Age}</li>
                            <li>Location: {customers.Location}</li>

                        </ul>
                        )
                    })
                }
            </div>
        )
    }
}

export default Customers;