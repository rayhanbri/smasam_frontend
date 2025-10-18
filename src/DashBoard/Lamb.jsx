import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


const Lamb = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://smasam-backend.vercel.app/lamb")
            .then((res) => res.json())
            .then((data) => { setOrders(data.slice(1)) })
            .catch((err) => console.error(err));
    }, []);

    //   console.log(orders[1].orderStatus)

    const handleUpdate = async (id, field, value) => {
        try {
            // Update in UI instantly (optional)
            const updated = orders.map(order =>
                order._id === id ? { ...order, [field]: value } : order
            );
            setOrders(updated);
            console.log(updated)

            // send update to backend
            const res = await fetch(`https://smasam-backend.vercel.app/lamb/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ [field]: value }),
            });


            const data = await res.json();

            // Show SweetAlert on success
            if (data.success) {
                Swal.fire({
                    title: "✅ Updated!",
                    text: `${field} has been changed to "${value}".`,
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                    toast: true,
                    position: "top-end",
                });
            } else {
                Swal.fire({
                    title: "⚠️ Error!",
                    text: data.message || "Could not update order.",
                    icon: "error",
                    confirmButtonText: "Okay",
                });
            }

            if (!res.ok) throw new Error("Failed to update order");
        } catch (error) {
            console.error("Error updating order:", error);
        }
    };

    return (
        <div className="overflow-x-auto p-6">
            <h2 className="text-3xl font-semibold mb-6 text-center text-primary">
                Roasted Lamb Menu Orders
            </h2>
            <div className="bg-base-100  rounded-2xl p-4 max-w-5xl mx-auto overflow-auto max-h-screen">
                <table className="table  rounded-lg">
                    <thead className="bg-base-200 text-base font-semibold sticky top-0 z-10">
                        <tr >
                            <th>#</th>
                            <th>Ordre Nr.</th>
                            <th>Indtastningstid</th>
                            <th>Navn</th>


                            <th>Telefonnummer</th>
                            <th>E-mailadresse</th>
                            <th>Menukort</th>
                            <th>Betalingsmetode</th>
                            <th>afhentningstidspunkt</th>
                           <th>Helstegt lammekød</th>
                            <th>Total</th>
                            <th>Ordrestatus</th>
                            <th>Sidste opdatering</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => {
                            return (
                                <tr
                                    key={order._id}
                                    className={`hover ${order.lastUpdate === "Delivered" ? "bg-green-100"
                                        :
                                        order.orderStatus === "Confirm"
                                            ? "bg-yellow-100"
                                            : ""}`}
                                >
                                    <td>{index + 1}</td>
                                    <td className="font-medium">{order.orderNumber}</td>
                                     <td>{order.entry_time}</td>
                                    <td>{order.name_2} {order.name_3}</td>
                                    <td>{order.phone_1}</td>
                                    <td>{order.email_1}</td>
                                    <td>{order.form_title}</td>
                                    <td>{order.radio_3}</td>
                                    <td>{order.radio_4}</td>
                                    <td>{order.select_1}</td>
                                    <td>{order.calculation_1}</td>

                                    {/* Order Status Dropdown */}
                                    <td>
                                        <select
                                            className="select select-bordered select-sm"
                                            value={order.orderStatus}
                                            onChange={(e) =>
                                                handleUpdate(order._id, "orderStatus", e.target.value)
                                            }
                                            disabled={order.orderStatus === "Confirm"}
                                        >
                                            <option disabled>Choose</option>
                                            <option value="Confirm">Confirm</option>
                                            <option value="Pending">Pending</option>
                                        </select>
                                    </td>

                                    {/* Last Update Dropdown */}
                                    <td>
                                        <select
                                            className="select select-bordered select-sm"
                                            value={order.lastUpdate}
                                            onChange={(e) =>
                                                handleUpdate(order._id, "lastUpdate", e.target.value)
                                            }
                                            disabled={order.lastUpdate === "Delivered"}
                                        >
                                            <option value="Not Delivered">Not Delivered</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
                                    </td>
                                   
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Lamb;