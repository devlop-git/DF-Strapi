import {getPLP} from '@/services/commerce';
import {getPLPExperience} from '@/services/cms';
import PLPLayout from '@/components/plp/PlpLayout';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { getCurrentLocale } from '@/lib/locale';

export default async function PLPPage({ params }) {
    // const { categoryId } = await params;
    const commerce = await getPLP();
    const locale = await getCurrentLocale();
    const cms = await getPLPExperience(locale);

  return (
    <main>
    <Header params={params} />
     <PLPLayout
      commerce={commerce}
      cms={cms[0]}
    />

      <Footer params={params} />

    </main>
  );
}