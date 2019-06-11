import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import spotifyQuizLogo from '../../assets/images/projects/spotify-quiz.png'
import littleNomadLogo from '../../assets/images/projects/little-nomad.png'
import walkthroughViewGif from '../../assets/images/projects/wvwalkthroughview-optimize.gif'
import ShellHacksLogo from '../../assets/images/projects/ShellHacksLogo.svg';
import LOMLogo from '../../assets/images/projects/LOMLogo.png';
import GeoLogo from '../../assets/images/projects/GeoLogo.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={ShellHacksLogo}
            colour="#FFFFFF"
            title="ShellHacks Software"
            position = {null}
            link="https://github.com/UPE-FIU/pear-ShellHacks"
            timeperiod="2018 - present" 
            subtitle="Developed a backend API for our hackathon which handles over 2000 registrations and counting.
            Created an admin portal for the organizers to use for accepting applicants, sending push notificatoins, and 
            view registration statistics"
          />
          <ExperienceUnit
            logo={LOMLogo}
            colour="#FFFFFF"
            title="League of Memes"
            position = {null}
            link="https://github.com/league-of-laughs"
            timeperiod="2019"
            subtitle="A desktop and mobile party game where you and your friends compete to make the best meme."
          />
          <ExperienceUnit
            logo={GeoLogo}
            colour="#FFFFFF"
            title="GeoScheduler"
            position = {null}
            link="https://github.com/geoschedule"
            timeperiod="2019"
            subtitle="An employee shift management system to clock in and clock out employees automatically 
            with geolocation."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
