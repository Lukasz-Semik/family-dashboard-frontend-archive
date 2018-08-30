import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { api } from 'api';

const SetterWrapper = styled.div`
  width: 30px;
  height: 30px;
  background-color: green;
`;

class Setter extends PureComponent {
  componentDidMount() {
    api
      .get('/api/user/test')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return <SetterWrapper>Make a request</SetterWrapper>;
  }
}

export default Setter;
