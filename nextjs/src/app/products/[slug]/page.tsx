import { getProduct } from "@/service/products";

type Props = {
  params: {
    slug: string; // 폴더이름 따라 감
  };
};

export default function PantsPage({ params: { slug } }: Props) {
  const product = getProduct(slug);
  return <h1>{slug}바지 제품 설명 페이지</h1>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
