import React, { useEffect, useState } from 'react';

const Contact = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://smasam-backend.vercel.app/contact-form")
            .then((res) => res.json())
            .then((data) => { setOrders(data.slice(1) )})
            .catch((err) => console.error(err));
    }, []);

    //   console.log(orders[1].orderStatus)
    return (
        <div className="overflow-x-auto p-6">
            <h2 className="text-3xl font-semibold mb-6 text-center text-primary">
                Contact Form
            </h2>
            <div className="bg-base-100  rounded-2xl p-4">
                <table className="table w-full table-zebra    min-w-full border-collaps">
                    <thead className="bg-base-200 text-base font-semibold sticky top-0 z-10">
                        <tr >
                            <th>#</th>
                            <th>Indtastningstid</th>
                            <th>Navn</th>
                            <th>Telefonnummer</th>
                            <th>E-mailadresse</th>
                            <th>Særlige ønsker</th>
                            <th>Vælg dato</th>
                             
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => {
                            return (
                                <tr key={order._id} >
                                    <td>{index + 1}</td>
                                    <td>{order.entry_time}</td>
                                    <td>{order.name_2} {order.name_3}</td>
                                    <td>{order.phone_1}</td>
                                    <td>{order.email_1}</td>
                                    <td>{order.textarea_1}</td>
                                    <td>{order.date_1}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Contact;