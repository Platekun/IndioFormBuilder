import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionList from '../../components/QuestionList';
import Wrapper from '../../components/presentational/Wrapper';

class FormBuilderLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired
  }

  render() {
    const { actions, questions } = this.props;

    return (
      <main>
        <Wrapper>
          <QuestionList
            formActions={actions}
            questions={questions.questions}
          />
        </Wrapper>
      </main>
    );
  }
}

export default FormBuilderLayout;
