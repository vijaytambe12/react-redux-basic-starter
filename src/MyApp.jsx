import React from "react";
import HelloWorld from "./components/HelloWorld";
import {updateTitle} from "./actions";
import {connect} from "react-redux";


class MyApp  extends React.Component {

    render() {
        return (
            <div>
                <HelloWorld title={this.props.title}/>
                <button onClick={this.updateTitle} value={"Shri"}>Shri</button>
                <button onClick={this.updateTitle} value={"Angad"}>Angad</button>
            </div>
        );
    }

    updateTitle = (event) => {
        this.props.updateTitle(event.target.value);
    }



}

const mapStateToProps = state => {
    return {
        title:state.title
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateTitle: (text) => dispatch(updateTitle(text))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(MyApp);
