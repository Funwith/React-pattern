"use strict";

var App = React.createClass({
    nextLesson: function() {
        this.refs.course.nextLesson();
    },
    prevLesson: function() {
        this.refs.course.prevLesson();
    },
    render: function() {
        return (
           <div>
               <Course ref="course"/>
               <Footer onNextButtonClick={this.nextLesson} onPrevButtonClick={this.prevLesson}/>
           </div>
        )
    }
});