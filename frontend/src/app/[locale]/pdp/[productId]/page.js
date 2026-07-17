export default async function PDPPage({ params }) {

  const { productId } = await params;

  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">

        Product

      </h1>

      <p>{productId}</p>

    </main>
  );
}