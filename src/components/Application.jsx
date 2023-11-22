import React, { useRef, useState } from 'react'
import styles from '../style'
/* import emailjs from '@emailjs/browser'; */



function Application() {

  /* const form = useRef();
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setMessage('Odesílání...');
    setIsError(false);

    emailjs.sendForm('service_a6k4jgt', 'template_ojnaef7', form.current, 'iFRj6QLQG3-Nl7bCU')
      .then((result) => {
          setMessage('Přihláška byla odeslána!');
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          setMessage('Vyskytla se chyba, prosím opakujte akci.');
          setIsError(true);
          console.log(error.text);
      });
  };
 */


  return (
    <>
    
    <div className={`my-10 mx-2 xs:mx-0 ${styles.flex}`}>

      <div className={`bg-red-600 shadow-md rounded-md flex-1 mt-6 transition-all duration-150 [box-shadow:0px_10px_10px_1px_#f44336,0_15px_0_0_#f44336]
                        border-b-[1px] border-red-500 active:translate-y-2 active:[box-shadow:0_0_0_0_#f44336,0_0px_0_0_#f44336]
                        active:border-b-[0px]`}>
        
        <div className={`${styles.heading3}`}>
          <h1>Přihláška</h1>
        </div>
        
        


        <div className="mt-0 flex items-top justify-center">
        <form /* ref={form} onSubmit={sendEmail} */ className="px-0 pt-0 pb-8 mb-0 w-[95%] sm:w-[90%]">

          <div className="mb-4 grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-black text-lg      font-bold mb-2" htmlFor="playerFirstName">
                Jméno
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="playerFirstName" name="playerFirstName" type="text" placeholder="Jméno" required />
            </div>

          <div>
            <label className="block text-black text-lg      font-bold mb-2" htmlFor="playerLastName">
              Přijmení
            </label>
            <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="playerLastName" name="playerLastName" type="text" placeholder="Přijmení" required />
          </div>        

          <div>
            <label className="block text-black text-lg font-bold mb-2" htmlFor="dateOfBirth">
              Kategorie
            </label>
            <select data-te-select-init className="shadow border rounded w-full py-2 px-3 text-black font-semibold leading-tight focus:outline-none focus:shadow-outline">
                <option value="1" className="font-semibold text-yellow-500">Mladší žačky (do 12 let)</option>
                <option value="2" className="font-semibold text-yellow-500">Mladší žáci ( do 12 let)</option>
                <option value="3" className="font-semibold text-blue-400">Dorostenky (do 15 let)</option>
                <option value="4" className="font-semibold text-blue-400">Dorostenci (do 15 let)</option>
                <option value="5" className="font-semibold text-green-500">Juniorky (do 18let)</option>
                <option value="6" className="font-semibold text-green-500">Junioři (do 18 let)</option>
                <option value="7" className="font-semibold text-red-500">Ženy</option>
                <option value="8" className="font-semibold text-red-500">Muži</option>
                <option value="9" className="font-semibold">ŽENY MASTERS (45+)</option>
                <option value="10" className="font-semibold">MUŽI MASTERS (45+)</option>
            </select>
            </div>

          <div>
            <label className="block text-black text-lg      font-bold mb-2" htmlFor="address">
              Bydliště
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="address" name="address" type="text" placeholder="Bydliště" required />
          </div>

    
          <div>
            <label className="block text-black text-lg      font-bold mb-2" htmlFor="phone">
              Telefon
           </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="phone" name="phone" type="tel" placeholder="Telefon" required />
         </div>

          <div className="mb-6">
            <label className="block text-black text-lg      font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email" name="email" type="email" placeholder="Email" required />
          </div>

    </div>

    {/* {message && <div className={`text-center text-2xl ${isError ? 'text-red-500' : 'text-blue-100'} text-outline tracking-widest mt-[-1em] mb-3`}><b>{message}</b></div>} */}

      <div className="flex items-center justify-center">
      <button className="bg-blue-100 hover:bg-gray-300 black font-bold py-3 px-10 rounded focus:outline-none focus:shadow-outline scale-100 hover:scale-105" type="submit">
        Odeslat
      </button>
      </div>
     </form>
          

      </div>       


      </div>

    </div>

    </>
  )
}

export default Application
