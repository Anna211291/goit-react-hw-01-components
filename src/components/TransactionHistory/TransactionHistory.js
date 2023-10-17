import {
  TableWrapper,
  TheadWrapper,
  TableItem,
  TableItemName,
} from '../TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableWrapper>
      <TheadWrapper>
        <tr>
          <TableItemName>Type</TableItemName>
          <TableItemName>Amount</TableItemName>
          <TableItemName>Currency</TableItemName>
        </tr>
      </TheadWrapper>
      {items.map(item => {
        const { id, type, amount, currency } = item;
        return (
          <tbody key={id}>
            <tr>
              <TableItem>{type}</TableItem>
              <TableItem>{amount}</TableItem>
              <TableItem>{currency}</TableItem>
            </tr>
          </tbody>
        );
      })}
    </TableWrapper>
  );
};
