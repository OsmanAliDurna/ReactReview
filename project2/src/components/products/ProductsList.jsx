const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map((item) => (
        <div>{item.id}</div>
      ))}
    </div>
  );
};

export default ProductsList;
