import React, {useState} from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Occupation, Education, Married, LoanType } from '../utils/enum';
// import styles from './SignUpBorrower.css';



function SignUpBorrower() {


    const[value,setValue]=useState(1)

    const animatedComponents = makeAnimated();

    let options1 = [];
    let options2 = [];
    let options3 = [];
    let options4 = [];

    Occupation.map(val=>{
        options1.push({"label":val,"value":val});
    });

    Education.map(val=>{
        options2.push({"label":val,"value":val});
    });

    Married.map(val=>{
        options3.push({"label":val,"value":val});
    });

    LoanType.map(val=>{
        options4.push({"label":val,"value":val});
    });




    
    const[name,setName]=useState();
    const[age,setAge]=useState();
    const[cScore,setCScore]=useState();
    const[occupation,setOccupation]=useState({"label":'',"value":''});
    const[income,setIncome]=useState();
    const[loanType,setLoanType]=useState({"label":'',"value":''});
    const[minROI,setMinROI]=useState();
    const[maxROI,setMaxROI]=useState();
    const[maxAm,setMaxAm]=useState();
    const[minAm,setMinAm]=useState();
    const[maxDur,setMaxDur]=useState();
    const[minDur,setMinDur]=useState();
    const[linkedin,setLinkedin]=useState();
    const[msg,setMsg]=useState();
    const[married,setMarried]=useState({"label":'',"value":''});
    const[education,setEducation]=useState({"label":'',"value":''});
    const[dependents,setDependents]=useState();




    return (
        <div>
            <div className='lg:grid lg:grid-cols-5 gap4 rounded-md px-2 py-2 lg:py-4  custom-box-shadow' >
                <div className='col-span-3 px-2 py-2 sm:px-4 lg:px-12 lg:py-3'>
                    <form>

                        





                        {value === 1 && 
                        

                            <div className=' mb-20'>

                                <div className='mb-6 grid grid-cols-2 gap-4 '>
                                    <div className="col-span-1">
                                        <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                        <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" id="name" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500   block w-full p-2.5  `} placeholder="name@flowbite.com" required />
                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Age</label>
                                        <input value={age} onChange={(e)=>{if(e.target.value >= 0) setAge(e.target.value)}} type="number" min={0} id="age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-blue-500   " placeholder="name@flowbite.com" required />
                                    </div>

                                
                                </div>


                                <div className='mb-6 grid grid-cols-2 gap-4 '>
                                    <div className="col-span-1">
                                        <label htmlFor="creditscore" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Credit Score</label>
                                        <input value={cScore} onChange={(e)=>{ setCScore(e.target.value)}}  type="number" min={300} max={500} id="creditScore" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white    focus:outline-blue-500" placeholder="name@flowbite.com" required />
                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Annual Income</label>
                                        <input value={income} onChange={(e)=>{ setIncome(e.target.value)}}  type="number" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-blue-500" placeholder="name@flowbite.com" required />
                                    </div>

                                    
                                </div>

                                <div className='mb-6 grid grid-cols-2 gap-4 '>
                                    

                                    <div className="col-span-1">
                                        <label htmlFor="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dependents</label>
                                        <input value={dependents} onChange={(e)=>{ setDependents(e.target.value)}} type="number" id="age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="creditscore" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">LinkedIn Profile</label>
                                        <input value={linkedin} onChange={(e)=>{ setLinkedin(e.target.value)}} type="link"   id="creditScore" class="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                    </div>
                                </div>

                                <div className='mb-6 grid grid-cols-3 gap-4 '>
                                    <div className="col-span-1">
                                        <label htmlFor="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Occupation</label>
                                        <Select
                                        value={occupation.label !== '' && occupation}
                                        onChange={(e)=>{setOccupation(e)}}
                                        id="academyOwners"                       
                                        placeholder="Select Occupation"
                                        className="font-primary text-sm"
                                        components={animatedComponents}
                                        options={options1}
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="creditscore" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Education</label>
                                        <Select
                                        value={education.label !== '' && education}
                                        onChange={(e)=>{setEducation(e)}}
                                        id="academyOwners"                       
                                        placeholder="Select Education"
                                        className="font-primary text-sm"
                                        components={animatedComponents}
                                        options={options2}
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Married</label>
                                        <Select
                                        value={married.label !== '' && married}
                                        onChange={(e)=>{setMarried(e)}}
                                        id="academyOwners"                       
                                        placeholder="Select Married Status"
                                        className="font-primary text-sm"
                                        components={animatedComponents}
                                        options={options3}
                                        />
                                    </div>

                                    
                                </div>


                            </div>

                        }


                        {value === 2 && 
                        
                            <div className=''>
                                <div className='mb-6 grid grid-cols-3 gap-4 '>
                                    <div className="col-span-1">
                                        <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type of Loan</label>
                                        <Select
                                        value={loanType.label !== '' && loanType}
                                        onChange={(e)=>{setLoanType(e)}}
                                        id="academyOwners"                       
                                        placeholder="Select Loan Type"
                                        className="font-primary text-sm"
                                        components={animatedComponents}
                                        options={options4}
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Maximum Expected ROI  </label>
                                        <input value={maxROI} onChange={(e)=>{ setMaxROI(e.target.value)}}  type="number" id="age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="creditscore" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Minimum Expected ROI </label>
                                        <input value={minROI} onChange={(e)=>{ setMinROI(e.target.value)}}  type="number" min={300} max={500} id="creditScore" class="bg-gray-50 border border-gray-300 focus:outline-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                    </div>
                                </div>


                                <div className='mb-6 grid grid-cols-2 gap-4 '>
                                    <div className="col-span-1">
                                        <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Maximum Loan Amount</label>
                                        <input value={maxAm} onChange={(e)=>{ setMaxAm(e.target.value)}}  type="number" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-blue-500 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Minimum Loan amount    </label>
                                        <input value={minAm} onChange={(e)=>{ setMinAm(e.target.value)}}  type="number" id="age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-blue-500 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                    </div>

                                    
                                </div>



                                <div className='mb-6 grid grid-cols-2 gap-4 '>
                                    <div className="col-span-1">
                                        <label htmlFor="creditscore" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Maximum Loan duration  </label>
                                        <input value={maxDur} onChange={(e)=>{ setMaxDur(e.target.value)}}  type="number" min={300} max={500} id="creditScore" class="bg-gray-50 border border-gray-300 focus:outline-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="creditscore" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Minimum Loan duration  </label>
                                        <input value={minDur} onChange={(e)=>{ setMinDur(e.target.value)}}  type="number" min={300} max={500} id="creditScore" class="bg-gray-50 border border-gray-300 focus:outline-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                    </div>

                                    
                                </div>


                                <div className='mb-6'>
                                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">What will you do with this amount?</label>
                                    <textarea value={msg} onChange={(e)=>{ setMsg(e.target.value)}}  id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 focus:outline-blue-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                                </div>

                            </div>
                        }

 



                        


                        





                        



                        {value === 1 && 
                        
                        <button onClick={()=>{setValue(2)}}   class="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
                        }
                        
                        {value === 2 && 
                        <div className='flex items-center gap-6'>
                            <button onClick={()=>{setValue(1)}}   class="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Previous</button>
                            <button type="submit" class="text-white mb-4 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>

                        </div>
                        }

                    </form>
                </div>

                <div className='col-span-2 h-full flex justify-center items-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBAZ1vEUh_SHwrQYO0bX1dJe8Ncs0HxZWkYC6zKwcyUyogKpY5-7yDzssW7WCvpWCL_Q&usqp=CAU" alt="money"/>
                </div>
            </div>
        </div>
    )
}

export default SignUpBorrower