import React from 'react';

class ChangeSelectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            technology: ""
        }

    }

    updateInput = (e) => {
        this.setState({
            technology: e.target.value
        });
    }

    render() {
        return (
            <div className='col-md-12'>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <h3>Change Select</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <select className="selectCustomClass form-control"
                                        value={this.state.technology}
                                        onChange={this.updateInput}>
                                    <option className="" value="">Select Technology</option>
                                    <option className="" value="HTML">HTML</option>
                                    <option className="" value="CSS">CSS</option>
                                    <option className="" value="Bootstrap">Bootstrap</option>
                                    <option className="" value="JQuery">JQuery</option>
                                </select>
                                <h3>{this.state.technology}</h3>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangeSelectBox;