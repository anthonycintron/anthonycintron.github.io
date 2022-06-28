
class ProductTitle extends React.Component {
  renderProductTitle(i){
    return (
      <h1>Product Title</h1>
    );
  }
}
class ProductSection extends React.Component {
  renderProductSection(i){
    return <ProductTitle />;
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProductSection />);
