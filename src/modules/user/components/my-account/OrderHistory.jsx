
import { Table } from 'flowbite-react';

const OrderHistory = () => {
  const orders = [
    { id: '12345', date: 'December 17, 2021', status: 'Pending', total: '$25.00', action: 'View' },
    { id: '12346', date: 'March 24, 2021', status: 'Completed', total: '$15.00', action: 'View' },
    { id: '12347', date: 'June 10, 2021', status: 'Completed', total: '$10.00', action: 'View' },
  ];

  return (
    <div className="container overflow-x-auto w-full m-11">
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>
      <Table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <Table.Head>
          <Table.HeadCell>Order #</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {orders.map((order) => (
            <Table.Row key={order.id}>
              <Table.Cell>
                <a href={`/order/${order.id}`} className="text-blue-500">{order.id}</a>
              </Table.Cell>
              <Table.Cell>{order.date}</Table.Cell>
              <Table.Cell>{order.status}</Table.Cell>
              <Table.Cell>{order.total}</Table.Cell>
              <Table.Cell>
                <a href={`/order/${order.id}`} className="text-blue-500">{order.action}</a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default OrderHistory;
