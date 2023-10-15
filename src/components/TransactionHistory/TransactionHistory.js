export const TransactionHistory = ({items}) => {
return (<table>
     <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
    {items.map(item => 
       { const {id, type, amount, currency } = item
      return (
      <tbody >
    <tr key={id}>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  </tbody>)}  
    )}
</table>)
}