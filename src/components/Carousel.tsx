/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
export default function Carousel(props: any) {
  return (
    <div className="carousel rounded-box w-80">
      {props.images_list.map((image: any) => (
        <div className="carousel-item w-full">
          <img src={image} className="w-full" />
        </div>
      ))}
    </div>
  );
}
