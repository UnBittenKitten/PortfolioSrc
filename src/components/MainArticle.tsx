import './MainArticle.css'
import React from 'react'

import TopBar, { TopBarState } from './TopBar'

import About from './Contents/About'
import Career from './Contents/Career'
import Contact from './Contents/Contact'
import Skills from './Contents/Skills'
import Projects from './Contents/Projects'

interface MainArticleProps {
  display: string
}

interface MainArticleState {
  wrapDisplay: string
  display: string
  lastUsedDisplay: string

  appearContent: boolean
  disappearContent: boolean
}

class MainArticle extends React.Component<MainArticleProps, MainArticleState> {
  constructor(props: MainArticleProps) {
    super(props)
    this.state = {
      wrapDisplay: "about",
      display: "about",
      lastUsedDisplay: "n",
      appearContent: false,
      disappearContent: false,
    }
  }


  render() {
    let DISPLAY = "";
    return (
      <div className='topLevelDiv'>
        <TopBar
          onStateChange={(state: TopBarState): void => { //todo: fix this later
            if (state.btnAboutActive) {
              DISPLAY = "about"
              this.setState({
                display: "about"
              });
            } else if (state.btnProjectsActive) {
              DISPLAY = "projects"
              this.setState({
                display: "projects"
              });
            } else if (state.btnSkillsActive) {
              DISPLAY = "skills"
              this.setState({
                display: "skills"
              });
            } else if (state.btnCareerActive) {
              DISPLAY = "career"
              this.setState({
                display: "career"
              });
            } else if (state.btnContactActive) {
              DISPLAY = "contact"
              this.setState({
                display: "contact"
              });
            }
            
            if(this.state.lastUsedDisplay !== DISPLAY) {
              console.log("NOT THE SAME") 
              this.setState({
                disappearContent: true
              });
              
              setTimeout(() => {
                console.log("END") 
                this.setState({
                  disappearContent: false,
                  appearContent: true,
                  wrapDisplay: DISPLAY
                });

                setTimeout(() => {
                  this.setState({
                    appearContent: false
                  })
                }, 500)

              }, 500);
            }

            this.setState({
              lastUsedDisplay: DISPLAY
            });
          }}
        />
        <div className={`content ${this.state.disappearContent ? 'disappearContent' : ''} ${this.state.appearContent ? 'appearContent' : ''}`}>
          {
            {
              'about': <About />,
              'career': <Career />,
              'contact': <Contact />,
              'projects': <Projects />,
              'skills': <Skills />,
            }[this.state.wrapDisplay]
          }
        </div>
        
      </div>
    )
  }

}

export default MainArticle