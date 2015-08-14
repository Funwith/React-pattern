"use strict";

var Course = React.createClass({
    nextLesson: function() {
        alert('You clicked NextLesson, function called from Course component');
    },
    prevLesson: function() {
        alert('You clicked PrevLesson, function called from Course component');
    },
    render: function() {
        return (
            <div></div>
        )
    }

});