import SignUpBorrower from "../components/SignUpBorrower";
import NavBar from "../components/NavBar";
const signUpB = () => {
    return (

        <div className=''>
          <NavBar />
          <div className="mt-12 px-4  lg:px-12 ">
            <h1 className="text-lg lg:text-3xl font-medium">Welcome Borrower, Create an Account</h1>
          </div>
          <div className='px-4 py-2 lg:px-12 lg:py-4 mt-4  '>
           
            <SignUpBorrower />

          </div>



        </div>
    );
}

export default signUpB;