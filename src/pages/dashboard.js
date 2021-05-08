import { useEffect } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Timeline from '../components/timeline';

export default function Dashboard() {
  useEffect(() => {
    document.title = 'Instagram';
  }, []);
  return (
    <div>
      <Header />
      <Sidebar />
      <Timeline />
    </div>
  );
}
