import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


const TakeAway = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/takeaway")
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
            const res = await fetch(`http://localhost:3000/takeaway/${id}`, {
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
            <div className="bg-base-100  rounded-2xl p-4">
                <table className="table  w-full">
                    <thead className="bg-base-200 text-base font-semibold sticky top-0 z-10">
                        <tr >
                            <th>#</th>
                            <th>Order No.</th>
                            <th>name_2</th>
                            <th>phone_1</th>
                            <th>email_1</th>
                            <th>radio_3</th>
                            <th>select_1</th>
                            <th>select_2</th>
                            <th>select_3</th>
                            <th>select_4</th>
                            <th>select_5</th>
                            <th>select_6</th>
                            <th>select_7</th>
                            <th>select_10</th>
                            <th>select_11</th>
                            <th>select_12</th>
                            <th>select_25</th>
                            <th>select_24</th>
                            <th>select_13</th>
                            <th>select_22</th>
                            <th>select_21</th>
                            <th>select_20</th>
                            <th>select_23</th>
                            <th>select_19</th>
                            <th>select_16</th>
                            <th>select_17</th>
                            <th>select_18</th>
                            <th>select_14</th>
                            <th>select_15</th>
                            <th>select_26</th>
                            <th>select_28</th>
                            <th>select_27</th>
                            <th>select_30</th>
                            <th>select_31</th>
                            <th>select_32</th>
                            <th>select_33</th>
                            <th>select_34</th>
                            <th>select_36</th>
                            <th>select_35</th>
                            <th>select_37</th>
                            <th>select_38</th>
                            <th>select_39</th>
                            <th>select_40</th>
                            <th>select_41</th>
                            <th>select_42</th>
                            <th>checkbox_11</th>
                            <th>select_48</th>
                            <th>radio_4</th>
                            <th>page_id</th>
                            <th>calculation_1</th>
                            <th>entry_time</th>
                            <th>Order Status</th>
                            <th>Last Update</th>
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
                                    <td>{order.name_2} {order.name_3}</td>
                                    <td>{order.phone_1}</td>
                                    <td>{order.email_1}</td>
                                    <td>{order.radio_3}</td>
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
                                    <td>{order.radio_4}</td>
                                    <td>{order.page_id}</td>
                                    <td>{order.calculation_1}</td>
                                    <td>{order.entry_time}</td>

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