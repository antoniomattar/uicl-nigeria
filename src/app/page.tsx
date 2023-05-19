/* eslint-disable react/jsx-key */
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import NavBar from '../components/NavBar';

const project_list = [
  {
    project_img_list: ['/festival-mall-2.png', '/festival-mall-1.png'],
    project_name: 'Festival Mall',
    project_client: 'UPDC',
    project_consultant: 'ADC ARCHITECTS',
    project_location: 'Festac, Lagos, Nigeria',
    project_scale: '14,000 m2',
    project_type: 'Commercial',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/the-pinnacle-1.png'],
    project_name: 'The Pinnacle',
    project_client: 'UPDC',
    project_consultant: 'ADC ARCHITECTS',
    project_location: 'Maltama, Abuja, Nigeria',
    project_scale: '9,000 m2',
    project_type: 'Residential',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/cameroon-green-1.png'],
    project_name: 'Cameron Green',
    project_client: 'UPDC',
    project_consultant: 'PWO',
    project_location: 'Ikoyl, Lagos, Nigeria',
    project_scale: '10,000 m2',
    project_type: 'Residential Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/festival-mall-2.png', '/festival-mall-1.png'],
    project_name: 'GT Bank AJOSE ADEOGUN',
    project_client: 'Guaranty Trust Bank',
    project_consultant: 'MOE',
    project_location: 'Victoria Island, Lagos, Nigeria',
    project_scale: '2,000 m2',
    project_type: 'Financial Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/festival-mall-2.png', '/festival-mall-1.png'],
    project_name: 'GT Bank ILLUPEJU',
    project_client: 'Guaranty Trust Bank',
    project_consultant: 'MOE',
    project_location: 'Illupeju, Lagos, Nigeria',
    project_scale: '1,300 m2',
    project_type: 'Financial Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/festival-mall-2.png', '/festival-mall-1.png'],
    project_name: 'GT Bank OGBA ',
    project_client: 'Guaranty Trust Bank',
    project_consultant: 'MOE',
    project_location: 'Illupeju, Lagos, Nigeria',
    project_scale: '1,200 m2',
    project_type: 'Financial Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/festival-mall-2.png', '/festival-mall-1.png'],
    project_name: 'Access Bank ',
    project_client: 'Access Bank PLC',
    project_consultant: 'ECAD ARCHITECTS LTD',
    project_location: 'Oyin Jolayemi street, Victoria Island, Lagos, Nigeria',
    project_scale: '2,500 m2',
    project_type: 'Financial Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/festival-mall-2.png', '/festival-mall-1.png'],
    project_name: 'Coronation Bank ',
    project_client: 'Coronation Merchant Bank Ltd',
    project_consultant: 'ECAD ARCHITECTS LTD',
    project_location: '10 Amodu Ojikutu Street, Victoria Island,Lagos, Nigeria',
    project_scale: '1,700 m2',
    project_type: 'Financial Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
];

export default function Page() {
  return (
    <div>
      <NavBar />
      <div className="flex h-fit flex-wrap justify-center">
        {project_list.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
