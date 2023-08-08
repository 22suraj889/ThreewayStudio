export default function searchCheckHandler(filteredOrders, search) {
  if (
    search.orderID.length !== 0 &&
    search.source.length !== 0 &&
    search.destination.length !== 0
  ) {
    filteredOrders = filteredOrders.filter(
      (order) =>
        order.orderID === search.orderID &&
        order.source === search.source &&
        order.destination === search.destination
    );
  } else if (search.orderID.length !== 0 && search.source.length !== 0) {
    filteredOrders = filteredOrders.filter(
      (order) =>
        order.orderID === search.orderID && order.source === search.source
    );
  } else if (search.orderID.length !== 0 && search.destination.length !== 0) {
    filteredOrders = filteredOrders.filter(
      (order) =>
        order.orderID === search.orderID &&
        order.destination === search.destination
    );
  } else if (search.source.length !== 0 && search.destination.length !== 0) {
    filteredOrders = filteredOrders.filter(
      (order) =>
        order.source === search.source &&
        order.destination === search.destination
    );
  } else if (search.orderID.length !== 0) {
    filteredOrders = filteredOrders.filter(
      (order) => order.orderID === search.orderID
    );
  } else if (search.source.length !== 0) {
    filteredOrders = filteredOrders.filter(
      (order) => order.source === search.source
    );
  } else if (search.destination.length !== 0) {
    filteredOrders = filteredOrders.filter(
      (order) => order.destination === search.destination
    );
  }
  return filteredOrders;
}
