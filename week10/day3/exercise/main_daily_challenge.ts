type User = {
    type: 'user';
    name: string;
    age: number;
  };
  
  type Product = {
    type: 'product';
    id: number;
    price: number;
  };
  
  type Order = {
    type: 'order';
    orderId: string;
    amount: number;
  };
  
  
  type Data = User | Product | Order;
  
  
  function isUser(data: Data): data is User {
    return data.type === 'user';
  }
  
  function isProduct(data: Data): data is Product {
    return data.type === 'product';
  }
  
  function isOrder(data: Data): data is Order {
    return data.type === 'order';
  }
  
  function handleData(dataArray: Data[]): string[] {
    return dataArray.map((data) => {
      if (isUser(data)) {
        return `User: Hello, ${data.name}! You are ${data.age} years old.`;
      } else if (isProduct(data)) {
        return `Product: The product with ID ${data.id} costs $${data.price}.`;
      } else if (isOrder(data)) {
        return `Order: Order ID ${data.orderId} has a total amount of $${data.amount}.`;
      } else {
        return 'Unknown data type!';
      }
    });
  }
  
  
  const mixedData: Data[] = [
    { type: 'user', name: 'Alice', age: 30 },
    { type: 'product', id: 101, price: 99.99 },
    { type: 'order', orderId: 'A123', amount: 250 },
  ];
  
  console.log(handleData(mixedData));
  