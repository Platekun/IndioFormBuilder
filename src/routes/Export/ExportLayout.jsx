import React from 'react';
import PropTypes from 'prop-types';
import Export from '../../components/Export';

const ExportLayout = (props) => (
  <main>
    <Export data={props.questions}/>
  </main>
);

ExportLayout.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ExportLayout;
