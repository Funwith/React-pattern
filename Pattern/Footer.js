"use strict";

var Footer = React.createClass({
    render: function() {
        return (
            <div>
                <a href="#" onClick={this.props.onNextButtonClick}>Next Lesson</a>
                <br/>
                <a href="#" onClick={this.props.onPrevButtonClick}>Previous Lesson</a>
            </div>
        )
    }
});