# React-parrent
Design pattern for React


## 1. Access method other component from Parrent component render.

React provides an interface for what you are trying to do via the `ref` [attribute](https://facebook.github.io/react/docs/more-about-refs.html). Assign a component a `ref` attribute, and once it is rendered it is available on the renderer's `refs` object.

Example: I have three component: `App`, `course` and `footer`.


`App.js`

```javascript
	var App = React.createClass({
		componentDidMount: function() {
			React.findDOMNode(this.refs.course.next_lesson());
			React.findDOMNode(this.refs.course.prev_lesson());
		},
		nextLesson: function() {
			React.findDOMNode(this.refs.course.next_lesson());
		},
		prevLesson: function() {
			React.findDOMNOde(this.refs.course.prev_lesson());
		},
		render: function() {
			return (
				<div>
					<Course data={this.props.data} ref="course" />
					<Footer onNextButtonClick={this.nextLesson} onPrevButtonClick={this.prevLesson} />
				</div>
			)
		}
	}),
```


`Course.js`

```javascript
	var Course = React.createClass({
		getInitialState: function() {
			return {
				currentLesson: this.props.data.currentLesson
			}
		},
		nextLesson: function() {
			var lessonNext = this.state.currentLesson + 1;	
			this.showLesson(lessonNext);
		},
		prevLesson: function() {
			var lessonPrev = this.state.currentLesson - 1;
			this.showLesson(lessonPrev);
		},
		showLesson: function(lesson) {
			var self = this;
			$.get('/course-online/api/' + lesson.id).done(function(lessonData) {
				self.setState({currentLesson: lessonData})
			})
		}
	})
```


`Footer.js`

```javascript
	var Footer = React.createClass({
		render: function() {
			<div>
				<a href="#" onClick{this.props.onNextButtonClick}>Next Lesson</a>
				<a href="#" onClick{this.props.onPrevButtonClick}>Previous Lesson</a>
			</div>
		}
	})
```