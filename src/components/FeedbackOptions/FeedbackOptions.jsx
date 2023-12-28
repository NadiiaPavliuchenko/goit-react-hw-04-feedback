import { Div, Button } from './FeedbackOptions.styled';

const FeedbackOptions = props => {
  return (
    <Div>
      {props.options.map((option, index) => {
        return (
          <Button
            type="button"
            key={index}
            value={option}
            onClick={props.onLeaveFeedback}
          >
            {option}
          </Button>
        );
      })}
    </Div>
  );
};

export default FeedbackOptions;
