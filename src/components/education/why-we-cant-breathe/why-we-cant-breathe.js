import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Container, Grid, Segment, Header, Image, Icon, Button, Row, Popup } from 'semantic-ui-react'
import * as styles from "../../styles.less";
import air_pol_info from 'assets/air_pol_info_temp.jpg'
import man_icon from 'assets/man_icon.png'

const WhyWeCantBreatheHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Why We Can’t Breathe.'
      style={{
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: mobile ? '0.5em' : '2em',
        color: '#000000',
        textAlign: 'center'
      }}
    />
  </Container>
)

WhyWeCantBreatheHeading.propTypes = {
  mobile: PropTypes.bool,
}

class WhyWeCantBreathe extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <WhyWeCantBreatheHeading />
        <Segment basic vertical >
          <p className={styles.paddedContainer}>
            Ulaanbaatar’s air pollution* is a uniquely Mongolian, multi-layered issue created from both social and environmental systematic errors, and it “remains” due to the city’s geographical location and seasonal cold which claimed it the name “coldest capital in the world”.
          </p>
        </Segment>
        <Segment basic vertical style={{paddingBottom: '0'}}>
          <div className={styles.infoContainer}>
            <Image src={air_pol_info} fluid />
            <Popup
              trigger={<Icon className={styles.infoButton} name='plus circle' color='purple' inverted size='large' circular />}
              header='Ger and low pressure boilers'
              content='Ger district and low pressure boilers cause 80 percent of air pollution in Ulaanbaatar [1], with air quality monitors on cold evenings signaling 2,500 AQI [2]. It is advised not to exit the house when AQI is more than 500.In the world’s coldest capital, approximately 60 [3] percent of its 1.4 million population lives in houses or traditional nomadic dwellings called ger (pronounced gair). The “ger district” is packed with gers, houses, hospitals, and schools, which are off-grid. To stay warm in the cold nine months of a year, the gers and houses burn coal in traditional stoves, and the 3,200 hospitals and schools, in low-pressure boilers[1].'
              position='right center'
              on={['hover', 'click']}
              style={{fontSize: '10px'}}
            />
          </div>
        </Segment>
        <Segment basic vertical style={{paddingTop: '0'}}>
          <Grid padded>
            <Grid.Row centered color='teal'>
              <Header as='h3' inverted content='Indirect Causes of Air Pollution' />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column color='teal' width={3}>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
              </Grid.Column>
              <Grid.Column color='teal' width={5}>
                <Header inverted as='h5' content='Climate and Geography '/>
                <p>Living in the coldest capital in the world, with a mean annual temperature of -0.4 to -1.9̊C, and a mean winter temperature of -22.6̊C [1], ger area residents burn coal for heat and cooking in the cold winter months from October to April, when the city is subject to a thermal inversion layer caused by the Siberian Anticyclone. The infrastructure in UB (tightly dependent on money) was not adequate to supply the demand, which caused a housing problem (Hence, the ger districts).</p>
              </Grid.Column>
              <Grid.Column color='teal' width={3}>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
              </Grid.Column>
              <Grid.Column color='teal' width={5}>
                <Header inverted as='h5' content='Socioeonomic challenges'/>
                <p>As Ulaanbaatar is one of the few urban centers with high infrastructure development, herders migrate inwards for accessibility to education, healthcare, and such. This influx is especially higher during years with dzud (snow storm unique to Mongolia), when many families lose their livestock, moreover, their livelihood. This has caused the city’s population to triple in 3 decades reaching 1.2 million, when the city was originally built for 600,000 people</p>
              </Grid.Column>
          </Grid.Row>
          </Grid>
        </Segment>
        {/*<p>* Keep in mind that air pollution is a generalized term for a mix of hazardous pollutants both solid and gaseous such as PM2.5, PM10, NOx and many others.</p>*/}
      </div>
    )
  }
}
export default WhyWeCantBreathe;