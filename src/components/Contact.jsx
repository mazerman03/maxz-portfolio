import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value} = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
  }

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Enter a valid email.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; 
    }
    setLoading(true);

    emailjs.send(
      'service_9ujzrf4',
      'template_24ghd19',
      {
        from_name: form.name,
        to_name: 'Max',
        from_email: form.email,
        to_email: 'maxzermeno03@gmail.com',
        message: form.message,
      },
      '4-KmdQZ5myJM6mPQV'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: '',
      });
      setErrors({}); 
    }).catch((error) => {
      setLoading(false);
      alert('Something went wrong.');
    });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text" 
              name="name"
              value = {form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {errors.name && <span className="text-red-500 text-sm mt-2">{errors.name}</span>}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="email" 
              name="email"
              value = {form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {errors.email && <span className="text-red-500 text-sm mt-2">{errors.email}</span>}
          </label>
          
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea 
              rows="7"
              name="message"
              value = {form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {errors.message && <span className="text-red-500 text-sm mt-2">{errors.message}</span>}
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />

      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")