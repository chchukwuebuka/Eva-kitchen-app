import { useEffect, useState } from "react";
import { wizard } from "../../assets";
import { Button, Navbar, Payment } from "../../components";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { paymentFailed, paymentSuccess, startPayment } from "../../state/payment";

export const ShippingPage = () => {
      const dispatch = useDispatch();
      const paymentStatus = useSelector((state) => state.payment.status);

  const addresses = [
    { id: 1, address: "123 Main St, Enugu, Nigeria" },
    { id: 2, address: "456 Elm St, Enugu, Nigeria" },
    { id: 3, address: "789 Pine St, Enugu, Nigeria" },
  ];

  const [selectedAddress, setSelectedAddress] = useState("");

  const handleAddressChange = (e) => {
    setSelectedAddress(e.target.value);
  };

  const handlePayment = () => {
      dispatch(startPayment());
  
      setTimeout(() => {
        if (selectedAddress) {
          dispatch(paymentSuccess());
        } else {
          dispatch(paymentFailed('Address not selected.'));
        }
      }, 2000);
    };
  
    useEffect(() => {
      if (paymentStatus === 'success') {
        alert('Payment Successful!');
      } else if (paymentStatus === 'failed') {
        alert('Payment Failed!');
      }
    }, [paymentStatus]);

    console.log("payment status", paymentStatus)
  

  const splitAddress = (address) => {
    const [streetNumber, ...rest] = address.split(" ");
    const restOfAddress = rest.join(" ");
    return { streetNumber, restOfAddress };
  };

  return (
    <div>
      <Navbar />
      <section className={styles.ShippingPage}>
        <article className={styles.ShippingPageInfo}>
          <div className={styles.shippingInfo}>
            <div id={styles.shippingInfo}>
              <p id={styles.shipping}>Shipping</p>
              <img src={wizard} alt="" />
              <p>Payment</p>
            </div>
          </div>
          <div className={styles.shippingheader}>
            <h4>Shipping details</h4>
          </div>
          <div className={styles.shippingDetails}>
            <div>
              <div className={styles.address}>
                <h5>Use saved address</h5>
                <select value={selectedAddress} onChange={handleAddressChange}>
                  <option value="">-- Select an address --</option>
                  {addresses.map((addressObj) => (
                    <option key={addressObj.id} value={addressObj.address}>
                      {addressObj.address}
                    </option>
                  ))}
                </select>
              </div>
              {selectedAddress && (
                <div>
                  <div>
                    {(() => {
                      const { streetNumber, restOfAddress } =
                        splitAddress(selectedAddress);
                      return (
                        <div className={styles.selectedAddress}>
                          <div className={styles.shippingDelivery}>
                            <p>Delivery location</p>
                            <div className={styles.shippingDeliveryInput}>
                              {streetNumber}
                            </div>
                          </div>
                          <div
                            className={styles.shippingDelivery}
                            id={styles.shippingDelivery}
                          >
                            <p>Street name</p>
                            <div className={styles.shippingDeliveryInput}>
                              {restOfAddress}
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.receivedDetails}>
            <div className={styles.receivedDetailsInfo}>
              <div>
                <p>Receiver name</p>
                <div className={styles.receivedInfo}> ABC - 123</div>
              </div>
              <div>
                <p>Receiver phone number</p>
                <div className={styles.receivedInfo1}>Free delivery</div>
              </div>
            </div>
          </div>
          <div  className={styles.orderDetails}>
            <div className={styles.orderDetails2}>

            <p>Cancel order</p>
            <Button
            content="Payment"
            className={styles.orderBTN}
            onClick={handlePayment}
            />
            </div>
          </div>
        </article>
        <Payment />
      </section>
    </div>
  );
};
