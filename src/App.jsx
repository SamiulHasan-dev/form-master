
import './App.css'
import GrandPa from './components/GrandPa/GrandPa'
// import ReuseableFrom from './components/ReuseableFrom/ReuseableFrom'
// import HookForm from './components/HookFrom/HookForm'
// import RefFrom from './components/RefForm/RefFrom'
// import StatefullForm from './components/StatefullFrom/StatefullForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log('Sign Up data', data)
  // }

  // const handleUpdateProfile = data =>{
  //   console.log('Update profile data', data)
  // }

  return (
    <>
      <h1>Form Master</h1>
      <GrandPa></GrandPa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableFrom fromTitle={'SignUp'} handleSubmit={handleSignUpSubmit}>
      <div>
        <h2>Sign up</h2>
        <p>Please sign up now</p>
      </div>
      </ReuseableFrom> */}

      {/* <ReuseableFrom fromTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Update Profile</h2>
          <p>Always update profile</p>
        </div>
      </ReuseableFrom> */}
    </>
  )
}

export default App
