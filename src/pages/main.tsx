import { useState } from 'react';
import { Layout, type TabId } from './layout/layout';
import { CumpleanosSection } from '../components/CumpleanosSection';
import { FechasSection } from '../components/FechasSection';
import { TeAcuerdasSection } from '../components/TeAcuerdasSection';
import { RecuerdosSection } from '../components/RecuerdosSection';
import { PlanesSection } from '../components/PlanesSection';
import { CancionesSection } from '../components/CancionesSection';
import { CuponesSection } from '../components/CuponesSection';
import { PreguntasSection } from '../components/PreguntasSection';
import { PoesiasSection } from '../components/PoesiasSection';

export function MainPage() {
  const [activeTab, setActiveTab] = useState<TabId>('cumpleanos');

  return (
    <Layout currentTab={activeTab} onSelectTab={setActiveTab}>
      {activeTab === 'cumpleanos' && <CumpleanosSection />}
      {activeTab === 'fechas' && <FechasSection onNavigateToTeAcuerdas={() => setActiveTab('te-acuerdas')} />}
      {activeTab === 'te-acuerdas' && <TeAcuerdasSection onNavigateToFechas={() => setActiveTab('fechas')} />}
      {activeTab === 'recuerdos' && <RecuerdosSection />}
      {activeTab === 'planes' && <PlanesSection />}
      {activeTab === 'canciones' && <CancionesSection />}
      {activeTab === 'cupones' && <CuponesSection />}
      {activeTab === 'preguntas' && <PreguntasSection />}
      {activeTab === 'poesias' && <PoesiasSection />}
    </Layout>
  );
}

export { MainPage as Layout };
