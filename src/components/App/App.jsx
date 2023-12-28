import { Component } from 'react';
import Section from '../Section/Section.jsx';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import Notification from '../Notification/Notification.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const option = e.target.value;
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.bad + this.state.neutral;
  }
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return parseInt((100 * this.state.good) / total);
  }

  render() {
    return (
      <>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        {this.state.good || this.state.bad || this.state.neutral ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default App;
