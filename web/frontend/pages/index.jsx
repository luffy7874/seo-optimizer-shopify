import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
import { QRCodeIndex } from "../components";
import { useAppQuery } from "../hooks";
import {
  Card,
  EmptyState,
  Layout,
  Page,
  SkeletonBodyText,
} from "@shopify/polaris";
import { ProductList } from "../components/ProductList";

export default function HomePage() {

  const navigate = useNavigate();
  const {
    data: QRCodes,
    isLoading,
    isRefetching,
  } = useAppQuery({
      url: "/api/qrcodes",
    });

  const {
    data: Products,

  } = useAppQuery({
      url: "/api/products",
  });


  const handleSeoOptimize = async (id) => {
    const products = useAppQuery({
      url: `/api/products/${id}`,
      reactQueryOptions: {
        /* Disable refetching because the QRCodeForm component ignores changes to its props */
        refetchOnReconnect: false,
      },
    });

    console.log(products);    
  }

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
