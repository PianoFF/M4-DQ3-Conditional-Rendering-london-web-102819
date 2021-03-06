import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    selectedCategory: 'profile'
  }

  handleCategoryChange = category => {
    this.setState({
      selectedCategory: category 
    })
  }
  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
 
    const detailsToDisplay = 
      <div>
        {this.state.selectedCategory === 'profile' && 
        <Profile />}

        {this.state.selectedCategory === 'photo' && 
        <Photos />}

        {this.state.selectedCategory === 'cocktail' && 
        <Cocktails />}

        {this.state.selectedCategory === 'pokemon' && 
        <Pokemon />}
      </div>
    return (
      <div>
        <MenuBar handleCategoryChange={this.handleCategoryChange} state={this.state}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
