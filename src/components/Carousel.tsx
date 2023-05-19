/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
export default function Carousel(props: any) {
  return (
    <div className="carousel-center max-h-md carousel rounded-box max-w-md space-x-4 bg-neutral p-2">
      {props.images_list.map((image: any) => (
        <div className="carousel-item">
          <img src={image} className="rounded-box h-40" />
        </div>
      ))}
    </div>
  );
}
