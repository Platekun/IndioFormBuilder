import React from 'react';
import PropTypes from 'prop-types';
import PreviewRadio from '../presentational/PreviewRadio';
import PreviewInput from '../presentational/PreviewInput';
import './FormParser.css';

class FormParser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.traverse = this.traverse.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange(value, id) {
    this.setState((prevState) => ({ ...prevState, [id]: value }));
  }

  traverse(question, parent) {
    if (question instanceof Array) {
      return question.map((question) => this.traverse(question, parent));
    } else {
      let doesntMatchCondition = false;
      if (question.predicate) {
        switch (question.predicate.condition) {
          case 'equals':
            doesntMatchCondition =
              this.state[parent.id] !== question.predicate.value;
            break;

          case 'greaterThan':
            if (!isNaN(this.state[parent.id])) {
              doesntMatchCondition =
                this.state[parent.id] <= question.predicate.value;
            } else {
              doesntMatchCondition = true;
            }
            break;

          case 'lowerThan':
            if (!isNaN(this.state[parent.id])) {
              doesntMatchCondition =
                this.state[parent.id] >= question.predicate.value;
            } else {
              doesntMatchCondition = true;
            }
            break;
          default: break;
        }
      }

      return doesntMatchCondition ? (
        undefined
      ) : (
          <li key={question.id} className="FormParser__question">
            {question.type === 'text' || question.type === 'number' ? (
              <PreviewInput
                type={question.type}
                label={question.label}
                onChange={(evt) =>
                  this.onHandleChange(evt.target.value, question.id)}
                value={this.state[question.id]}
              />
            ) : (
                <PreviewRadio
                  label={question.label}
                  checked={this.state[question.id]}
                  name={question.label}
                  onChoose={(evt) =>
                    this.onHandleChange(evt.target.value, question.id)}
                />
              )}
            {question.subInputs ? (
              <ul>
                {question.subInputs.map((subQuestion) =>
                  this.traverse(subQuestion, question)
                )}
              </ul>
            ) : (
                undefined
              )}
          </li>
        );
    }
  }

  render() {
    return (
      <section className="FormParser">
        <h2 hidden>Parsed Form</h2>
        <form>
          <ul className="FormParser__questions-list">
            {this.traverse(this.props.questions)}
          </ul>
        </form>
      </section>
    );
  }
}

FormParser.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object)
};

export default FormParser;
