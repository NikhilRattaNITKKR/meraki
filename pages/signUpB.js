import SignUpBorrower from "../components/SignUpBorrower";
import NavBar from "../components/NavBar";
const signUpB = () => {
    return (

        <div className=''>
          <NavBar />
          <div className='px-4 py-2 lg:px-12 lg:py-4 mt-12  '>

            <SignUpBorrower />

          </div>



        </div>
    );
}

export default signUpB;