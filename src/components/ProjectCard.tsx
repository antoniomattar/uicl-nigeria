/* eslint-disable react/jsx-key */

/* eslint-disable @next/next/no-img-element */
import Carousel from './Carousel';

export default function ProjectCard(props: any) {
  return (
    <div className="max-w-fit p-3 ">
      <div className="align-items: center max-w-xs overflow-hidden rounded shadow-lg">
        <Carousel images_list={props.project_img_list} />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{props.project_name}</div>
          <p className="text-base text-gray-700">
            - CLIENT: {props.project_client} <br />- LOCATION:{' '}
            {props.project_location} <br />- CONSULTANT:{' '}
            {props.project_consultant} <br />- STATUS: {props.project_status}{' '}
            <br />- SCALE: {props.project_scale} <br />
          </p>
        </div>
        <div className="px-6 pb-2 pt-4">
          {props.project_tags.map((tag: any) => (
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
