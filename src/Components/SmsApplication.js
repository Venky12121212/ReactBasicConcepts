import React from 'react'

class SmsApplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    charectersLength = (e) => {
        this.setState({
            count: e.target.value.length
        })
    }

    render() {
        return (
            <div className='Container mt-4'>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                Sms Application
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <textarea
                                            maxLength="100"
                                            className="form-control"
                                            row="4"
                                            onChange={this.charectersLength}
                                        >
                                        </textarea>
                                    </div>
                                    <div className="card-footer">
                                        <h4> The Charecters Remaining:
                                            <span className="font-weight-bold"> {this.state.count}</span>/100
                                        </h4>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default SmsApplication;