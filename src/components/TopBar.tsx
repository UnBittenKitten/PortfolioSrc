import './TopBar.css'
import React from 'react'

interface TopBarProps {
  // Define your props here
  onStateChange: (state: TopBarState) => void;
}

interface TopBarState {
  btnAboutActive: boolean;
  btnProjectsActive: boolean;
  btnSkillsActive: boolean;
  btnCareerActive: boolean;
  btnContactActive: boolean;
}

class TopBar extends React.Component<TopBarProps, TopBarState> {
  constructor(props: TopBarProps) {
    super(props)
    this.state = {
      btnAboutActive: true,
      btnProjectsActive: false,
      btnSkillsActive: false,
      btnCareerActive: false,
      btnContactActive: false,
    }
  }

  callBackState = (): void => {
    this.props.onStateChange(this.state);
  }

  AboutButtonPress() {
    this.setState({
      btnAboutActive: true,
      btnProjectsActive: false,
      btnSkillsActive: false,
      btnCareerActive: false,
      btnContactActive: false,
    }, this.callBackState);
  }

  ProjectsButtonPress() {
    this.setState({
      btnAboutActive: false,
      btnProjectsActive: true,
      btnSkillsActive: false,
      btnCareerActive: false,
      btnContactActive: false,
    }, this.callBackState)
  }

  SkillsButtonPress() {
    this.setState({
      btnAboutActive: false,
      btnProjectsActive: false,
      btnSkillsActive: true,
      btnCareerActive: false,
      btnContactActive: false,
    }, this.callBackState)
  }

  CareerButtonPress() {
    this.setState({
      btnAboutActive: false,
      btnProjectsActive: false,
      btnSkillsActive: false,
      btnCareerActive: true,
      btnContactActive: false,
    }, this.callBackState)
  }

  ContactButtonPress() {
    this.setState({
      btnAboutActive: false,
      btnProjectsActive: false,
      btnSkillsActive: false,
      btnCareerActive: false,
      btnContactActive: true,
    }, this.callBackState)
  }

  render() {
    return (
      <header className='topbar'>
        <ul className='ul-topbar'> 
          <li className={`ul-item ${this.state.btnAboutActive ? 'btnActive' : 'btnInactive'}`} onClick={() => this.AboutButtonPress()}>About</li>
          <li className={`ul-item ${this.state.btnProjectsActive ? 'btnActive' : 'btnInactive'}`} onClick={() => this.ProjectsButtonPress()}>Projects</li>
          <li className={`ul-item ${this.state.btnSkillsActive ? 'btnActive' : 'btnInactive'}`} onClick={() => this.SkillsButtonPress()}>Skills</li>
          <li className={`ul-item ${this.state.btnCareerActive ? 'btnActive' : 'btnInactive'}`} onClick={() => this.CareerButtonPress()}>Career</li>
          <li className={`ul-item ${this.state.btnContactActive ? 'btnActive' : 'btnInactive'}`} onClick={() => this.ContactButtonPress()}>Contact</li>
        </ul>
      </header>
    )
  }
}

export default TopBar

export type { TopBarProps, TopBarState }