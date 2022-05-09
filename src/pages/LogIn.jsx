function LogIn() {
  {/* JS start here */}

  // password
  function toggleHidePass() {
    let x = document.getElementById("password-input")
    if (x.type === "password") {
  x.type = "text";
  } else {
  x.type = "password";
  }
  }

  // signup pass
  function toggleHidePassSignUp() {
    let x = document.getElementById("sign-up-password-input")
    if (x.type === "password") {
  x.type = "text";
  } else {
  x.type = "password";
  }
  }

useEffect(() => {
  document.getElementById("log-in-button").addEventListener("click", function() {
    document.getElementById("log-in-overlay").style.display= "block"
  })

  document.getElementById("close-modal-li").addEventListener("click", function() {
    document.getElementById("log-in-overlay").style.display= "none"
  })


  document.getElementById("sign-up-button").addEventListener("click", function() {
    document.getElementById("sign-up-overlay").style.display= "block"
  })

  document.getElementById("close-modal-su").addEventListener("click", function() {
    document.getElementById("sign-up-overlay").style.display= "none"
  })
}, [])

  const button = document.createElement('Home');

  button.addEventListener('click', event => {
    button.textContent = `Click count: ${event.detail}`;
  });

{/* JS start here */}

  return (
    <div>
{/* html start here */}

<div className="body">

    <div id="log-in-overlay">
      <div id="log-in-modal">

        <h2>Log in information</h2>

      <div className="row-center">
          <form action="/login" method="post">
            <input id="email-input" name="email" placeholder="Email" />
            <br />

            <input id="password-input" name="password" placeholder="Password" type = "password" />
            <input type ="checkbox" onClick = {toggleHidePass} className = "checked" />
        <br />
        <button id="log-in">Log In</button>
        </form>
     </div>
        <button id="close-modal-li">Back</button>
          <br />
        <div id="error"></div>
      </div>
    </div>

  <div id="sign-up-overlay">
    <div id="sign-up-modal">

      <h2>Sign Up</h2>

      <div className="row-center">
        <form action="/users" method="post">
          <input id="sign-up-email-input" name="email" placeholder="Email" />
          <br />
          <input id="sign-up-password-input" name="password" placeholder="Password" type = "password" />
          <input type ="checkbox" onClick = {toggleHidePassSignUp} className = "checked" />
      <br />
      <button id="submit">Submit</button>
      </form>
  </div>
      <button id="close-modal-su">Back</button>

    </div>
  </div>

  <div className="container-box">

      <h1>Pantrillo</h1>
        <div className="row-center">
          <div className="logo"></div>
        </div>
        <br />

      <div className="row-center">
        <a href="/welcome"><button id="log-in-button"><h4>Log In</h4></button></a>
    </div>


      <div className="row-center">
        <button id="sign-up-button"><h4>Sign Up</h4></button>
      </div>


      <div className="row-center">
        <a href="/welcome"><button className="Guest"><h4>Guest</h4></button></a>
      </div>
  </div>

</div>

{/* html end here */}
    </div>
  )

}

export default LogIn