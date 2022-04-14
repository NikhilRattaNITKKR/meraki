import SignUpLender from "../components/SignUpLender";
import NavBar from "../components/NavBar";

const signUpL = () => {
    return (
        <div className=''>
        <NavBar />
        <div className="mt-12 px-4  lg:px-12 ">
          <h1 className="text-lg lg:text-3xl font-medium">Welcome Lender, Create an Account</h1>
        </div>
        <div className='px-4 py-2 lg:px-12 lg:py-4 mt-4  '>
         
          <SignUpLender />

        </div>



      </div>
    );
}

export default signUpL;