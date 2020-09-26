import React from 'react'
// import Aux from '../../hoc/Aux'
import classes from './Login.module.css'

const login = () =>{
  return(
<div className={classes.wrapper + ' '+ classes.fadeInDown}>
  <div className={classes.formContent}>

    <div className={classes.fadeIn + ' '+ classes.first}>
    <p> <span className={classes.bold}>Welcome Back</span><span className={classes.exclaim}>!</span></p>
    </div>
    <form>
      <input type="text" id="login" className={classes.fadeIn+ ' '+  classes.second} name="login" placeholder="EMAIL" />
      <input type="text" id="password" className={classes.fadeIn+ ' '+  classes.third} name="login" placeholder="PASSWORD" />
      <input type="submit" className={classes.fadeIn+ ' '+  classes.fourth} value="Log In" />
    </form>


    <div className={classes.formFooter}>
      <p style={{display:'inline-block', margin:'auto'}}>New here? &nbsp;</p>
      <a className={classes.underlineHover+ ' ' +classes.a} href="/signup"><u>Join Us!</u></a>
    </div>
  </div>
</div>
)
}

export default login