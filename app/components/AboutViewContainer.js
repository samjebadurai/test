import {connect} from 'react-redux'
import About from './About'

export default connect(
  (state, props) => {
      console.log(state);
      
      return ({
        Theme: state.places.places,
      })
  } 
)(About)
