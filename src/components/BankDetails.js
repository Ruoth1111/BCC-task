import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function BankDetails() {
    const [formData, setFormData] = useState({
        accountHolderName: '',
        accountNumber: '',
        ifscCode: '',
        bankName: '',
        bankCity: '',
        branchName: '',
        relationWithAccountHolder: '',
        consent: false,
    });

    const [isFilled, setIsFilled] = useState(false);
    const [filledDate, setFilledDate] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        setFormData({ ...formData, consent: e.target.checked });
    };

    const saveForm = () => {
        setIsFilled(true);
        const date = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
        setFilledDate(date);
    };


    return (
        <div className='lg:ml-28 font-semibold mb-3'>
            <div className='flex flex-col lg:max-w-[800px] space-y-6 max-sm:w-screen max-sm:p-3'>
                <div className='text-[33px] font-bold'>
                    Bank Details
                </div>
                <div className='text-[14px] '>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </div>
            </div>
            <div className=' border-[#D3D3D3] border-[2px] border-opacity-60 mt-5 flex flex-col gap-y-8 p-6 rounded-md sm:w-[340px] max-md:m-4 md:w-full'>
                <div className='flex flex-col md:flex-row justify-between lg:items-center max-md:space-y-2'>
                    <div className='font-semibold'>ACCOUNT HOLDER NAME</div>
                    <input
                        type='text'
                        name='accountHolderName'
                        placeholder='Account Holder Name'
                        className={`border rounded-md border-[#D3D3D3] border-opacity-30 text-black outline-none w-full md:w-96 p-2 ${isFilled && formData.accountHolderName && 'bg-[#E4F0EB]'}`}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='flex flex-col md:flex-row justify-between lg:items-center max-md:space-y-2'>
                    <div className='font-semibold'>
                        ACCOUNT NUMBER
                    </div>
                    <input type='text' name="accountNumber" placeholder='Account Number' className={`border-[2px] rounded-md border-[#D3D3D3] border-opacity-30 text-black outline-none w-full md:w-96 p-2 ${isFilled && formData.accountHolderName && 'bg-[#E4F0EB]'}`}
                        onChange={handleInputChange}></input>
                </div>
                <div className='flex flex-col md:flex-row justify-between lg:items-center max-md:space-y-2'>
                    <div className='font-semibold'>
                        IFSC CODE
                    </div>
                    <input type='text' name="ifscCode" placeholder='IFSC Code' className={`border-[2px] rounded-md border-[#D3D3D3] border-opacity-30 text-black outline-none w-full md:w-96 p-2 ${isFilled && formData.accountHolderName && 'bg-[#E4F0EB]'}`}
                        onChange={handleInputChange}></input>
                </div>
                <div className='flex flex-col md:flex-row justify-between lg:items-center max-md:space-y-2'>
                    <div className='font-semibold'>
                        BANK NAME
                    </div>
                    <input type='text' name="bankName" placeholder='Bank Name' className={`border-[2px] rounded-md border-[#D3D3D3] border-opacity-30 text-black outline-none w-full md:w-96 p-2 ${isFilled && formData.accountHolderName && 'bg-[#E4F0EB]'}`}
                        onChange={handleInputChange}></input>
                </div>
                <div className='flex flex-col md:flex-row justify-between lg:items-center max-md:space-y-2'>
                    <div className='font-semibold'>
                        BANK CITY
                    </div>
                    <input type='text' name="bankCity" placeholder='Bank City' className={`border-[2px] rounded-md border-[#D3D3D3] border-opacity-30 text-black outline-none w-full md:w-96 p-2 ${isFilled && formData.accountHolderName && 'bg-[#E4F0EB]'}`}
                        onChange={handleInputChange}></input>
                </div>
                <div className='flex flex-col md:flex-row justify-between lg:items-center max-md:space-y-2'>
                    <div className='font-semibold'>
                        BRANCH NAME
                    </div>
                    <input type='text' name="branchName" placeholder='Branch Name' className={`border-[2px] rounded-md border-[#D3D3D3] border-opacity-30 text-black outline-none w-full md:w-96 p-2 ${isFilled && formData.accountHolderName && 'bg-[#E4F0EB]'}`}
                        onChange={handleInputChange}></input>
                </div>
                <div className='flex flex-col md:flex-row justify-between lg:items-center max-md:space-y-2'>
                    <div className='font-semibold'>
                        RELATION WITH ACCOUNT HOLDER
                    </div>
                    <input type='text' name="relationWithAccountHolder" placeholder='Relation with Account Holder' className={`border-[2px] rounded-md border-[#D3D3D3] border-opacity-30 text-black outline-none w-full md:w-96 p-2 ${isFilled && formData.accountHolderName && 'bg-[#E4F0EB]'}`}
                        onChange={handleInputChange}></input>
                </div>
                {isFilled ? (
                    <div className="flex flex-col md:flex-row justify-between lg:items-center max-md:space-y-2">
                        <div className="font-semibold">CONSENT</div>
                        <div className="w-[380px] border-[2px] rounded-md border-[#D3D3D3] border-opacity-30 text-black outline-none p-2 max-md:w-fit">
                            <div className='flex flex-col gap-y-4'>
                                <div>I confirm that the information given in this form is true, complete and accurate. I understand that in case of incorrect details, Exambazaar will not be responsible for any loss of pay.</div>
                                <div>FILLED ON {filledDate}</div>
                            </div>
                        </div>
                    </div>

                ) : (
                    <div className="flex flex-col md:flex-row justify-between lg:items-center max-md:space-y-2">
                        <div className="font-semibold">CONSENT</div>
                        <div className="w-[380px] border-[2px] rounded-md border-[#D3D3D3] border-opacity-30 text-black outline-none p-2  max-md:w-fit">
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={formData.consent} onChange={handleCheckboxChange} />} label="I confirm that the information given in this form is true, complete and accurate. I understand that in case of incorrect details, Exambazaar will not be responsible for any loss of pay." />
                            </FormGroup>
                        </div>
                    </div>
                )}
                <div className='flex items-center justify-end font-bold rounded-lg'>
                    <button className='py-3 bg-[#3AA078] text-white rounded-md px-5' onClick={saveForm}>Save</button>
                </div>
            </div>

            <div className='lg:w-[900px] max-sm:hidden max-sm:p-3 border-b border-[#D3D3D3] pb-6 mt-3 font-extralight flex flex-col justify-center items-center'>
                <div>THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF THESE DETAILS ARE WRONG, PLEASE </div>
                <div> CONTACT YOUR MANAGER IMMEDIATELY! ALSO EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!</div>

            </div>
            <div className='lg:w-[900px] lg:hidden md:hidden max-sm:p-3 border-b border-[#D3D3D3] pb-6 mt-3 font-extralight flex flex-col justify-center items-center text-center'>
                THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF THESE DETAILS ARE WRONG, PLEASE
                CONTACT YOUR MANAGER IMMEDIATELY! ALSO EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!
            </div>
        </div>
    )
}

export default BankDetails