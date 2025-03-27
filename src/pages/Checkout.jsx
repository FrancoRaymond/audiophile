import React,{ useState} from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/context';
import CheckoutCart from '../components/CheckoutCart'
import BillingInfo from '../components/checkout-form/Billinginfo';
import ShippingInfo from '../components/checkout-form/ShippingInfo';
import PaymentInfo from '../components/checkout-form/PaymentInfo';

const Checkout = () => {
  const navigate = useNavigate();
  const { setCart } = useAppContext()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [noEmptyFields, setNoEmptyFields] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "",
    eMoneyNumber: "",
    eMoneyPin: ""
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    address: false,
    zipCode: false,
    city: false,
    country: false,
    paymentMethod: false,
    eMoneyNumber: false,
    eMoneyPin: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!formData.name) formErrors.name = true;
    if (!emailRegex.test(formData.email)) formErrors.email = true;
    if (!formData.phoneNumber) formErrors.phoneNumber = true;
    if (!formData.address) formErrors.address = true;
    if (!formData.zipCode) formErrors.zipCode = true;
    if (!formData.city) formErrors.city = true;
    if (!formData.country) formErrors.country = true;
    if (!formData.paymentMethod) formErrors.paymentMethod = true;
    if (formData.paymentMethod === "e-money") {
      if (!formData.eMoneyNumber) formErrors.eMoneyNumber = true;
      if (!formData.eMoneyPin) formErrors.eMoneyPin = true;
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setNoEmptyFields(true);
      alert('order submitted succesfully')
      setCart([])
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
        paymentMethod: "",
        eMoneyNumber: "",
        eMoneyPin: ""
      })
      navigate('/')
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}  
      className='text-black min-h-screen bg-gray-100 px-2 sm:px-5 md:px-10 lg:px-24 py-20'
    >
      <button onClick={() => navigate(-1)} className='text-gray-400 font-semibold text-lg cursor-pointer'>Go Back</button>
      <form 
        onSubmit={handleSubmit}
        className=' flex flex-col gap-5 mt-5 md:flex-row md:justify-between place-items-start'
      >
        <div className='bg-white px-2 sm:px-5 md:px-10 w-full py-5 md:py-10 rounded-md flex flex-col gap-5'>
          <h2 className='text-3xl font-semibold'>CHECKOUT</h2>
          <BillingInfo  formData={formData} errors={errors} handleChange={handleChange}/>
          <ShippingInfo formData={formData} errors={errors} handleChange={handleChange} />
          <PaymentInfo  formData={formData} errors={errors} handleChange={handleChange} />
        </div>
        <CheckoutCart />
      </form>
    </motion.div> 
  )
}

export default Checkout;