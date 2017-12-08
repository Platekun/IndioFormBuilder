import React from 'react';
import PropTypes from 'prop-types';
import FormParser from '../../components/FormParser';
import Wrapper from '../../components/presentational/Wrapper';

const FormPreviewLayout = (props) => (
  <main>
    <Wrapper>
      <FormParser questions={props.questions}/>
    </Wrapper>
  </main>
);

FormPreviewLayout.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FormPreviewLayout;
