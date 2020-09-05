import React from 'react'
// import Aux from '../../hoc/Aux'
import classes from './Login.module.css'

const login = () =>{
  return(
<div className={classes.wrapper + ' '+ classes.fadeInDown}>
  <div className={classes.formContent}>

    <div className={classes.fadeIn + ' '+ classes.first}>
      <p> Login </p>
    </div>
    <form>
      <input type="text" id="login" className={classes.fadeIn+ ' '+  classes.second} name="login" placeholder="login" />
      <input type="text" id="password" className={classes.fadeIn+ ' '+  classes.third} name="login" placeholder="password" />
      <input type="submit" className={classes.fadeIn+ ' '+  classes.fourth} value="Log In" />
    </form>


    <div className={classes.formFooter}>
      <p style={{display:'inline-block', margin:'auto'}}>New member? &nbsp;</p>
      <a className={classes.underlineHover} href="/">Sign In</a>
    </div>
  </div>
</div>
)
}

export default login