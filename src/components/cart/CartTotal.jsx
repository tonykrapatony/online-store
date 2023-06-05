import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function CartTotal({setModalClass, ...props}) {

    const products = useSelector(state => state.products.products)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});

    const sendOrder = (event) => {
        event.preventDefault();
            // Перевірка валідності форми перед відправкою
        const validationErrors = {};
        if (!name.trim()) {
        validationErrors.name = 'Enter your name';
        }
        if (!email.trim()) {
        validationErrors.email = 'Enter your email';
        } else if (!isValidEmail(email)) {
        validationErrors.email = 'Enter correct email(example@email.com)';
        }
        if (!phone.trim()) {
        validationErrors.phone = 'Enter your phone number';
        } else if (!isValidPhone(phone)) {
        validationErrors.phone = 'Enter correct phone number(+380112223344)';
        }

        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        } else {
            // Валідація успішна, виконуємо дії після відправки форми
            // Наприклад, відправка форми на сервер
            console.log('Форма відправлена!', {
                name: name,
                email: email,
                phone: phone,
                products: products
            });
            setModalClass('modal open')
            // Очистка полів форми
            setName('');
            setEmail('');
            setPhone('');
            setErrors({});
        }
    }

    const isValidEmail = (value) => {
        // Використовуйте власну логіку валідації електронної адреси
        // Наприклад, регулярні вирази
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return emailRegex.test(value);
    };
    
    const isValidPhone = (value) => {
        // Використовуйте власну логіку валідації номера телефону
        // Наприклад, регулярні вирази або інші перевірки
        const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;
        return phoneRegex.test(value);
    };

    return (
        <div className="cart_total">
            <p className='total_amount'>Total amount <span className='value'>{props.totalPrice.toFixed(2)}$</span></p>
            <p className="title">Place an order</p>
            <form className="oreder_form" onSubmit={sendOrder}>
                <div className="form_group">
                    <input type="text" className="form_control" name='name' placeholder='Name' onInput={(e) => setName(e.target.value)}/>
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div className="form_group">
                    <input type="email" className="form_control" name='email' placeholder='Email' onInput={(e) => setEmail(e.target.value)}/>
                    {errors.email  && <span>{errors.email }</span>}
                </div>
                <div className="form_group">
                    <input type="text" className="form_control" name='phone' placeholder='Phone' onInput={(e) => setPhone(e.target.value)}/>
                    {errors.phone  && <span>{errors.phone }</span>}
                </div>
                <p className="legal">
                    *Your data will not be disclosed anywhere, since <a href="fakestoreapi.com">fakestoreapi.com</a> does not provide for ordering. You can see the completed data by pressing F12 and opening the console tab.
                </p>
                <div className="form_group">
                    <button className='btn' type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}