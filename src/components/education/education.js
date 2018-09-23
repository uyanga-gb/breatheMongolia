import React, { Component } from 'react'
// import { Menu, Segment, Button, Image } from 'semantic-ui-react'
// import HomepageHeading from "./education"
import PropTypes from 'prop-types'
// import MiddleMenu from "./header-component/middle-navbar"
import imgChildren from 'assets/children.png'
import imgPregnant from 'assets/pregnant.png'
import imgElderly from 'assets/elderly.png'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  IconGroup,
  Sticky
} from 'semantic-ui-react'
import * as styles from "../styles.less";

const EducationHeading = ({ mobile }) => (
  <Container fluid className={styles.main_background} style={{padding: '6.5em 28.5em 5em 28.5em'}}>
    <Header
      as='h2'
      content='Education'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '2.5em',
        fontWeight: 'normal',
        marginBottom: 0,
        // marginTop: mosbile ? '1em' : '3em',
      }}
    />
  </Container>
)

const WeCantBreatheHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='We can’t breathe.'
      style={{
        fontSize: mobile ? '1.5em' : '80px',
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: mobile ? '0.5em' : '0.7em',
        color: '#E4E4E4',
        textAlign: 'center'
      }}
    />
  </Container>
)

WeCantBreatheHeading.propTypes = {
  mobile: PropTypes.bool,
}

const WhyWeCantBreatheHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Why We Can’t Breathe.'
      style={{
        fontSize: mobile ? '1.5em' : '80px',
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: mobile ? '0.5em' : '0.7em',
        color: '#E4E4E4',
        textAlign: 'center'
      }}
    />
  </Container>
)

WhyWeCantBreatheHeading.propTypes = {
  mobile: PropTypes.bool,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <EducationHeading />
    <WeCantBreatheHeading />
    {/*<HomepageMain>{children}</HomepageMain>*/}
    <WeCantBreatheHeading />
  </div>
)

export default class Education extends Component {
  constructor(props){
    super(props)
    this.state = {}

    this.handleUpdate = contextRef => this.setState({ contextRef })
  }
  render() {
    const { calculations, contextRef, activeItem } = this.state

    return (
      <ResponsiveContainer>
        <WeCantBreatheHeading />
          <div ref={this.handleUpdate}>

        <Segment style={{padding: '3em 0em'}} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
          <Grid.Column textAlign='center'>
          <p style={{fontSize: '1.33em'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
        <Sticky context={contextRef} pushing>
          <Grid style={{textAlign:'center', background: 'rgba(226,226,226,1)'}}>
            <Grid.Row columns={4}>
              <Grid.Column name='cant_breathe' onClick={this.handleItemClick}>
                We Can't Breathe
              </Grid.Column>
              <Grid.Column onClick={this.handleItemClick}>
              Why We Can't Breathe
              </Grid.Column>
              <Grid.Column onClick={this.handleItemClick}>
                We Tried to Fight It
              </Grid.Column>
              <Grid.Column onClick={this.handleItemClick}>
              Let's Do Something About It
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Sticky>
        <Segment style={{padding: '0em', backgroundColor: '#F3F7FC'}} >
          <Grid celled='internally' columns='equal' stackable>
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
        <Segment style={{padding: '8em 0em'}} vertical>
          <Grid container stackable verticalAlign='middle' textAlign='left'>
            <Grid.Column width={9}>
              <p>
                The reason why PM2.5 is such a big problem is explained below, but in short, because Ulaanbaatar is the coldest capital in the world with abundant coal resources to suffice for the heat and electricity demand. PM2.5 is mainly produced from combustion of fuels. Hence, the problem is extremely seasonal
              </p>
              <p>
                The highest recorded Air Quality Indexes in the last winter exceeded 2,000 (December 26, Bayankhoshuu, and few others). To put that into perspective, Beijing declares code red when AQI is above 500 for any 24 hour period. In any AQI above 500, you’re advised to avoid the outdoors.
              </p>
            </Grid.Column>
            <Grid.Column width={5} style={{borderTop: '3px solid black', backgroundColor: '#F3F7FC'}}>
            <p>AQI stands for Air Quality Index, which is a standardized measurement for the general quality of the atmosphere in terms of danger to human health.</p>
        </Grid.Column>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{margin: '3em 0em', textTransform: 'uppercase'}}
        >
          <a href='#'>Map</a>
        </Divider>

        <p>
          Exposure to PM2.5, fine particulate matter, and PM10 are strongly associated with mortality attributable to ischemic heart disease, dysrhythmias, heart failure, and cardiac arrest. 10 micrograms/cubic meter elevation in PM2.5 was associated in a study with an 8% to 18% increases in mortality risk, and 8% increase in lung cancer mortality risk. (C. Arden Pope, 2002)
        </p>
        <p style={{
          fontSize: '1.1em',
          marginTop: '2em'
        }}>According to a study conducted by Simon Fraser University and MNUMS, the number of deaths attributable to air pollution in Ulaanbataar rose from <span style={{fontWeight: 'bold'}}>1 in 10 deaths to 2 in 10 deaths</span> between 2009 and 2014.</p>
        </Grid>
        </Segment>
        <Segment style={{minHeight: 200, padding: '1em 0em'}} >
          <Grid celled='internally' columns='equal' stackable style={{textAlign: 'left', border: '1px solid #979797'}}>
            <Grid.Row>
              <Grid.Column style={{background: '#ABAFB4', padding: '2em'}}>
                <Header as='h3' style={{fontSize: '2.5em'}}>
                  Most vulnerable group of residents
                </Header>
                </Grid.Column>
                <Grid.Column style={{background: '#C5CAD0', padding: 0}}>
                  <Image src={imgChildren} fluid />
                  <p style={{fontWeight: 'bold'}}>Children Under 5</p>
                  <p>In 2014, 178 children under 1 and 218 children under 5 died from respiratory illnesses.</p>
                </Grid.Column>
                <Grid.Column style={{background: '#ABAFB4', padding: 0}}>
                <Image src={imgPregnant} fluid />
                <p style={{fontWeight: 'bold'}}>Pregnant Women</p>
                <p>Birth defects and miscarriage are 3.6x higher in the winter. 66.9% of those hospitalized due to air pollution related diseases live in ger districts.</p>
                </Grid.Column>
                <Grid.Column style={{background: '#C5CAD0', padding: 0}}>
                  <Image src={imgElderly} fluid />
                  <p style={{fontWeight: 'bold'}}>Elderly</p>
                  <p>Need a fact here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                </Grid.Column>
                </Grid.Row>
          </Grid>
        </Segment>
      </div>
      </ResponsiveContainer>
      )
    }
  }

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}