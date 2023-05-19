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
    project_img_list: ['/cameroon-green-1.png', '/cameroon-green-2.png'],
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
    project_img_list: ['/gt-bank-ajose-1.png'],
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
    project_img_list: [
      '/gt-bank-illupeju-1.png',
      '/gt-bank-illupeju-2.png',
      '/gt-bank-illupeju-3.png',
    ],
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
    project_img_list: [
      '/gt-bank-ogba-1.png',
      '/gt-bank-ogba-2.png',
      '/gt-bank-ogba-3.png',
    ],
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
    project_img_list: [
      '/access-bank-1.png',
      '/access-bank-2.png',
      '/access-bank-3.png',
    ],
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
    project_img_list: ['/coronation-bank-1.png'],
    project_name: 'Coronation Bank ',
    project_client: 'Coronation Merchant Bank Ltd',
    project_consultant: 'ECAD ARCHITECTS LTD',
    project_location: '10 Amodu Ojikutu Street, Victoria Island,Lagos, Nigeria',
    project_scale: '1,700 m2',
    project_type: 'Financial Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/gt-bank-alausa-ikeja-1.png'],
    project_name: 'GT Bank ALAUSA IKEJA',
    project_client: 'Guaranty Trust Bank',
    project_consultant: 'CPMS',
    project_location: 'Ikeja ,Lagos, Nigeria',
    project_scale: '1,000 m2',
    project_type: 'Financial Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: [
      '/gt-bank-pro-1.png',
      '/gt-bank-pro-2.png',
      '/gt-bank-pro-3.png',
    ],
    project_name: 'GT Bank Processing Center',
    project_client: 'Guaranty Trust Bank',
    project_consultant: 'Triarch Nigeria LTD',
    project_location: 'Victoria Island ,Lagos, Nigeria',
    project_scale: '----',
    project_type: 'Financial Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/etisalat-1.png'],
    project_name: 'Etisalat HQ',
    project_client: 'Everest Sterling LTD',
    project_consultant: 'Consultants Collaborative Partnership',
    project_location: 'Victoria Island ,Lagos, Nigeria',
    project_scale: '3,000 m2',
    project_type: 'Commercial Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/unilag-1.png'],
    project_name: 'UNILAG ALUMNI JUBILEE HOUSE',
    project_client: 'Guaranty Trust Bank',
    project_consultant: 'MOE',
    project_location: 'University of Lagos, Yaba , Nigeria',
    project_scale: '2,500 m2',
    project_type: 'Educational Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/cameron-garden-villas-1.png'],
    project_name: 'Cameron Greens Villas',
    project_client: 'UPDC',
    project_consultant: 'PWO',
    project_location: 'Ikoyi ,Lagos, Nigeria',
    project_scale: '2,500 m2',
    project_type: 'Residential Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/sky-garden-1.png'],
    project_name: 'Sky Garden',
    project_client: 'Everest Sterling LTD',
    project_consultant: 'ATO',
    project_location: 'Ikoyi ,Lagos, Nigeria',
    project_scale: '7,200 m2',
    project_type: 'Residential Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: [
      '/day-waterman-college-1.png',
      '/day-waterman-college-2.png',
    ],
    project_name: 'Day Waterman College',
    project_client: 'Day Waterman Company LTD',
    project_consultant: 'Consultants Collaborative Partnership',
    project_location: 'Abeokuta, Ogun State, Nigeria',
    project_scale: '25,000 m2',
    project_type: 'Educational Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/cbn-clinic-1.png'],
    project_name: 'CBN Clinic',
    project_client: 'Central Bank of Nigeria',
    project_consultant: 'ATO',
    project_location: 'Ibadan, Nigeria',
    project_scale: '3,000 m2',
    project_type: 'Medical Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/arthur-mbanefo-1.png'],
    project_name: 'ARTHUR MBANEFO DIGITAL RESEARCH CENTRE',
    project_client: 'Chief Arthur Mbanefo',
    project_consultant: '----',
    project_location: 'University of Lagos, Yaba, Nigeria',
    project_scale: '----',
    project_type: 'Educational Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/elion-house-hotel-1.png'],
    project_name: 'Elion House Hotel',
    project_client: 'Elion House LTD',
    project_consultant: '----',
    project_location: 'Ikoyi, Lagos, Nigeria',
    project_scale: '4,000 m2',
    project_type: 'Hospitality Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: ['/everest-44-1.png'],
    project_name: 'Everest 44',
    project_client: 'Everest Sterling LTD',
    project_consultant: 'Consultants Collaborative Partnership',
    project_location: 'Banana Island, Ikoyi, Lagos, Nigeria',
    project_scale: '2,500 m2',
    project_type: 'Hospitality Sector',
    project_status: 'Completed ✅',
    project_tags: ['contractors', 'quality', 'construction'],
  },
  {
    project_img_list: [
      '/lake-view-1.png',
      '/lake-view-2.png',
      '/lake-view-3.png',
    ],
    project_name: 'Lake View Court',
    project_client: 'Everest Sterling LTD',
    project_consultant: 'Consultants Collaborative Partnership',
    project_location: 'Ikoyi, Lagos, Nigeria',
    project_scale: '4,000 m2',
    project_type: 'Residential Sector',
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
