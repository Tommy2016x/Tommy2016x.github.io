import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import GoDaddyLogo from '../../assets/images/experience/GoDaddy.png';
import BoatraxLogo from '../../assets/images/experience/BoatraxLogo.png';
import FIULogo from '../../assets/images/experience/FIULogo.png';

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={GoDaddyLogo}
            colour='#4AA34C'
            title='GoDaddy'
            position="Software Engineer Intern"
            link='https://www.godaddy.com/'
            timeperiod='May 2019 - August 2019'
            subtitle='Part of the UX Platforms team as a full stack developer intern 
            developing internal web frameworks and APIs used by product teams at GoDaddy'
          />
          <ExperienceUnit
            logo={BoatraxLogo}
            colour='#FFFFFF'
            title='Boatrax'
            position="Software Engineer Intern"
            link='https://boatrax.com/'
            timeperiod='May 2018 - august 2018'
            subtitle='One of the main developers at a startup where I designed and implemented core
            features of the main web application in React and wrote backend API services in PHP and
            MySQL'
          />
          <ExperienceUnit
            logo={FIULogo}
            colour='#FFFFFF'
            title='Florida International University'
            position="Undergraduate Teaching Assistant"
            link='https://www.cis.fiu.edu/'
            timeperiod='2018 - present'
            subtitle='Teaching Assistant for Intermediate Java where I primarily grade student assignments
            and leave feedback for improving their code quality'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
