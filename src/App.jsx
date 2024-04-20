
import './App.css'
import GrandPa from './Components/GrandPa/GrandPa'
// import ReausableForm from './Components/ReausableForm/ReausableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import StateFullForm from './Components/StateFullForm/StateFullForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {
  // const handleSingUpSubmit = data => {
  //   console.log("sign up data", data)

  // };
  // const handleUpdateProfile = data => {
  //   console.log("update frofile", data)

  // }

  return (
    <>

      <h1>Form master </h1>
      <GrandPa></GrandPa>
      {/* <StateFullForm></StateFullForm> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReausableForm formTitle={"Sign Up"} handleSubmit={handleSingUpSubmit}>
        <div>
          <h3>Sign up</h3>
          <p>keep your learning</p></div>
      </ReausableForm>
      <ReausableForm formTitle={"Profile Update"} submitBtnText="Update" handleSubmit={handleUpdateProfile}>
        <div>
          <h3>update profile</h3>
          <p>keep your learning</p>
        </div>
      </ReausableForm> */}
    </>
  )
}

export default App
