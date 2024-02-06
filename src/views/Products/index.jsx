import PaymentStatusModal from "../../components/PaymentStatusModal/PaymentStatusModal";
import ItemCard from "./ItemCard";
import inv from "./Items.json";

const Products = () => {
  const params = new URLSearchParams(window.location.search);

  let pmtStatus = params.get("payment");

  let items = inv.items;
  return (
    <>
      <div className="w-100">
        <h3 className="mt-1">Products</h3>
        <div className="d-flex gap-1 px-2">
          {items.length ? items.map((item) => <ItemCard item={item} />) : ""}
        </div>
      </div>
      <PaymentStatusModal
        modalIsOpen={pmtStatus ? true : false}
        status={pmtStatus}
      />
    </>
  );
};

export default Products;
