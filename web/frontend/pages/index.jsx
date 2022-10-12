import { Loading } from "@shopify/app-bridge-react";
import { useAppQuery } from "../hooks";
import {
  Card,
  Layout,
  Page,
  SkeletonBodyText,
} from "@shopify/polaris";
import { ProductList } from "../components/ProductList";
import { useState } from "react";
import { useEffect } from "react";

export default function HomePage() {

const [product_id, setProduct_id] = useState(null);

  const {
    data: Products,
    isLoading,
    isRefetching,

  } = useAppQuery({
      url: "/api/products",
  });


  const handleSeoOptimize = async (id) => {
    setProduct_id(id);
  }

  const { data: get_product, } = useAppQuery({  url: `/api/products/${product_id}`,  reactQueryOptions: { refetchOnReconnect: false, } });

  const productLists = Products?.length ? (
    <ProductList products={Products} loading={isRefetching} handleSeoOptimize={handleSeoOptimize} />
  ) : null;

  /* loadingMarkup uses the loading component from AppBridge and components from Polaris  */
  const loadingMarkup = isLoading ? (
    <Card sectioned>
      <Loading />
      <SkeletonBodyText />
    </Card>
  ) : null;

  return (
    <Page>
      {/* <TitleBar
        title="QR codes"
        primaryAction={{
          content: "Create QR code",
          onAction: () => navigate("/qrcodes/new"),
        }}
      /> */}
      <Layout>
        <Layout.Section>
          {loadingMarkup}
          {productLists}
          {/* <button className="btn btn-success" onClick={handleClick}>Click Me</button> */}
        </Layout.Section>
      </Layout>
    </Page>
  );
}
