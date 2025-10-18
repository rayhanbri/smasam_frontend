import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


const TakeAway = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://smasam-backend.vercel.app/takeaway")
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
            const res = await fetch(`https://smasam-backend.vercel.app/takeaway/${id}`, {
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
                Take Away Menu Orders
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
                           

                            <th>Burger menu</th>
                            <th>Kyllingeburger</th>
                            <th>Fiskefilet menu</th>
                            <th>Coca-Cola</th>
                            <th>Pepsi Max</th>
                            <th>Faxekondi</th>
                            <th>Fanta</th>
                            <th>Sambusa Vegetar</th>
                            <th>Sambusa Oksekød</th>
                            <th>Kabuli Pulao</th>
                            <th>Butter Kylling</th>
                            <th>Kylling Tikka Masala</th>
                            <th>Qorma</th>
                            <th>Ghormeh Sabzi</th>
                            <th>Cardigan Salan</th>
                            <th>Palak Paneer (V)</th>
                            <th>Vegetarisk ret (V)</th>
                            <th>Mantu-fad</th>
                            <th>Kylling</th>
                            <th>Biryani (V)</th>
                            <th>Kylling Biryani</th>
                            <th>Kalv Biryani</th>
                            <th>Lam Biryani</th>
                            <th>Normal</th>
                            <th>Zereshk Polo</th>
                            <th>Polo shirt</th>
                            <th>Burger</th>
                            <th>Kyllingeburger</th>
                            <th>Fiskefilet</th>
                            <th>Nuggets</th>
                            <th>Hvidløgsnaan (V)</th>
                            <th>Salat (V)</th>
                            <th>Hvide ris</th>
                            <th>Chutney</th>
                            <th>Tzatziki</th>
                            <th>Raita</th>
                            <th>Ketchup</th>
                            <th>Mayonnaise</th>
                            <th>Remoulade</th>
                            <th>Engangs service</th>
                            <th>Vand</th>


                            <th>Levering/Afhentning</th>
                            <th>Betalingsmetode</th>
                            <th>afhentningstidspunkt</th>
                            <th>Total</th>
                            <th>Ordrestatus</th>
                            <th>Sidste opdatering</th>

                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => {

                            let Total = 0;
                            if (order.radio_5 === "Afhentning") Total = order.calculation_2 || 0;
                            else if (order.radio_5 === "Levering") Total = order.calculation_1 || 0;

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
                                    
                                    <td>{order.select_1}</td>
                                    <td>{order.select_2}</td>
                                    <td>{order.select_3}</td>
                                    <td>{order.select_4}</td>
                                    <td>{order.select_5}</td>
                                    <td>{order.select_6}</td>
                                    <td>{order.select_7}</td>
                                    <td>{order.select_10}</td>
                                    <td>{order.select_11}</td>
                                    <td>{order.select_12}</td>
                                    <td>{order.select_25}</td>
                                    <td>{order.select_24}</td>
                                    <td>{order.select_13}</td>
                                    <td>{order.select_22}</td>
                                    <td>{order.select_21}</td>
                                    <td>{order.select_20}</td>
                                    <td>{order.select_23}</td>
                                    <td>{order.select_19}</td>
                                    <td>{order.select_16}</td>
                                    <td>{order.select_17}</td>
                                    <td>{order.select_18}</td>
                                    <td>{order.select_14}</td>
                                    <td>{order.select_15}</td>
                                    <td>{order.select_26}</td>
                                    <td>{order.select_28}</td>
                                    <td>{order.select_27}</td>
                                    <td>{order.select_30}</td>
                                    <td>{order.select_31}</td>
                                    <td>{order.select_32}</td>
                                    <td>{order.select_33}</td>
                                    <td>{order.select_34}</td>
                                    <td>{order.select_36}</td>
                                    <td>{order.select_35}</td>
                                    <td>{order.select_37}</td>
                                    <td>{order.select_38}</td>
                                    <td>{order.select_39}</td>
                                    <td>{order.select_40}</td>
                                    <td>{order.select_41}</td>
                                    <td>{order.select_42}</td>
                                    <td>{order.checkbox_11}</td>
                                    <td>{order.select_48}</td>
                                    <td>{order.radio_5}</td>
                                    <td>{order.radio_3}</td>
                                    <td>{order.radio_4}</td>
                                    <td>{Total}</td>

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


export default TakeAway;