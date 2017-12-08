import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../../components/presentational/Wrapper';
import './Export.css';

const Export = (props) => (
  <Wrapper>
    <section className="Export">
      <textarea defaultValue={JSON.stringify(props.data, null, 2)} className="Export__content"/>
    </section>
  </Wrapper>
);

Export.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ])
};

export default Export;
