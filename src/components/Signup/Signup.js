import React from 'react'
import classes from './Signup.module.css'

const signup = () =>{
  return(
<div className={classes.wrapper + ' '+ classes.fadeInDown}>
  <div className={classes.formContent}>

    <div className={classes.fadeIn + ' '+ classes.first}>
      <p> SignUp</p>
    </div>
    <form>
      <input type="text" className={classes.fadeIn+ ' '+  classes.second} name="login" placeholder="Name" />
      <input type="text" className={classes.fadeIn+ ' '+  classes.third} name="login" placeholder="Email" />
      <input type="text" className={classes.fadeIn+ ' '+  classes.third} name="login" placeholder="Address" />
      <input type="text" className={classes.fadeIn+ ' '+  classes.third} name="login" placeholder="Mobile no." />
      <input type="text" className={classes.fadeIn+ ' '+  classes.third} name="login" placeholder="Password" />
      <input type="text" className={classes.fadeIn+ ' '+  classes.third} name="login" placeholder="Confirm Password" />


      <input type="submit" className={classes.fadeIn+ ' '+  classes.fourth} value="Sign In" />
    </form>


    <div className={classes.formFooter}>
      <p style={{display:'inline-block', margin:'auto'}}>Already a member? &nbsp;</p>
      <a className={classes.underlineHover} href="/">Login</a>
    </div>
  </div>
</div>
)
}

export default signup