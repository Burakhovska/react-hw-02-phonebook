import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";

export default function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  };


//   handleLeaveFeedback = (type) => {
//     this.setState((prevState) => ({
//       [type]: prevState[type] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     return total ? Math.round((this.state.good / total) * 100) : 0;
//   };

  

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//         <div>
//       <Section title="Please leave feedback">
//       <FeedbackOptions
//   options={["good", "neutral", "bad"]}
//   onLeaveFeedback={this.handleLeaveFeedback}
// />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         </Section>

//       </div>
//     );
//   }
// }

// export default App;
