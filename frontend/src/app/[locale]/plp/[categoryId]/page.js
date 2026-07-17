import {getPLP} from '@/services/commerce';
import {getPLPExperience} from '@/services/cms';
import PLPLayout from '@/components/plp/PlpLayout';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default async function PLPPage({ params }) {

    const { categoryId } = await params;
    const commerce = await getPLP(categoryId);
    const cms = await getPLPExperience();

    console.log('commerce---',commerce,cms,categoryId);

  return (
    <main className="p-10">
    <Header params={params} />
     <PLPLayout
      commerce={commerce.data}
      cms={cms}
    />

      <Footer params={params} />

    </main>
  );
}