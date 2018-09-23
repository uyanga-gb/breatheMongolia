import React, { Component } from 'react'
import * as styles from "../../styles.less";
import { Container, Icon, Image, Header, Grid} from "semantic-ui-react";

const TakeQuiz = () => {
  return (
    <Grid.Column width={10} className={styles.main_background}>
      <Header as='h3' content='Find out how exposed you are' style={{color: 'white'}}>
      </Header>
      <p>
        Lorem ipsum dolor sit amet pretm. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
        enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis
        pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
        quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
      </p>
      <button className={styles.buttonWhite} >
        Take Quiz
      </button>
    </Grid.Column>
    )
}

export default TakeQuiz