import axios from "axios";

// local back-end
//const API_URL = 'http://192.168.1.40:8080';
const API_URL = 'https://marcio-kriiger-sds2.herokuapp.com';

export function fetchOrders() {
    return axios(`${API_URL}/orders`)
}

export function confirmDelivery(orderId: number) {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}