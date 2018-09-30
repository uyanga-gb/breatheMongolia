import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Container, Grid, Segment, Header, Image, Icon, Divider, Row } from 'semantic-ui-react'
import * as styles from "../../styles.less";
import imgChildren from 'assets/children.png'
import imgPregnant from 'assets/pregnant.png'
import imgElderly from 'assets/elderly.png'


const WeCantBreatheHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='We can’t breathe.'
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

WeCantBreatheHeading.propTypes = {
  mobile: PropTypes.bool,
}

class WeCantBreathe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <WeCantBreatheHeading/>
        <Segment  basic vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <p style={{fontSize: '1.33em'}}>
                  Learning to breathe is the hardest task for newborns living in the coldest capital of the world struggling to maintain its nomadic heritage in an urban setting. Find out how the population, most specifically children and pregnant women, are being affected by air pollution.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row textAlign='center'>
              <Grid.Column width={5}>
                <Header as='h5' content='In Ulaanbaatar,' />
                <Grid.Row>
                  <Icon disabled name='male' size='big'/>
                </Grid.Row>
                <Header as='h2' content='2 in 5' />
                <Header as='h5' content='are attributable to air pollution.' />
                Source: <a as='a'>Name of Source</a>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as='h5' content='Birth defects and miscarriage are' />
                <Header as='h2' content='3.6x' />
                <Header as='h5' content='higher in the winter.' />
                Source: <a as='a'>Name of Source</a>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as='h2' content='66.9%' />
                <Header as='h5' width={3} content='of those hospitalized due to air pollution related diseases live in underserved, ger districts.' />
                Source: <a as='a'>Name of Source</a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment basic style={{padding: '1em', backgroundColor: '#F3F7FC'}} >
          <Grid columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em', textAlign: 'left'}}>
                <Header as='h3' style={{fontSize: '2em'}}>
                  PM 2.5
                </Header>
                <p style={{fontSize: '1.1em', fontWeight: 'bold'}}>Particle Matter with a diameter of less than 2.5 micrometer</p>
                <p style={{
                  fontSize: '0.8em',
                  fontWeight: 'normal'
                }}>When we talk about air pollution, we are in fact speaking of many different pollutants. Unfortunately for Mongolia, especially Ulaanbaatar, we have to speak of the most lethal air pollutant called PM2.5. It is lethal because it is as small as 1/20th your hair strand in diameter, and never leaves your body once it enters it. </p>
              </Grid.Column>
              <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                <Image avatar src='' />
              </Grid.Column>
              <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                <Image avatar src='' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment basic vertical>
          <Grid container stackable verticalAlign='middle' textAlign='left'>
            <Grid.Row className={styles.paddedContainer}>
            <Grid.Column width={12}>
              <p>
                The reason why PM2.5 is such a big problem is explained below, but in short, because Ulaanbaatar is the coldest capital in the world with abundant coal resources to suffice for the heat and electricity demand. PM2.5 is mainly produced from combustion of fuels. Hence, the problem is extremely seasonal
              </p>
              <p>
                The highest recorded Air Quality Indexes in the last winter exceeded 2,000 (December 26, Bayankhoshuu, and few others). To put that into perspective, Beijing declares code red when AQI is above 500 for any 24 hour period. In any AQI above 500, you’re advised to avoid the outdoors.
              </p>
            </Grid.Column>
              <Grid.Column width={4} style={{borderTop: '3px solid black', backgroundColor: '#F3F7FC', padding: '2em'}}>
                <p>AQI stands for Air Quality Index, which is a standardized measurement for the general quality of the atmosphere in terms of danger to human health.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment basic className={styles.paddedContainer}>
          <Image src={imgPregnant} size='huge' centered/>
          <p className={styles.paddedContainer}>
            Exposure to PM2.5, fine particulate matter, and PM10 are strongly associated with mortality attributable to ischemic heart disease, dysrhythmias, heart failure, and cardiac arrest. 10 micrograms/cubic meter elevation in PM2.5 was associated in a study with an 8% to 18% increases in mortality risk, and 8% increase in lung cancer mortality risk. (C. Arden Pope, 2002)
          </p>
          <p className={styles.paddedContainer} style={{
            fontSize: '1.4em',
            marginTop: '2em',
            textAlign: 'center'
          }}><mark>According to a study conducted by Simon Fraser University and MNUMS, the number of deaths attributable to air pollution in Ulaanbataar rose from <span style={{fontWeight: 'bold'}}>1 in 10 deaths to 2 in 10 deaths</span> between 2009 and 2014.</mark>
        </p>
        </Segment>


        <Segment basic style={{minHeight: 200, padding: '1em 0em'}} >
          <Grid celled='internally' columns='equal' stackable style={{textAlign: 'left', border: '1px solid #979797'}}>
            <Grid.Row>
              <Grid.Column style={{background: '#ABAFB4', padding: '2em'}}>
                <Header as='h3' style={{fontSize: '2.5em'}}>
                  Most vulnerable group of residents
                </Header>
              </Grid.Column>
              <Grid.Column style={{background: '#C5CAD0', padding: 0}}>
                <Image src={imgChildren} fluid />
                <p className={styles.paddedText}>Children Under 5</p>
                <p className={styles.paddedText}>In 2014, 178 children under 1 and 218 children under 5 died from respiratory illnesses.</p>
              </Grid.Column>
              <Grid.Column style={{background: '#ABAFB4', padding: 0}}>
                <Image src={imgPregnant} fluid />
                <p className={styles.paddedText}>Pregnant Women</p>
                <p className={styles.paddedText}>Birth defects and miscarriage are 3.6x higher in the winter. 66.9% of those hospitalized due to air pollution related diseases live in ger districts.</p>
              </Grid.Column>
              <Grid.Column style={{background: '#C5CAD0', padding: 0}}>
                <Image src={imgElderly} fluid />
                <p className={styles.paddedText}>Elderly</p>
                <p className={styles.paddedText}>Need a fact here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}
export default WeCantBreathe;